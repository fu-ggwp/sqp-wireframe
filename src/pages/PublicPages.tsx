import { Link, useParams } from 'react-router-dom';
import { ArrowRight, BookOpen, Brain, ClipboardCheck, Filter, Layers3, PlayCircle, Search, Star, Trophy, Users } from 'lucide-react';
import { useMemo, useState } from 'react';
import { studySets, users, getStudySetById, questions } from '../data/mockData';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card, CardBody } from '../components/ui/Card';
import { EmptyState } from '../components/ui/EmptyState';
import { Input } from '../components/ui/Input';
import { PageHeader } from '../components/ui/PageHeader';
import { Select } from '../components/ui/Select';
import { Table } from '../components/ui/Table';
import { ListFieldBar, PaginationBar } from '../components/ui/FieldControls';

export function HomePage() {
  const publicSets = studySets.filter((set) => set.visibility === 'public');
  const modeCards = [
    { title: 'Learn', description: 'Build a topic with short practice rounds and instant feedback.', icon: Brain, route: '/search/study-sets', tone: 'bg-teal-50 text-teal-700' },
    { title: 'Flashcards', description: 'Flip terms, definitions, and examples from public study sets.', icon: Layers3, route: '/sets/set-bio-cell/flashcards', tone: 'bg-indigo-50 text-indigo-700' },
    { title: 'Test', description: 'Try multiple-choice, true/false, and written questions.', icon: ClipboardCheck, route: '/sets/set-bio-cell/public', tone: 'bg-amber-50 text-amber-700' },
    { title: 'Review', description: 'Open weak topics and compare answers before signing up.', icon: Trophy, route: '/search/study-sets', tone: 'bg-rose-50 text-rose-700' },
  ];

  return (
    <div className='space-y-14'>
      <section className='-mx-4 bg-slate-50 px-4 py-14 lg:-mx-6 lg:px-6 lg:py-20'>
        <div className='mx-auto max-w-5xl text-center'>
          <h1 className='text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl'>How do you want to study?</h1>
          <p className='mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600'>
            Search public study sets, preview flashcards, and practice sample questions before creating an account.
          </p>
          <div className='mx-auto mt-7 flex max-w-3xl flex-col gap-3 rounded-lg border border-slate-200 bg-white p-2 shadow-sm sm:flex-row'>
            <div className='flex min-h-12 flex-1 items-center gap-3 px-3 text-left text-sm text-slate-500'>
              <Search size={19} />
              <input className='h-10 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400' placeholder='Search biology, chemistry, math, flashcards' />
            </div>
            <Link to='/search/study-sets'><Button className='w-full sm:w-auto' size='lg'>Search</Button></Link>
          </div>
          <div className='mt-6 flex flex-wrap justify-center gap-3'>
            <Link to='/auth/register'><Button size='lg'>Sign up for free</Button></Link>
            <Link to='/search/study-sets'><Button size='lg' variant='secondary'>Browse study sets</Button></Link>
          </div>
        </div>
      </section>

      <section className='space-y-4'>
        <div className='flex flex-wrap items-end justify-between gap-3'>
          <div>
            <h2 className='text-2xl font-bold text-slate-950'>Choose a study mode</h2>
            <p className='mt-1 text-sm text-slate-500'>Explore modes without signing in. History and class work start after login.</p>
          </div>
          <Link className='inline-flex items-center gap-1 text-sm font-bold text-teal-700' to='/auth/register'>Create free account <ArrowRight size={16} /></Link>
        </div>
        <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
          {modeCards.map((mode) => {
            const Icon = mode.icon;
            return (
              <Link className='group rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-md' key={mode.title} to={mode.route}>
                <span className={`flex h-12 w-12 items-center justify-center rounded-lg ${mode.tone}`}><Icon size={22} /></span>
                <h3 className='mt-5 text-lg font-bold text-slate-950'>{mode.title}</h3>
                <p className='mt-2 text-sm leading-6 text-slate-600'>{mode.description}</p>
                <span className='mt-4 inline-flex items-center gap-1 text-sm font-bold text-teal-700'>Open <ArrowRight size={15} /></span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className='grid gap-8 lg:grid-cols-2 lg:items-center'>
        <div className='space-y-4'>
          <Badge tone='teal'>Public learning library</Badge>
          <h2 className='text-3xl font-bold tracking-tight text-slate-950'>Find sets for any class or exam topic</h2>
          <p className='text-base leading-7 text-slate-600'>
            Start from public cards by subject, topic, teacher, or keyword. Open a set, preview questions, then decide whether to sign in.
          </p>
          <div className='grid gap-3 sm:grid-cols-2'>
            <InfoTile label='Subjects' value='Biology, Chemistry, Math' />
            <InfoTile label='Question formats' value='Multiple choice, true/false, written' />
            <InfoTile label='Public access' value='Search, preview, flashcards' />
            <InfoTile label='Account access' value='Classes, exams, saved history' />
          </div>
        </div>
        <div className='overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm'>
          <img alt='Students reviewing study cards together' className='h-72 w-full object-cover' src='https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80' />
          <div className='grid gap-3 p-4 sm:grid-cols-2'>
            <div className='rounded-lg bg-slate-50 p-4'><p className='text-xs font-bold uppercase text-slate-400'>Term</p><p className='mt-2 font-bold text-slate-900'>Selective permeability</p></div>
            <div className='rounded-lg bg-teal-50 p-4'><p className='text-xs font-bold uppercase text-teal-600'>Definition</p><p className='mt-2 text-sm font-semibold text-teal-900'>Membrane allows some substances through and controls others.</p></div>
          </div>
        </div>
      </section>

      <section className='grid gap-8 lg:grid-cols-2 lg:items-center'>
        <div className='order-2 rounded-lg border border-slate-200 bg-white p-5 shadow-sm lg:order-1'>
          <div className='mb-4 flex items-center justify-between'><Badge tone='amber'>Sample practice</Badge><span className='text-sm font-bold text-slate-500'>3 questions</span></div>
          <div className='space-y-3'>
            {questions.slice(0, 3).map((question, index) => (
              <div className='rounded-lg border border-slate-200 p-4' key={question.id}>
                <p className='text-xs font-bold uppercase text-slate-400'>Question {index + 1}</p>
                <p className='mt-2 text-sm font-semibold text-slate-800'>{question.content}</p>
              </div>
            ))}
          </div>
          <Link className='mt-5 inline-flex' to='/sets/set-bio-cell/public'><Button icon={<PlayCircle size={17} />}>Try sample set</Button></Link>
        </div>
        <div className='order-1 space-y-4 lg:order-2'>
          <Badge tone='amber'>Study your way</Badge>
          <h2 className='text-3xl font-bold tracking-tight text-slate-950'>Preview cards, then switch to practice when ready</h2>
          <p className='text-base leading-7 text-slate-600'>
            Start as a guest, then sign in later if you want saved history, classes, and exams.
          </p>
          <div className='flex flex-wrap gap-3'>
            <Link to='/sets/set-bio-cell/flashcards'><Button variant='secondary'>Open flashcards</Button></Link>
            <Link to='/auth/login'><Button variant='ghost'>Login to save history</Button></Link>
          </div>
        </div>
      </section>

      <section className='space-y-4'>
        <div className='flex items-center justify-between gap-3'>
          <h2 className='text-2xl font-bold text-slate-950'>Popular study sets</h2>
          <Link className='inline-flex items-center gap-1 text-sm font-bold text-teal-700' to='/search/study-sets'>View all <ArrowRight size={16} /></Link>
        </div>
        <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
          {publicSets.map((set) => <StudySetCard key={set.id} set={set} />)}
        </div>
      </section>

      <section className='grid gap-6 border-t border-slate-200 pt-8 md:grid-cols-4'>
        {[
          ['Study', 'Flashcards', 'Practice tests', 'Public sets'],
          ['Subjects', 'Biology', 'Chemistry', 'Mathematics'],
          ['Account', 'Login', 'Register', 'Premium'],
          ['Platform', 'Teachers', 'Resources', 'Help'],
        ].map(([heading, ...links]) => (
          <div key={heading}>
            <h3 className='font-bold text-slate-950'>{heading}</h3>
            <div className='mt-3 space-y-2 text-sm font-semibold text-slate-500'>{links.map((item) => <p key={item}>{item}</p>)}</div>
          </div>
        ))}
      </section>
    </div>
  );
}

export function SearchStudySetsPage() {
  const [query, setQuery] = useState('');
  const [subject, setSubject] = useState('all');
  const results = useMemo(() => {
    return studySets.filter((set) => {
      const matchesQuery = [set.title, set.description, set.subject, set.topic, set.tags.join(' ')].join(' ').toLowerCase().includes(query.toLowerCase());
      const matchesSubject = subject === 'all' || set.subject === subject;
      return set.visibility === 'public' && matchesQuery && matchesSubject;
    });
  }, [query, subject]);

  return (
    <div className='space-y-6'>
      <PageHeader
        actions={<Link to='/sets/set-bio-cell/public'><Button icon={<BookOpen size={18} />}>Open sample set</Button></Link>}
        description='Find public sets by keyword, subject, topic, or tag.'
        eyebrow='Public discovery'
        title='Search Study Sets'
      />
      <ListFieldBar filters={[{ label: 'Subject', onChange: setSubject, options: [{ value: 'all', label: 'All subjects' }, { value: 'Biology', label: 'Biology' }, { value: 'Chemistry', label: 'Chemistry' }, { value: 'Mathematics', label: 'Mathematics' }], value: subject }, { label: 'Study Mode', options: [{ value: 'all', label: 'All modes' }, { value: 'flashcards', label: 'Flashcards' }, { value: 'quiz', label: 'Quiz practice' }] }, { label: 'Rating Filter', options: [{ value: 'all', label: 'All ratings' }, { value: '4plus', label: '4+ stars' }, { value: 'popular', label: 'Most popular' }] }]} onSearchChange={setQuery} searchLabel='Keyword' searchPlaceholder='Cell biology, bonding, flashcards' searchValue={query}><Button icon={<Filter size={17} />} variant='secondary'>Advanced</Button></ListFieldBar>
      {results.length ? (
        <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
          {results.map((set) => <StudySetCard key={set.id} set={set} />)}
        </div>
      ) : (
        <EmptyState icon={<Search size={22} />} title='No public study set found' description='Adjust keyword or subject filter to view matching public resources.' />
      )}
      {results.length ? <PaginationBar compact /> : null}
    </div>
  );
}

export function SearchUsersPage() {
  const [query, setQuery] = useState('');
  const [role, setRole] = useState('all');
  const filteredUsers = users.filter((user) => {
    const matchesQuery = [user.fullName, user.username, user.email, user.bio].join(' ').toLowerCase().includes(query.toLowerCase());
    const matchesRole = role === 'all' || user.role === role;
    return matchesQuery && matchesRole;
  });

  return (
    <div className='space-y-6'>
      <PageHeader description='Find public learner and teacher profiles.' eyebrow='People search' title='Find People' />
      <ListFieldBar filters={[{ label: 'Role', onChange: setRole, options: [{ value: 'all', label: 'All roles' }, { value: 'Learner', label: 'Learner' }, { value: 'Teacher', label: 'Teacher' }, { value: 'Admin', label: 'Admin' }], value: role }, { label: 'Premium Status', options: [{ value: 'all', label: 'All accounts' }, { value: 'premium', label: 'Premium' }, { value: 'free', label: 'Free' }] }, { label: 'Account Status', options: [{ value: 'all', label: 'All statuses' }, { value: 'active', label: 'Active' }, { value: 'pending', label: 'Pending' }] }]} onSearchChange={setQuery} searchLabel='Keyword' searchPlaceholder='Name, username, email, profile detail' searchValue={query} />
      <Table
        emptyMessage='No public account matches current filter.'
        headers={['Account', 'Role', 'Premium', 'Status', 'Last Active']}
        rows={filteredUsers.map((user) => [
          <div className='flex items-center gap-3'><span className='flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-700'>{user.avatar}</span><div><p className='font-bold text-slate-950'>{user.fullName}</p><p className='text-xs text-slate-500'>@{user.username} - {user.email}</p></div></div>,
          <Badge tone={user.role === 'Teacher' ? 'blue' : user.role === 'Admin' ? 'rose' : 'teal'}>{user.role}</Badge>,
          user.premium ? <Badge tone='amber'>Premium</Badge> : <Badge>Free</Badge>,
          user.status,
          user.lastActive,
        ])}
      />
      <PaginationBar label={`Showing ${filteredUsers.length} public accounts`} />
    </div>
  );
}

export function PublicStudySetDetailPage() {
  const { id } = useParams();
  const set = getStudySetById(id);
  const sampleQuestions = questions.filter((question) => set.questionIds.includes(question.id)).slice(0, 3);

  return (
    <div className='space-y-6'>
      <PageHeader
        actions={<><Link to={`/sets/${set.id}/flashcards`}><Button>Study Flashcards</Button></Link><Link to='/auth/register'><Button variant='secondary'>Sign up to save history</Button></Link></>}
        description='Preview questions, tags, owner, and available study modes.'
        eyebrow='Public study set'
        title={set.title}
      />
      <div className='grid gap-6 lg:grid-cols-[1.5fr_0.8fr]'>
        <Card className='overflow-hidden'>
          <img alt={set.title} className='h-64 w-full object-cover' src={set.coverImage} />
          <CardBody className='space-y-4'>
            <p className='leading-7 text-slate-600'>{set.description}</p>
            <div className='flex flex-wrap gap-2'>{set.tags.map((tag) => <Badge key={tag} tone='slate'>{tag}</Badge>)}</div>
            <ListFieldBar filters={[{ label: 'Question Type', options: [{ value: 'all', label: 'All types' }, { value: 'multiple-choice', label: 'Multiple choice' }, { value: 'true-false', label: 'True/False' }, { value: 'written-answer', label: 'Written answer' }] }, { label: 'Difficulty', options: [{ value: 'all', label: 'All difficulties' }, { value: 'easy', label: 'Easy' }, { value: 'medium', label: 'Medium' }, { value: 'hard', label: 'Hard' }] }]} searchLabel='Search Preview Questions' searchPlaceholder='Question keyword' />
            <Table headers={['Question Preview', 'Type', 'Difficulty']} rows={sampleQuestions.map((question) => [question.content, question.type, question.difficulty])} />
            <PaginationBar label='Showing 1-3 of 3 preview questions' />
          </CardBody>
        </Card>
        <div className='space-y-4'>
          <Card><CardBody className='space-y-4'><Info label='Owner' value={set.ownerName} /><Info label='Subject' value={set.subject} /><Info label='Topic' value={set.topic} /><Info label='Visibility' value={set.visibility} /><Info label='Questions' value={`${set.questionCount}`} /><Info label='Learners' value={`${set.learners}`} /><div className='flex items-center gap-1 text-amber-500'><Star size={18} fill='currentColor' /> <span className='font-bold text-slate-800'>{set.rating}</span></div></CardBody></Card>
          <Card><CardBody><p className='text-sm leading-6 text-slate-600'>Guests can preview public flashcards and set details. Login is required for saved history, quizzes, classes, and exams.</p><div className='mt-4 grid gap-3'><Select label='Guest Study Mode' options={[{ value: 'flashcards', label: 'Flashcards preview' }, { value: 'learn', label: 'Learn mode after signup' }, { value: 'quiz', label: 'Quiz after login' }]} /><Link className='inline-flex' to='/auth/register'><Button className='w-full' variant='secondary'>Create account</Button></Link></div></CardBody></Card>
        </div>
      </div>
    </div>
  );
}

function StudySetCard({ set }: { set: (typeof studySets)[number] }) {
  return (
    <Card className='overflow-hidden'>
      <img alt={set.title} className='h-36 w-full object-cover' src={set.coverImage} />
      <CardBody className='space-y-3'>
        <div className='flex items-start justify-between gap-3'>
          <div>
            <h3 className='font-bold text-slate-950'>{set.title}</h3>
            <p className='mt-1 text-sm text-slate-500'>{set.subject} - {set.topic}</p>
          </div>
          <Badge tone={set.visibility === 'public' ? 'emerald' : 'amber'}>{set.visibility}</Badge>
        </div>
        <p className='line-clamp-2 text-sm text-slate-600'>{set.description}</p>
        <div className='flex items-center justify-between text-sm text-slate-500'>
          <span className='inline-flex items-center gap-1'><BookOpen size={16} /> {set.questionCount} questions</span>
          <span className='inline-flex items-center gap-1'><Users size={16} /> {set.learners}</span>
        </div>
        <Link to={`/sets/${set.id}/public`}><Button className='w-full' variant='secondary'>View Detail</Button></Link>
      </CardBody>
    </Card>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className='flex items-center justify-between gap-4 border-b border-slate-100 pb-3 last:border-0 last:pb-0'>
      <span className='text-sm font-semibold text-slate-500'>{label}</span>
      <span className='text-right text-sm font-bold text-slate-900'>{value}</span>
    </div>
  );
}

function InfoTile({ label, value }: { label: string; value: string }) {
  return (
    <div className='rounded-lg border border-slate-200 bg-white p-4'>
      <p className='text-xs font-bold uppercase text-slate-400'>{label}</p>
      <p className='mt-2 text-sm font-semibold text-slate-800'>{value}</p>
    </div>
  );
}
