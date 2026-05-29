import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Eye, Plus, Settings, TimerReset } from 'lucide-react';
import { classes, examAttempts, exams, getExamById, questionBanks, questions, studySets } from '../data/mockData';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card, CardBody } from '../components/ui/Card';
import { EmptyState } from '../components/ui/EmptyState';
import { Input } from '../components/ui/Input';
import { PageHeader } from '../components/ui/PageHeader';
import { Select } from '../components/ui/Select';
import { StatusPill } from '../components/ui/StatusPill';
import { Table } from '../components/ui/Table';

export function CreateStudySetPage() {
  const [created, setCreated] = useState(false);

  return (
    <div className='space-y-6'>
      <PageHeader description='Teacher creates a study set from selected questions.' eyebrow='UC-44' title='Create Study Set' />
      <Card><CardBody className='space-y-4'><div className='grid gap-4 md:grid-cols-2'><Input label='Study Set Title' placeholder='Cell Biology Essentials' /><Input label='Subject' placeholder='Biology' /><Input label='Topic' placeholder='Cell Structure' /><Select label='Visibility' options={[{ value: 'public', label: 'Public' }, { value: 'private', label: 'Private' }, { value: 'class-only', label: 'Class Only' }]} /></div><label className='block space-y-1.5'><span className='text-sm font-semibold text-slate-700'>Description</span><textarea className='focus-ring min-h-24 w-full rounded-lg border border-slate-200 p-3 text-sm' /></label><div className='rounded-lg border border-slate-200 bg-slate-50 p-4'><p className='font-bold text-slate-950'>Select Questions</p><div className='mt-3 grid gap-2'>{questions.slice(0, 4).map((question) => <label className='flex items-start gap-3 rounded-lg bg-white p-3 text-sm' key={question.id}><input className='mt-1' defaultChecked type='checkbox' /><span>{question.content}</span></label>)}</div></div><Button icon={<Plus size={17} />} onClick={() => setCreated(true)}>Create Study Set</Button>{created ? <p className='rounded-lg bg-emerald-50 p-3 text-sm font-semibold text-emerald-700'>Study set created locally from selected questions.</p> : null}</CardBody></Card>
    </div>
  );
}

export function TeacherExamsPage() {
  const [query, setQuery] = useState('');
  const filtered = exams.filter((exam) => [exam.title, exam.className, exam.status].join(' ').toLowerCase().includes(query.toLowerCase()));

  return (
    <div className='space-y-6'>
      <PageHeader actions={<Link to='/teacher/exams/create'><Button icon={<Plus size={17} />}>Create Exam Session</Button></Link>} description='Teacher views official exam sessions and manages configuration or monitoring.' eyebrow='UC-46, UC-48' title='Exam Sessions' />
      <Card><CardBody><Input label='Search Exam Sessions' onChange={(event) => setQuery(event.target.value)} placeholder='Exam title, class, status' value={query} /></CardBody></Card>
      {filtered.length ? <TeacherExamTable source={filtered} /> : <EmptyState title='No exam sessions found' description='Create a new exam session or change search keyword.' />}
    </div>
  );
}

export function CreateExamSessionPage() {
  const [created, setCreated] = useState(false);

  return (
    <div className='space-y-6'>
      <PageHeader description='Teacher creates an official exam session for a class.' eyebrow='UC-46' title='Create Exam Session' />
      <ExamForm actionLabel='Create Exam Session' onSubmit={() => setCreated(true)} />
      {created ? <p className='rounded-lg bg-emerald-50 p-3 text-sm font-semibold text-emerald-700'>Exam session created locally. Open configure screen for settings.</p> : null}
    </div>
  );
}

export function ConfigureExamPage() {
  const { id } = useParams();
  const exam = getExamById(id);
  const [saved, setSaved] = useState(false);

  return (
    <div className='space-y-6'>
      <PageHeader description='Teacher configures exam time, attempts, randomization, and result visibility.' eyebrow='UC-47' title='Configure Exam Settings' />
      <ExamForm actionLabel='Save Exam Settings' exam={exam} onSubmit={() => setSaved(true)} />
      {saved ? <p className='rounded-lg bg-emerald-50 p-3 text-sm font-semibold text-emerald-700'>Exam settings saved locally.</p> : null}
    </div>
  );
}

export function TeacherExamInfoPage() {
  const { id } = useParams();
  const exam = getExamById(id);

  return (
    <div className='space-y-6'>
      <PageHeader actions={<><Link to={`/teacher/exams/${exam.id}/configure`}><Button icon={<Settings size={17} />} variant='secondary'>Configure</Button></Link><Link to={`/teacher/exams/${exam.id}/monitor`}><Button icon={<Eye size={17} />}>Monitor</Button></Link></>} description='Teacher views configured exam information, selected class, question source, timing, attempts, and visibility rules.' eyebrow='UC-48' title='View Exam Information as Teacher' />
      <Card><CardBody className='grid gap-4 md:grid-cols-2'><Info label='Exam Title' value={exam.title} /><Info label='Class' value={exam.className} /><Info label='Question Bank' value={exam.questionBankId} /><Info label='Start Time' value={exam.startTime} /><Info label='Duration' value={`${exam.durationMinutes} minutes`} /><Info label='Attempts Allowed' value={`${exam.attemptsAllowed}`} /><Info label='Question Randomization' value={exam.randomizeQuestions ? 'Enabled' : 'Disabled'} /><Info label='Answer Randomization' value={exam.randomizeAnswers ? 'Enabled' : 'Disabled'} /><Info label='Result Visibility' value={exam.showResult ? 'Visible' : 'Hidden'} /><Info label='Status' value={exam.status} /></CardBody></Card>
    </div>
  );
}

export function MonitorExamSessionPage() {
  const { id } = useParams();
  const exam = getExamById(id);
  const relatedAttempts = examAttempts.filter((attempt) => attempt.examId === exam.id);

  return (
    <div className='space-y-6'>
      <PageHeader description='Teacher monitors live exam session progress, submissions, score status, and auto-save state.' eyebrow='Exam Monitoring' title='Monitor Exam Session' />
      <div className='grid gap-4 md:grid-cols-4'><Metric label='Status' value={exam.status} helper='Current exam state' /><Metric label='Submitted' value={`${relatedAttempts.filter((item) => item.status === 'submitted').length}`} helper='Completed attempts' /><Metric label='In Progress' value={`${relatedAttempts.filter((item) => item.status === 'in-progress').length}`} helper='Active attempts' /><Metric label='Duration' value={`${exam.durationMinutes}m`} helper='Configured time limit' /></div>
      <Table headers={['Learner', 'Attempt Status', 'Score', 'Accuracy', 'Last Activity']} rows={relatedAttempts.map((attempt) => [attempt.learnerName, <StatusPill label={attempt.status} tone={attempt.status === 'submitted' ? 'success' : 'warning'} />, attempt.score, `${attempt.accuracy}%`, attempt.submittedAt ?? 'Auto-saved recently'])} />
    </div>
  );
}

function ExamForm({ exam, actionLabel, onSubmit }: { exam?: typeof exams[number]; actionLabel: string; onSubmit: () => void }) {
  return (
    <Card><CardBody className='space-y-4'><div className='grid gap-4 md:grid-cols-2'><Input defaultValue={exam?.title} label='Exam Title' placeholder='Biology 12A Midterm Simulation' /><Select defaultValue={exam?.classId ?? classes[0].id} label='Class' options={classes.map((room) => ({ value: room.id, label: room.name }))} /><Select defaultValue={exam?.questionBankId ?? questionBanks[0].id} label='Question Source' options={questionBanks.map((bank) => ({ value: bank.id, label: bank.title }))} /><Select defaultValue={exam?.status ?? 'draft'} label='Status' options={[{ value: 'draft', label: 'Draft' }, { value: 'scheduled', label: 'Scheduled' }, { value: 'open', label: 'Open' }, { value: 'closed', label: 'Closed' }]} /><Input defaultValue={exam?.startTime} label='Start Time' placeholder='2026-05-30 08:00' /><Input defaultValue={exam?.durationMinutes} label='Duration Minutes' type='number' /><Input defaultValue={exam?.attemptsAllowed} label='Allowed Attempts' type='number' /><Select defaultValue={exam?.showResult ? 'visible' : 'hidden'} label='Result Visibility' options={[{ value: 'visible', label: 'Visible after submit' }, { value: 'hidden', label: 'Hidden by teacher' }]} /></div><div className='grid gap-3 md:grid-cols-2'><label className='flex items-center gap-3 rounded-lg border border-slate-200 p-3 text-sm font-semibold'><input defaultChecked={exam?.randomizeQuestions} type='checkbox' /> Randomize Questions</label><label className='flex items-center gap-3 rounded-lg border border-slate-200 p-3 text-sm font-semibold'><input defaultChecked={exam?.randomizeAnswers} type='checkbox' /> Randomize Answers</label></div><Button icon={<TimerReset size={17} />} onClick={onSubmit}>{actionLabel}</Button></CardBody></Card>
  );
}

function TeacherExamTable({ source }: { source: typeof exams }) {
  return <Table headers={['Exam', 'Class', 'Start Time', 'Status', 'Actions']} rows={source.map((exam) => [<div><p className='font-bold text-slate-950'>{exam.title}</p><p className='text-xs text-slate-500'>{exam.description}</p></div>, exam.className, exam.startTime, <StatusPill label={exam.status} tone={exam.status === 'open' ? 'success' : 'warning'} />, <div className='flex flex-wrap gap-2'><Link to={`/teacher/exams/${exam.id}/info`}><Button size='sm' variant='secondary'>Info</Button></Link><Link to={`/teacher/exams/${exam.id}/configure`}><Button size='sm' variant='secondary'>Configure</Button></Link><Link to={`/teacher/exams/${exam.id}/monitor`}><Button size='sm'>Monitor</Button></Link></div>])} />;
}

function Metric({ label, value, helper }: { label: string; value: string; helper: string }) {
  return <Card><CardBody><p className='text-sm font-semibold text-slate-500'>{label}</p><p className='mt-2 text-3xl font-bold text-slate-950'>{value}</p><p className='mt-1 text-sm text-slate-500'>{helper}</p></CardBody></Card>;
}

function Info({ label, value }: { label: string; value: string }) {
  return <div className='rounded-lg border border-slate-200 bg-white p-4'><p className='text-xs font-bold uppercase tracking-wide text-slate-400'>{label}</p><p className='mt-2 text-sm font-semibold text-slate-800'>{value}</p></div>;
}
