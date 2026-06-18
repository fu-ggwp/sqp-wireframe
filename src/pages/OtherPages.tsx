import type { ReactNode } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { AlertTriangle, CheckCircle2, Download, EyeOff, ShieldAlert, Sparkles } from 'lucide-react';
import { examAttempts, exams, notifications, paymentResult, premiumPlans, questions, studySets, systemServices, users } from '../data/mockData';
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
import { ListFieldBar, PaginationBar } from '../components/ui/FieldControls';

function getExamReports() {
  return exams.map((exam) => {
    const attempts = examAttempts.filter((attempt) => attempt.examId === exam.id);
    const submittedAttempts = attempts.filter((attempt) => attempt.status === 'submitted');
    const averageScore = submittedAttempts.length ? Math.round(submittedAttempts.reduce((sum, attempt) => sum + attempt.score, 0) / submittedAttempts.length) : 0;
    const accuracy = submittedAttempts.length ? Math.round(submittedAttempts.reduce((sum, attempt) => sum + attempt.accuracy, 0) / submittedAttempts.length) : 0;
    const weakQuestion = questions.find((question) => exam.questionIds.includes(question.id) && question.learnerAnswer && question.learnerAnswer !== question.correctAnswer)
      ?? questions.find((question) => exam.questionIds.includes(question.id));

    return {
      exam,
      totalAttempts: attempts.length,
      submitted: submittedAttempts.length,
      inProgress: attempts.filter((attempt) => attempt.status === 'in-progress').length,
      averageScore,
      accuracy,
      weakTopic: weakQuestion?.topic ?? 'No weak topic yet',
    };
  });
}

export function AnalyticsPage() {
  const examReports = getExamReports();

  return (
    <div className='space-y-6'>
      <PageHeader actions={<Link to='/teacher/reports/export'><Button icon={<Download size={17} />} variant='secondary'>Export Exam Report</Button></Link>} description='Review performance after each exam, including submissions, score, accuracy, and weak topics.' eyebrow='Exam analytics' title='Exam Analytics' />
      <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
        {examReports.map((report) => (
          <Card key={report.exam.id}>
            <CardBody>
              <div className='flex items-start justify-between gap-3'>
                <div>
                  <p className='text-sm font-semibold text-slate-500'>{report.exam.className}</p>
                  <h2 className='mt-2 font-bold text-slate-950'>{report.exam.title}</h2>
                </div>
                <StatusPill label={report.exam.status} tone={report.exam.status === 'open' ? 'success' : 'warning'} />
              </div>
              <div className='mt-4 space-y-3'><Progress label='Average Score' value={report.averageScore} /><Progress label='Accuracy' value={report.accuracy} /></div>
              <div className='mt-4 grid gap-2 text-sm font-semibold text-slate-600 sm:grid-cols-2'>
                <span>{report.submitted} submitted</span>
                <span>{report.inProgress} in progress</span>
              </div>
              <p className='mt-3 text-sm text-slate-600'>Weak topic: <strong>{report.weakTopic}</strong></p>
            </CardBody>
          </Card>
        ))}
      </div>
      <ListFieldBar filters={[{ label: 'Class Filter', options: [{ value: 'all', label: 'All classes' }, ...exams.map((exam) => ({ value: exam.classId, label: exam.className }))] }, { label: 'Exam Status', options: [{ value: 'all', label: 'All statuses' }, { value: 'open', label: 'Open' }, { value: 'scheduled', label: 'Scheduled' }, { value: 'closed', label: 'Closed' }] }, { label: 'Performance Band', options: [{ value: 'all', label: 'All performance' }, { value: 'low', label: 'Below 60%' }, { value: 'mid', label: '60-80%' }, { value: 'high', label: 'Above 80%' }] }]} searchLabel='Search Exam Analytics' searchPlaceholder='Exam, class, weak topic' />
      <Table headers={['Exam', 'Class', 'Status', 'Submissions', 'Average Score', 'Accuracy', 'Weak Topic', 'Action']} rows={examReports.map((report) => [<div><p className='font-bold text-slate-950'>{report.exam.title}</p><p className='text-xs text-slate-500'>{report.exam.startTime}</p></div>, report.exam.className, <StatusPill label={report.exam.status} tone={report.exam.status === 'open' ? 'success' : 'warning'} />, `${report.submitted}/${report.totalAttempts}`, `${report.averageScore}%`, `${report.accuracy}%`, report.weakTopic, <Link to='/teacher/reports/export'><Button size='sm' variant='secondary'>Export</Button></Link>])} />
      <PaginationBar />
    </div>
  );
}

export function ExportReportPage() {
  const [exported, setExported] = useState(false);
  const [selectedExamId, setSelectedExamId] = useState(exams[0].id);
  const [reportType, setReportType] = useState('exam-scoreboard');
  const selectedExam = exams.find((exam) => exam.id === selectedExamId) ?? exams[0];
  const report = getExamReports().find((item) => item.exam.id === selectedExam.id) ?? getExamReports()[0];
  const attempts = examAttempts.filter((attempt) => attempt.examId === selectedExam.id);

  return (
    <div className='space-y-6'>
      <PageHeader description='Choose one exam and export its post-test score table, learner attempts, question analysis, and weak-topic summary.' eyebrow='Report export' title='Export Exam Report' />
      <div className='grid gap-6 xl:grid-cols-[0.9fr_1.1fr]'>
        <Card>
          <CardBody className='space-y-4'>
            <Select label='Exam' onChange={(event) => setSelectedExamId(event.target.value)} options={exams.map((exam) => ({ value: exam.id, label: `${exam.title} - ${exam.className}` }))} value={selectedExamId} />
            <Select label='Report Type' onChange={(event) => setReportType(event.target.value)} options={[{ value: 'exam-scoreboard', label: 'Exam Scoreboard' }, { value: 'learner-attempts', label: 'Learner Attempt Details' }, { value: 'question-analysis', label: 'Question Performance Analysis' }, { value: 'weak-topic-summary', label: 'Weak Topic Summary' }]} value={reportType} />
            <Select label='Format' options={[{ value: 'xlsx', label: 'Excel (.xlsx)' }, { value: 'pdf', label: 'PDF' }, { value: 'csv', label: 'CSV' }]} />
            <div className='grid gap-3 md:grid-cols-2'><label className='flex items-center gap-3 rounded-lg border border-slate-200 p-3 text-sm font-semibold'><input defaultChecked type='checkbox' /> Include score table</label><label className='flex items-center gap-3 rounded-lg border border-slate-200 p-3 text-sm font-semibold'><input defaultChecked type='checkbox' /> Include weak-topic summary</label><label className='flex items-center gap-3 rounded-lg border border-slate-200 p-3 text-sm font-semibold'><input type='checkbox' /> Include answer details</label><label className='flex items-center gap-3 rounded-lg border border-slate-200 p-3 text-sm font-semibold'><input type='checkbox' /> Email report after export</label></div>
            <div className='grid gap-4 md:grid-cols-2'><Input label='Generated From' readOnly value={selectedExam.startTime} /><Input label='Generated At' readOnly value='2026-05-29 15:40' /></div>
            <Button icon={<Download size={17} />} onClick={() => setExported(true)}>Export Exam Report</Button>
            {exported ? <p className='rounded-lg bg-emerald-50 p-3 text-sm font-semibold text-emerald-700'>{selectedExam.title} report is ready to download.</p> : null}
          </CardBody>
        </Card>
        <Card>
          <CardBody className='space-y-4'>
            <h2 className='text-lg font-bold text-slate-950'>Post-exam summary</h2>
            <div className='grid gap-3 md:grid-cols-2'>
              <Info label='Exam' value={selectedExam.title} />
              <Info label='Class' value={selectedExam.className} />
              <Info label='Average Score' value={`${report.averageScore}%`} />
              <Info label='Accuracy' value={`${report.accuracy}%`} />
              <Info label='Submitted' value={`${report.submitted}/${report.totalAttempts}`} />
              <Info label='Weak Topic' value={report.weakTopic} />
              <Info label='Report Type' value={reportType.replace(/-/g, ' ')} />
              <Info label='Exam Status' value={selectedExam.status} />
            </div>
          </CardBody>
        </Card>
      </div>
      <ListFieldBar filters={[{ label: 'Attempt Status', options: [{ value: 'all', label: 'All attempts' }, { value: 'submitted', label: 'Submitted' }, { value: 'in-progress', label: 'In progress' }] }, { label: 'Score Band', options: [{ value: 'all', label: 'All scores' }, { value: 'pass', label: 'Passing' }, { value: 'fail', label: 'Below passing' }] }]} searchLabel='Search Learner Attempts' searchPlaceholder='Learner name or score' />
      <Table emptyMessage='No attempts recorded for this exam yet.' headers={['Learner', 'Status', 'Score', 'Accuracy', 'Submitted At']} rows={attempts.map((attempt) => [attempt.learnerName, <StatusPill label={attempt.status} tone={attempt.status === 'submitted' ? 'success' : 'warning'} />, attempt.score, `${attempt.accuracy}%`, attempt.submittedAt ?? 'Not submitted'])} />
      <PaginationBar />
    </div>
  );
}

export function PremiumPlansPage() {
  const { role } = useAuth();
  const plans = premiumPlans.filter((plan) => !role || plan.audience === role || plan.audience === 'Both');
  const title = role ? `${role} Premium Plans` : 'Premium Plans';
  const description = role === 'Learner'
    ? 'Upgrade your learner account for AI explanations and deeper progress insights.'
    : role === 'Teacher'
      ? 'Upgrade your teacher account for AI question generation and advanced class analytics.'
      : 'Choose a plan that matches how you use Smart Quiz Platform.';

  return (
    <div className='space-y-6'>
      <PageHeader actions={role ? <Link to='/premium/upgrade'><Button icon={<Sparkles size={17} />}>Upgrade</Button></Link> : <Link to='/auth/login'><Button icon={<Sparkles size={17} />}>Login to Upgrade</Button></Link>} description={description} eyebrow='Premium' title={title} />
      <ListFieldBar filters={[{ label: 'Billing Interval', options: [{ value: 'all', label: 'All intervals' }, { value: 'month', label: 'Monthly' }, { value: 'year', label: 'Yearly' }] }, { label: 'Plan Audience', options: [{ value: 'all', label: 'All audiences' }, { value: 'learner', label: 'Learner' }, { value: 'teacher', label: 'Teacher' }, { value: 'both', label: 'Team' }] }]} searchLabel='Search Plans' searchPlaceholder='Plan name or benefit' />
      <div className='grid gap-4 lg:grid-cols-3'>{plans.map((plan) => <Card className={plan.highlighted ? 'border-teal-300 shadow-soft' : ''} key={plan.id}><CardBody className='space-y-4'><Badge tone={plan.highlighted ? 'teal' : 'slate'}>{plan.audience === 'Both' ? 'Team' : plan.audience}</Badge><h2 className='text-xl font-bold text-slate-950'>{plan.name}</h2><p className='text-3xl font-bold text-slate-950'>{plan.price}<span className='text-sm font-medium text-slate-500'> / {plan.interval}</span></p><ul className='space-y-2 text-sm text-slate-600'>{plan.benefits.map((benefit) => <li className='flex gap-2' key={benefit}><CheckCircle2 className='mt-0.5 text-emerald-600' size={16} />{benefit}</li>)}</ul><Link to={role ? '/premium/upgrade' : '/auth/login'}><Button className='w-full' variant={plan.highlighted ? 'primary' : 'secondary'}>{role ? 'Select Plan' : 'Login to Select'}</Button></Link></CardBody></Card>)}</div>
    </div>
  );
}

export function UpgradePremiumPage() {
  const [method, setMethod] = useState('vnpay');
  const { role, currentUser } = useAuth();
  const plans = premiumPlans.filter((plan) => plan.audience === role || plan.audience === 'Both');
  return (
    <div className='space-y-6'>
      <PageHeader description='Choose a plan for the account currently signed in.' eyebrow='Subscription' title='Upgrade to Premium' />
      <div className='grid gap-6 lg:grid-cols-[1fr_0.8fr]'><Card><CardBody className='space-y-4'><Input label='Account' readOnly value={`${currentUser?.fullName ?? ''} - ${role ?? ''}`} /><Select label='Selected Plan' options={plans.map((plan) => ({ value: plan.id, label: `${plan.name} - ${plan.price}` }))} /><Select label='Payment Method' onChange={(event) => setMethod(event.target.value)} options={[{ value: 'vnpay', label: 'VNPay Gateway' }, { value: 'card', label: 'Credit Card' }, { value: 'bank', label: 'Bank Transfer' }]} value={method} /><Input label='Billing Email' placeholder='user@example.com' /><Input label='Billing Name' placeholder='Full name on invoice' /><Input label='Billing Address' placeholder='Street, city' /><Input label='Tax Code' placeholder='Optional company tax code' /><Input label='Promotion Code' placeholder='Optional' /><label className='flex items-center gap-3 rounded-lg border border-slate-200 p-3 text-sm font-semibold'><input defaultChecked type='checkbox' /> I agree to subscription terms</label><Link to='/premium/payment-result'><Button>Proceed to Payment</Button></Link></CardBody></Card><Card><CardBody><h2 className='font-bold text-slate-950'>Payment Summary</h2><p className='mt-2 text-sm text-slate-600'>Review your plan and payment method before continuing.</p><div className='mt-4 rounded-lg bg-slate-50 p-4 text-sm'><p>Method: {method}</p><p>Account type: {role}</p><p>Status: waiting for confirmation</p></div></CardBody></Card></div>
    </div>
  );
}

export function PaymentResultPage() {
  const { role } = useAuth();
  const plan = premiumPlans.find((item) => item.audience === role) ?? paymentResult;
  return (
    <div className='space-y-6'>
      <PageHeader description='Your premium subscription is active.' eyebrow='Subscription' title='Payment Result' />
      <Card><CardBody className='text-center'><CheckCircle2 className='mx-auto text-emerald-600' size={54} /><h2 className='mt-4 text-2xl font-bold text-slate-950'>Payment successful</h2><p className='mt-2 text-slate-600'>Premium access has been activated for this account.</p><div className='mx-auto mt-6 grid max-w-2xl gap-3 text-left md:grid-cols-2'><Info label='Payment Status' value={paymentResult.status} /><Info label='Transaction ID' value={paymentResult.transactionId} /><Info label='Plan' value={'name' in plan ? plan.name : paymentResult.planName} /><Info label='Amount' value={'price' in plan ? plan.price : paymentResult.amount} /><Info label='Paid At' value={paymentResult.paidAt} /><Info label='Invoice Email' value='linh@sqp.edu.vn' /><Info label='Subscription Status' value='Active' /></div><div className='mt-6 flex flex-wrap justify-center gap-3'><Button variant='secondary'>Download Invoice</Button><Button>Return to Dashboard</Button></div></CardBody></Card>
    </div>
  );
}

export function AdminDashboardPage() {
  return (
    <div className='space-y-6'>
      <PageHeader description='Admin overview for users, public resources, permissions, and system health.' eyebrow='Admin workspace' title='Admin Dashboard' />
      <div className='grid gap-4 md:grid-cols-4'><Metric label='Users' value={`${users.length}`} helper='All roles' /><Metric label='Public resources' value={`${studySets.filter((set) => set.visibility === 'public').length}`} helper='Visible resources' /><Metric label='Services' value={`${systemServices.length}`} helper='Monitored integrations' /><Metric label='Alerts' value='1' helper='Email service degraded' /></div>
      <ListFieldBar filters={[{ label: 'Service Status', options: [{ value: 'all', label: 'All services' }, { value: 'operational', label: 'Operational' }, { value: 'degraded', label: 'Degraded' }] }, { label: 'Time Range', options: [{ value: '1h', label: 'Last hour' }, { value: '24h', label: 'Last 24 hours' }, { value: '7d', label: 'Last 7 days' }] }]} searchLabel='Search Admin Metrics' searchPlaceholder='User, resource, service' />
      <Table headers={['Service', 'Status', 'Uptime', 'Response Time']} rows={systemServices.map((service) => [service.name, <StatusPill label={service.status} tone={service.status === 'operational' ? 'success' : service.status === 'degraded' ? 'warning' : 'danger'} />, service.uptime, service.responseTime])} />
    </div>
  );
}

export function AdminUsersPage() {
  const [query, setQuery] = useState('');
  const filtered = users.filter((user) => [user.fullName, user.email, user.role, user.status].join(' ').toLowerCase().includes(query.toLowerCase()));
  return (
    <div className='space-y-6'>
      <PageHeader description='Admin views the list of users in the system.' eyebrow='User management' title='View User List' />
      <ListFieldBar filters={[{ label: 'Role Filter', options: [{ value: 'all', label: 'All roles' }, { value: 'Learner', label: 'Learner' }, { value: 'Teacher', label: 'Teacher' }, { value: 'Admin', label: 'Admin' }] }, { label: 'Account Status', options: [{ value: 'all', label: 'All statuses' }, { value: 'active', label: 'Active' }, { value: 'pending', label: 'Pending' }, { value: 'locked', label: 'Locked' }] }, { label: 'Premium Status', options: [{ value: 'all', label: 'All plans' }, { value: 'premium', label: 'Premium' }, { value: 'free', label: 'Free' }] }]} onSearchChange={setQuery} searchLabel='Search Users' searchPlaceholder='Name, email, role, status' searchValue={query} />
      <Table headers={['User', 'Role', 'Premium', 'Status', 'Action']} rows={filtered.map((user) => [<div><p className='font-bold text-slate-950'>{user.fullName}</p><p className='text-xs text-slate-500'>{user.email}</p></div>, <Badge>{user.role}</Badge>, user.premium ? <Badge tone='amber'>Premium</Badge> : <Badge>Free</Badge>, <StatusPill label={user.status} tone={user.status === 'active' ? 'success' : 'warning'} />, <Link to={`/admin/users/${user.id}`}><Button size='sm' variant='secondary'>Detail</Button></Link>])} />
      <PaginationBar />
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
      <PageHeader description='Admin views user detail and updates user role. Role dropdown changes local state.' eyebrow='User permissions' title='User Detail and Role Update' />
      <div className='grid gap-6 lg:grid-cols-[0.7fr_1.3fr]'><Card><CardBody className='space-y-4'><Info label='Full Name' value={user.fullName} /><Info label='Email' value={user.email} /><Info label='Phone' value={user.phone} /><Info label='Premium' value={user.premium ? 'Premium' : 'Free'} /><Info label='Status' value={user.status} /><Info label='Joined At' value={user.joinedAt} /><Info label='Last Active' value={user.lastActive} /></CardBody></Card><Card><CardBody className='space-y-4'><Select label='User Role' onChange={(event) => setRole(event.target.value as Role)} options={[{ value: 'Learner', label: 'Learner' }, { value: 'Teacher', label: 'Teacher' }, { value: 'Admin', label: 'Admin' }]} value={role} /><Select label='Account Status' options={[{ value: 'active', label: 'Active' }, { value: 'pending', label: 'Pending' }, { value: 'locked', label: 'Locked' }]} /><Select label='Permission Scope' options={[{ value: 'standard', label: 'Standard role permissions' }, { value: 'limited', label: 'Limited access' }, { value: 'expanded', label: 'Expanded support access' }]} /><Input label='Role Change Reason' placeholder='Teacher account approved after verification' /><Input label='Effective Date' type='date' /><Select label='Notification To User' options={[{ value: 'yes', label: 'Notify user by email' }, { value: 'no', label: 'Do not notify' }]} /><Input label='Admin Password Confirmation' type='password' /><Button onClick={() => setSaved(true)}>Update User Role</Button>{saved ? <p className='rounded-lg bg-emerald-50 p-3 text-sm font-semibold text-emerald-700'>Role changed locally to {role}. No authorization backend called.</p> : null}</CardBody></Card></div>
    </div>
  );
}

export function ResourceManagementPage() {
  const [hiddenIds, setHiddenIds] = useState<string[]>([]);
  const resources = studySets.filter((set) => set.visibility === 'public');
  return (
    <div className='space-y-6'>
      <PageHeader description='Admin manages public learning resources and hides inappropriate or invalid resources.' eyebrow='Resource moderation' title='Resource Management' />
      <Card><CardBody className='grid gap-4 md:grid-cols-3'><Select label='Resource Type' options={[{ value: 'study-set', label: 'Public study set' }, { value: 'learning-resource', label: 'Public learning resource' }]} /><Select label='Review Status' options={[{ value: 'all', label: 'All statuses' }, { value: 'flagged', label: 'Flagged' }, { value: 'approved', label: 'Approved' }]} /><Input label='Keyword' placeholder='Title, owner, subject' /><Select label='Severity' options={[{ value: 'all', label: 'All severities' }, { value: 'low', label: 'Low' }, { value: 'medium', label: 'Medium' }, { value: 'high', label: 'High' }]} /><Input label='Reviewer Note' placeholder='Reason for moderation' /><Select label='Owner Role' options={[{ value: 'all', label: 'All owners' }, { value: 'Teacher', label: 'Teacher' }, { value: 'Learner', label: 'Learner' }]} /></CardBody></Card>
      <Table headers={['Resource', 'Owner', 'Subject', 'Visibility', 'Review Note', 'Action']} rows={resources.map((set) => [<div><p className='font-bold text-slate-950'>{set.title}</p><p className='text-xs text-slate-500'>{set.description}</p></div>, set.ownerName, set.subject, hiddenIds.includes(set.id) ? <StatusPill label='hidden' tone='danger' /> : <StatusPill label='public' tone='success' />, 'No policy violation found', <Button disabled={hiddenIds.includes(set.id)} icon={<EyeOff size={15} />} onClick={() => setHiddenIds((current) => [...current, set.id])} size='sm' variant='danger'>Hide Public Learning Resource</Button>])} />
      <PaginationBar />
    </div>
  );
}

export function SystemStatusPage() {
  return (
    <div className='space-y-6'>
      <PageHeader description='Admin views operational status of authentication, email, payment, AI, and web services.' eyebrow='System health' title='View System Status' />
      <ListFieldBar filters={[{ label: 'Service Status', options: [{ value: 'all', label: 'All statuses' }, { value: 'operational', label: 'Operational' }, { value: 'degraded', label: 'Degraded' }, { value: 'down', label: 'Down' }] }, { label: 'Integration Type', options: [{ value: 'all', label: 'All integrations' }, { value: 'auth', label: 'Authentication' }, { value: 'payment', label: 'Payment' }, { value: 'ai', label: 'AI' }] }]} searchLabel='Search Services' searchPlaceholder='Service name' />
      <Table headers={['Service', 'Status', 'Uptime', 'Response Time', 'Last Checked']} rows={systemServices.map((service) => [service.name, <StatusPill label={service.status} tone={service.status === 'operational' ? 'success' : service.status === 'degraded' ? 'warning' : 'danger'} />, service.uptime, service.responseTime, service.lastChecked])} />
      <PaginationBar />
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
      <PageHeader description='Notification center for learners, teachers, and admins. Mark as read updates local state.' eyebrow='Notifications' title='Notification Center' />
      <ListFieldBar filters={[{ label: 'Read Status', options: [{ value: 'all', label: 'All notifications' }, { value: 'unread', label: 'Unread' }, { value: 'read', label: 'Read' }] }, { label: 'Notification Type', options: [{ value: 'all', label: 'All types' }, { value: 'class', label: 'Class' }, { value: 'exam', label: 'Exam' }, { value: 'system', label: 'System' }] }]} searchLabel='Search Notifications' searchPlaceholder='Title, message, actor' />
      <div className='flex flex-wrap gap-2'><Button variant='secondary'>Mark All as Read</Button><Button variant='ghost'>Clear Read Notifications</Button></div>
      <Table headers={['Notification', 'Actor', 'Created At', 'Status', 'Action']} rows={rows} />
      <PaginationBar />
    </div>
  );
}

export function AccessDeniedPage() {
  const { role } = useAuth();
  const home = role === 'Learner' ? '/learner/dashboard' : role === 'Teacher' ? '/teacher/dashboard' : role === 'Admin' ? '/admin/dashboard' : '/';
  return <MessagePage icon={<ShieldAlert size={44} />} title='Access Denied' description='Current account role is not authorized to access this screen.' action={<div className='flex flex-wrap justify-center gap-3'><Link to={home}><Button>Return to My Dashboard</Button></Link><Link to='/auth/login'><Button variant='secondary'>Login with Different Account</Button></Link></div>} />;
}

export function NotFoundPage() {
  return <MessagePage icon={<AlertTriangle size={44} />} title='Not Found' description='The page you requested does not exist.' action={<div className='flex flex-wrap justify-center gap-3'><Link to='/'><Button>Go Home</Button></Link><Link to='/search/study-sets'><Button variant='secondary'>Search Study Sets</Button></Link></div>} />;
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
