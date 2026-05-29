import { useState } from 'react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, KeyRound, LogOut, Mail, Save, ShieldCheck, UserPlus } from 'lucide-react';
import { users } from '../data/mockData';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card, CardBody } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { PageHeader } from '../components/ui/PageHeader';
import { Select } from '../components/ui/Select';
import { StatusPill } from '../components/ui/StatusPill';

const currentUser = users[0];

export function RegisterPage() {
  const [submitted, setSubmitted] = useState(false);
  const emailError = submitted ? 'Email is required and must be unique.' : undefined;

  return (
    <AuthFrame title='Register Account' description='Guest creates a Learner or Teacher account with local validation state.' uc='UC-07'>
      <div className='grid gap-4 md:grid-cols-2'>
        <Input label='Full Name' placeholder='Nguyen Van A' />
        <Input error={submitted ? 'Required field.' : undefined} label='Email Address' placeholder='user@example.com' type='email' />
        <Input label='Phone Number' placeholder='+84 900 000 000' />
        <Select label='Requested Role' options={[{ value: 'Learner', label: 'Learner' }, { value: 'Teacher', label: 'Teacher' }]} />
        <Input error={submitted ? 'Password must contain at least 8 characters.' : undefined} label='Password' type='password' />
        <Input error={submitted ? 'Confirm password must match password.' : undefined} label='Confirm Password' type='password' />
      </div>
      <div className='mt-4 rounded-lg bg-amber-50 p-3 text-sm text-amber-800'>Validation mock: duplicate email, password length, required fields, and terms acceptance.</div>
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

  return (
    <AuthFrame title='Login with Account' description='Mock account login and Google OAuth button. Role switch only changes target navigation.' uc='UC-08, UC-09, UC-11'>
      <div className='space-y-4'>
        <Input label='Email Address' placeholder='linh@sqp.edu.vn' type='email' />
        <Input label='Password' placeholder='Enter password' type='password' />
        <Select label='Mock Login Role' options={[{ value: 'learner', label: 'Learner dashboard' }, { value: 'teacher', label: 'Teacher dashboard' }, { value: 'admin', label: 'Admin dashboard' }]} />
      </div>
      <div className='mt-5 flex flex-wrap gap-3'>
        <Button icon={<KeyRound size={17} />} onClick={() => setMessage('Login successful. Session and Supabase token are mocked.')}>Login</Button>
        <Button icon={<Mail size={17} />} onClick={() => setMessage('Google OAuth popup mocked. No external provider called.')} variant='secondary'>Continue with Google</Button>
        <Link to='/auth/forgot-password'><Button variant='ghost'>Forgot password</Button></Link>
      </div>
      {message ? <p className='mt-4 rounded-lg bg-emerald-50 p-3 text-sm font-semibold text-emerald-700'>{message}</p> : null}
    </AuthFrame>
  );
}

export function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);

  return (
    <AuthFrame title='Forgot Password' description='User requests a password reset email. Email service action is mocked.' uc='UC-10'>
      <Input label='Registered Email Address' placeholder='user@example.com' type='email' />
      <div className='mt-5 flex gap-3'>
        <Button icon={<Mail size={17} />} onClick={() => setSent(true)}>Send Reset Link</Button>
        <Link to='/auth/login'><Button variant='ghost'>Back to login</Button></Link>
      </div>
      {sent ? <p className='mt-4 rounded-lg bg-blue-50 p-3 text-sm font-semibold text-blue-700'>Reset link sent. Mock email delivery status: queued.</p> : null}
    </AuthFrame>
  );
}

export function ResetPasswordPage() {
  const [saved, setSaved] = useState(false);

  return (
    <AuthFrame title='Reset Password' description='User enters reset token and new password. Validation state is shown locally.' uc='UC-10'>
      <div className='space-y-4'>
        <Input label='Reset Token' placeholder='Token from email link' />
        <Input label='New Password' type='password' />
        <Input helper='Must match the new password field.' label='Confirm New Password' type='password' />
      </div>
      <div className='mt-5 flex gap-3'>
        <Button icon={<ShieldCheck size={17} />} onClick={() => setSaved(true)}>Reset Password</Button>
        <Link to='/auth/login'><Button variant='secondary'>Login</Button></Link>
      </div>
      {saved ? <p className='mt-4 rounded-lg bg-emerald-50 p-3 text-sm font-semibold text-emerald-700'>Password reset successful. Login session remains mocked.</p> : null}
    </AuthFrame>
  );
}

export function ProfilePage() {
  const [loggedOut, setLoggedOut] = useState(false);

  return (
    <div className='space-y-6'>
      <PageHeader
        actions={<><Link to='/profile/edit'><Button icon={<Save size={17} />} variant='secondary'>Edit Profile</Button></Link><Button icon={<LogOut size={17} />} onClick={() => setLoggedOut(true)} variant='ghost'>Logout Mock</Button></>}
        description='View personal profile information before making updates.'
        eyebrow='UC-12, UC-11'
        title='View Personal Profile'
      />
      {loggedOut ? <div className='rounded-lg bg-amber-50 p-4 text-sm font-semibold text-amber-800'>Logout action mocked. No session token was destroyed.</div> : null}
      <Card>
        <CardBody className='grid gap-6 lg:grid-cols-[260px_1fr]'>
          <div className='rounded-lg bg-slate-50 p-6 text-center'>
            <div className='mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-teal-100 text-3xl font-bold text-teal-700'>{currentUser.avatar}</div>
            <h2 className='mt-4 text-xl font-bold text-slate-950'>{currentUser.fullName}</h2>
            <p className='text-sm text-slate-500'>@{currentUser.username}</p>
            <div className='mt-3 flex justify-center gap-2'><Badge tone='teal'>{currentUser.role}</Badge>{currentUser.premium ? <Badge tone='amber'>Premium</Badge> : <Badge>Free</Badge>}</div>
          </div>
          <div className='grid gap-4 md:grid-cols-2'>
            <ProfileField label='Email' value={currentUser.email} />
            <ProfileField label='Phone' value={currentUser.phone} />
            <ProfileField label='Account Status' value={<StatusPill label={currentUser.status} tone='success' />} />
            <ProfileField label='Joined At' value={currentUser.joinedAt} />
            <ProfileField label='Last Active' value={currentUser.lastActive} />
            <ProfileField label='Bio' value={currentUser.bio} />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export function EditProfilePage() {
  const [saved, setSaved] = useState(false);

  return (
    <div className='space-y-6'>
      <PageHeader description='Update allowed personal profile fields: full name, phone, avatar text, and profile details.' eyebrow='UC-13' title='Edit Personal Profile' />
      <Card>
        <CardBody className='space-y-4'>
          <div className='grid gap-4 md:grid-cols-2'>
            <Input defaultValue={currentUser.fullName} label='Full Name' />
            <Input defaultValue={currentUser.phone} label='Phone Number' />
            <Input defaultValue={currentUser.avatar} helper='Use 2 letters for mock avatar.' label='Avatar Initials' maxLength={2} />
            <Input defaultValue={currentUser.username} label='Username' />
          </div>
          <label className='block space-y-1.5'>
            <span className='text-sm font-semibold text-slate-700'>Profile Details</span>
            <textarea className='focus-ring min-h-28 w-full rounded-lg border border-slate-200 p-3 text-sm' defaultValue={currentUser.bio} />
          </label>
          <div className='flex flex-wrap gap-3'>
            <Button icon={<Save size={17} />} onClick={() => setSaved(true)}>Save Changes</Button>
            <Link to='/profile'><Button variant='secondary'>Cancel</Button></Link>
          </div>
          {saved ? <p className='rounded-lg bg-emerald-50 p-3 text-sm font-semibold text-emerald-700'>Profile changes saved locally for prototype only.</p> : null}
        </CardBody>
      </Card>
    </div>
  );
}

export function ChangePasswordPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className='space-y-6'>
      <PageHeader description='Change password after accessing personal profile. Current password and confirmation are validated locally.' eyebrow='UC-14' title='Change Password' />
      <Card>
        <CardBody className='max-w-2xl space-y-4'>
          <Input error={submitted ? 'Current password is required.' : undefined} label='Current Password' type='password' />
          <Input error={submitted ? 'Minimum 8 characters, include number and letter.' : undefined} label='New Password' type='password' />
          <Input error={submitted ? 'Confirm password must match new password.' : undefined} label='Confirm New Password' type='password' />
          <Button icon={<CheckCircle2 size={17} />} onClick={() => setSubmitted(true)}>Update Password</Button>
        </CardBody>
      </Card>
    </div>
  );
}

function AuthFrame({ children, title, description, uc }: { children: ReactNode; title: string; description: string; uc: string }) {
  return (
    <div className='mx-auto max-w-3xl space-y-6'>
      <PageHeader description={description} eyebrow={uc} title={title} />
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
