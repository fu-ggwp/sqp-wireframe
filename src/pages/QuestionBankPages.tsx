import type { ReactNode } from 'react';
import { useMemo, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { AlertTriangle, FileSpreadsheet, Plus, Sparkles, Trash2 } from 'lucide-react';
import { classes, getBankById, getQuestionById, getStudySetById, importErrors, questionBanks, questions } from '../data/mockData';
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

interface QuestionTarget {
  id: string;
  title: string;
  subject: string;
  topic: string;
  visibility: string;
  questionIds: string[];
  ownerId: string;
  assignedClassIds: string[];
  typeLabel: 'Study Set' | 'Question Bank';
  basePath: string;
  isStudySet: boolean;
}

function useQuestionTarget(): QuestionTarget {
  const { id } = useParams();
  const location = useLocation();
  const isStudySet = location.pathname.startsWith('/study-sets/');
  if (isStudySet) {
    const set = getStudySetById(id);
    return { id: set.id, title: set.title, subject: set.subject, topic: set.topic, visibility: set.visibility, questionIds: set.questionIds, ownerId: set.ownerId, assignedClassIds: set.assignedClassIds, typeLabel: 'Study Set', basePath: `/study-sets/${set.id}`, isStudySet: true };
  }
  const bank = getBankById(id);
  return { id: bank.id, title: bank.title, subject: bank.subject, topic: bank.topic, visibility: bank.visibility, questionIds: bank.questionIds, ownerId: bank.ownerId, assignedClassIds: [], typeLabel: 'Question Bank', basePath: `/teacher/question-banks/${bank.id}`, isStudySet: false };
}

function useQuestionAuthoringAccess(target: QuestionTarget) {
  const { currentUser, role } = useAuth();
  if (!currentUser || !role) return false;
  if (!target.isStudySet) return role === 'Teacher';
  if (target.ownerId === currentUser.id) return true;
  return role === 'Teacher' && classes.some((room) => room.teacherId === currentUser.id && target.assignedClassIds.includes(room.id));
}

function QuestionAuthoringDenied({ target }: { target: QuestionTarget }) {
  return <EmptyState title='Question authoring unavailable' description={`You can manage questions only in a ${target.typeLabel} you are allowed to edit.`} />;
}

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
      <PageHeader actions={<Link to='/teacher/question-banks/create'><Button icon={<Plus size={17} />}>Create Question Bank</Button></Link>} description='Teacher views reusable question repositories they created or can access. Local search and subject filter are supported.' eyebrow='Question repositories' title='View Question Bank Repositories' />
      <ListFieldBar filters={[{ label: 'Subject', onChange: setSubject, options: [{ value: 'all', label: 'All subjects' }, { value: 'Biology', label: 'Biology' }, { value: 'Chemistry', label: 'Chemistry' }, { value: 'Mathematics', label: 'Mathematics' }], value: subject }, { label: 'Visibility', options: [{ value: 'all', label: 'All visibility' }, { value: 'private', label: 'Private' }, { value: 'public', label: 'Public' }, { value: 'class-only', label: 'Class only' }] }, { label: 'Review Status', options: [{ value: 'all', label: 'All review status' }, { value: 'draft', label: 'Draft' }, { value: 'reviewed', label: 'Reviewed' }, { value: 'archived', label: 'Archived' }] }]} onSearchChange={setQuery} searchLabel='Keyword' searchPlaceholder='Bank title, description, topic' searchValue={query} />
      {filtered.length ? <><QuestionBankTable banks={filtered} /><PaginationBar label={`Showing ${filtered.length} question banks`} /></> : <EmptyState title='No question bank found' description='Try changing keyword or subject filter.' />}
    </div>
  );
}

export function CreateQuestionBankPage() {
  const [created, setCreated] = useState(false);
  return <QuestionBankForm created={created} description='Teacher creates a new question bank with title, description, subject, topic, and visibility.' onSubmit={() => setCreated(true)} title='Create Question Bank' eyebrow='New question bank' />;
}

export function EditQuestionBankPage() {
  const { id } = useParams();
  const bank = getBankById(id);
  const [saved, setSaved] = useState(false);
  const [deleted, setDeleted] = useState(false);

  return (
    <div className='space-y-6'>
      <PageHeader description='Teacher updates question bank title, description, subject, topic, visibility, or related configuration.' eyebrow='Question bank settings' title='Update Question Bank Information' />
      <Card><CardBody className='max-w-4xl space-y-4'><div className='grid gap-4 md:grid-cols-2'><Input defaultValue={bank.title} label='Question Bank Title' /><Input defaultValue={bank.subject} label='Subject' /><Input defaultValue={bank.topic} label='Topic' /><Input label='Chapter' placeholder='Chapter 1' /><Input label='Lesson' placeholder='Cell membrane' /><Input label='Tags' placeholder='biology, exam, grade-12' /><Input label='Grade / Level' placeholder='Grade 12' /><Input label='Default Score Per Question' placeholder='1' type='number' /><Input label='Estimated Completion Time' placeholder='30 minutes' /><Select defaultValue={bank.visibility} label='Visibility' options={[{ value: 'public', label: 'Public' }, { value: 'private', label: 'Private' }, { value: 'class-only', label: 'Class Only' }]} /><Select label='Review Status' options={[{ value: 'draft', label: 'Draft' }, { value: 'reviewed', label: 'Reviewed' }, { value: 'archived', label: 'Archived' }]} /></div><label className='block space-y-1.5'><span className='text-sm font-semibold text-slate-700'>Description</span><textarea className='focus-ring min-h-28 w-full rounded-lg border border-slate-200 p-3 text-sm' defaultValue={bank.description} /></label><div className='flex flex-wrap gap-3'><Button onClick={() => setSaved(true)}>Save Changes</Button><Button icon={<Trash2 size={17} />} onClick={() => setDeleted(true)} variant='danger'>Delete Question Bank</Button></div>{saved ? <p className='rounded-lg bg-emerald-50 p-3 text-sm font-semibold text-emerald-700'>Question bank updated.</p> : null}{deleted ? <p className='rounded-lg bg-rose-50 p-3 text-sm font-semibold text-rose-700'>Question bank is scheduled for deletion.</p> : null}</CardBody></Card>
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
        actions={<><Link to={`/teacher/question-banks/${bank.id}/edit`}><Button variant='secondary'>Edit Bank</Button></Link><Link to={`/teacher/question-banks/${bank.id}/questions/create`}><Button>Create Question</Button></Link><Link to={`/teacher/question-banks/${bank.id}/import`}><Button variant='secondary'>Import Excel</Button></Link><Link to={`/teacher/question-banks/${bank.id}/ai-generate`}><Button icon={<Sparkles size={17} />} variant='secondary'>Generate from Material</Button></Link></>}
        description='Question bank metadata, existing questions, and content management actions.'
        eyebrow='Question bank detail'
        title={bank.title}
      />
      <ListFieldBar filters={[{ label: 'Question Type', options: [{ value: 'all', label: 'All types' }, { value: 'multiple-choice', label: 'Multiple choice' }, { value: 'true-false', label: 'True/False' }, { value: 'written-answer', label: 'Written answer' }] }, { label: 'Difficulty', options: [{ value: 'all', label: 'All difficulties' }, { value: 'easy', label: 'Easy' }, { value: 'medium', label: 'Medium' }, { value: 'hard', label: 'Hard' }] }, { label: 'Score Range', options: [{ value: 'all', label: 'All scores' }, { value: '1', label: '1 point' }, { value: '2plus', label: '2+ points' }] }]} searchLabel='Search Questions' searchPlaceholder='Question content, tag, answer' />
      <div className='grid gap-6 lg:grid-cols-[0.7fr_1.3fr]'>
        <Card><CardBody className='space-y-4'><Info label='Subject' value={bank.subject} /><Info label='Topic' value={bank.topic} /><Info label='Visibility' value={<Badge>{bank.visibility}</Badge>} /><Info label='Owner' value={bank.ownerName} /><Info label='Updated At' value={bank.updatedAt} /></CardBody></Card>
        <Card><CardBody><Table headers={['Question', 'Type', 'Difficulty', 'Score', 'Actions']} rows={bankQuestions.map((question) => [<p className='max-w-xl font-semibold text-slate-800'>{question.content}</p>, question.type, <Badge tone={question.difficulty === 'hard' ? 'rose' : question.difficulty === 'medium' ? 'amber' : 'emerald'}>{question.difficulty}</Badge>, `${question.score}`, <div className='flex gap-2'><Link to={`/teacher/question-banks/${bank.id}/questions/${question.id}/edit`}><Button size='sm' variant='secondary'>Edit</Button></Link><Button icon={<Trash2 size={14} />} onClick={() => setDeletedQuestion(question.id)} size='sm' variant='danger'>Delete</Button></div>])} /></CardBody></Card>
      </div>
      <PaginationBar label={`Showing ${bankQuestions.length} questions`} />
      {deletedQuestion ? <p className='rounded-lg bg-rose-50 p-3 text-sm font-semibold text-rose-700'>Question {deletedQuestion} is scheduled for deletion.</p> : null}
    </div>
  );
}

export function CreateQuestionPage() {
  const target = useQuestionTarget();
  const canAuthor = useQuestionAuthoringAccess(target);
  if (!canAuthor) return <QuestionAuthoringDenied target={target} />;
  return <QuestionForm target={target} mode='Create' eyebrow='New question' />;
}

export function EditQuestionPage() {
  const { questionId } = useParams();
  const target = useQuestionTarget();
  const canAuthor = useQuestionAuthoringAccess(target);
  const question = getQuestionById(questionId);
  if (!canAuthor) return <QuestionAuthoringDenied target={target} />;
  return <QuestionForm target={target} mode='Update' question={question} eyebrow='Edit question' />;
}

export function ImportQuestionsPage() {
  const target = useQuestionTarget();
  const canAuthor = useQuestionAuthoringAccess(target);
  const [validated, setValidated] = useState(false);

  if (!canAuthor) return <QuestionAuthoringDenied target={target} />;

  return (
    <div className='space-y-6'>
      <PageHeader description={`Upload an Excel file and save valid questions into this ${target.typeLabel}.`} eyebrow='Excel import' title='Import Questions from Excel' />
      <Card><CardBody className='max-w-4xl space-y-4'><Input helper='Accepted template columns: type, content, option A-D, correct answer, score, tags, difficulty.' label='Excel File' type='file' /><div className='grid gap-4 md:grid-cols-3'><Input label='Worksheet Name' placeholder='Questions' /><Input label='Header Row' placeholder='1' type='number' /><Select label='Import Mode' options={[{ value: 'validate', label: 'Validate only' }, { value: 'save', label: 'Validate and save valid rows' }]} /></div><div className='grid gap-4 md:grid-cols-3'><Select label='Duplicate Handling' options={[{ value: 'skip', label: 'Skip duplicate questions' }, { value: 'replace', label: 'Replace existing questions' }, { value: 'allow', label: 'Allow duplicates' }]} /><Select label='Default Difficulty' options={[{ value: 'easy', label: 'Easy' }, { value: 'medium', label: 'Medium' }, { value: 'hard', label: 'Hard' }]} /><Input label='Default Tags' placeholder='imported, review-needed' /></div><div className='rounded-lg border border-slate-200 bg-slate-50 p-4'><p className='font-bold text-slate-950'>Uploaded file preview</p><p className='mt-1 text-sm text-slate-600'>biology-import-template.xlsx - 18 rows detected for {target.title}</p><p className='mt-1 text-xs font-semibold text-slate-500'>Destination: {target.typeLabel}</p></div><div className='flex flex-wrap gap-3'><Button icon={<FileSpreadsheet size={17} />} onClick={() => setValidated(true)}>Validate File</Button><Link to={`${target.basePath}/import/errors`}><Button variant='secondary'>View Errors</Button></Link><Link to={`${target.basePath}/import/preview`}><Button variant='secondary'>Preview Valid Questions</Button></Link></div>{validated ? <p className='rounded-lg bg-amber-50 p-3 text-sm font-semibold text-amber-800'>Validation complete: 15 valid rows, 3 error rows.</p> : null}</CardBody></Card>
    </div>
  );
}

export function ImportErrorsPage() {
  const target = useQuestionTarget();
  const canAuthor = useQuestionAuthoringAccess(target);
  if (!canAuthor) return <QuestionAuthoringDenied target={target} />;
  return (
    <div className='space-y-6'>
      <PageHeader description={`View row-level validation errors before saving questions into this ${target.typeLabel}.`} eyebrow='Import validation' title='View Question Import Errors' />
      <ListFieldBar filters={[{ label: 'Error Field', options: [{ value: 'all', label: 'All fields' }, { value: 'answer', label: 'Correct Answer' }, { value: 'type', label: 'Question Type' }, { value: 'score', label: 'Score' }] }, { label: 'Severity', options: [{ value: 'all', label: 'All severities' }, { value: 'error', label: 'Error' }, { value: 'warning', label: 'Warning' }] }]} searchLabel='Search Import Errors' searchPlaceholder='Row, field, raw value' />
      <Table headers={['Row', 'Field', 'Raw Value', 'Validation Message']} rows={importErrors.map((error) => [error.row, error.field, error.rawValue, <span className='font-semibold text-rose-700'>{error.message}</span>])} />
      <PaginationBar label={`Showing ${importErrors.length} import errors`} />
    </div>
  );
}

export function ImportPreviewPage() {
  const [saved, setSaved] = useState(false);
  const target = useQuestionTarget();
  const canAuthor = useQuestionAuthoringAccess(target);
  if (!canAuthor) return <QuestionAuthoringDenied target={target} />;
  return (
    <div className='space-y-6'>
      <PageHeader description={`Preview valid questions before saving them into this ${target.typeLabel}.`} eyebrow='Import preview' title='Preview Questions Before Saving' />
      <ListFieldBar filters={[{ label: 'Question Type', options: [{ value: 'all', label: 'All types' }, { value: 'multiple-choice', label: 'Multiple choice' }, { value: 'true-false', label: 'True/False' }] }, { label: 'Import Status', options: [{ value: 'all', label: 'All rows' }, { value: 'valid', label: 'Valid' }, { value: 'duplicate', label: 'Duplicate warning' }] }]} searchLabel='Search Preview Rows' searchPlaceholder='Question or answer keyword' />
      <Table headers={['Question', 'Type', 'Correct Answer', 'Score', 'Status']} rows={questions.slice(0, 3).map((question) => [question.content, question.type, question.correctAnswer, question.score, <StatusPill label='valid' tone='success' />])} />
      <PaginationBar label='Showing 1-3 of 15 valid rows' />
      <Button icon={<CheckIcon />} onClick={() => setSaved(true)}>Save Imported Questions</Button>
      {saved ? <p className='rounded-lg bg-emerald-50 p-3 text-sm font-semibold text-emerald-700'>Imported questions saved locally into {target.title} for preview only.</p> : null}
    </div>
  );
}

export function AiGenerateQuestionsPage() {
  const [generated, setGenerated] = useState(false);
  const target = useQuestionTarget();
  const canAuthor = useQuestionAuthoringAccess(target);
  const { currentUser } = useAuth();
  const canGenerate = Boolean(currentUser?.premium);
  if (!canAuthor) return <QuestionAuthoringDenied target={target} />;
  return (
    <div className='space-y-6'>
      <PageHeader description={`Generate draft questions from uploaded learning material for this ${target.typeLabel}. Premium access is required.`} eyebrow='AI draft questions' title='Generate Questions from Material' />
      <Card><CardBody className='space-y-4'><Input label='Learning Material File' type='file' /><label className='block space-y-1.5'><span className='text-sm font-semibold text-slate-700'>Material Text</span><textarea className='focus-ring min-h-24 w-full rounded-lg border border-slate-200 p-3 text-sm' placeholder='Paste learning material if no file is uploaded.' /></label><Select label='Question Type' options={[{ value: 'mixed', label: 'Mixed types' }, { value: 'multiple-choice', label: 'Multiple Choice' }, { value: 'true-false', label: 'True/False' }, { value: 'written-answer', label: 'Written Answer' }]} /><div className='grid gap-4 md:grid-cols-3'><Input label='Number of Questions' placeholder='10' type='number' /><Select label='Bloom Level' options={[{ value: 'remember', label: 'Remember' }, { value: 'understand', label: 'Understand' }, { value: 'apply', label: 'Apply' }, { value: 'analyze', label: 'Analyze' }]} /><Select label='Difficulty' options={[{ value: 'easy', label: 'Easy' }, { value: 'medium', label: 'Medium' }, { value: 'hard', label: 'Hard' }]} /><Input label='Topic Focus' placeholder={target.topic} /></div><div className='grid gap-3 md:grid-cols-3'><label className='flex items-center gap-3 rounded-lg border border-slate-200 p-3 text-sm font-semibold'><input defaultChecked type='checkbox' /> Include answer key</label><label className='flex items-center gap-3 rounded-lg border border-slate-200 p-3 text-sm font-semibold'><input defaultChecked type='checkbox' /> Include explanations</label><label className='flex items-center gap-3 rounded-lg border border-slate-200 p-3 text-sm font-semibold'><input type='checkbox' /> Save drafts after generation</label></div><Button icon={<Sparkles size={17} />} onClick={() => setGenerated(true)}>Generate Questions</Button>{generated ? canGenerate ? <div className='rounded-lg bg-blue-50 p-4'><p className='font-bold text-blue-800'>AI generated question preview</p><p className='mt-2 text-sm text-blue-700'>3 sample questions generated for {target.title}. Gemini API not called.</p><Link className='mt-3 inline-flex' to={`${target.basePath}/import/preview`}><Button size='sm' variant='secondary'>Preview Before Saving</Button></Link></div> : <div className='rounded-lg bg-amber-50 p-4 text-sm font-semibold text-amber-800'>AI features are available for Premium accounts only. Please upgrade to continue.</div> : null}</CardBody></Card>
    </div>
  );
}

function QuestionBankForm({ title, description, eyebrow, onSubmit, created }: { title: string; description: string; eyebrow: string; onSubmit: () => void; created: boolean }) {
  return (
    <div className='space-y-6'>
      <PageHeader description={description} eyebrow={eyebrow} title={title} />
      <Card><CardBody className='max-w-4xl space-y-4'><div className='grid gap-4 md:grid-cols-2'><Input label='Question Bank Title' placeholder='Biology Core Question Bank' /><Input label='Subject' placeholder='Biology' /><Input label='Topic' placeholder='Cell Biology' /><Input label='Chapter' placeholder='Chapter 1' /><Input label='Lesson' placeholder='Cell membrane' /><Input label='Tags' placeholder='biology, exam, grade-12' /><Input label='Grade / Level' placeholder='Grade 12' /><Input label='Default Score Per Question' placeholder='1' type='number' /><Input label='Estimated Completion Time' placeholder='30 minutes' /><Select label='Visibility' options={[{ value: 'private', label: 'Private' }, { value: 'public', label: 'Public' }, { value: 'class-only', label: 'Class Only' }]} /><Select label='Question Review Workflow' options={[{ value: 'none', label: 'No review required' }, { value: 'teacher-review', label: 'Teacher review required' }, { value: 'admin-review', label: 'Admin review for shared repository' }]} /></div><label className='block space-y-1.5'><span className='text-sm font-semibold text-slate-700'>Description</span><textarea className='focus-ring min-h-28 w-full rounded-lg border border-slate-200 p-3 text-sm' /></label><Button onClick={onSubmit}>Create Question Bank</Button>{created ? <p className='rounded-lg bg-emerald-50 p-3 text-sm font-semibold text-emerald-700'>Question bank created locally.</p> : null}</CardBody></Card>
    </div>
  );
}

function QuestionForm({ mode, target, eyebrow, question }: { mode: 'Create' | 'Update'; target: QuestionTarget; eyebrow: string; question?: typeof questions[number] }) {
  const [saved, setSaved] = useState(false);

  return (
    <div className='space-y-6'>
      <PageHeader description={`Adding to: ${target.title}. Fill question content, answers, metadata, score, and explanation.`} eyebrow={eyebrow} title={`${mode} Question`} />
      <Card>
        <CardBody className='space-y-4'>
          <div className='flex flex-wrap items-start justify-between gap-3'>
            <div className='grid flex-1 gap-3 md:grid-cols-3'>
              <Info label={target.typeLabel} value={target.title} />
              <Info label='Subject' value={target.subject || question?.subject || '-'} />
              <Info label='Topic' value={target.topic || question?.topic || '-'} />
            </div>
            {mode === 'Create' ? <Link to={`${target.basePath}/ai-generate`}><Button icon={<Sparkles size={17} />} variant='secondary'>Generate from Material</Button></Link> : null}
          </div>

          <div className='grid gap-3 md:grid-cols-3'><Select label='Question Status' options={[{ value: 'draft', label: 'Draft' }, { value: 'ready', label: 'Ready for use' }, { value: 'reviewed', label: 'Reviewed' }]} /><Select label='Answer Shuffle' options={[{ value: 'yes', label: 'Shuffle answers' }, { value: 'no', label: 'Keep answer order' }]} /><Input label='Time Estimate' placeholder='60 seconds' /></div>
          <Select defaultValue={question?.type ?? 'multiple-choice'} label='Question Type' options={[{ value: 'multiple-choice', label: 'Multiple Choice' }, { value: 'true-false', label: 'True/False' }, { value: 'written-answer', label: 'Written Answer' }]} />
          <label className='block space-y-1.5'><span className='text-sm font-semibold text-slate-700'>Question Content</span><textarea className='focus-ring min-h-28 w-full rounded-lg border border-slate-200 p-3 text-sm' defaultValue={question?.content} /></label>
          <div className='grid gap-4 md:grid-cols-2'>{['Option A', 'Option B', 'Option C', 'Option D'].map((label, index) => <Input defaultValue={question?.options[index]} key={label} label={label} placeholder={label} />)}</div>
          <div className='grid gap-4 md:grid-cols-4'><Input defaultValue={question?.correctAnswer} label='Correct Answer' /><Input defaultValue={question?.score} label='Score' type='number' /><Input label='Negative Score' placeholder='0' type='number' /><Select defaultValue={question?.difficulty ?? 'medium'} label='Difficulty' options={[{ value: 'easy', label: 'Easy' }, { value: 'medium', label: 'Medium' }, { value: 'hard', label: 'Hard' }]} /></div>
          <div className='grid gap-4 md:grid-cols-3'><Input defaultValue={question?.subject ?? target.subject} label='Subject' /><Input defaultValue={question?.topic ?? target.topic} label='Topic' /><Input defaultValue={question?.chapter} label='Chapter' placeholder='Chapter 1' /><Input defaultValue={question?.lesson} label='Lesson' placeholder='Cell membrane' /><Input defaultValue={question?.tags.join(', ')} label='Tags' placeholder='biology, review' /><Select label='Question Visibility' options={[{ value: 'same-as-set', label: `Same as ${target.typeLabel}` }, { value: 'draft-only', label: 'Draft only' }]} /></div>
          <label className='block space-y-1.5'><span className='text-sm font-semibold text-slate-700'>Author Notes</span><textarea className='focus-ring min-h-20 w-full rounded-lg border border-slate-200 p-3 text-sm' placeholder='Internal note for this question.' /></label>
          <label className='block space-y-1.5'><span className='text-sm font-semibold text-slate-700'>Explanation</span><textarea className='focus-ring min-h-24 w-full rounded-lg border border-slate-200 p-3 text-sm' defaultValue={question?.explanation} /></label>
          <Button onClick={() => setSaved(true)}>{mode} Question</Button>
          {saved ? <p className='rounded-lg bg-emerald-50 p-3 text-sm font-semibold text-emerald-700'>Question {mode.toLowerCase()} saved locally into {target.title}.</p> : null}
        </CardBody>
      </Card>
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
