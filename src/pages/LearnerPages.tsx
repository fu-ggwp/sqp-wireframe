import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BookOpen, Brain, CheckCircle2, Clock, FileQuestion, GraduationCap, Send, Sparkles } from 'lucide-react';
import { classes, examAttempts, exams, getClassById, getExamById, getStudySetById, progressMetrics, questions, studySets, users } from '../data/mockData';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card, CardBody } from '../components/ui/Card';
import { EmptyState } from '../components/ui/EmptyState';
import { Input } from '../components/ui/Input';
import { Modal } from '../components/ui/Modal';
import { PageHeader } from '../components/ui/PageHeader';
import { Progress } from '../components/ui/Progress';
import { Select } from '../components/ui/Select';
import { StatusPill } from '../components/ui/StatusPill';
import { Table } from '../components/ui/Table';

const learner = users[0];
const learnerStudySets = studySets.filter((set) => set.visibility === 'public' || set.assignedClassIds.length > 0);

export function LearnerDashboardPage() {
  return (
    <div className='space-y-6'>
      <PageHeader
        actions={<><Link to='/learner/classes/join'><Button>Join Class</Button></Link><Link to='/learner/study-sets'><Button variant='secondary'>Continue Study</Button></Link></>}
        description='Learner overview with joined classes, assigned study sets, available exams, and progress snapshot.'
        eyebrow='Learner workspace'
        title='Learner Dashboard'
      />
      <div className='grid gap-4 md:grid-cols-4'>
        {progressMetrics.map((metric) => <MetricCard key={metric.label} label={metric.label} value={`${metric.value}${metric.unit === '%' ? '%' : ''}`} helper={metric.trend} />)}
      </div>
      <div className='grid gap-6 xl:grid-cols-2'>
        <Card><CardBody><h2 className='mb-4 text-lg font-bold text-slate-950'>Joined classes</h2><ClassTable /></CardBody></Card>
        <Card><CardBody><h2 className='mb-4 text-lg font-bold text-slate-950'>Available exams</h2><ExamTable /></CardBody></Card>
      </div>
    </div>
  );
}

export function LearnerClassesPage() {
  return (
    <div className='space-y-6'>
      <PageHeader actions={<Link to='/learner/classes/join'><Button>Join Class</Button></Link>} description='Learner views classes they have joined and opens class detail.' eyebrow='UC-16' title='View Joined Classes' />
      <ClassTable />
    </div>
  );
}

export function JoinClassPage() {
  const [pending, setPending] = useState(false);

  return (
    <div className='space-y-6'>
      <PageHeader description='Learner joins a class with a class code or invitation link. Submission shows pending request state.' eyebrow='UC-17' title='Join Class' />
      <Card>
        <CardBody className='max-w-2xl space-y-4'>
          <Input helper='Example: BIO12A-2026' label='Class Code' placeholder='Enter teacher class code' />
          <Input helper='Paste invitation link if available.' label='Invitation Link' placeholder='https://sqp.local/invite/...' />
          <label className='block space-y-1.5'>
            <span className='text-sm font-semibold text-slate-700'>Request Message</span>
            <textarea className='focus-ring min-h-24 w-full rounded-lg border border-slate-200 p-3 text-sm' placeholder='Tell teacher why you want to join this class.' />
          </label>
          <Button icon={<Send size={17} />} onClick={() => setPending(true)}>Send Join Request</Button>
          {pending ? <div className='rounded-lg bg-amber-50 p-4 text-sm font-semibold text-amber-800'>Join request submitted. Status: Pending teacher approval.</div> : null}
        </CardBody>
      </Card>
    </div>
  );
}

export function LearnerClassDetailPage() {
  const { id } = useParams();
  const room = getClassById(id);
  const assignedSets = studySets.filter((set) => room.studySetIds.includes(set.id));

  return (
    <div className='space-y-6'>
      <PageHeader actions={<Link to='/learner/classes'><Button icon={<ArrowLeft size={17} />} variant='secondary'>Back to Classes</Button></Link>} description='Class detail shows teacher, code, members, assigned study sets, and available exams.' eyebrow='UC-16' title={room.name} />
      <div className='grid gap-6 lg:grid-cols-[0.8fr_1.4fr]'>
        <Card><CardBody className='space-y-4'><Info label='Teacher' value={room.teacherName} /><Info label='Subject' value={room.subject} /><Info label='Class Code' value={room.code} /><Info label='Members' value={`${room.memberIds.length}`} /><Info label='Status' value={room.status} /></CardBody></Card>
        <Card><CardBody><h2 className='mb-4 text-lg font-bold text-slate-950'>Assigned study sets</h2><div className='grid gap-3 md:grid-cols-2'>{assignedSets.map((set) => <StudySetMini key={set.id} id={set.id} title={set.title} progress={set.progress ?? 0} />)}</div></CardBody></Card>
      </div>
    </div>
  );
}

export function LearnerStudySetsPage() {
  const [query, setQuery] = useState('');
  const filtered = learnerStudySets.filter((set) => [set.title, set.subject, set.topic].join(' ').toLowerCase().includes(query.toLowerCase()));

  return (
    <div className='space-y-6'>
      <PageHeader description='Learner views assigned, joined, and public study sets currently being learned.' eyebrow='UC-18' title='View Joined Study Sets' />
      <Card><CardBody><Input label='Search Study Sets' onChange={(event) => setQuery(event.target.value)} placeholder='Search by title, subject, topic' value={query} /></CardBody></Card>
      <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
        {filtered.map((set) => <StudySetLearnerCard key={set.id} set={set} />)}
      </div>
    </div>
  );
}

export function LearnerStudySetDetailPage() {
  const { id } = useParams();
  const set = getStudySetById(id);

  return (
    <div className='space-y-6'>
      <PageHeader
        actions={<><Link to={`/learner/study-sets/${set.id}/flashcards`}><Button>Flashcards</Button></Link><Link to={`/learner/study-sets/${set.id}/quiz`}><Button variant='secondary'>Take Quiz</Button></Link></>}
        description='Study set detail for Learner with progress, assigned class, question preview, and learning actions.'
        eyebrow='UC-18, UC-19'
        title={set.title}
      />
      <div className='grid gap-6 lg:grid-cols-[1.3fr_0.7fr]'>
        <Card><CardBody><p className='mb-4 text-slate-600'>{set.description}</p><Table headers={['Question', 'Type', 'Score']} rows={questions.slice(0, 3).map((question) => [question.content, question.type, `${question.score}`])} /></CardBody></Card>
        <Card><CardBody className='space-y-4'><Info label='Subject' value={set.subject} /><Info label='Topic' value={set.topic} /><Info label='Question Count' value={`${set.questionCount}`} /><Progress label='Learning progress' value={set.progress ?? 0} /></CardBody></Card>
      </div>
    </div>
  );
}

export function FlashcardStudyPage() {
  const { id } = useParams();
  const set = getStudySetById(id);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const card = questions[index % questions.length];

  const move = (direction: number) => {
    setIndex((current) => (current + direction + questions.length) % questions.length);
    setFlipped(false);
  };

  return (
    <div className='space-y-6'>
      <PageHeader description='Flashcard mode supports flip, previous, next, progress counter, and answer reveal.' eyebrow='UC-05' title={`Flashcard Study: ${set.title}`} />
      <Card className='mx-auto max-w-4xl'>
        <CardBody>
          <div className='mb-4 flex items-center justify-between'><Badge tone='teal'>Card {index + 1} of {questions.length}</Badge><Progress value={Math.round(((index + 1) / questions.length) * 100)} /></div>
          <button className='focus-ring min-h-80 w-full rounded-lg border border-slate-200 bg-slate-50 p-8 text-left transition hover:bg-white' onClick={() => setFlipped((value) => !value)}>
            <p className='text-sm font-bold uppercase tracking-wide text-slate-400'>{flipped ? 'Answer' : 'Question'}</p>
            <p className='mt-5 text-2xl font-bold leading-9 text-slate-950'>{flipped ? card.correctAnswer : card.content}</p>
            <p className='mt-6 text-sm text-slate-500'>Click card to flip.</p>
          </button>
          <div className='mt-5 flex justify-between'><Button icon={<ArrowLeft size={17} />} onClick={() => move(-1)} variant='secondary'>Previous</Button><Button icon={<ArrowRight size={17} />} onClick={() => move(1)}>Next</Button></div>
        </CardBody>
      </Card>
    </div>
  );
}

export function StudySetQuizPage() {
  const { id } = useParams();
  const set = getStudySetById(id);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const quizQuestions = questions.slice(0, 3);
  const score = quizQuestions.filter((question) => answers[question.id] === question.correctAnswer).length;

  return (
    <div className='space-y-6'>
      <PageHeader description='Learner takes a generated quiz from an accessible study set. Guest is not allowed for this mode.' eyebrow='UC-19' title={`Take Study Set Quiz: ${set.title}`} />
      <div className='space-y-4'>
        {quizQuestions.map((question, idx) => (
          <Card key={question.id}>
            <CardBody className='space-y-4'>
              <div className='flex items-center justify-between'><h2 className='font-bold text-slate-950'>Question {idx + 1}</h2><Badge>{question.type}</Badge></div>
              <p className='text-slate-700'>{question.content}</p>
              {question.options.length ? <div className='grid gap-2 md:grid-cols-2'>{question.options.map((option) => <button key={option} className={`focus-ring rounded-lg border p-3 text-left text-sm font-semibold ${answers[question.id] === option ? 'border-teal-500 bg-teal-50 text-teal-800' : 'border-slate-200 bg-white text-slate-700'}`} onClick={() => setAnswers((current) => ({ ...current, [question.id]: option }))}>{option}</button>)}</div> : <Input label='Written Answer' onChange={(event) => setAnswers((current) => ({ ...current, [question.id]: event.target.value }))} placeholder='Type your answer' />}
              {submitted ? <Feedback correct={answers[question.id] === question.correctAnswer} correctAnswer={question.correctAnswer} /> : null}
            </CardBody>
          </Card>
        ))}
      </div>
      <div className='flex flex-wrap gap-3'><Button onClick={() => setSubmitted(true)}>Submit Quiz</Button><Link to={`/learner/study-sets/${set.id}/result`}><Button variant='secondary'>Open Result Screen</Button></Link></div>
      {submitted ? <div className='rounded-lg bg-blue-50 p-4 text-sm font-bold text-blue-700'>Mock score: {score}/{quizQuestions.length}. Feedback shown inline for Section 3 capture.</div> : null}
    </div>
  );
}

export function QuizResultPage() {
  const { id } = useParams();
  const set = getStudySetById(id);

  return (
    <div className='space-y-6'>
      <PageHeader actions={<Link to={`/learner/study-sets/${set.id}/review`}><Button>Review Wrong Answers</Button></Link>} description='Quiz result shows score, accuracy, completion status, and review entry point.' eyebrow='UC-19, UC-20' title='Quiz Result' />
      <div className='grid gap-4 md:grid-cols-3'><MetricCard label='Score' value='2/3' helper='66.7% accuracy' /><MetricCard label='Correct answers' value='2' helper='Question 1 and 3' /><MetricCard label='Wrong answers' value='1' helper='Review recommended' /></div>
      <Table headers={['Question', 'Your Answer', 'Correct Answer', 'Status']} rows={questions.slice(0, 3).map((question) => [question.content, question.learnerAnswer ?? question.correctAnswer, question.correctAnswer, (question.learnerAnswer ?? question.correctAnswer) === question.correctAnswer ? <StatusPill label='Correct' tone='success' /> : <StatusPill label='Wrong' tone='danger' />])} />
    </div>
  );
}

export function ReviewWrongAnswersPage() {
  const [aiState, setAiState] = useState('');
  const wrong = questions.filter((question) => question.learnerAnswer && question.learnerAnswer !== question.correctAnswer);

  return (
    <div className='space-y-6'>
      <PageHeader description='Learner reviews wrong answers and can request AI explanation if Premium.' eyebrow='UC-20, UC-21' title='Review Wrong Answers' />
      {wrong.map((question) => (
        <Card key={question.id}>
          <CardBody className='space-y-3'>
            <Badge tone='rose'>Wrong answer</Badge>
            <h2 className='text-lg font-bold text-slate-950'>{question.content}</h2>
            <div className='grid gap-3 md:grid-cols-2'><Info label='Your Answer' value={question.learnerAnswer ?? '-'} /><Info label='Correct Answer' value={question.correctAnswer} /></div>
            <p className='rounded-lg bg-slate-50 p-3 text-sm text-slate-700'>{question.explanation}</p>
            <Button icon={<Sparkles size={17} />} onClick={() => setAiState(learner.premium ? question.aiExplanation : 'Upgrade required. Non-premium learners cannot request AI answer explanations.')}>Request AI Answer Explanation</Button>
          </CardBody>
        </Card>
      ))}
      {aiState ? <div className={`rounded-lg p-4 text-sm font-semibold ${learner.premium ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-800'}`}>{aiState}</div> : null}
    </div>
  );
}

export function LearnerProgressPage() {
  return (
    <div className='space-y-6'>
      <PageHeader description='Personal learning progress includes practiced questions, accuracy rate, repeated mistakes, and weak topics.' eyebrow='UC-22' title='View Personal Learning Progress' />
      <div className='grid gap-4 md:grid-cols-4'>{progressMetrics.map((metric) => <MetricCard key={metric.label} label={metric.label} value={`${metric.value}${metric.unit === '%' ? '%' : ''}`} helper={metric.trend} />)}</div>
      <Card><CardBody><h2 className='mb-4 text-lg font-bold text-slate-950'>Weak topic breakdown</h2><Table headers={['Topic', 'Accuracy', 'Repeated Mistakes', 'Recommended Action']} rows={[[ 'Cell Membrane', '58%', '7', 'Review flashcards and explanation' ], [ 'Chemical Bonding', '63%', '4', 'Retake practice quiz' ], [ 'Quadratic Graphs', '69%', '3', 'Study graph transformations' ]]} /></CardBody></Card>
    </div>
  );
}

export function AvailableExamsPage() {
  const [query, setQuery] = useState('');
  const filtered = exams.filter((exam) => [exam.title, exam.className, exam.status].join(' ').toLowerCase().includes(query.toLowerCase()));

  return (
    <div className='space-y-6'>
      <PageHeader description='Learner views exam sessions available to them and opens exam information.' eyebrow='UC-23' title='View Available Exams' />
      <Card><CardBody><Input label='Search Exams' onChange={(event) => setQuery(event.target.value)} placeholder='Search by title, class, status' value={query} /></CardBody></Card>
      {filtered.length ? <ExamTable examsOverride={filtered} /> : <EmptyState icon={<GraduationCap size={22} />} title='No exams found' description='Change search keyword to view available exam sessions.' />}
    </div>
  );
}

export function ExamInfoPage() {
  const { id } = useParams();
  const exam = getExamById(id);

  return (
    <div className='space-y-6'>
      <PageHeader actions={<Link to={`/learner/exams/${exam.id}/take`}><Button>Start Exam</Button></Link>} description='Exam information includes schedule, duration, attempts, randomization, and result visibility.' eyebrow='UC-24' title={exam.title} />
      <Card><CardBody className='grid gap-4 md:grid-cols-2'><Info label='Class' value={exam.className} /><Info label='Start Time' value={exam.startTime} /><Info label='Duration' value={`${exam.durationMinutes} minutes`} /><Info label='Attempts Allowed' value={`${exam.attemptsAllowed}`} /><Info label='Result Visibility' value={exam.showResult ? 'Visible after submit' : 'Hidden by teacher'} /><Info label='Randomization' value={`${exam.randomizeQuestions ? 'Questions' : 'No questions'} / ${exam.randomizeAnswers ? 'Answers' : 'No answers'}`} /></CardBody></Card>
    </div>
  );
}

export function TakeExamPage() {
  const { id } = useParams();
  const exam = getExamById(id);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const examQuestions = questions.filter((question) => exam.questionIds.includes(question.id));

  return (
    <div className='space-y-6'>
      <PageHeader description='Take exam screen supports answer selection, auto-save status, timer, and submit confirmation modal.' eyebrow='UC-25' title={`Take Exam: ${exam.title}`} />
      <Card><CardBody className='flex flex-wrap items-center justify-between gap-3'><span className='inline-flex items-center gap-2 font-bold text-slate-800'><Clock size={18} /> 42:15 remaining</span><StatusPill label='Auto-saved 20 seconds ago' tone='info' /><Badge tone='amber'>Attempt 1 of {exam.attemptsAllowed}</Badge></CardBody></Card>
      {examQuestions.map((question, index) => (
        <Card key={question.id}><CardBody className='space-y-4'><h2 className='font-bold text-slate-950'>Question {index + 1}</h2><p>{question.content}</p><div className='grid gap-2 md:grid-cols-2'>{question.options.map((option) => <button key={option} className={`focus-ring rounded-lg border p-3 text-left text-sm font-semibold ${answers[question.id] === option ? 'border-teal-500 bg-teal-50 text-teal-800' : 'border-slate-200 bg-white text-slate-700'}`} onClick={() => setAnswers((current) => ({ ...current, [question.id]: option }))}>{option}</button>)}</div></CardBody></Card>
      ))}
      <Button icon={<CheckCircle2 size={17} />} onClick={() => setConfirmOpen(true)}>Submit Exam</Button>
      {submitted ? <div className='rounded-lg bg-emerald-50 p-4 text-sm font-semibold text-emerald-700'>Exam submitted. Auto-submit backend is mocked.</div> : null}
      <Modal footer={<><Button onClick={() => setConfirmOpen(false)} variant='secondary'>Cancel</Button><Button onClick={() => { setSubmitted(true); setConfirmOpen(false); }}>Confirm Submit</Button></>} onClose={() => setConfirmOpen(false)} open={confirmOpen} title='Submit exam attempt?'>
        <p className='text-sm text-slate-600'>You answered {Object.keys(answers).length} of {examQuestions.length} questions. Submission is final in real system.</p>
      </Modal>
    </div>
  );
}

export function ExamResultPage() {
  const { id } = useParams();
  const exam = getExamById(id);
  const attempt = examAttempts.find((item) => item.examId === exam.id) ?? examAttempts[0];

  return (
    <div className='space-y-6'>
      <PageHeader description='Learner views exam result if teacher allows result visibility.' eyebrow='UC-26' title='View Exam Result' />
      <div className='grid gap-4 md:grid-cols-3'><MetricCard label='Score' value={`${attempt.score}`} helper='Out of 100' /><MetricCard label='Accuracy' value={`${attempt.accuracy}%`} helper='Based on submitted answers' /><MetricCard label='Status' value={attempt.status} helper={attempt.submittedAt ?? 'Not submitted'} /></div>
      {exam.showResult ? <Table headers={['Question', 'Your Answer', 'Correct Answer']} rows={questions.slice(0, 3).map((question) => [question.content, attempt.answers[question.id] ?? '-', question.correctAnswer])} /> : <EmptyState icon={<FileQuestion size={22} />} title='Result hidden' description='Teacher configured this exam to hide detailed results.' />}
    </div>
  );
}

function ClassTable() {
  return <Table headers={['Class', 'Teacher', 'Code', 'Members', 'Action']} rows={classes.map((room) => [<div><p className='font-bold text-slate-950'>{room.name}</p><p className='text-xs text-slate-500'>{room.subject}</p></div>, room.teacherName, room.code, `${room.memberIds.length}`, <Link to={`/learner/classes/${room.id}`}><Button size='sm' variant='secondary'>Open</Button></Link>])} />;
}

function ExamTable({ examsOverride }: { examsOverride?: typeof exams }) {
  const source = examsOverride ?? exams;
  return <Table headers={['Exam', 'Class', 'Start Time', 'Status', 'Action']} rows={source.map((exam) => [<div><p className='font-bold text-slate-950'>{exam.title}</p><p className='text-xs text-slate-500'>{exam.durationMinutes} minutes</p></div>, exam.className, exam.startTime, <StatusPill label={exam.status} tone={exam.status === 'open' ? 'success' : 'warning'} />, <Link to={`/learner/exams/${exam.id}/info`}><Button size='sm' variant='secondary'>Info</Button></Link>])} />;
}

function StudySetMini({ id, title, progress }: { id: string; title: string; progress: number }) {
  return <Link className='rounded-lg border border-slate-200 p-4 transition hover:border-teal-300 hover:bg-teal-50' to={`/learner/study-sets/${id}`}><p className='font-bold text-slate-950'>{title}</p><div className='mt-3'><Progress label='Progress' value={progress} /></div></Link>;
}

function StudySetLearnerCard({ set }: { set: (typeof studySets)[number] }) {
  return <Card><CardBody className='space-y-3'><Badge tone={set.visibility === 'public' ? 'emerald' : 'amber'}>{set.visibility}</Badge><h2 className='font-bold text-slate-950'>{set.title}</h2><p className='text-sm text-slate-500'>{set.description}</p><Progress label='Progress' value={set.progress ?? 0} /><div className='flex gap-2'><Link to={`/learner/study-sets/${set.id}`}><Button size='sm'>Detail</Button></Link><Link to={`/learner/study-sets/${set.id}/flashcards`}><Button size='sm' variant='secondary'>Flashcards</Button></Link></div></CardBody></Card>;
}

function MetricCard({ label, value, helper }: { label: string; value: string; helper: string }) {
  return <Card><CardBody><p className='text-sm font-semibold text-slate-500'>{label}</p><p className='mt-2 text-3xl font-bold text-slate-950'>{value}</p><p className='mt-1 text-sm text-slate-500'>{helper}</p></CardBody></Card>;
}

function Info({ label, value }: { label: string; value: string }) {
  return <div className='rounded-lg border border-slate-200 bg-white p-4'><p className='text-xs font-bold uppercase tracking-wide text-slate-400'>{label}</p><p className='mt-2 text-sm font-semibold text-slate-800'>{value}</p></div>;
}

function Feedback({ correct, correctAnswer }: { correct: boolean; correctAnswer: string }) {
  return <div className={`rounded-lg p-3 text-sm font-semibold ${correct ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>{correct ? 'Correct answer.' : `Incorrect. Correct answer: ${correctAnswer}`}</div>;
}
