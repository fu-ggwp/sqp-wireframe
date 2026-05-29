import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Clock, FileQuestion, GraduationCap, Send, Sparkles } from 'lucide-react';
import { classes, examAttempts, exams, getClassById, getExamById, getStudySetById, progressMetrics, questions, studySets, users } from '../data/mockData';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card, CardBody } from '../components/ui/Card';
import { EmptyState } from '../components/ui/EmptyState';
import { Input } from '../components/ui/Input';
import { Modal } from '../components/ui/Modal';
import { PageHeader } from '../components/ui/PageHeader';
import { Progress } from '../components/ui/Progress';
import { StatusPill } from '../components/ui/StatusPill';
import { Table } from '../components/ui/Table';

const learner = users[0];
const learnerStudySets = studySets.filter((set) => set.visibility === 'public' || set.assignedClassIds.length > 0);
const studySetQuestionBanks: Record<string, string[]> = {
  'set-bio-cell': ['bank-bio-core'],
  'set-chem-bonding': ['bank-chem-bonding'],
  'set-math-functions': ['bank-math-functions'],
};

function getQuestionsForStudySet(setId?: string) {
  const bankIds = studySetQuestionBanks[setId ?? ''] ?? [];
  const scopedQuestions = questions.filter((question) => bankIds.includes(question.bankId));
  return scopedQuestions.length ? scopedQuestions : questions;
}

function getWrongAnswersForStudySet(setId?: string) {
  return getQuestionsForStudySet(setId).filter((question) => question.learnerAnswer && question.learnerAnswer !== question.correctAnswer);
}

export function LearnerDashboardPage() {
  const activeSets = learnerStudySets.filter((set) => (set.progress ?? 0) > 0).slice(0, 3);
  const recentSets = learnerStudySets.slice(0, 4);

  return (
    <div className='space-y-6'>
      <PageHeader
        actions={<><Link to='/learner/classes/join'><Button>Join Class</Button></Link><Link to='/learner/study-sets'><Button variant='secondary'>Continue Study</Button></Link></>}
        description='Pick up active study sets, review recent material, and prepare for upcoming exams.'
        eyebrow='Learner workspace'
        title={`Welcome back, ${learner.fullName.split(' ')[0]}`}
      />

      <section className='space-y-4'>
        <div className='flex items-center justify-between gap-3'>
          <h2 className='text-2xl font-bold text-slate-950'>Jump back in</h2>
          <Link className='inline-flex items-center gap-1 text-sm font-bold text-teal-700' to='/learner/study-sets'>View all <ArrowRight size={16} /></Link>
        </div>
        <div className='grid gap-4 xl:grid-cols-3'>
          {activeSets.map((set) => <ContinueStudySetCard key={set.id} set={set} />)}
        </div>
      </section>

      <div className='grid gap-6 xl:grid-cols-[1.1fr_0.9fr]'>
        <Card>
          <CardBody>
            <div className='mb-4 flex items-center justify-between'>
              <h2 className='text-lg font-bold text-slate-950'>Recents</h2>
              <Link className='text-sm font-bold text-teal-700' to='/learner/study-sets'>Study sets</Link>
            </div>
            <div className='grid gap-3 md:grid-cols-2'>
              {recentSets.map((set) => (
                <Link className='rounded-lg border border-slate-200 p-4 transition hover:border-teal-300 hover:bg-teal-50' key={set.id} to={`/learner/study-sets/${set.id}`}>
                  <div className='flex items-start gap-3'>
                    <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-700'><BookOpen size={18} /></span>
                    <div className='min-w-0'>
                      <p className='truncate font-bold text-slate-950'>{set.title}</p>
                      <p className='mt-1 text-xs font-semibold text-slate-500'>{set.questionCount} questions - {set.ownerName}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className='space-y-4'>
            <h2 className='text-lg font-bold text-slate-950'>Today study plan</h2>
            <div className='grid gap-3 md:grid-cols-3'>
              <Info label='Daily Goal' value='25 questions' />
              <Info label='Study Streak' value='6 days' />
              <Info label='Next Review' value='Cell Membrane' />
            </div>
            <Progress label='Daily goal progress' value={64} />
          </CardBody>
        </Card>
      </div>

      <div className='grid gap-6 xl:grid-cols-2'>
        <Card><CardBody><h2 className='mb-4 text-lg font-bold text-slate-950'>Joined classes</h2><ClassTable /></CardBody></Card>
        <Card><CardBody><h2 className='mb-4 text-lg font-bold text-slate-950'>Available exams</h2><ExamTable /></CardBody></Card>
      </div>

      <div className='grid gap-4 md:grid-cols-4'>
        {progressMetrics.map((metric) => <MetricCard key={metric.label} label={metric.label} value={`${metric.value}${metric.unit === '%' ? '%' : ''}`} helper={metric.trend} />)}
      </div>

      <div className='grid gap-6 lg:grid-cols-[1fr]'>
        <Card>
          <CardBody className='space-y-4'>
            <h2 className='text-lg font-bold text-slate-950'>Learning preferences</h2>
            <div className='grid gap-3 md:grid-cols-2'>
              <Info label='Preferred Mode' value='Flashcards first' />
              <Info label='Quiz Length' value='10 questions' />
              <Info label='Reminder Time' value='19:30 daily' />
              <Info label='AI Explanation' value='Premium required' />
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export function LearnerClassesPage() {
  return (
    <div className='space-y-6'>
      <PageHeader actions={<Link to='/learner/classes/join'><Button>Join Class</Button></Link>} description='Classes you joined, with assigned study sets and exams from teachers.' eyebrow='UC-16' title='My Classes' />
      <ClassTable />
    </div>
  );
}

export function JoinClassPage() {
  const [pending, setPending] = useState(false);

  return (
    <div className='space-y-6'>
      <PageHeader description='Enter a class code or invitation link to request access.' eyebrow='UC-17' title='Join Class' />
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
      <PageHeader actions={<Link to='/learner/classes'><Button icon={<ArrowLeft size={17} />} variant='secondary'>Back to Classes</Button></Link>} description='Class materials, teacher information, and assigned practice.' eyebrow='UC-16' title={room.name} />
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
      <PageHeader description='Continue assigned sets, public sets, flashcards, quizzes, and mistake review.' eyebrow='UC-18' title='Study Sets' />
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
  const setQuestions = getQuestionsForStudySet(set.id);
  const wrongAnswers = getWrongAnswersForStudySet(set.id);

  return (
    <div className='space-y-6'>
      <PageHeader
        actions={<><Link to={`/learner/study-sets/${set.id}/flashcards`}><Button>Flashcards</Button></Link><Link to={`/learner/study-sets/${set.id}/quiz`}><Button variant='secondary'>Take Quiz</Button></Link>{wrongAnswers.length ? <Link to={`/learner/study-sets/${set.id}/review`}><Button variant='ghost'>Review mistakes</Button></Link> : null}</>}
        description='Review set details, continue flashcards, take a quiz, or revisit missed questions.'
        eyebrow='UC-18, UC-19'
        title={set.title}
      />
      <div className='grid gap-6 lg:grid-cols-[1.3fr_0.7fr]'>
        <Card><CardBody><p className='mb-4 text-slate-600'>{set.description}</p><Table headers={['Question', 'Type', 'Score']} rows={setQuestions.slice(0, 3).map((question) => [question.content, question.type, `${question.score}`])} /></CardBody></Card>
        <Card><CardBody className='space-y-4'><Info label='Subject' value={set.subject} /><Info label='Topic' value={set.topic} /><Info label='Question Count' value={`${set.questionCount}`} /><Info label='Missed Questions' value={`${wrongAnswers.length}`} /><Info label='Assigned By' value={set.ownerName} /><Info label='Due Date' value='2026-06-04' /><Info label='Required Accuracy' value='80%' /><Progress label='Learning progress' value={set.progress ?? 0} /></CardBody></Card>
      </div>
      <Card><CardBody><h2 className='mb-4 text-lg font-bold text-slate-950'>Study mode settings</h2><div className='grid gap-3 md:grid-cols-4'><Info label='Flashcard Order' value='Weak first' /><Info label='Quiz Mode' value='Multiple choice + written' /><Info label='Retry Rule' value='Wrong answers only' /><Info label='Completion Rule' value='Finish all cards' /></div></CardBody></Card>
    </div>
  );
}

export function FlashcardStudyPage() {
  const { id } = useParams();
  const set = getStudySetById(id);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const setQuestions = getQuestionsForStudySet(set.id);
  const card = setQuestions[index % setQuestions.length];

  const move = (direction: number) => {
    setIndex((current) => (current + direction + setQuestions.length) % setQuestions.length);
    setFlipped(false);
  };

  return (
    <div className='space-y-6'>
      <PageHeader description='Flip each card, reveal the answer, and continue through this study set.' eyebrow='UC-05' title={`Flashcards: ${set.title}`} />
      <Card className='mx-auto max-w-4xl'>
        <CardBody>
          <div className='mb-4 flex items-center justify-between'><Badge tone='teal'>Card {index + 1} of {setQuestions.length}</Badge><Progress value={Math.round(((index + 1) / setQuestions.length) * 100)} /></div>
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
  const quizQuestions = getQuestionsForStudySet(set.id).slice(0, 3);
  const score = quizQuestions.filter((question) => answers[question.id] === question.correctAnswer).length;

  return (
    <div className='space-y-6'>
      <PageHeader description='Answer questions from this study set and review feedback after submitting.' eyebrow='UC-19' title={`Quiz: ${set.title}`} />
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
      {submitted ? <div className='rounded-lg bg-blue-50 p-4 text-sm font-bold text-blue-700'>Score: {score}/{quizQuestions.length}. Review feedback above before continuing.</div> : null}
    </div>
  );
}

export function QuizResultPage() {
  const { id } = useParams();
  const set = getStudySetById(id);
  const resultQuestions = getQuestionsForStudySet(set.id).slice(0, 3);
  const wrongCount = getWrongAnswersForStudySet(set.id).length;
  const correctCount = Math.max(resultQuestions.length - wrongCount, 0);

  return (
    <div className='space-y-6'>
      <PageHeader actions={<Link to={`/learner/study-sets/${set.id}/review`}><Button>Review Wrong Answers</Button></Link>} description={`Result for ${set.title}. Check missed questions and continue practice.`} eyebrow='UC-19, UC-20' title='Quiz Result' />
      <div className='grid gap-4 md:grid-cols-3'><MetricCard label='Score' value={`${correctCount}/${resultQuestions.length}`} helper='Practice attempt' /><MetricCard label='Correct answers' value={`${correctCount}`} helper='Based on current answers' /><MetricCard label='Wrong answers' value={`${wrongCount}`} helper={wrongCount ? 'Review recommended' : 'No missed questions'} /></div>
      <Table headers={['Question', 'Your Answer', 'Correct Answer', 'Status']} rows={resultQuestions.map((question) => [question.content, question.learnerAnswer ?? question.correctAnswer, question.correctAnswer, (question.learnerAnswer ?? question.correctAnswer) === question.correctAnswer ? <StatusPill label='Correct' tone='success' /> : <StatusPill label='Wrong' tone='danger' />])} />
    </div>
  );
}

export function ReviewWrongAnswersPage() {
  const { id } = useParams();
  const set = getStudySetById(id);
  const [aiState, setAiState] = useState('');
  const wrong = getWrongAnswersForStudySet(set.id);

  return (
    <div className='space-y-6'>
      <PageHeader actions={<Link to={`/learner/study-sets/${set.id}`}><Button variant='secondary'>Back to Study Set</Button></Link>} description={`Missed questions grouped under ${set.title}.`} eyebrow='UC-20, UC-21' title='Review Wrong Answers' />
      <Card>
        <CardBody className='grid gap-3 md:grid-cols-4'>
          <Info label='Study Set' value={set.title} />
          <Info label='Subject' value={set.subject} />
          <Info label='Missed Questions' value={`${wrong.length}`} />
          <Info label='Review Mode' value='Wrong answers only' />
        </CardBody>
      </Card>
      {wrong.length ? wrong.map((question) => (
        <Card key={question.id}>
          <CardBody className='space-y-3'>
            <div className='flex flex-wrap items-center gap-2'><Badge tone='rose'>Wrong answer</Badge><Badge tone='slate'>{set.title}</Badge><Badge>{question.topic}</Badge></div>
            <h2 className='text-lg font-bold text-slate-950'>{question.content}</h2>
            <div className='grid gap-3 md:grid-cols-2'><Info label='Your Answer' value={question.learnerAnswer ?? '-'} /><Info label='Correct Answer' value={question.correctAnswer} /></div>
            <p className='rounded-lg bg-slate-50 p-3 text-sm text-slate-700'>{question.explanation}</p>
            <Button icon={<Sparkles size={17} />} onClick={() => setAiState(learner.premium ? question.aiExplanation : 'Upgrade required. Non-premium learners cannot request AI answer explanations.')}>Request AI Answer Explanation</Button>
          </CardBody>
        </Card>
      )) : <EmptyState icon={<CheckCircle2 size={22} />} title='No wrong answers in this study set' description='Continue studying or take another quiz to generate review items.' />}
      {aiState ? <div className={`rounded-lg p-4 text-sm font-semibold ${learner.premium ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-800'}`}>{aiState}</div> : null}
    </div>
  );
}

export function LearnerProgressPage() {
  return (
    <div className='space-y-6'>
      <PageHeader description='Track accuracy, practiced questions, repeated mistakes, and weak topics.' eyebrow='UC-22' title='Learning Progress' />
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
      <PageHeader description='Upcoming and open exams assigned to your classes.' eyebrow='UC-23' title='Available Exams' />
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
      <PageHeader actions={<Link to={`/learner/exams/${exam.id}/take`}><Button>Start Exam</Button></Link>} description='Check schedule, duration, attempts, question rules, and result visibility before starting.' eyebrow='UC-24' title={exam.title} />
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
      <PageHeader description='Answer each question, watch the timer, and submit when ready.' eyebrow='UC-25' title={`Take Exam: ${exam.title}`} />
      <Card><CardBody className='flex flex-wrap items-center justify-between gap-3'><span className='inline-flex items-center gap-2 font-bold text-slate-800'><Clock size={18} /> 42:15 remaining</span><StatusPill label='Auto-saved 20 seconds ago' tone='info' /><Badge tone='amber'>Attempt 1 of {exam.attemptsAllowed}</Badge></CardBody></Card>
      <Card><CardBody className='grid gap-3 md:grid-cols-4'><Info label='Candidate' value={learner.fullName} /><Info label='Exam Code' value={exam.id} /><Info label='Result Rule' value={exam.showResult ? 'Visible after submit' : 'Hidden'} /><Info label='Network Status' value='Stable' /></CardBody></Card>
      {examQuestions.map((question, index) => (
        <Card key={question.id}><CardBody className='space-y-4'><h2 className='font-bold text-slate-950'>Question {index + 1}</h2><p>{question.content}</p><div className='grid gap-2 md:grid-cols-2'>{question.options.map((option) => <button key={option} className={`focus-ring rounded-lg border p-3 text-left text-sm font-semibold ${answers[question.id] === option ? 'border-teal-500 bg-teal-50 text-teal-800' : 'border-slate-200 bg-white text-slate-700'}`} onClick={() => setAnswers((current) => ({ ...current, [question.id]: option }))}>{option}</button>)}</div></CardBody></Card>
      ))}
      <Button icon={<CheckCircle2 size={17} />} onClick={() => setConfirmOpen(true)}>Submit Exam</Button>
      {submitted ? <div className='rounded-lg bg-emerald-50 p-4 text-sm font-semibold text-emerald-700'>Exam submitted successfully.</div> : null}
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
      <PageHeader description='Exam score and answer details appear when the teacher makes results visible.' eyebrow='UC-26' title='Exam Result' />
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

function ContinueStudySetCard({ set }: { set: (typeof studySets)[number] }) {
  const wrongCount = getWrongAnswersForStudySet(set.id).length;

  return (
    <Card className='overflow-hidden'>
      <div className='grid h-full md:grid-cols-[150px_1fr] xl:grid-cols-1'>
        <img alt={set.title} className='h-full min-h-40 w-full object-cover xl:h-36' src={set.coverImage} />
        <CardBody className='space-y-4'>
          <div className='flex items-start justify-between gap-3'>
            <div className='min-w-0'>
              <h3 className='truncate text-lg font-bold text-slate-950'>{set.title}</h3>
              <p className='mt-1 text-sm font-semibold text-slate-500'>{set.subject} - {set.topic}</p>
            </div>
            {wrongCount ? <Badge tone='rose'>{wrongCount} mistakes</Badge> : <Badge tone='emerald'>On track</Badge>}
          </div>
          <Progress label={`${set.progress ?? 0}% complete`} value={set.progress ?? 0} />
          <div className='grid gap-2 text-xs font-semibold text-slate-500 sm:grid-cols-2'>
            <span>{set.questionCount} questions</span>
            <span>Last studied today</span>
          </div>
          <div className='flex flex-wrap gap-2'>
            <Link to={`/learner/study-sets/${set.id}/flashcards`}><Button icon={<BookOpen size={16} />} size='sm'>Continue</Button></Link>
            <Link to={`/learner/study-sets/${set.id}`}><Button size='sm' variant='secondary'>Details</Button></Link>
          </div>
        </CardBody>
      </div>
    </Card>
  );
}

function StudySetLearnerCard({ set }: { set: (typeof studySets)[number] }) {
  const wrongCount = getWrongAnswersForStudySet(set.id).length;

  return (
    <Card>
      <CardBody className='space-y-3'>
        <div className='flex items-center justify-between gap-3'>
          <Badge tone={set.visibility === 'public' ? 'emerald' : 'amber'}>{set.visibility}</Badge>
          {wrongCount ? <Badge tone='rose'>{wrongCount} mistakes</Badge> : null}
        </div>
        <h2 className='font-bold text-slate-950'>{set.title}</h2>
        <p className='text-sm text-slate-500'>{set.description}</p>
        <Progress label='Progress' value={set.progress ?? 0} />
        <div className='flex flex-wrap gap-2'>
          <Link to={`/learner/study-sets/${set.id}`}><Button size='sm'>Detail</Button></Link>
          <Link to={`/learner/study-sets/${set.id}/flashcards`}><Button size='sm' variant='secondary'>Flashcards</Button></Link>
          {wrongCount ? <Link to={`/learner/study-sets/${set.id}/review`}><Button size='sm' variant='ghost'>Review mistakes</Button></Link> : null}
        </div>
      </CardBody>
    </Card>
  );
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
