import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Download, Eye, Plus, Settings, TimerReset } from 'lucide-react';
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
import { FieldNote, ListFieldBar, PaginationBar } from '../components/ui/FieldControls';

export function TeacherStudySetsPage() {
  const [query, setQuery] = useState('');
  const [visibility, setVisibility] = useState('all');
  const filtered = studySets.filter((set) => {
    const matchesQuery = [set.title, set.subject, set.topic, set.ownerName].join(' ').toLowerCase().includes(query.toLowerCase());
    const matchesVisibility = visibility === 'all' || set.visibility === visibility;
    return matchesQuery && matchesVisibility;
  });

  return (
    <div className='space-y-6'>
      <PageHeader actions={<Link to='/teacher/study-sets/create'><Button icon={<Plus size={17} />}>Create Study Set</Button></Link>} description='Manage study sets created from question banks, check visibility, assigned classes, and learner activity.' eyebrow='Study sets' title='Study Sets' />
      <ListFieldBar filters={[{ label: 'Visibility', options: [{ value: 'all', label: 'All visibility' }, { value: 'public', label: 'Public' }, { value: 'private', label: 'Private' }, { value: 'class-only', label: 'Class Only' }], value: visibility }, { label: 'Subject Filter', options: [{ value: 'all', label: 'All subjects' }, { value: 'Biology', label: 'Biology' }, { value: 'Chemistry', label: 'Chemistry' }, { value: 'Mathematics', label: 'Mathematics' }] }, { label: 'Assignment Filter', options: [{ value: 'all', label: 'All assignments' }, { value: 'assigned', label: 'Assigned to class' }, { value: 'unassigned', label: 'Not assigned' }] }]} onSearchChange={setQuery} searchLabel='Search Study Sets' searchPlaceholder='Title, subject, topic, owner' searchValue={query} />
      {filtered.length ? <><TeacherStudySetTable source={filtered} /><PaginationBar label={`Showing ${filtered.length} study sets`} /></> : <EmptyState title='No study sets found' description='Create a study set from a question bank or change the current filters.' />}
    </div>
  );
}

export function CreateStudySetPage() {
  const [created, setCreated] = useState(false);
  const [bankId, setBankId] = useState(questionBanks[0].id);
  const selectedBank = questionBanks.find((bank) => bank.id === bankId) ?? questionBanks[0];
  const bankQuestions = questions.filter((question) => selectedBank.questionIds.includes(question.id));

  return (
    <div className='space-y-6'>
      <PageHeader description='Create a study set from questions in one selected question bank.' eyebrow='Study sets' title='Create Study Set' />
      <Card>
        <CardBody className='space-y-4'>
          <div className='grid gap-4 md:grid-cols-2'>
            <Input label='Study Set Title' placeholder='Cell Biology Essentials' />
            <Select label='Source Question Bank' onChange={(event) => setBankId(event.target.value)} options={questionBanks.map((bank) => ({ value: bank.id, label: bank.title }))} value={bankId} />
            <Input label='Subject' readOnly value={selectedBank.subject} />
            <Input label='Topic' readOnly value={selectedBank.topic} />
            <Select label='Visibility' options={[{ value: 'public', label: 'Public' }, { value: 'private', label: 'Private' }, { value: 'class-only', label: 'Class Only' }]} />
            <Input label='Estimated Study Time' placeholder='20 minutes' />
            <Input label='Target Accuracy' placeholder='80%' />
            <Select label='Card Order' options={[{ value: 'default', label: 'Default order' }, { value: 'shuffle', label: 'Shuffle cards' }, { value: 'weak-first', label: 'Weak questions first' }]} />
            <Select label='Practice Mode' options={[{ value: 'flashcards', label: 'Flashcards only' }, { value: 'quiz', label: 'Quiz only' }, { value: 'both', label: 'Flashcards and quiz' }]} />
            <Input label='Tags' placeholder='biology, exam-prep' />
          </div>
          <label className='block space-y-1.5'><span className='text-sm font-semibold text-slate-700'>Description</span><textarea className='focus-ring min-h-24 w-full rounded-lg border border-slate-200 p-3 text-sm' placeholder='What learners should practice in this set.' /></label>
          <div className='rounded-lg border border-slate-200 bg-slate-50 p-4'>
            <div className='flex flex-wrap items-center justify-between gap-3'>
              <div><p className='font-bold text-slate-950'>Select Questions</p><p className='mt-1 text-sm text-slate-500'>{bankQuestions.length} questions from {selectedBank.title}</p></div>
              <Badge tone='teal'>{selectedBank.visibility}</Badge>
            </div>
            <div className='mt-3 grid gap-2'>
              {bankQuestions.map((question) => <label className='flex items-start gap-3 rounded-lg bg-white p-3 text-sm' key={question.id}><input className='mt-1' defaultChecked type='checkbox' /><span><span className='font-semibold text-slate-800'>{question.content}</span><span className='mt-1 block text-xs text-slate-500'>{question.type} - {question.difficulty} - {question.score} point</span></span></label>)}
            </div>
          </div>
          <div className='grid gap-3 md:grid-cols-3'><label className='flex items-center gap-3 rounded-lg border border-slate-200 p-3 text-sm font-semibold'><input defaultChecked type='checkbox' /> Include explanations</label><label className='flex items-center gap-3 rounded-lg border border-slate-200 p-3 text-sm font-semibold'><input type='checkbox' /> Allow copy by other teachers</label><label className='flex items-center gap-3 rounded-lg border border-slate-200 p-3 text-sm font-semibold'><input defaultChecked type='checkbox' /> Track learner progress</label></div>
          <Button icon={<Plus size={17} />} onClick={() => setCreated(true)}>Create Study Set</Button>
          {created ? <p className='rounded-lg bg-emerald-50 p-3 text-sm font-semibold text-emerald-700'>Study set created from {selectedBank.title}.</p> : null}
        </CardBody>
      </Card>
    </div>
  );
}

export function TeacherExamsPage() {
  const [query, setQuery] = useState('');
  const filtered = exams.filter((exam) => [exam.title, exam.className, exam.status].join(' ').toLowerCase().includes(query.toLowerCase()));

  return (
    <div className='space-y-6'>
      <PageHeader actions={<Link to='/teacher/exams/create'><Button icon={<Plus size={17} />}>Create Exam Session</Button></Link>} description='Teacher views official exam sessions and manages configuration or monitoring.' eyebrow='Exam sessions' title='Exam Sessions' />
      <ListFieldBar filters={[{ label: 'Status Filter', options: [{ value: 'all', label: 'All statuses' }, { value: 'draft', label: 'Draft' }, { value: 'scheduled', label: 'Scheduled' }, { value: 'open', label: 'Open' }, { value: 'closed', label: 'Closed' }] }, { label: 'Class Filter', options: [{ value: 'all', label: 'All classes' }, ...classes.map((room) => ({ value: room.id, label: room.name }))] }, { label: 'Result Visibility', options: [{ value: 'all', label: 'All visibility' }, { value: 'visible', label: 'Visible' }, { value: 'hidden', label: 'Hidden' }] }]} onSearchChange={setQuery} searchLabel='Search Exam Sessions' searchPlaceholder='Exam title, class, status' searchValue={query} />
      {filtered.length ? <><TeacherExamTable source={filtered} /><PaginationBar label={`Showing ${filtered.length} exam sessions`} /></> : <EmptyState title='No exam sessions found' description='Create a new exam session or change search keyword.' />}
    </div>
  );
}

export function CreateExamSessionPage() {
  const [created, setCreated] = useState(false);

  return (
    <div className='space-y-6'>
      <PageHeader description='Teacher creates an official exam session for a class.' eyebrow='New exam' title='Create Exam Session' />
      <ExamForm actionLabel='Create Exam Session' onSubmit={() => setCreated(true)} />
      {created ? <p className='rounded-lg bg-emerald-50 p-3 text-sm font-semibold text-emerald-700'>Exam session created. Open configure settings before publishing.</p> : null}
    </div>
  );
}

export function ConfigureExamPage() {
  const { id } = useParams();
  const exam = getExamById(id);
  const [saved, setSaved] = useState(false);

  return (
    <div className='space-y-6'>
      <PageHeader description='Teacher configures exam time, attempts, randomization, and result visibility.' eyebrow='Exam settings' title='Configure Exam Settings' />
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
      <PageHeader actions={<><Link to={`/teacher/exams/${exam.id}/configure`}><Button icon={<Settings size={17} />} variant='secondary'>Configure</Button></Link><Link to='/teacher/reports/export'><Button icon={<Download size={17} />} variant='secondary'>Export Report</Button></Link><Link to={`/teacher/exams/${exam.id}/monitor`}><Button icon={<Eye size={17} />}>Monitor</Button></Link></>} description='Exam configuration, timing, question source, result settings, and report access.' eyebrow='Exam details' title={exam.title} />
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
      <ListFieldBar filters={[{ label: 'Attempt Status', options: [{ value: 'all', label: 'All attempts' }, { value: 'submitted', label: 'Submitted' }, { value: 'in-progress', label: 'In progress' }, { value: 'not-started', label: 'Not started' }] }, { label: 'Risk Filter', options: [{ value: 'all', label: 'All learners' }, { value: 'late', label: 'Late activity' }, { value: 'low-score', label: 'Low score' }] }]} searchLabel='Search Learners' searchPlaceholder='Learner name or status' />
      <Table headers={['Learner', 'Attempt Status', 'Score', 'Accuracy', 'Last Activity', 'Actions']} rows={relatedAttempts.map((attempt) => [attempt.learnerName, <StatusPill label={attempt.status} tone={attempt.status === 'submitted' ? 'success' : 'warning'} />, attempt.score, `${attempt.accuracy}%`, attempt.submittedAt ?? 'Auto-saved recently', <div className='flex flex-wrap gap-2'><Button size='sm' variant='secondary'>View Attempt</Button><Button size='sm' variant='ghost'>Send Reminder</Button></div>])} />
      <PaginationBar label={`Showing ${relatedAttempts.length} learner attempts`} />
    </div>
  );
}

function ExamForm({ exam, actionLabel, onSubmit }: { exam?: typeof exams[number]; actionLabel: string; onSubmit: () => void }) {
  return (
    <Card>
      <CardBody className='space-y-4'>
        <div className='grid gap-4 md:grid-cols-2'>
          <Input defaultValue={exam?.title} label='Exam Title' placeholder='Biology 12A Midterm Simulation' />
          <Select defaultValue={exam?.classId ?? classes[0].id} label='Class' options={classes.map((room) => ({ value: room.id, label: room.name }))} />
          <Select defaultValue={exam?.questionBankId ?? questionBanks[0].id} label='Question Source' options={questionBanks.map((bank) => ({ value: bank.id, label: bank.title }))} />
          <Select defaultValue={exam?.status ?? 'draft'} label='Status' options={[{ value: 'draft', label: 'Draft' }, { value: 'scheduled', label: 'Scheduled' }, { value: 'open', label: 'Open' }, { value: 'closed', label: 'Closed' }]} />
          <Input defaultValue={exam?.startTime} label='Start Time' placeholder='2026-05-30 08:00' />
          <Input defaultValue={exam?.durationMinutes} label='Duration Minutes' type='number' />
          <Input defaultValue={exam?.attemptsAllowed} label='Allowed Attempts' type='number' />
          <Input label='Passing Score' placeholder='70' type='number' />
          <Input label='Exam Access Code' placeholder='BIO-MIDTERM-2026' />
          <Input label='Late Join Grace Period' placeholder='5 minutes' />
          <Input label='Auto-submit Before End' placeholder='30 seconds' />
          <Input label='Result Release Time' placeholder='2026-05-30 10:00' />
          <Select defaultValue={exam?.showResult ? 'visible' : 'hidden'} label='Result Visibility' options={[{ value: 'visible', label: 'Visible after submit' }, { value: 'hidden', label: 'Hidden by teacher' }]} />
          <Select label='Review Permission' options={[{ value: 'score-only', label: 'Score only' }, { value: 'with-answer', label: 'Show answer review' }, { value: 'hidden', label: 'Hide all results' }]} />
          <Input label='Exam Password' placeholder='Optional' type='password' />
          <Input label='Candidate Instructions' placeholder='Read rules before starting' />
        </div>
        <div className='grid gap-3 md:grid-cols-2'>
          <label className='flex items-center gap-3 rounded-lg border border-slate-200 p-3 text-sm font-semibold'><input defaultChecked={exam?.randomizeQuestions} type='checkbox' /> Randomize Questions</label>
          <label className='flex items-center gap-3 rounded-lg border border-slate-200 p-3 text-sm font-semibold'><input defaultChecked={exam?.randomizeAnswers} type='checkbox' /> Randomize Answers</label>
          <label className='flex items-center gap-3 rounded-lg border border-slate-200 p-3 text-sm font-semibold'><input defaultChecked type='checkbox' /> Enable Auto-save</label>
          <label className='flex items-center gap-3 rounded-lg border border-slate-200 p-3 text-sm font-semibold'><input type='checkbox' /> Require Full-screen Warning</label>
          <label className='flex items-center gap-3 rounded-lg border border-slate-200 p-3 text-sm font-semibold'><input type='checkbox' /> Lock navigation after start</label>
          <label className='flex items-center gap-3 rounded-lg border border-slate-200 p-3 text-sm font-semibold'><input defaultChecked type='checkbox' /> Notify learners before exam</label>
        </div>
        <Button icon={<TimerReset size={17} />} onClick={onSubmit}>{actionLabel}</Button>
      </CardBody>
    </Card>
  );
}

function TeacherExamTable({ source }: { source: typeof exams }) {
  return <Table headers={['Exam', 'Class', 'Start Time', 'Status', 'Actions']} rows={source.map((exam) => [<div><p className='font-bold text-slate-950'>{exam.title}</p><p className='text-xs text-slate-500'>{exam.description}</p></div>, exam.className, exam.startTime, <StatusPill label={exam.status} tone={exam.status === 'open' ? 'success' : 'warning'} />, <div className='flex flex-wrap gap-2'><Link to={`/teacher/exams/${exam.id}/info`}><Button size='sm' variant='secondary'>Info</Button></Link><Link to={`/teacher/exams/${exam.id}/configure`}><Button size='sm' variant='secondary'>Configure</Button></Link><Link to='/teacher/reports/export'><Button size='sm' variant='secondary'>Report</Button></Link><Link to={`/teacher/exams/${exam.id}/monitor`}><Button size='sm'>Monitor</Button></Link></div>])} />;
}

function TeacherStudySetTable({ source }: { source: typeof studySets }) {
  return <Table headers={['Study Set', 'Source', 'Visibility', 'Questions', 'Assigned Classes', 'Learners', 'Actions']} rows={source.map((set) => {
    const bank = questionBanks.find((item) => item.subject === set.subject && set.topic.toLowerCase().includes(item.topic.split(' ')[0].toLowerCase())) ?? questionBanks.find((item) => item.subject === set.subject) ?? questionBanks[0];
    return [
      <div><p className='font-bold text-slate-950'>{set.title}</p><p className='text-xs text-slate-500'>{set.subject} - {set.topic}</p></div>,
      bank.title,
      <Badge tone={set.visibility === 'public' ? 'emerald' : set.visibility === 'class-only' ? 'amber' : 'slate'}>{set.visibility}</Badge>,
      `${set.questionCount}`,
      set.assignedClassIds.length ? set.assignedClassIds.join(', ') : 'Not assigned',
      `${set.learners}`,
      <div className='flex flex-wrap gap-2'><Link to={`/sets/${set.id}/public`}><Button size='sm' variant='secondary'>Preview</Button></Link><Link to='/teacher/classes/class-bio-12a/assign-study-set'><Button size='sm'>Assign</Button></Link></div>,
    ];
  })} />;
}

function Metric({ label, value, helper }: { label: string; value: string; helper: string }) {
  return <Card><CardBody><p className='text-sm font-semibold text-slate-500'>{label}</p><p className='mt-2 text-3xl font-bold text-slate-950'>{value}</p><p className='mt-1 text-sm text-slate-500'>{helper}</p></CardBody></Card>;
}

function Info({ label, value }: { label: string; value: string }) {
  return <div className='rounded-lg border border-slate-200 bg-white p-4'><p className='text-xs font-bold uppercase tracking-wide text-slate-400'>{label}</p><p className='mt-2 text-sm font-semibold text-slate-800'>{value}</p></div>;
}
