import { Link, useParams } from 'react-router-dom';
import { ArrowRight, BookOpen, Filter, Search, Star, Users } from 'lucide-react';
import { useMemo, useState } from 'react';
import { studySets, users, getStudySetById, questions } from '../data/mockData';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card, CardBody } from '../components/ui/Card';
import { EmptyState } from '../components/ui/EmptyState';
import { Input } from '../components/ui/Input';
import { PageHeader } from '../components/ui/PageHeader';
import { Progress } from '../components/ui/Progress';
import { Select } from '../components/ui/Select';
import { Table } from '../components/ui/Table';

export function HomePage() {
  const publicSets = studySets.filter((set) => set.visibility === 'public');

  return (
    <div className='space-y-8'>
      <section className='overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm'>
        <div className='grid gap-0 lg:grid-cols-[1.1fr_0.9fr]'>
          <div className='p-8 lg:p-10'>
            <Badge tone='teal'>SRS prototype for Section 3 capture</Badge>
            <h1 className='mt-5 max-w-3xl text-4xl font-bold tracking-tight text-slate-950'>Smart Quiz Platform</h1>
            <p className='mt-4 max-w-2xl text-base leading-7 text-slate-600'>
              Browse public study sets, preview flashcards, register accounts, and navigate every Learner, Teacher, and Admin workflow required by the SRS.
            </p>
            <div className='mt-6 flex max-w-2xl flex-col gap-3 sm:flex-row'>
              <Input aria-label='Search keyword' placeholder='Search biology, chemistry, users, classes' />
              <Link to='/search/study-sets'>
                <Button className='w-full sm:w-auto' icon={<Search size={18} />} size='lg'>Search</Button>
              </Link>
            </div>
            <div className='mt-6 flex flex-wrap gap-3'>
              <Link to='/auth/register'><Button variant='secondary'>Register</Button></Link>
              <Link to='/auth/login'><Button variant='ghost'>Login</Button></Link>
              <Link to='/learner/dashboard'><Button variant='ghost'>Open Learner Dashboard</Button></Link>
            </div>
          </div>
          <div className='min-h-80 bg-slate-900'>
            <img alt='Learners studying online quiz cards' className='h-full w-full object-cover opacity-90' src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80' />
          </div>
        </div>
      </section>

      <section className='grid gap-4 md:grid-cols-3'>
        <Card><CardBody><p className='text-sm font-semibold text-slate-500'>Public study sets</p><p className='mt-2 text-3xl font-bold text-slate-950'>{publicSets.length}</p><p className='mt-1 text-sm text-slate-500'>Search and preview public learning resources.</p></CardBody></Card>
        <Card><CardBody><p className='text-sm font-semibold text-slate-500'>Use cases mapped</p><p className='mt-2 text-3xl font-bold text-slate-950'>54</p><p className='mt-1 text-sm text-slate-500'>Based on SRS Section 1.3 UC table.</p></CardBody></Card>
        <Card><CardBody><p className='text-sm font-semibold text-slate-500'>Actor navigation</p><p className='mt-2 text-3xl font-bold text-slate-950'>4</p><p className='mt-1 text-sm text-slate-500'>Guest, Learner, Teacher, Admin routes.</p></CardBody></Card>
      </section>

      <section className='space-y-4'>
        <div className='flex items-center justify-between'>
          <h2 className='text-xl font-bold text-slate-950'>Featured public study sets</h2>
          <Link className='inline-flex items-center gap-1 text-sm font-bold text-teal-700' to='/search/study-sets'>View all <ArrowRight size={16} /></Link>
        </div>
        <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
          {publicSets.map((set) => (
            <StudySetCard key={set.id} set={set} />
          ))}
        </div>
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
        description='Search public study sets by keyword, subject, topic, and tag. Empty state appears when no mock record matches.'
        eyebrow='UC-02'
        title='Search Public Study Sets'
      />
      <Card>
        <CardBody className='grid gap-4 md:grid-cols-[1fr_220px_auto]'>
          <Input label='Keyword' onChange={(event) => setQuery(event.target.value)} placeholder='Cell biology, bonding, flashcards' value={query} />
          <Select label='Subject' onChange={(event) => setSubject(event.target.value)} options={[{ value: 'all', label: 'All subjects' }, { value: 'Biology', label: 'Biology' }, { value: 'Chemistry', label: 'Chemistry' }, { value: 'Mathematics', label: 'Mathematics' }]} value={subject} />
          <div className='flex items-end'><Button icon={<Filter size={17} />} variant='secondary'>Apply Filter</Button></div>
        </CardBody>
      </Card>
      {results.length ? (
        <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
          {results.map((set) => <StudySetCard key={set.id} set={set} />)}
        </div>
      ) : (
        <EmptyState icon={<Search size={22} />} title='No public study set found' description='Adjust keyword or subject filter to view matching public resources.' />
      )}
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
      <PageHeader description='Search public user account profiles by keyword and role.' eyebrow='UC-03' title='Search Public User Accounts' />
      <Card>
        <CardBody className='grid gap-4 md:grid-cols-[1fr_220px]'>
          <Input label='Keyword' onChange={(event) => setQuery(event.target.value)} placeholder='Name, username, email, profile detail' value={query} />
          <Select label='Role' onChange={(event) => setRole(event.target.value)} options={[{ value: 'all', label: 'All roles' }, { value: 'Learner', label: 'Learner' }, { value: 'Teacher', label: 'Teacher' }, { value: 'Admin', label: 'Admin' }]} value={role} />
        </CardBody>
      </Card>
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
    </div>
  );
}

export function PublicStudySetDetailPage() {
  const { id } = useParams();
  const set = getStudySetById(id);
  const sampleQuestions = questions.slice(0, 3);

  return (
    <div className='space-y-6'>
      <PageHeader
        actions={<><Link to={`/learner/study-sets/${set.id}/flashcards`}><Button>Study Flashcards</Button></Link><Link to='/auth/register'><Button variant='secondary'>Register to save progress</Button></Link></>}
        description='Public detail page shows title, description, subject, topic, tags, owner, content preview, and study mode entry points.'
        eyebrow='UC-04, UC-05'
        title={set.title}
      />
      <div className='grid gap-6 lg:grid-cols-[1.5fr_0.8fr]'>
        <Card className='overflow-hidden'>
          <img alt={set.title} className='h-64 w-full object-cover' src={set.coverImage} />
          <CardBody className='space-y-4'>
            <p className='leading-7 text-slate-600'>{set.description}</p>
            <div className='flex flex-wrap gap-2'>{set.tags.map((tag) => <Badge key={tag} tone='slate'>{tag}</Badge>)}</div>
            <Table headers={['Question Preview', 'Type', 'Difficulty']} rows={sampleQuestions.map((question) => [question.content, question.type, question.difficulty])} />
          </CardBody>
        </Card>
        <div className='space-y-4'>
          <Card><CardBody className='space-y-4'><Info label='Owner' value={set.ownerName} /><Info label='Subject' value={set.subject} /><Info label='Topic' value={set.topic} /><Info label='Visibility' value={set.visibility} /><Info label='Questions' value={`${set.questionCount}`} /><Info label='Learners' value={`${set.learners}`} /><div className='flex items-center gap-1 text-amber-500'><Star size={18} fill='currentColor' /> <span className='font-bold text-slate-800'>{set.rating}</span></div></CardBody></Card>
          <Card><CardBody><Progress label='Mock learner progress' value={set.progress ?? 0} /><p className='mt-3 text-sm text-slate-500'>Guests can preview public flashcards. Learner account required for quiz and progress tracking.</p></CardBody></Card>
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
