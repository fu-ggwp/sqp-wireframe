import type { ReactNode } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AlertTriangle, CheckCircle2, Download, EyeOff, ShieldAlert, Sparkles } from 'lucide-react';
import { analyticsRecords, notifications, paymentResult, premiumPlans, studySets, systemServices, users } from '../data/mockData';
import type { Role } from '../types';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card, CardBody } from '../components/ui/Card';
import { EmptyState } from '../components/ui/EmptyState';
import { Input } from '../components/ui/Input';
import { PageHeader } from '../components/ui/PageHeader';
import { Progress } from '../components/ui/Progress';
import { Select } from '../components/ui/Select';
import { StatusPill } from '../components/ui/StatusPill';
import { Table } from '../components/ui/Table';

export function AnalyticsPage() {
  return (
    <div className='space-y-6'>
      <PageHeader actions={<Link to='/teacher/reports/export'><Button icon={<Download size={17} />} variant='secondary'>Export Report</Button></Link>} description='Teacher views learning, exam, learner, question, and class performance analytics.' eyebrow='UC-49' title='View Learning Analytics' />
      <div className='grid gap-4 md:grid-cols-3'>{analyticsRecords.map((record) => <Card key={record.id}><CardBody><p className='text-sm font-semibold text-slate-500'>{record.className}</p><h2 className='mt-2 font-bold text-slate-950'>{record.studySetTitle}</h2><div className='mt-4 space-y-3'><Progress label='Average Score' value={record.averageScore} /><Progress label='Accuracy' value={record.accuracy} /></div><p className='mt-3 text-sm text-slate-600'>Weak topic: <strong>{record.weakTopic}</strong></p></CardBody></Card>)}</div>
      <Table headers={['Class', 'Study Set', 'Average Score', 'Accuracy', 'Weak Topic', 'Completed']} rows={analyticsRecords.map((record) => [record.className, record.studySetTitle, `${record.averageScore}%`, `${record.accuracy}%`, record.weakTopic, record.learnersCompleted])} />
    </div>
  );
}

export function ExportReportPage() {
  const [exported, setExported] = useState(false);
  return (
    <div className='space-y-6'>
      <PageHeader description='Teacher exports scoreboards or reports to Excel, PDF, or CSV. Download file generation is mocked.' eyebrow='UC-50' title='Export Report' />
      <Card><CardBody className='max-w-3xl space-y-4'><Select label='Report Type' options={[{ value: 'scoreboard', label: 'Scoreboard' }, { value: 'learning-analytics', label: 'Learning Analytics' }, { value: 'question-performance', label: 'Question Performance' }]} /><Select label='Class' options={[{ value: 'class-bio-12a', label: 'Biology 12A Exam Prep' }, { value: 'class-math-11b', label: 'Mathematics 11B' }]} /><Select label='Format' options={[{ value: 'xlsx', label: 'Excel (.xlsx)' }, { value: 'pdf', label: 'PDF' }, { value: 'csv', label: 'CSV' }]} /><div className='grid gap-4 md:grid-cols-2'><Input label='From Date' type='date' /><Input label='To Date' type='date' /></div><Button icon={<Download size={17} />} onClick={() => setExported(true)}>Export Report</Button>{exported ? <p className='rounded-lg bg-emerald-50 p-3 text-sm font-semibold text-emerald-700'>Report export mocked. No file was generated.</p> : null}</CardBody></Card>
    </div>
  );
}

export function PremiumPlansPage() {
  return (
    <div className='space-y-6'>
      <PageHeader actions={<Link to='/premium/upgrade'><Button icon={<Sparkles size={17} />}>Upgrade</Button></Link>} description='User views available Premium plans and benefits.' eyebrow='UC-06' title='View Premium Plans' />
      <div className='grid gap-4 lg:grid-cols-3'>{premiumPlans.map((plan) => <Card className={plan.highlighted ? 'border-teal-300 shadow-soft' : ''} key={plan.id}><CardBody className='space-y-4'><Badge tone={plan.highlighted ? 'teal' : 'slate'}>{plan.audience}</Badge><h2 className='text-xl font-bold text-slate-950'>{plan.name}</h2><p className='text-3xl font-bold text-slate-950'>{plan.price}<span className='text-sm font-medium text-slate-500'> / {plan.interval}</span></p><ul className='space-y-2 text-sm text-slate-600'>{plan.benefits.map((benefit) => <li className='flex gap-2' key={benefit}><CheckCircle2 className='mt-0.5 text-emerald-600' size={16} />{benefit}</li>)}</ul><Link to='/premium/upgrade'><Button className='w-full' variant={plan.highlighted ? 'primary' : 'secondary'}>Select Plan</Button></Link></CardBody></Card>)}</div>
    </div>
  );
}

export function UpgradePremiumPage() {
  const [method, setMethod] = useState('vnpay');
  return (
    <div className='space-y-6'>
      <PageHeader description='Learner or Teacher selects a Premium plan, completes payment, and receives Premium access after success.' eyebrow='UC-15' title='Upgrade to Premium' />
      <div className='grid gap-6 lg:grid-cols-[1fr_0.8fr]'><Card><CardBody className='space-y-4'><Select label='Selected Plan' options={premiumPlans.map((plan) => ({ value: plan.id, label: `${plan.name} - ${plan.price}` }))} /><Select label='Payment Method' onChange={(event) => setMethod(event.target.value)} options={[{ value: 'vnpay', label: 'VNPay Gateway Mock' }, { value: 'card', label: 'Credit Card Mock' }, { value: 'bank', label: 'Bank Transfer Mock' }]} value={method} /><Input label='Billing Email' placeholder='user@example.com' /><Input label='Promotion Code' placeholder='Optional' /><Link to='/premium/payment-result'><Button>Proceed to Payment</Button></Link></CardBody></Card><Card><CardBody><h2 className='font-bold text-slate-950'>Payment Gateway Mock</h2><p className='mt-2 text-sm text-slate-600'>No payment provider is called. Use payment result route to capture success state.</p><div className='mt-4 rounded-lg bg-slate-50 p-4 text-sm'><p>Method: {method}</p><p>Security: redirect token mocked</p><p>Status: waiting for user confirmation</p></div></CardBody></Card></div>
    </div>
  );
}

export function PaymentResultPage() {
  return (
    <div className='space-y-6'>
      <PageHeader description='Payment result screen shows success state after gateway callback.' eyebrow='UC-15' title='Payment Result' />
      <Card><CardBody className='text-center'><CheckCircle2 className='mx-auto text-emerald-600' size={54} /><h2 className='mt-4 text-2xl font-bold text-slate-950'>Payment successful</h2><p className='mt-2 text-slate-600'>Premium access activated for selected account in mock state.</p><div className='mx-auto mt-6 grid max-w-2xl gap-3 text-left md:grid-cols-2'><Info label='Transaction ID' value={paymentResult.transactionId} /><Info label='Plan' value={paymentResult.planName} /><Info label='Amount' value={paymentResult.amount} /><Info label='Paid At' value={paymentResult.paidAt} /></div></CardBody></Card>
    </div>
  );
}

export function AdminDashboardPage() {
  return (
    <div className='space-y-6'>
      <PageHeader description='Admin overview for users, public resources, permissions, and system health.' eyebrow='Admin workspace' title='Admin Dashboard' />
      <div className='grid gap-4 md:grid-cols-4'><Metric label='Users' value={`${users.length}`} helper='All roles' /><Metric label='Public resources' value={`${studySets.filter((set) => set.visibility === 'public').length}`} helper='Visible resources' /><Metric label='Services' value={`${systemServices.length}`} helper='Monitored integrations' /><Metric label='Alerts' value='1' helper='Email service degraded' /></div>
      <Table headers={['Service', 'Status', 'Uptime', 'Response Time']} rows={systemServices.map((service) => [service.name, <StatusPill label={service.status} tone={service.status === 'operational' ? 'success' : service.status === 'degraded' ? 'warning' : 'danger'} />, service.uptime, service.responseTime])} />
    </div>
  );
}

export function AdminUsersPage() {
  const [query, setQuery] = useState('');
  const filtered = users.filter((user) => [user.fullName, user.email, user.role, user.status].join(' ').toLowerCase().includes(query.toLowerCase()));
  return (
    <div className='space-y-6'>
      <PageHeader description='Admin views the list of users in the system.' eyebrow='UC-51' title='View User List' />
      <Card><CardBody><Input label='Search Users' onChange={(event) => setQuery(event.target.value)} placeholder='Name, email, role, status' value={query} /></CardBody></Card>
      <Table headers={['User', 'Role', 'Premium', 'Status', 'Action']} rows={filtered.map((user) => [<div><p className='font-bold text-slate-950'>{user.fullName}</p><p className='text-xs text-slate-500'>{user.email}</p></div>, <Badge>{user.role}</Badge>, user.premium ? <Badge tone='amber'>Premium</Badge> : <Badge>Free</Badge>, <StatusPill label={user.status} tone={user.status === 'active' ? 'success' : 'warning'} />, <Link to={`/admin/users/${user.id}`}><Button size='sm' variant='secondary'>Detail</Button></Link>])} />
    </div>
  );
}

export function AdminUserDetailPage() {
  const { id } = useParams();
  const user = users.find((item) => item.id === id) ?? users[0];
  const [role, setRole] = useState<Role>(user.role);
  const [saved, setSaved] = useState(false);

  return (
    <div className='space-y-6'>
      <PageHeader description='Admin views user detail and updates user role. Role dropdown changes local state.' eyebrow='UC-52' title='User Detail and Role Update' />
      <div className='grid gap-6 lg:grid-cols-[0.7fr_1.3fr]'><Card><CardBody className='space-y-4'><Info label='Full Name' value={user.fullName} /><Info label='Email' value={user.email} /><Info label='Phone' value={user.phone} /><Info label='Status' value={user.status} /><Info label='Last Active' value={user.lastActive} /></CardBody></Card><Card><CardBody className='space-y-4'><Select label='User Role' onChange={(event) => setRole(event.target.value as Role)} options={[{ value: 'Learner', label: 'Learner' }, { value: 'Teacher', label: 'Teacher' }, { value: 'Admin', label: 'Admin' }]} value={role} /><Select label='Account Status' options={[{ value: 'active', label: 'Active' }, { value: 'pending', label: 'Pending' }, { value: 'locked', label: 'Locked' }]} /><Button onClick={() => setSaved(true)}>Update User Role</Button>{saved ? <p className='rounded-lg bg-emerald-50 p-3 text-sm font-semibold text-emerald-700'>Role changed locally to {role}. No authorization backend called.</p> : null}</CardBody></Card></div>
    </div>
  );
}

export function ResourceManagementPage() {
  const [hiddenIds, setHiddenIds] = useState<string[]>([]);
  const resources = studySets.filter((set) => set.visibility === 'public');
  return (
    <div className='space-y-6'>
      <PageHeader description='Admin manages public learning resources and hides inappropriate or invalid resources.' eyebrow='UC-53' title='Resource Management' />
      <Table headers={['Resource', 'Owner', 'Subject', 'Status', 'Action']} rows={resources.map((set) => [<div><p className='font-bold text-slate-950'>{set.title}</p><p className='text-xs text-slate-500'>{set.description}</p></div>, set.ownerName, set.subject, hiddenIds.includes(set.id) ? <StatusPill label='hidden' tone='danger' /> : <StatusPill label='public' tone='success' />, <Button disabled={hiddenIds.includes(set.id)} icon={<EyeOff size={15} />} onClick={() => setHiddenIds((current) => [...current, set.id])} size='sm' variant='danger'>Hide Public Learning Resource</Button>])} />
    </div>
  );
}

export function SystemStatusPage() {
  return (
    <div className='space-y-6'>
      <PageHeader description='Admin views operational status of authentication, email, payment, AI, and web services.' eyebrow='UC-54' title='View System Status' />
      <Table headers={['Service', 'Status', 'Uptime', 'Response Time', 'Last Checked']} rows={systemServices.map((service) => [service.name, <StatusPill label={service.status} tone={service.status === 'operational' ? 'success' : service.status === 'degraded' ? 'warning' : 'danger'} />, service.uptime, service.responseTime, service.lastChecked])} />
      <Card><CardBody><h2 className='font-bold text-slate-950'>System message</h2><p className='mt-2 rounded-lg bg-amber-50 p-3 text-sm font-semibold text-amber-800'>Email Service degraded. Automated notifications may be delayed.</p></CardBody></Card>
    </div>
  );
}

export function NotificationsPage() {
  const [readIds, setReadIds] = useState<string[]>([]);
  const rows = notifications.map((item) => {
    const isRead = item.status === 'read' || readIds.includes(item.id);
    return [<div><p className='font-bold text-slate-950'>{item.title}</p><p className='text-xs text-slate-500'>{item.message}</p></div>, item.actor, item.createdAt, <StatusPill label={isRead ? 'read' : 'unread'} tone={isRead ? 'neutral' : 'info'} />, <Button disabled={isRead} onClick={() => setReadIds((current) => [...current, item.id])} size='sm' variant='secondary'>Mark as Read</Button>];
  });

  return (
    <div className='space-y-6'>
      <PageHeader description='Notification center for learners, teachers, and admins. Mark as read updates local state.' eyebrow='Shared Utility' title='Notification Center' />
      <Table headers={['Notification', 'Actor', 'Created At', 'Status', 'Action']} rows={rows} />
    </div>
  );
}

export function AccessDeniedPage() {
  return <MessagePage icon={<ShieldAlert size={44} />} title='Access Denied' description='Current mock role is not authorized to access this screen. Use sidebar to navigate to permitted prototype pages.' action={<Link to='/'><Button>Go Home</Button></Link>} />;
}

export function NotFoundPage() {
  return <MessagePage icon={<AlertTriangle size={44} />} title='Not Found' description='Requested prototype route does not exist. Use navigation to open a mapped SRS screen.' action={<Link to='/'><Button>Go Home</Button></Link>} />;
}

function MessagePage({ icon, title, description, action }: { icon: ReactNode; title: string; description: string; action: ReactNode }) {
  return <EmptyState action={action} description={description} icon={icon} title={title} />;
}

function Metric({ label, value, helper }: { label: string; value: string; helper: string }) {
  return <Card><CardBody><p className='text-sm font-semibold text-slate-500'>{label}</p><p className='mt-2 text-3xl font-bold text-slate-950'>{value}</p><p className='mt-1 text-sm text-slate-500'>{helper}</p></CardBody></Card>;
}

function Info({ label, value }: { label: string; value: ReactNode }) {
  return <div className='rounded-lg border border-slate-200 bg-white p-4'><p className='text-xs font-bold uppercase tracking-wide text-slate-400'>{label}</p><div className='mt-2 text-sm font-semibold text-slate-800'>{value}</div></div>;
}
