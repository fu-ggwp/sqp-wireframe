import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Copy, Plus, Send, Trash2, UserCheck, Users } from 'lucide-react';
import { classes, getClassById, joinRequests, studySets, users } from '../data/mockData';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card, CardBody } from '../components/ui/Card';
import { EmptyState } from '../components/ui/EmptyState';
import { Input } from '../components/ui/Input';
import { PageHeader } from '../components/ui/PageHeader';
import { Select } from '../components/ui/Select';
import { StatusPill } from '../components/ui/StatusPill';
import { Table } from '../components/ui/Table';

export function TeacherDashboardPage() {
  return (
    <div className='space-y-6'>
      <PageHeader
        actions={<><Link to='/teacher/classes/create'><Button icon={<Plus size={17} />}>Create Class</Button></Link><Link to='/teacher/question-banks/create'><Button variant='secondary'>Create Question Bank</Button></Link></>}
        description='Teacher workspace summary for created classes, question banks, assigned study sets, exams, and analytics.'
        eyebrow='Teacher workspace'
        title='Teacher Dashboard'
      />
      <div className='grid gap-4 md:grid-cols-4'>
        <Metric label='Created classes' value={`${classes.length}`} helper='Active teacher classes' />
        <Metric label='Join requests' value={`${joinRequests.filter((item) => item.status === 'pending').length}`} helper='Need approval' />
        <Metric label='Assigned sets' value={`${studySets.length}`} helper='Public and class-only' />
        <Metric label='Premium tools' value='AI' helper='Question generation enabled' />
      </div>
      <TeacherClassTable />
    </div>
  );
}

export function TeacherClassesPage() {
  const [query, setQuery] = useState('');
  const filtered = classes.filter((room) => [room.name, room.subject, room.code].join(' ').toLowerCase().includes(query.toLowerCase()));

  return (
    <div className='space-y-6'>
      <PageHeader actions={<Link to='/teacher/classes/create'><Button icon={<Plus size={17} />}>Create Class</Button></Link>} description='Teacher views classes they created or are assigned to.' eyebrow='UC-27' title='View Created Classes' />
      <Card><CardBody><Input label='Search Classes' onChange={(event) => setQuery(event.target.value)} placeholder='Class name, subject, code' value={query} /></CardBody></Card>
      {filtered.length ? <TeacherClassTable classesOverride={filtered} /> : <EmptyState icon={<Users size={22} />} title='No classes found' description='Try another keyword or create a new class.' />}
    </div>
  );
}

export function CreateClassPage() {
  const [created, setCreated] = useState(false);

  return (
    <div className='space-y-6'>
      <PageHeader description='Teacher creates a new online class. Class code is auto-generated in real system.' eyebrow='UC-28' title='Create Class' />
      <Card><CardBody className='max-w-3xl space-y-4'><div className='grid gap-4 md:grid-cols-2'><Input label='Class Name' placeholder='Biology 12A Exam Prep' /><Input label='Subject' placeholder='Biology' /><Input helper='Generated after save in real system.' label='Class Code' placeholder='AUTO-GENERATED' /><Select label='Status' options={[{ value: 'active', label: 'Active' }, { value: 'archived', label: 'Archived' }]} /></div><label className='block space-y-1.5'><span className='text-sm font-semibold text-slate-700'>Description</span><textarea className='focus-ring min-h-28 w-full rounded-lg border border-slate-200 p-3 text-sm' placeholder='Class goals, rules, and learning plan.' /></label><Button icon={<Plus size={17} />} onClick={() => setCreated(true)}>Create Class</Button>{created ? <p className='rounded-lg bg-emerald-50 p-3 text-sm font-semibold text-emerald-700'>Class created locally. Generated code: BIO12A-2026.</p> : null}</CardBody></Card>
    </div>
  );
}

export function TeacherClassDetailPage() {
  const { id } = useParams();
  const room = getClassById(id);

  return (
    <div className='space-y-6'>
      <PageHeader
        actions={<><Link to={`/teacher/classes/${room.id}/invitation`}><Button>Generate Invitation</Button></Link><Link to={`/teacher/classes/${room.id}/members`}><Button variant='secondary'>Members</Button></Link><Link to={`/teacher/classes/${room.id}/assign-study-set`}><Button variant='secondary'>Assign Study Set</Button></Link></>}
        description='Teacher class detail includes class metadata, join code, assigned study sets, and management shortcuts.'
        eyebrow='UC-27, UC-29, UC-30, UC-45'
        title={room.name}
      />
      <div className='grid gap-6 lg:grid-cols-[0.8fr_1.2fr]'>
        <Card><CardBody className='space-y-4'><Info label='Subject' value={room.subject} /><Info label='Code' value={room.code} /><Info label='Teacher' value={room.teacherName} /><Info label='Members' value={`${room.memberIds.length}`} /><Info label='Status' value={room.status} /></CardBody></Card>
        <Card><CardBody><h2 className='mb-4 text-lg font-bold text-slate-950'>Assigned study sets</h2><Table headers={['Study Set', 'Subject', 'Visibility', 'Actions']} rows={studySets.filter((set) => room.studySetIds.includes(set.id)).map((set) => [set.title, set.subject, <Badge>{set.visibility}</Badge>, <Link to={`/learner/study-sets/${set.id}`}><Button size='sm' variant='secondary'>Preview</Button></Link>])} /></CardBody></Card>
      </div>
    </div>
  );
}

export function ClassInvitationPage() {
  const { id } = useParams();
  const room = getClassById(id);
  const [copied, setCopied] = useState(false);
  const inviteLink = `https://sqp.local/classes/join?code=${room.code}`;

  return (
    <div className='space-y-6'>
      <PageHeader description='Teacher generates invitation link and sends invitation via email. Sending is mocked.' eyebrow='UC-29' title='Generate Class Invitation' />
      <Card><CardBody className='space-y-4'><Input label='Class Code' readOnly value={room.code} /><Input label='Invitation Link' readOnly value={inviteLink} /><Input label='Recipient Emails' placeholder='learner1@example.com, learner2@example.com' /><div className='flex flex-wrap gap-3'><Button icon={<Copy size={17} />} onClick={() => setCopied(true)} variant='secondary'>Copy Link</Button><Button icon={<Send size={17} />} onClick={() => setCopied(true)}>Send Invitation Email</Button></div>{copied ? <p className='rounded-lg bg-blue-50 p-3 text-sm font-semibold text-blue-700'>Invitation action completed locally. Email service not called.</p> : null}</CardBody></Card>
    </div>
  );
}

export function ClassMembersPage() {
  const { id } = useParams();
  const room = getClassById(id);
  const [removed, setRemoved] = useState<string[]>([]);
  const members = users.filter((user) => room.memberIds.includes(user.id) && !removed.includes(user.id));

  return (
    <div className='space-y-6'>
      <PageHeader actions={<Link to={`/teacher/classes/${room.id}/join-requests`}><Button variant='secondary'>Join Requests</Button></Link>} description='Teacher views learner list and can remove a learner from class.' eyebrow='UC-30, UC-32' title='View Class Member List' />
      <Table headers={['Learner', 'Email', 'Premium', 'Status', 'Action']} rows={members.map((member) => [member.fullName, member.email, member.premium ? <Badge tone='amber'>Premium</Badge> : <Badge>Free</Badge>, <StatusPill label={member.status} tone='success' />, <Button icon={<Trash2 size={15} />} onClick={() => setRemoved((current) => [...current, member.id])} size='sm' variant='danger'>Remove</Button>])} />
      {members.length === 0 ? <EmptyState title='No class members' description='All mock members were removed from local state.' /> : null}
    </div>
  );
}

export function JoinRequestsPage() {
  const { id } = useParams();
  const room = getClassById(id);
  const [approved, setApproved] = useState<string[]>([]);
  const requests = joinRequests.filter((item) => item.classId === room.id);

  return (
    <div className='space-y-6'>
      <PageHeader description='Teacher approves learner requests to join the class.' eyebrow='UC-31' title='Approve Class Join Request' />
      <Table headers={['Learner', 'Message', 'Requested At', 'Status', 'Action']} rows={requests.map((request) => [request.learnerName, request.message, request.requestedAt, approved.includes(request.id) ? <StatusPill label='approved' tone='success' /> : <StatusPill label={request.status} tone={request.status === 'pending' ? 'warning' : 'success'} />, <Button disabled={approved.includes(request.id)} icon={<UserCheck size={15} />} onClick={() => setApproved((current) => [...current, request.id])} size='sm'>Approve</Button>])} />
    </div>
  );
}

export function AssignStudySetPage() {
  const { id } = useParams();
  const room = getClassById(id);
  const [assigned, setAssigned] = useState(false);

  return (
    <div className='space-y-6'>
      <PageHeader description='Teacher assigns a selected study set to a class or learners.' eyebrow='UC-45' title='Assign Study Set to Class' />
      <Card><CardBody className='max-w-3xl space-y-4'><Input label='Class' readOnly value={room.name} /><Select label='Study Set' options={studySets.map((set) => ({ value: set.id, label: `${set.title} - ${set.subject}` }))} /><Select label='Assign To' options={[{ value: 'all', label: 'All class members' }, { value: 'selected', label: 'Selected learners' }]} /><Input helper='Optional date for teacher planning.' label='Due Date' type='date' /><Button icon={<BookIcon />} onClick={() => setAssigned(true)}>Assign Study Set</Button>{assigned ? <p className='rounded-lg bg-emerald-50 p-3 text-sm font-semibold text-emerald-700'>Study set assigned locally. Notification sending is mocked.</p> : null}</CardBody></Card>
    </div>
  );
}

function TeacherClassTable({ classesOverride }: { classesOverride?: typeof classes }) {
  const source = classesOverride ?? classes;
  return <Table headers={['Class', 'Subject', 'Code', 'Members', 'Status', 'Action']} rows={source.map((room) => [<div><p className='font-bold text-slate-950'>{room.name}</p><p className='text-xs text-slate-500'>{room.description}</p></div>, room.subject, room.code, `${room.memberIds.length}`, <StatusPill label={room.status} tone='success' />, <Link to={`/teacher/classes/${room.id}`}><Button size='sm' variant='secondary'>Open</Button></Link>])} />;
}

function Metric({ label, value, helper }: { label: string; value: string; helper: string }) {
  return <Card><CardBody><p className='text-sm font-semibold text-slate-500'>{label}</p><p className='mt-2 text-3xl font-bold text-slate-950'>{value}</p><p className='mt-1 text-sm text-slate-500'>{helper}</p></CardBody></Card>;
}

function Info({ label, value }: { label: string; value: string }) {
  return <div className='rounded-lg border border-slate-200 bg-white p-4'><p className='text-xs font-bold uppercase tracking-wide text-slate-400'>{label}</p><p className='mt-2 text-sm font-semibold text-slate-800'>{value}</p></div>;
}

function BookIcon() {
  return <Users size={17} />;
}
