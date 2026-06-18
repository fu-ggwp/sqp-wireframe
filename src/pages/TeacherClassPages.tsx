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
import { FieldNote, ListFieldBar, PaginationBar } from '../components/ui/FieldControls';

export function TeacherDashboardPage() {
  return (
    <div className='space-y-6'>
      <PageHeader
        actions={<><Link to='/teacher/classes/create'><Button icon={<Plus size={17} />}>Create Class</Button></Link><Link to='/study-sets/create'><Button variant='secondary'>Create Study Set</Button></Link><Link to='/teacher/question-banks/create'><Button variant='secondary'>Create Question Bank</Button></Link></>}
        description='Teacher workspace summary for created classes, study sets, reusable question bank repositories, exams, and analytics.'
        eyebrow='Teacher workspace'
        title='Teacher Dashboard'
      />
      <div className='grid gap-4 md:grid-cols-4'>
        <Metric label='Created classes' value={`${classes.length}`} helper='Active teacher classes' />
        <Metric label='Join requests' value={`${joinRequests.filter((item) => item.status === 'pending').length}`} helper='Need approval' />
        <Metric label='Assigned sets' value={`${studySets.length}`} helper='Public and class-only' />
        <Metric label='Premium tools' value='AI' helper='Question generation enabled' />
      </div>
      <div className='grid gap-6 lg:grid-cols-[1fr_1fr]'>
        <Card>
          <CardBody className='space-y-4'>
            <h2 className='text-lg font-bold text-slate-950'>Teaching workflow</h2>
            <div className='grid gap-3 md:grid-cols-2'>
              <Info label='Current Class' value='Biology 12A Exam Prep' />
              <Info label='Next Exam' value='2026-05-30 08:00' />
              <Info label='Draft Content' value='2 study sets' />
              <Info label='Report Format' value='Excel + PDF' />
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody className='space-y-4'>
            <h2 className='text-lg font-bold text-slate-950'>Class health</h2>
            <div className='grid gap-3 md:grid-cols-2'>
              <Info label='Average Accuracy' value='74%' />
              <Info label='Learners Behind' value='5' />
              <Info label='Weak Topic' value='Cell Membrane' />
              <Info label='Pending Join Requests' value='1' />
            </div>
          </CardBody>
        </Card>
      </div>
      <ListFieldBar filters={[{ label: 'Class Status', options: [{ value: 'all', label: 'All statuses' }, { value: 'active', label: 'Active' }, { value: 'archived', label: 'Archived' }] }, { label: 'Subject Filter', options: [{ value: 'all', label: 'All subjects' }, { value: 'Biology', label: 'Biology' }, { value: 'Mathematics', label: 'Mathematics' }] }]} searchLabel='Search Teaching Work' searchPlaceholder='Class, exam, bank, learner' />
      <TeacherClassTable />
      <PaginationBar />
    </div>
  );
}

export function TeacherClassesPage() {
  const [query, setQuery] = useState('');
  const filtered = classes.filter((room) => [room.name, room.subject, room.code].join(' ').toLowerCase().includes(query.toLowerCase()));

  return (
    <div className='space-y-6'>
      <PageHeader actions={<Link to='/teacher/classes/create'><Button icon={<Plus size={17} />}>Create Class</Button></Link>} description='Teacher views classes they created or are assigned to.' eyebrow='Class management' title='View Created Classes' />
      <ListFieldBar filters={[{ label: 'Subject Filter', options: [{ value: 'all', label: 'All subjects' }, { value: 'Biology', label: 'Biology' }, { value: 'Mathematics', label: 'Mathematics' }] }, { label: 'Status Filter', options: [{ value: 'all', label: 'All statuses' }, { value: 'active', label: 'Active' }, { value: 'archived', label: 'Archived' }] }, { label: 'Join Policy Filter', options: [{ value: 'all', label: 'All policies' }, { value: 'approval', label: 'Approval required' }, { value: 'auto', label: 'Auto approve' }] }]} onSearchChange={setQuery} searchLabel='Search Classes' searchPlaceholder='Class name, subject, code' searchValue={query} />
      {filtered.length ? <><TeacherClassTable classesOverride={filtered} /><PaginationBar /></> : <EmptyState icon={<Users size={22} />} title='No classes found' description='Try another keyword or create a new class.' />}
    </div>
  );
}

export function CreateClassPage() {
  const [created, setCreated] = useState(false);

  return (
    <div className='space-y-6'>
      <PageHeader description='Teacher creates a new online class. Class code is auto-generated in real system.' eyebrow='New class' title='Create Class' />
      <Card><CardBody className='max-w-4xl space-y-4'><div className='grid gap-4 md:grid-cols-2'><Input label='Class Name' placeholder='Biology 12A Exam Prep' /><Input label='Subject' placeholder='Biology' /><Input label='Grade / Level' placeholder='Grade 12' /><Input label='Academic Year' placeholder='2025-2026' /><Input helper='Generated after save in real system.' label='Class Code' placeholder='AUTO-GENERATED' /><Input label='Learner Capacity' placeholder='40' type='number' /><Input label='Default Due Time' placeholder='23:59' /><Select label='Teaching Language' options={[{ value: 'en', label: 'English' }, { value: 'vi', label: 'Vietnamese' }]} /><Select label='Join Policy' options={[{ value: 'approval', label: 'Teacher approval required' }, { value: 'auto', label: 'Auto-approve by code' }, { value: 'closed', label: 'Invitation only' }]} /><Select label='Status' options={[{ value: 'active', label: 'Active' }, { value: 'archived', label: 'Archived' }]} /><Input label='Start Date' type='date' /><Input label='End Date' type='date' /></div><label className='block space-y-1.5'><span className='text-sm font-semibold text-slate-700'>Description</span><textarea className='focus-ring min-h-28 w-full rounded-lg border border-slate-200 p-3 text-sm' placeholder='Class goals, rules, and learning plan.' /></label><Button icon={<Plus size={17} />} onClick={() => setCreated(true)}>Create Class</Button>{created ? <p className='rounded-lg bg-emerald-50 p-3 text-sm font-semibold text-emerald-700'>Class created locally. Generated code: BIO12A-2026.</p> : null}</CardBody></Card>
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
        eyebrow='Class workspace'
        title={room.name}
      />
      <ListFieldBar filters={[{ label: 'Assignment Status', options: [{ value: 'all', label: 'All assignments' }, { value: 'active', label: 'Active' }, { value: 'overdue', label: 'Overdue' }] }, { label: 'Material Type', options: [{ value: 'all', label: 'All materials' }, { value: 'study-set', label: 'Study sets' }, { value: 'exam', label: 'Exams' }] }]} searchLabel='Search Class Content' searchPlaceholder='Study set, exam, topic' />
      <div className='grid gap-6 lg:grid-cols-[0.8fr_1.2fr]'>
        <Card><CardBody className='space-y-4'><Info label='Subject' value={room.subject} /><Info label='Code' value={room.code} /><Info label='Teacher' value={room.teacherName} /><Info label='Members' value={`${room.memberIds.length}`} /><Info label='Join Policy' value='Approval required' /><Info label='Default Due Time' value='23:59' /><Info label='Status' value={room.status} /></CardBody></Card>
        <Card><CardBody><h2 className='mb-4 text-lg font-bold text-slate-950'>Assigned study sets</h2><Table headers={['Study Set', 'Subject', 'Visibility', 'Due Date', 'Actions']} rows={studySets.filter((set) => room.studySetIds.includes(set.id)).map((set) => [set.title, set.subject, <Badge>{set.visibility}</Badge>, '2026-06-04', <div className='flex flex-wrap gap-2'><Link to={`/sets/${set.id}/public`}><Button size='sm' variant='secondary'>Preview</Button></Link><Link to={`/teacher/classes/${room.id}/assign-study-set`}><Button size='sm'>Reassign</Button></Link></div>])} /></CardBody></Card>
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
      <PageHeader description='Create an invitation link and send it to learners by email.' eyebrow='Class invitation' title='Generate Class Invitation' />
      <Card><CardBody className='space-y-4'><Input label='Class Code' readOnly value={room.code} /><Input label='Invitation Link' readOnly value={inviteLink} /><Input label='Recipient Emails' placeholder='learner1@example.com, learner2@example.com' /><div className='grid gap-4 md:grid-cols-3'><Input label='Invitation Expiry Date' type='date' /><Input label='Maximum Uses' placeholder='40' type='number' /><Select label='Approval Rule' options={[{ value: 'approval', label: 'Teacher approval required' }, { value: 'auto', label: 'Auto approve invited learners' }]} /></div><label className='block space-y-1.5'><span className='text-sm font-semibold text-slate-700'>Email Message</span><textarea className='focus-ring min-h-24 w-full rounded-lg border border-slate-200 p-3 text-sm' placeholder='Invitation note for learners.' /></label><div className='flex flex-wrap gap-3'><Button icon={<Copy size={17} />} onClick={() => setCopied(true)} variant='secondary'>Copy Link</Button><Button icon={<Send size={17} />} onClick={() => setCopied(true)}>Send Invitation Email</Button></div>{copied ? <p className='rounded-lg bg-blue-50 p-3 text-sm font-semibold text-blue-700'>Invitation action completed locally. Email service not called.</p> : null}</CardBody></Card>
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
      <PageHeader actions={<Link to={`/teacher/classes/${room.id}/join-requests`}><Button variant='secondary'>Join Requests</Button></Link>} description='Teacher views learner list and can remove a learner from class.' eyebrow='Class members' title='View Class Member List' />
      <ListFieldBar filters={[{ label: 'Member Status', options: [{ value: 'all', label: 'All members' }, { value: 'active', label: 'Active' }, { value: 'removed', label: 'Removed' }] }, { label: 'Premium Filter', options: [{ value: 'all', label: 'All accounts' }, { value: 'premium', label: 'Premium' }, { value: 'free', label: 'Free' }] }]} searchLabel='Search Members' searchPlaceholder='Learner name or email' />
      <Table headers={['Learner', 'Email', 'Premium', 'Status', 'Action']} rows={members.map((member) => [member.fullName, member.email, member.premium ? <Badge tone='amber'>Premium</Badge> : <Badge>Free</Badge>, <StatusPill label={member.status} tone='success' />, <Button icon={<Trash2 size={15} />} onClick={() => setRemoved((current) => [...current, member.id])} size='sm' variant='danger'>Remove</Button>])} />
      {members.length === 0 ? <EmptyState title='No class members' description='No active learners remain in this class.' /> : <PaginationBar />}
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
      <PageHeader description='Teacher approves learner requests to join the class.' eyebrow='Join requests' title='Approve Class Join Request' />
      <ListFieldBar filters={[{ label: 'Request Status', options: [{ value: 'all', label: 'All requests' }, { value: 'pending', label: 'Pending' }, { value: 'approved', label: 'Approved' }, { value: 'rejected', label: 'Rejected' }] }, { label: 'Requested Date', options: [{ value: 'all', label: 'All dates' }, { value: 'today', label: 'Today' }, { value: 'week', label: 'This week' }] }]} searchLabel='Search Join Requests' searchPlaceholder='Learner name or message' />
      <Table headers={['Learner', 'Message', 'Requested At', 'Status', 'Action']} rows={requests.map((request) => [request.learnerName, request.message, request.requestedAt, approved.includes(request.id) ? <StatusPill label='approved' tone='success' /> : <StatusPill label={request.status} tone={request.status === 'pending' ? 'warning' : 'success'} />, <div className='flex flex-wrap gap-2'><Button disabled={approved.includes(request.id)} icon={<UserCheck size={15} />} onClick={() => setApproved((current) => [...current, request.id])} size='sm'>Approve</Button><Button disabled={approved.includes(request.id)} size='sm' variant='danger'>Reject</Button></div>])} />
      <PaginationBar />
    </div>
  );
}

export function AssignStudySetPage() {
  const { id } = useParams();
  const room = getClassById(id);
  const [assigned, setAssigned] = useState(false);

  return (
    <div className='space-y-6'>
      <PageHeader description='Teacher assigns a selected study set to a class or learners.' eyebrow='Study set assignment' title='Assign Study Set to Class' />
      <Card><CardBody className='max-w-3xl space-y-4'><Input label='Class' readOnly value={room.name} /><Select label='Study Set' options={studySets.map((set) => ({ value: set.id, label: `${set.title} - ${set.subject}` }))} /><Select label='Assign To' options={[{ value: 'all', label: 'All class members' }, { value: 'selected', label: 'Selected learners' }]} /><Select label='Selected Learners' options={users.filter((user) => room.memberIds.includes(user.id)).map((user) => ({ value: user.id, label: `${user.fullName} - ${user.email}` }))} /><Input helper='Optional date for teacher planning.' label='Due Date' type='date' /><Input label='Release Date' type='date' /><Select label='Completion Rule' options={[{ value: 'view', label: 'View all cards' }, { value: 'quiz', label: 'Pass practice quiz' }, { value: 'accuracy', label: 'Reach target accuracy' }]} /><Input label='Target Accuracy' placeholder='80%' /><label className='block space-y-1.5'><span className='text-sm font-semibold text-slate-700'>Assignment Instructions</span><textarea className='focus-ring min-h-24 w-full rounded-lg border border-slate-200 p-3 text-sm' placeholder='Instructions learners will see.' /></label><label className='flex items-center gap-3 rounded-lg border border-slate-200 p-3 text-sm font-semibold'><input defaultChecked type='checkbox' /> Notify learners after assignment</label><Button icon={<BookIcon />} onClick={() => setAssigned(true)}>Assign Study Set</Button>{assigned ? <p className='rounded-lg bg-emerald-50 p-3 text-sm font-semibold text-emerald-700'>Study set assigned. Learners will see it in their study list.</p> : null}</CardBody></Card>
    </div>
  );
}

function TeacherClassTable({ classesOverride }: { classesOverride?: typeof classes }) {
  const source = classesOverride ?? classes;
  return <Table headers={['Class', 'Subject', 'Code', 'Members', 'Status', 'Actions']} rows={source.map((room) => [<div><p className='font-bold text-slate-950'>{room.name}</p><p className='text-xs text-slate-500'>{room.description}</p></div>, room.subject, room.code, `${room.memberIds.length}`, <StatusPill label={room.status} tone='success' />, <div className='flex flex-wrap gap-2'><Link to={`/teacher/classes/${room.id}`}><Button size='sm' variant='secondary'>Open</Button></Link><Link to={`/teacher/classes/${room.id}/members`}><Button size='sm' variant='secondary'>Members</Button></Link><Link to={`/teacher/classes/${room.id}/invitation`}><Button size='sm'>Invite</Button></Link></div>])} />;
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
