import { Bell, Crown, LogOut, Plus, Search, Sparkles } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext';
import { notifications } from '../../data/mockData';
import { Button } from '../ui/Button';

const workspaceCopy = {
  Guest: {
    label: 'Public discovery',
    home: '/',
    searchPlaceholder: 'Search public study sets and users',
  },
  Learner: {
    label: 'Learner workspace',
    home: '/learner/dashboard',
    searchPlaceholder: 'Search study sets, classes, exams, weak topics',
  },
  Teacher: {
    label: 'Teacher workspace',
    home: '/teacher/dashboard',
    searchPlaceholder: 'Search classes, question banks, exams, reports',
  },
  Admin: {
    label: 'Admin workspace',
    home: '/admin/dashboard',
    searchPlaceholder: 'Search users, resources, services, alerts',
  },
};

export function Header() {
  const { currentUser, role, logout } = useAuth();
  const navigate = useNavigate();
  const activeRole = role ?? 'Guest';
  const workspace = workspaceCopy[activeRole];
  const unread = notifications.filter((item) => item.status === 'unread').length;
  const accountLabel = currentUser?.fullName ?? 'Guest';
  const avatar = currentUser?.avatar ?? 'G';

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className='sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur'>
      <div className='flex min-h-16 flex-wrap items-center justify-between gap-3 px-4 py-3 lg:px-6'>
        <Link className='flex items-center gap-3 font-bold text-slate-950' to={workspace.home}>
          <span className='flex h-10 w-10 items-center justify-center rounded-lg bg-teal-600 text-white'>SQ</span>
          <span className='hidden sm:block'>Smart Quiz Platform</span>
          {activeRole !== 'Guest' ? <span className='hidden rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-600 xl:inline-flex'>{workspace.label}</span> : null}
        </Link>

        {!currentUser ? (
          <nav className='hidden items-center gap-5 text-sm font-bold text-slate-600 lg:flex'>
            <Link className='hover:text-slate-950' to='/search/study-sets'>Subjects</Link>
            <Link className='hover:text-slate-950' to='/search/users'>Creators</Link>
          </nav>
        ) : null}

        <div className='order-3 flex w-full items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 md:order-none md:max-w-lg'>
          <Search size={17} />
          <span>{workspace.searchPlaceholder}</span>
        </div>

        {currentUser ? (
          <div className='flex items-center gap-2'>
            {role !== 'Admin' ? <Link to='/premium'><Button icon={<Sparkles size={16} />} size='sm' variant='secondary'>Premium</Button></Link> : null}
            <Link className='relative rounded-lg p-2 text-slate-600 hover:bg-slate-100' to='/notifications'>
              <Bell size={20} />
              {unread ? <span className='absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-rose-500' /> : null}
            </Link>
            <Link className='hidden items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-slate-100 lg:flex' to='/profile'>
              <span className='flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-700'>{avatar}</span>
              <span className='max-w-36 truncate text-sm font-semibold text-slate-700'>{accountLabel}</span>
              {currentUser.premium ? <Crown className='text-amber-500' size={15} /> : null}
            </Link>
            <Button icon={<LogOut size={16} />} onClick={handleLogout} size='sm' variant='ghost'>Logout</Button>
          </div>
        ) : (
          <div className='flex items-center gap-2'>
            <Link to='/auth/register'><Button icon={<Plus size={16} />} size='sm' variant='ghost'>Create</Button></Link>
            <Link className='hidden text-sm font-bold text-slate-600 hover:text-slate-950 md:inline-flex' to='/premium'>Premium</Link>
            <Link to='/auth/login'><Button size='sm' variant='secondary'>Login</Button></Link>
            <Link to='/auth/register'><Button size='sm'>Register</Button></Link>
          </div>
        )}
      </div>
    </header>
  );
}
