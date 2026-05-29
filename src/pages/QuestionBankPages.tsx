import type { ReactNode } from 'react';
import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AlertTriangle, FileSpreadsheet, Plus, Sparkles, Trash2 } from 'lucide-react';
import { getBankById, getQuestionById, importErrors, questionBanks, questions } from '../data/mockData';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card, CardBody } from '../components/ui/Card';
import { EmptyState } from '../components/ui/EmptyState';
import { Input } from '../components/ui/Input';
import { PageHeader } from '../components/ui/PageHeader';
import { Select } from '../components/ui/Select';
import { StatusPill } from '../components/ui/StatusPill';
import { Table } from '../components/ui/Table';

export function QuestionBanksPage() {
  const [query, setQuery] = useState('');
  const [subject, setSubject] = useState('all');
  const filtered = useMemo(() => questionBanks.filter((bank) => {
    const matchesQuery = [bank.title, bank.description, bank.subject, bank.topic].join(' ').toLowerCase().includes(query.toLowerCase());
    const matchesSubject = subject === 'all' || bank.subject === subject;
    return matchesQuery && matchesSubject;
  }), [query, subject]);

  return (
    <div className='space-y-6'>
      <PageHeader actions={<Link to='/teacher/question-banks/create'><Button icon={<Plus size={17} />}>Create Question Bank</Button></Link>} description='Teacher views question banks they created or can access. Local search and subject filter are supported.' eyebrow='UC-33' title='View Question Banks' />
      <Card><CardBody className='grid gap-4 md:grid-cols-[1fr_220px]'><Input label='Keyword' onChange={(event) => setQuery(event.target.value)} placeholder='Bank title, description, topic' value={query} /><Select label='Subject' onChange={(event) => setSubject(event.target.value)} options={[{ value: 'all', label: 'All subjects' }, { value: 'Biology', label: 'Biology' }, { value: 'Chemistry', label: 'Chemistry' }, { value: 'Mathematics', label: 'Mathematics' }]} value={subject} /></CardBody></Card>
      {filtered.length ? <QuestionBankTable banks={filtered} /> : <EmptyState title='No question bank found' description='Try changing keyword or subject filter.' />}
    </div>
  );
}

export function CreateQuestionBankPage() {
  const [created, setCreated] = useState(false);
  return <QuestionBankForm created={created} description='Teacher creates a new question bank with title, description, subject, topic, and visibility.' onSubmit={() => setCreated(true)} title='Create Question Bank' uc='UC-34' />;
}

export function EditQuestionBankPage() {
  const { id } = useParams();
  const bank = getBankById(id);
  const [saved, setSaved] = useState(false);
  const [deleted, setDeleted] = useState(false);

  return (
    <div className='space-y-6'>
      <PageHeader description='Teacher updates question bank title, description, subject, topic, visibility, or related configuration.' eyebrow='UC-35, UC-36' title='Update Question Bank Information' />
      <Card><CardBody className='max-w-3xl space-y-4'><div className='grid gap-4 md:grid-cols-2'><Input defaultValue={bank.title} label='Question Bank Title' /><Input defaultValue={bank.subject} label='Subject' /><Input defaultValue={bank.topic} label='Topic' /><Select defaultValue={bank.visibility} label='Visibility' options={[{ value: 'public', label: 'Public' }, { value: 'private', label: 'Private' }, { value: 'class-only', label: 'Class Only' }]} /></div><label className='block space-y-1.5'><span className='text-sm font-semibold text-slate-700'>Description</span><textarea className='focus-ring min-h-28 w-full rounded-lg border border-slate-200 p-3 text-sm' defaultValue={bank.description} /></label><div className='flex flex-wrap gap-3'><Button onClick={() => setSaved(true)}>Save Changes</Button><Button icon={<Trash2 size={17} />} onClick={() => setDeleted(true)} variant='danger'>Delete Question Bank</Button></div>{saved ? <p className='rounded-lg bg-emerald-50 p-3 text-sm font-semibold text-emerald-700'>Question bank updated locally.</p> : null}{deleted ? <p className='rounded-lg bg-rose-50 p-3 text-sm font-semibold text-rose-700'>Delete action mocked. Existing questions remain in mock data.</p> : null}</CardBody></Card>
    </div>
  );
}

export function QuestionBankDetailPage() {
  const { id } = useParams();
  const bank = getBankById(id);
  const bankQuestions = questions.filter((question) => bank.questionIds.includes(question.id));
  const [deletedQuestion, setDeletedQuestion] = useState('');

  return (
    <div className='space-y-6'>
      <PageHeader
        actions={<><Link to={`/teacher/question-banks/${bank.id}/edit`}><Button variant='secondary'>Edit Bank</Button></Link><Link to={`/teacher/question-banks/${bank.id}/questions/create`}><Button>Create Question</Button></Link><Link to={`/teacher/question-banks/${bank.id}/import`}><Button variant='secondary'>Import Excel</Button></Link><Link to={`/teacher/question-banks/${bank.id}/ai-generate`}><Button variant='secondary'>AI Generate</Button></Link></>}
        description='Question bank detail shows metadata, questions, question CRUD actions, import, and AI generation entry points.'
        eyebrow='UC-33, UC-40, UC-41, UC-42'
        title={bank.title}
      />
      <div className='grid gap-6 lg:grid-cols-[0.7fr_1.3fr]'>
        <Card><CardBody className='space-y-4'><Info label='Subject' value={bank.subject} /><Info label='Topic' value={bank.topic} /><Info label='Visibility' value={<Badge>{bank.visibility}</Badge>} /><Info label='Owner' value={bank.ownerName} /><Info label='Updated At' value={bank.updatedAt} /></CardBody></Card>
        <Card><CardBody><Table headers={['Question', 'Type', 'Difficulty', 'Score', 'Actions']} rows={bankQuestions.map((question) => [<p className='max-w-xl font-semibold text-slate-800'>{question.content}</p>, question.type, <Badge tone={question.difficulty === 'hard' ? 'rose' : question.difficulty === 'medium' ? 'amber' : 'emerald'}>{question.difficulty}</Badge>, `${question.score}`, <div className='flex gap-2'><Link to={`/teacher/question-banks/${bank.id}/questions/${question.id}/edit`}><Button size='sm' variant='secondary'>Edit</Button></Link><Button icon={<Trash2 size={14} />} onClick={() => setDeletedQuestion(question.id)} size='sm' variant='danger'>Delete</Button></div>])} /></CardBody></Card>
      </div>
      {deletedQuestion ? <p className='rounded-lg bg-rose-50 p-3 text-sm font-semibold text-rose-700'>Delete question action mocked for {deletedQuestion}. Data not removed.</p> : null}
    </div>
  );
}

export function CreateQuestionPage() {
  const { id } = useParams();
  const bank = getBankById(id);
  return <QuestionForm bankTitle={bank.title} mode='Create' uc='UC-40' />;
}

export function EditQuestionPage() {
  const { id, questionId } = useParams();
  const bank = getBankById(id);
  const question = getQuestionById(questionId);
  return <QuestionForm bankTitle={bank.title} mode='Update' question={question} uc='UC-41' />;
}

export function ImportQuestionsPage() {
  const { id } = useParams();
  const bank = getBankById(id);
  const [validated, setValidated] = useState(false);

  return (
    <div className='space-y-6'>
      <PageHeader description='Teacher uploads an Excel file containing questions into a question bank.' eyebrow='UC-37' title='Import Questions from Excel' />
      <Card><CardBody className='max-w-4xl space-y-4'><Input helper='Accepted template columns: type, content, option A-D, correct answer, score, tags, difficulty.' label='Excel File' type='file' /><div className='rounded-lg border border-slate-200 bg-slate-50 p-4'><p className='font-bold text-slate-950'>Uploaded file preview</p><p className='mt-1 text-sm text-slate-600'>biology-import-template.xlsx - 18 rows detected for {bank.title}</p></div><div className='flex flex-wrap gap-3'><Button icon={<FileSpreadsheet size={17} />} onClick={() => setValidated(true)}>Validate File</Button><Link to={`/teacher/question-banks/${bank.id}/import/errors`}><Button variant='secondary'>View Errors</Button></Link><Link to={`/teacher/question-banks/${bank.id}/import/preview`}><Button variant='secondary'>Preview Valid Questions</Button></Link></div>{validated ? <p className='rounded-lg bg-amber-50 p-3 text-sm font-semibold text-amber-800'>Validation complete: 15 valid rows, 3 error rows.</p> : null}</CardBody></Card>
    </div>
  );
}

export function ImportErrorsPage() {
  return (
    <div className='space-y-6'>
      <PageHeader description='Teacher views row-level errors when the uploaded Excel file is invalid.' eyebrow='UC-38' title='View Question Import Errors' />
      <Table headers={['Row', 'Field', 'Raw Value', 'Validation Message']} rows={importErrors.map((error) => [error.row, error.field, error.rawValue, <span className='font-semibold text-rose-700'>{error.message}</span>])} />
    </div>
  );
}

export function ImportPreviewPage() {
  const [saved, setSaved] = useState(false);
  return (
    <div className='space-y-6'>
      <PageHeader description='Teacher previews valid questions before saving them into the question bank.' eyebrow='UC-39' title='Preview Imported Questions' />
      <Table headers={['Question', 'Type', 'Correct Answer', 'Score', 'Status']} rows={questions.slice(0, 3).map((question) => [question.content, question.type, question.correctAnswer, question.score, <StatusPill label='valid' tone='success' />])} />
      <Button icon={<CheckIcon />} onClick={() => setSaved(true)}>Save Imported Questions</Button>
      {saved ? <p className='rounded-lg bg-emerald-50 p-3 text-sm font-semibold text-emerald-700'>Imported questions saved locally for preview only.</p> : null}
    </div>
  );
}

export function AiGenerateQuestionsPage() {
  const [generated, setGenerated] = useState(false);
  return (
    <div className='space-y-6'>
      <PageHeader description='Premium Teacher generates questions from uploaded learning material using AI. Gemini API call is mocked.' eyebrow='UC-43' title='Generate Questions from Material' />
      <Card><CardBody className='space-y-4'><Input label='Learning Material File' type='file' /><Select label='Question Type' options={[{ value: 'mixed', label: 'Mixed types' }, { value: 'multiple-choice', label: 'Multiple Choice' }, { value: 'true-false', label: 'True/False' }, { value: 'written-answer', label: 'Written Answer' }]} /><div className='grid gap-4 md:grid-cols-3'><Input label='Number of Questions' placeholder='10' type='number' /><Select label='Difficulty' options={[{ value: 'easy', label: 'Easy' }, { value: 'medium', label: 'Medium' }, { value: 'hard', label: 'Hard' }]} /><Input label='Topic Focus' placeholder='Cell membrane' /></div><Button icon={<Sparkles size={17} />} onClick={() => setGenerated(true)}>Generate Questions</Button>{generated ? <div className='rounded-lg bg-blue-50 p-4'><p className='font-bold text-blue-800'>AI generated question preview</p><p className='mt-2 text-sm text-blue-700'>3 sample questions generated from material. Gemini API not called.</p></div> : null}</CardBody></Card>
    </div>
  );
}

function QuestionBankForm({ title, description, uc, onSubmit, created }: { title: string; description: string; uc: string; onSubmit: () => void; created: boolean }) {
  return (
    <div className='space-y-6'>
      <PageHeader description={description} eyebrow={uc} title={title} />
      <Card><CardBody className='max-w-3xl space-y-4'><div className='grid gap-4 md:grid-cols-2'><Input label='Question Bank Title' placeholder='Biology Core Question Bank' /><Input label='Subject' placeholder='Biology' /><Input label='Topic' placeholder='Cell Biology' /><Select label='Visibility' options={[{ value: 'private', label: 'Private' }, { value: 'public', label: 'Public' }, { value: 'class-only', label: 'Class Only' }]} /></div><label className='block space-y-1.5'><span className='text-sm font-semibold text-slate-700'>Description</span><textarea className='focus-ring min-h-28 w-full rounded-lg border border-slate-200 p-3 text-sm' /></label><Button onClick={onSubmit}>Create Question Bank</Button>{created ? <p className='rounded-lg bg-emerald-50 p-3 text-sm font-semibold text-emerald-700'>Question bank created locally.</p> : null}</CardBody></Card>
    </div>
  );
}

function QuestionForm({ mode, bankTitle, uc, question }: { mode: 'Create' | 'Update'; bankTitle: string; uc: string; question?: typeof questions[number] }) {
  const [saved, setSaved] = useState(false);

  return (
    <div className='space-y-6'>
      <PageHeader description={`${mode} question content, answer options, correct answer, score, explanation, tags, chapter, lesson, topic, subject, and difficulty.`} eyebrow={uc} title={`${mode} Question`} />
      <Card><CardBody className='space-y-4'><Info label='Question Bank' value={bankTitle} /><Select defaultValue={question?.type ?? 'multiple-choice'} label='Question Type' options={[{ value: 'multiple-choice', label: 'Multiple Choice' }, { value: 'true-false', label: 'True/False' }, { value: 'written-answer', label: 'Written Answer' }]} /><label className='block space-y-1.5'><span className='text-sm font-semibold text-slate-700'>Question Content</span><textarea className='focus-ring min-h-28 w-full rounded-lg border border-slate-200 p-3 text-sm' defaultValue={question?.content} /></label><div className='grid gap-4 md:grid-cols-2'>{['Option A', 'Option B', 'Option C', 'Option D'].map((label, index) => <Input defaultValue={question?.options[index]} key={label} label={label} placeholder={label} />)}</div><div className='grid gap-4 md:grid-cols-3'><Input defaultValue={question?.correctAnswer} label='Correct Answer' /><Input defaultValue={question?.score} label='Score' type='number' /><Select defaultValue={question?.difficulty ?? 'medium'} label='Difficulty' options={[{ value: 'easy', label: 'Easy' }, { value: 'medium', label: 'Medium' }, { value: 'hard', label: 'Hard' }]} /></div><div className='grid gap-4 md:grid-cols-4'><Input defaultValue={question?.subject} label='Subject' /><Input defaultValue={question?.topic} label='Topic' /><Input defaultValue={question?.chapter} label='Chapter' /><Input defaultValue={question?.lesson} label='Lesson' /></div><Input defaultValue={question?.tags.join(', ')} label='Tags' placeholder='cell, organelle' /><label className='block space-y-1.5'><span className='text-sm font-semibold text-slate-700'>Explanation</span><textarea className='focus-ring min-h-24 w-full rounded-lg border border-slate-200 p-3 text-sm' defaultValue={question?.explanation} /></label><Button onClick={() => setSaved(true)}>{mode} Question</Button>{saved ? <p className='rounded-lg bg-emerald-50 p-3 text-sm font-semibold text-emerald-700'>Question {mode.toLowerCase()} saved locally.</p> : null}</CardBody></Card>
    </div>
  );
}

function QuestionBankTable({ banks }: { banks: typeof questionBanks }) {
  return <Table headers={['Question Bank', 'Subject', 'Topic', 'Visibility', 'Questions', 'Action']} rows={banks.map((bank) => [<div><p className='font-bold text-slate-950'>{bank.title}</p><p className='text-xs text-slate-500'>{bank.description}</p></div>, bank.subject, bank.topic, <Badge>{bank.visibility}</Badge>, `${bank.questionIds.length}`, <Link to={`/teacher/question-banks/${bank.id}`}><Button size='sm' variant='secondary'>Open</Button></Link>])} />;
}

function Info({ label, value }: { label: string; value: ReactNode }) {
  return <div className='rounded-lg border border-slate-200 bg-white p-4'><p className='text-xs font-bold uppercase tracking-wide text-slate-400'>{label}</p><div className='mt-2 text-sm font-semibold text-slate-800'>{value}</div></div>;
}

function CheckIcon() {
  return <AlertTriangle size={17} />;
}
