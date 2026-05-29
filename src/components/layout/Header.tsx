import { Bell, LogOut, Search, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { notifications, users } from '../../data/mockData';
import { Button } from '../ui/Button';

export function Header() {
  const unread = notifications.filter((item) => item.status === 'unread').length;
  const learner = users[0];

  return (
    <header className='sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur'>
      <div className='flex h-16 items-center justify-between gap-4 px-4 lg:px-6'>
        <Link className='flex items-center gap-3 font-bold text-slate-950' to='/'>
          <span className='flex h-10 w-10 items-center justify-center rounded-lg bg-teal-600 text-white'>SQ</span>
          <span className='hidden sm:inline'>Smart Quiz Platform</span>
        </Link>

        <div className='hidden w-full max-w-xl items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 md:flex'>
          <Search size={17} />
          <span>Search study sets, users, question banks, exams</span>
        </div>

        <div className='flex items-center gap-2'>
          <Link to='/premium'>
            <Button icon={<Sparkles size={16} />} size='sm' variant='secondary'>Premium</Button>
          </Link>
          <Link className='relative rounded-lg p-2 text-slate-600 hover:bg-slate-100' to='/notifications'>
            <Bell size={20} />
            {unread ? <span className='absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-rose-500' /> : null}
          </Link>
          <Link className='hidden items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-slate-100 lg:flex' to='/profile'>
            <span className='flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-700'>{learner.avatar}</span>
            <span className='text-sm font-semibold text-slate-700'>{learner.fullName}</span>
          </Link>
          <Link to='/auth/login'>
            <Button icon={<LogOut size={16} />} size='sm' variant='ghost'>Logout</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
