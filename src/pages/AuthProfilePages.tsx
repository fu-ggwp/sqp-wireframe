import { useState } from 'react';
import type { ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { CheckCircle2, Eye, LogOut, Mail, Repeat2, Save, ShieldCheck, UserPlus, X } from 'lucide-react';
import { users } from '../data/mockData';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card, CardBody } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { PageHeader } from '../components/ui/PageHeader';
import { Select } from '../components/ui/Select';
import { StatusPill } from '../components/ui/StatusPill';

export function RegisterPage() {
  const [submitted, setSubmitted] = useState(false);
  const emailError = submitted ? 'Email is required and must be unique.' : undefined;

  return (
    <AuthFrame title='Register Account' description='Create a learner or teacher account to save progress and access class features.' eyebrow='Account setup'>
      <div className='grid gap-4 md:grid-cols-2'>
        <Input label='Full Name' placeholder='Nguyen Van A' />
        <Input error={submitted ? 'Required field.' : undefined} label='Email Address' placeholder='user@example.com' type='email' />
        <Input label='Phone Number' placeholder='+84 900 000 000' />
        <Input label='Username' placeholder='nguyenvana' />
        <Select label='Requested Role' options={[{ value: 'Learner', label: 'Learner' }, { value: 'Teacher', label: 'Teacher' }]} />
        <Input error={submitted ? 'Password must contain at least 8 characters.' : undefined} label='Password' type='password' />
        <Input error={submitted ? 'Confirm password must match password.' : undefined} label='Confirm Password' type='password' />
        <Select label='Learning Goal' options={[{ value: 'exam', label: 'Prepare for exams' }, { value: 'class', label: 'Join class study' }, { value: 'create', label: 'Create learning content' }]} />
        <Input label='Referral Code' placeholder='Optional' />
      </div>
      <div className='mt-4 rounded-lg bg-amber-50 p-3 text-sm text-amber-800'>Please complete required fields, use a valid email, and choose a secure password.</div>
      <div className='mt-5 flex flex-wrap gap-3'>
        <Button icon={<UserPlus size={17} />} onClick={() => setSubmitted(true)}>Create Account</Button>
        <Button icon={<Mail size={17} />} variant='secondary'>Continue with Google</Button>
        <Link to='/auth/login'><Button variant='ghost'>Already have account</Button></Link>
      </div>
      {emailError ? <p className='mt-3 text-sm font-semibold text-rose-600'>{emailError}</p> : null}
    </AuthFrame>
  );
}

export function LoginPage() {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { currentUser, loginAs, logout } = useAuth();
  const navigate = useNavigate();

  const inferRole = () => {
    const normalized = email.trim().toLowerCase();
    const matchedUser = users.find((user) => user.email.toLowerCase() === normalized || user.username.toLowerCase() === normalized);
    if (matchedUser?.role === 'Teacher' || matchedUser?.role === 'Admin' || matchedUser?.role === 'Learner') return matchedUser.role;
    if (normalized.includes('teacher')) return 'Teacher';
    if (normalized.includes('admin')) return 'Admin';
    return 'Learner';
  };

  const enterAccount = (role: 'Learner' | 'Teacher' | 'Admin') => {
    const target = role === 'Learner' ? '/learner/dashboard' : role === 'Teacher' ? '/teacher/dashboard' : '/admin/dashboard';
    loginAs(role);
    navigate(target);
  };

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      setMessage('Email and password are required.');
      return;
    }
    enterAccount(inferRole());
  };

  const handleLogout = () => {
    logout();
    setMessage('Signed out. You can login again.');
  };

  return (
    <div className='-mx-4 -my-6 grid min-h-[calc(100vh-4rem)] overflow-hidden rounded-lg bg-white shadow-sm sm:-mx-6 lg:-mx-8 lg:-my-8 lg:grid-cols-[0.95fr_1fr]'>
      <section className='relative hidden overflow-hidden bg-violet-200 p-10 lg:block'>
        <div className='relative z-10 max-w-sm'>
          <h1 className='text-5xl font-bold leading-tight text-slate-900'>Study better, without the pressure.</h1>
        </div>
        <img alt='Colorful notebooks and headphones' className='absolute bottom-0 right-[-90px] h-[78%] w-[82%] object-cover object-center' src='https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80' />
        <div className='absolute bottom-10 left-10 text-4xl font-bold text-white'>SQP</div>
      </section>

      <section className='relative flex items-center justify-center px-5 py-10 sm:px-8'>
        <Link className='absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200' to='/'><X size={20} /></Link>
        <div className='w-full max-w-xl'>
          <div className='mb-8 flex justify-center gap-9 text-xl font-bold text-slate-500'>
            <Link className='hover:text-slate-900' to='/auth/register'>Register</Link>
            <span className='text-slate-900 underline decoration-violet-400 decoration-4 underline-offset-8'>Login</span>
          </div>

          <div className='space-y-4'>
            <button className='focus-ring flex h-14 w-full items-center justify-center gap-3 rounded-full bg-slate-100 text-sm font-bold text-slate-600 transition hover:bg-slate-200' onClick={() => setMessage('Google login is not connected yet.')}>
              <span className='flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-black text-indigo-600'>G</span>
              Login with Google
            </button>
          </div>

          <div className='my-8 grid grid-cols-[1fr_auto_1fr] items-center gap-4 text-sm font-semibold text-slate-500'>
            <span className='h-px bg-slate-200' />
            <span>or email</span>
            <span className='h-px bg-slate-200' />
          </div>

          {currentUser ? <div className='mb-5 rounded-lg bg-blue-50 p-4 text-sm font-semibold text-blue-700'>Signed in as {currentUser.fullName}. <button className='ml-1 font-bold underline' onClick={handleLogout}>Logout</button></div> : null}

          <div className='space-y-4'>
            <Input label='Email' onChange={(event) => setEmail(event.target.value)} placeholder='Enter your email or username' type='email' value={email} />
            <div className='relative'>
              <Input label='Password' onChange={(event) => setPassword(event.target.value)} placeholder='Enter your password' type={showPassword ? 'text' : 'password'} value={password} />
              <button className='absolute bottom-3 right-3 text-slate-500 hover:text-slate-900' onClick={() => setShowPassword((value) => !value)} type='button'><Eye size={19} /></button>
            </div>
          </div>

          <div className='mt-3 flex flex-wrap items-center justify-between gap-3'>
            <label className='flex items-center gap-2 text-sm font-semibold text-slate-600'><input type='checkbox' /> Remember me</label>
            <Link className='text-sm font-bold text-indigo-600 hover:text-indigo-700' to='/auth/forgot-password'>Forgot password</Link>
          </div>

          <p className='mx-auto mt-6 max-w-md text-center text-xs leading-6 text-slate-500'>By logging in, you agree to the platform terms and privacy policy.</p>

          <Button className='mt-7 h-14 w-full rounded-full bg-indigo-600 hover:bg-indigo-700' disabled={Boolean(currentUser)} onClick={handleLogin}>Login</Button>

          <Link className='mt-4 flex h-12 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-600 hover:bg-slate-200' to='/auth/register'>New to Smart Quiz Platform? Create account</Link>
          {message ? <p className={`mt-4 rounded-lg p-3 text-sm font-semibold ${message.includes('required') ? 'bg-rose-50 text-rose-700' : 'bg-slate-50 text-slate-700'}`}>{message}</p> : null}
        </div>
      </section>
    </div>
  );
}

export function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);
  const [verified, setVerified] = useState(false);

  return (
    <AuthFrame title='Forgot Password' description='Enter your account email, choose delivery method, then verify the received code.' eyebrow='Account recovery'>
      <div className='grid gap-4 md:grid-cols-2'>
        <Input label='Registered Email Address' placeholder='user@example.com' type='email' />
        <Select label='Reset Delivery Method' options={[{ value: 'email', label: 'Email code' }, { value: 'sms', label: 'SMS code' }]} />
        <Input label='Account Username' placeholder='Optional username' />
        <Input disabled={!sent} label='Verification Code' placeholder={sent ? 'Enter received code' : 'Send code first'} />
      </div>
      <div className='mt-5 flex flex-wrap gap-3'>
        <Button icon={<Mail size={17} />} onClick={() => { setSent(true); setVerified(false); }}>Send Verification Code</Button>
        <Button disabled={!sent} icon={<CheckCircle2 size={17} />} onClick={() => setVerified(true)} variant='secondary'>Verify Code</Button>
        <Link to={verified ? '/auth/reset-password' : '/auth/login'}><Button variant={verified ? 'primary' : 'ghost'}>{verified ? 'Continue Reset Password' : 'Back to login'}</Button></Link>
      </div>
      {sent ? <p className='mt-4 rounded-lg bg-blue-50 p-3 text-sm font-semibold text-blue-700'>Verification code sent locally. Delivery service is not connected.</p> : null}
      {verified ? <p className='mt-3 rounded-lg bg-emerald-50 p-3 text-sm font-semibold text-emerald-700'>Verification code accepted. You can continue to reset password.</p> : null}
    </AuthFrame>
  );
}

export function ResetPasswordPage() {
  const [saved, setSaved] = useState(false);
  const [tokenSent, setTokenSent] = useState(false);
  const { currentUser } = useAuth();
  const isProfileFlow = Boolean(currentUser);

  const content = (
    <>
      <div className='space-y-4'>
        {currentUser ? (
          <Input helper='Verification token will be sent to this account email.' label='Account Email' readOnly value={currentUser.email} />
        ) : (
          <Input label='Registered Email' placeholder='user@example.com' type='email' />
        )}
        <div className='flex flex-wrap items-end gap-3'>
          <Input className='min-w-72 flex-1' label='Verification Token' placeholder='Enter token from email' />
          <Button icon={<Mail size={17} />} onClick={() => setTokenSent(true)} variant='secondary'>Send Verification Token</Button>
        </div>
        <Input label='New Password' type='password' />
        <Input helper='Must match the new password field.' label='Confirm New Password' type='password' />
        <Select label='Logout Other Devices' options={[{ value: 'yes', label: 'Yes, logout other devices' }, { value: 'no', label: 'No, keep sessions' }]} />
      </div>
      <div className='mt-5 flex flex-wrap gap-3'>
        <Button icon={<ShieldCheck size={17} />} onClick={() => setSaved(true)}>Reset Password</Button>
        <Link to={isProfileFlow ? '/profile/edit' : '/auth/login'}><Button variant='secondary'>{isProfileFlow ? 'Back to Profile Edit' : 'Login'}</Button></Link>
      </div>
      {tokenSent ? <p className='mt-4 rounded-lg bg-blue-50 p-3 text-sm font-semibold text-blue-700'>Verification token sent locally. Email service is not connected.</p> : null}
      {saved ? <p className='mt-4 rounded-lg bg-emerald-50 p-3 text-sm font-semibold text-emerald-700'>Password reset successful.</p> : null}
    </>
  );

  if (!isProfileFlow) {
    return <AuthFrame title='Reset Password' description='Enter your registered email, request a verification token, then choose a new password.' eyebrow='Account recovery'>{content}</AuthFrame>;
  }

  return (
    <div className='mx-auto max-w-3xl space-y-6'>
      <PageHeader description='Reset password for the signed-in account. Email is read-only because it belongs to the current profile.' eyebrow='Security settings' title='Reset Password' />
      <Card><CardBody>{content}</CardBody></Card>
    </div>
  );
}

export function ProfilePage() {
  const [loggedOut, setLoggedOut] = useState(false);
  const { currentUser, logout, role } = useAuth();
  const navigate = useNavigate();

  if (!currentUser) return null;

  const handleLogout = () => {
    logout();
    setLoggedOut(true);
    navigate('/auth/login');
  };

  return (
    <div className='space-y-6'>
      <PageHeader
        actions={<><Link to='/profile/edit'><Button icon={<Save size={17} />} variant='secondary'>Edit Profile</Button></Link><Link to='/profile/reset-password'><Button icon={<ShieldCheck size={17} />} variant='secondary'>Reset Password</Button></Link><Button icon={<LogOut size={17} />} onClick={handleLogout} variant='ghost'>Logout</Button></>}
        description='View personal profile information before making updates.'
        eyebrow='Profile'
        title='View Personal Profile'
      />
      {loggedOut ? <div className='rounded-lg bg-amber-50 p-4 text-sm font-semibold text-amber-800'>You have been signed out.</div> : null}
      <Card>
        <CardBody className='grid gap-6 lg:grid-cols-[260px_1fr]'>
          <div className='rounded-lg bg-slate-50 p-6 text-center'>
            <div className='mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-teal-100 text-3xl font-bold text-teal-700'>{currentUser.avatar}</div>
            <h2 className='mt-4 text-xl font-bold text-slate-950'>{currentUser.fullName}</h2>
            <p className='text-sm text-slate-500'>@{currentUser.username}</p>
            <div className='mt-3 flex justify-center gap-2'><Badge tone='teal'>{role ?? currentUser.role}</Badge>{currentUser.premium ? <Badge tone='amber'>Premium</Badge> : <Badge>Free</Badge>}</div>
          </div>
          <div className='grid gap-4 md:grid-cols-2'>
            <ProfileField label='Email' value={currentUser.email} />
            <ProfileField label='Phone' value={currentUser.phone} />
            <ProfileField label='Account Status' value={<StatusPill label={currentUser.status} tone='success' />} />
            <ProfileField label='Joined At' value={currentUser.joinedAt} />
            <ProfileField label='Last Active' value={currentUser.lastActive} />
            <ProfileField label='Bio' value={currentUser.bio} />
            <ProfileField label='Preferred Language' value='English' />
            <ProfileField label='Notification Preference' value='Email + in-app' />
            <ProfileField label='Timezone' value='Asia/Bangkok' />
            <ProfileField label='Two-factor Auth' value='Disabled' />
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <h2 className='mb-4 text-lg font-bold text-slate-950'>{role ?? currentUser.role} access summary</h2>
          <div className='grid gap-3 md:grid-cols-4'>
            {roleProfileFields(role ?? currentUser.role).map((field) => <ProfileField key={field.label} label={field.label} value={field.value} />)}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export function EditProfilePage() {
  const [saved, setSaved] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');
  const [roleMessage, setRoleMessage] = useState('');
  const { currentUser, role, availableRoles, switchRole } = useAuth();
  const navigate = useNavigate();

  if (!currentUser) return null;

  const canSwitchRole = currentUser.role !== 'Admin' && availableRoles.includes('Learner') && availableRoles.includes('Teacher');
  const activeRole = role ?? currentUser.role;
  const switchRoleOptions = availableRoles.filter((item) => item !== 'Admin' && item !== activeRole);

  const handleSwitchRole = () => {
    const nextRole = selectedRole || switchRoleOptions[0];
    if (nextRole !== 'Learner' && nextRole !== 'Teacher') return;
    const changed = switchRole(nextRole);
    if (!changed) return;
    setSelectedRole('');
    setRoleMessage('Role switched successfully.');
    window.setTimeout(() => navigate(nextRole === 'Teacher' ? '/teacher/dashboard' : '/learner/dashboard'), 500);
  };

  return (
    <div className='space-y-6'>
      <PageHeader actions={<Link to='/profile/reset-password'><Button icon={<ShieldCheck size={17} />} variant='secondary'>Reset Password</Button></Link>} description='Update allowed personal profile fields: full name, phone, avatar text, and profile details.' eyebrow='Profile settings' title='Edit Personal Profile' />
      <Card>
        <CardBody className='space-y-4'>
          <div className='grid gap-4 md:grid-cols-2'>
            <Input defaultValue={currentUser.fullName} label='Full Name' />
            <Input defaultValue={currentUser.phone} label='Phone Number' />
            <Input defaultValue={currentUser.avatar} helper='Use 2 letters for profile avatar.' label='Avatar Initials' maxLength={2} />
            <Input defaultValue={currentUser.username} label='Username' />
            <Input label='Preferred Language' placeholder='English' />
            <Input label='Timezone' placeholder='Asia/Bangkok' />
          </div>
          <div className='grid gap-4 md:grid-cols-2'><Select label='Notification Preference' options={[{ value: 'email', label: 'Email' }, { value: 'in-app', label: 'In-app' }, { value: 'both', label: 'Email + in-app' }]} /><Select label='Profile Visibility' options={[{ value: 'public', label: 'Public profile' }, { value: 'private', label: 'Private profile' }]} /></div>
          {canSwitchRole ? (
            <div className='rounded-lg border border-slate-200 bg-slate-50 p-4'>
              <div className='flex flex-wrap items-end gap-3'>
                <div className='min-w-64 flex-1'>
                  <Select
                    helper='Switch only changes the active workspace for this account.'
                    label={`Switch Role - current active role: ${activeRole}`}
                    onChange={(event) => setSelectedRole(event.target.value)}
                    options={switchRoleOptions.map((item) => ({ value: item, label: item }))}
                    value={selectedRole || switchRoleOptions[0] || ''}
                  />
                </div>
                <Button icon={<Repeat2 size={17} />} onClick={handleSwitchRole} variant='secondary'>Switch Role</Button>
              </div>
              {roleMessage ? <p className='mt-3 rounded-lg bg-emerald-50 p-3 text-sm font-semibold text-emerald-700'>{roleMessage}</p> : null}
            </div>
          ) : null}
          <label className='block space-y-1.5'>
            <span className='text-sm font-semibold text-slate-700'>Profile Details</span>
            <textarea className='focus-ring min-h-28 w-full rounded-lg border border-slate-200 p-3 text-sm' defaultValue={currentUser.bio} />
          </label>
          <div className='flex flex-wrap gap-3'>
            <Button icon={<Save size={17} />} onClick={() => setSaved(true)}>Save Changes</Button>
            <Link to='/profile'><Button variant='secondary'>Cancel</Button></Link>
          </div>
          {saved ? <p className='rounded-lg bg-emerald-50 p-3 text-sm font-semibold text-emerald-700'>Profile changes saved.</p> : null}
        </CardBody>
      </Card>
    </div>
  );
}

export function ChangePasswordPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className='space-y-6'>
      <PageHeader description='Change password after accessing personal profile. Current password and confirmation are validated locally.' eyebrow='Security settings' title='Change Password' />
      <Card>
        <CardBody className='max-w-2xl space-y-4'>
          <Input error={submitted ? 'Current password is required.' : undefined} label='Current Password' type='password' />
          <Input error={submitted ? 'Minimum 8 characters, include number and letter.' : undefined} label='New Password' type='password' />
          <Input error={submitted ? 'Confirm password must match new password.' : undefined} label='Confirm New Password' type='password' />
          <Input label='Security Code' placeholder='Optional 2FA code' />
          <Select label='Logout Other Devices' options={[{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }]} />
          <Button icon={<CheckCircle2 size={17} />} onClick={() => setSubmitted(true)}>Update Password</Button>
        </CardBody>
      </Card>
    </div>
  );
}

function AuthFrame({ children, title, description, eyebrow }: { children: ReactNode; title: string; description: string; eyebrow: string }) {
  return (
    <div className='mx-auto max-w-3xl space-y-6'>
      <PageHeader description={description} eyebrow={eyebrow} title={title} />
      <Card><CardBody>{children}</CardBody></Card>
    </div>
  );
}

function ProfileField({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className='rounded-lg border border-slate-200 bg-white p-4'>
      <p className='text-xs font-bold uppercase tracking-wide text-slate-400'>{label}</p>
      <div className='mt-2 text-sm font-semibold text-slate-800'>{value}</div>
    </div>
  );
}

function roleProfileFields(role: string) {
  if (role === 'Teacher') {
    return [
      { label: 'Class Permission', value: 'Create and manage classes' },
      { label: 'Question Permission', value: 'Create, import, AI generate' },
      { label: 'Exam Permission', value: 'Configure and monitor exams' },
      { label: 'Report Permission', value: 'Export analytics reports' },
    ];
  }

  if (role === 'Admin') {
    return [
      { label: 'User Permission', value: 'Manage roles and status' },
      { label: 'Resource Permission', value: 'Hide public resources' },
      { label: 'System Permission', value: 'View service status' },
      { label: 'Audit Scope', value: 'Platform-wide' },
    ];
  }

  return [
    { label: 'Class Access', value: 'Join by code or invite' },
    { label: 'Study Access', value: 'Flashcards and quizzes' },
    { label: 'Exam Access', value: 'Take assigned exams' },
    { label: 'AI Explanation', value: 'Premium only' },
  ];
}
