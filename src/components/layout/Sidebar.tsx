import type { LucideIcon } from 'lucide-react';
import {
  BarChart3,
  Bell,
  BookOpen,
  Building2,
  CreditCard,
  Gauge,
  GraduationCap,
  Home,
  KeyRound,
  Layers3,
  Library,
  Search,
  Settings,
  Shield,
  Users,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

interface NavItem {
  label: string;
  to: string;
  icon: LucideIcon;
}

interface NavGroup {
  label: string;
  items: NavItem[];
}

const groups: NavGroup[] = [
  {
    label: 'Public navigation',
    items: [
      { label: 'Home', to: '/', icon: Home },
      { label: 'Study set search', to: '/search/study-sets', icon: Search },
      { label: 'User search', to: '/search/users', icon: Users },
      { label: 'Public set detail', to: '/sets/set-bio-cell/public', icon: Library },
    ],
  },
  {
    label: 'Authentication',
    items: [
      { label: 'Register', to: '/auth/register', icon: KeyRound },
      { label: 'Login', to: '/auth/login', icon: KeyRound },
      { label: 'Profile', to: '/profile', icon: Users },
    ],
  },
  {
    label: 'Learner navigation',
    items: [
      { label: 'Dashboard', to: '/learner/dashboard', icon: Gauge },
      { label: 'Classes', to: '/learner/classes', icon: Building2 },
      { label: 'Study sets', to: '/learner/study-sets', icon: BookOpen },
      { label: 'Exams', to: '/learner/exams', icon: GraduationCap },
      { label: 'Progress', to: '/learner/progress', icon: BarChart3 },
    ],
  },
  {
    label: 'Teacher navigation',
    items: [
      { label: 'Dashboard', to: '/teacher/dashboard', icon: Gauge },
      { label: 'Classes', to: '/teacher/classes', icon: Building2 },
      { label: 'Question banks', to: '/teacher/question-banks', icon: Layers3 },
      { label: 'Exams', to: '/teacher/exams', icon: GraduationCap },
      { label: 'Analytics', to: '/teacher/analytics', icon: BarChart3 },
    ],
  },
  {
    label: 'Admin navigation',
    items: [
      { label: 'Admin dashboard', to: '/admin/dashboard', icon: Shield },
      { label: 'Users', to: '/admin/users', icon: Users },
      { label: 'Resources', to: '/admin/resources', icon: Library },
      { label: 'System status', to: '/admin/system-status', icon: Settings },
    ],
  },
  {
    label: 'Payment & utility',
    items: [
      { label: 'Premium plans', to: '/premium', icon: CreditCard },
      { label: 'Notifications', to: '/notifications', icon: Bell },
    ],
  },
];

export function Sidebar() {
  return (
    <aside className='hidden w-72 shrink-0 border-r border-slate-200 bg-white lg:block'>
      <nav className='sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto p-4'>
        {groups.map((group) => (
          <div key={group.label} className='mb-5'>
            <p className='mb-2 px-2 text-xs font-bold uppercase tracking-wide text-slate-400'>{group.label}</p>
            <div className='space-y-1'>
              {group.items.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.to}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition ${
                        isActive ? 'bg-teal-50 text-teal-700' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
                      }`
                    }
                    end={item.to === '/'}
                    to={item.to}
                  >
                    <Icon size={17} />
                    {item.label}
                  </NavLink>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}
