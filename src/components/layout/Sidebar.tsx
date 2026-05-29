import type { LucideIcon } from 'lucide-react';
import { BarChart3, Bell, BookOpen, Building2, CreditCard, FileBarChart, Gauge, GraduationCap, Layers3, Library, Settings, Shield, Users } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext';
import { classes, exams, notifications, questionBanks, studySets, systemServices } from '../../data/mockData';
import type { Role } from '../../types';
import { Badge } from '../ui/Badge';

type AuthRole = Exclude<Role, 'Guest'>;

interface NavItem {
  label: string;
  to: string;
  icon: LucideIcon;
  badge?: string;
}

interface NavGroup {
  label: string;
  items: NavItem[];
}

const roleNav: Record<AuthRole, NavGroup[]> = {
  Learner: [
    {
      label: 'Study',
      items: [
        { label: 'Dashboard', to: '/learner/dashboard', icon: Gauge },
        { label: 'My classes', to: '/learner/classes', icon: Building2, badge: String(classes.length) },
        { label: 'Study sets', to: '/learner/study-sets', icon: BookOpen, badge: String(studySets.length) },
        { label: 'Progress', to: '/learner/progress', icon: BarChart3 },
      ],
    },
    {
      label: 'Assessment',
      items: [
        { label: 'Available exams', to: '/learner/exams', icon: GraduationCap, badge: String(exams.length) },
      ],
    },
    {
      label: 'Account',
      items: [
        { label: 'Profile', to: '/profile', icon: Users },
        { label: 'Notifications', to: '/notifications', icon: Bell, badge: String(notifications.filter((item) => item.status === 'unread').length) },
        { label: 'Premium', to: '/premium', icon: CreditCard },
      ],
    },
  ],
  Teacher: [
    {
      label: 'Teaching',
      items: [
        { label: 'Dashboard', to: '/teacher/dashboard', icon: Gauge },
        { label: 'Classes', to: '/teacher/classes', icon: Building2, badge: String(classes.length) },
        { label: 'Question banks', to: '/teacher/question-banks', icon: Layers3, badge: String(questionBanks.length) },
        { label: 'Study sets', to: '/teacher/study-sets', icon: BookOpen, badge: String(studySets.length) },
      ],
    },
    {
      label: 'Exam & report',
      items: [
        { label: 'Exam sessions', to: '/teacher/exams', icon: GraduationCap, badge: String(exams.length) },
        { label: 'Analytics', to: '/teacher/analytics', icon: BarChart3 },
        { label: 'Export report', to: '/teacher/reports/export', icon: FileBarChart },
      ],
    },
    {
      label: 'Account',
      items: [
        { label: 'Profile', to: '/profile', icon: Users },
        { label: 'Notifications', to: '/notifications', icon: Bell, badge: String(notifications.filter((item) => item.status === 'unread').length) },
        { label: 'Premium', to: '/premium', icon: CreditCard },
      ],
    },
  ],
  Admin: [
    {
      label: 'Administration',
      items: [
        { label: 'Dashboard', to: '/admin/dashboard', icon: Shield },
        { label: 'Users', to: '/admin/users', icon: Users },
        { label: 'Resources', to: '/admin/resources', icon: Library },
        { label: 'System status', to: '/admin/system-status', icon: Settings, badge: String(systemServices.filter((service) => service.status !== 'operational').length) },
      ],
    },
    {
      label: 'Shared',
      items: [
        { label: 'Profile', to: '/profile', icon: Users },
        { label: 'Notifications', to: '/notifications', icon: Bell, badge: String(notifications.filter((item) => item.status === 'unread').length) },
      ],
    },
  ],
};

const roleStats: Record<AuthRole, { label: string; value: string }[]> = {
  Learner: [
    { label: 'Classes', value: String(classes.length) },
    { label: 'Due exams', value: String(exams.length) },
    { label: 'Accuracy', value: '76%' },
  ],
  Teacher: [
    { label: 'Classes', value: String(classes.length) },
    { label: 'Banks', value: String(questionBanks.length) },
    { label: 'Open exams', value: String(exams.filter((exam) => exam.status === 'open').length) },
  ],
  Admin: [
    { label: 'Users', value: '5' },
    { label: 'Resources', value: String(studySets.filter((set) => set.visibility === 'public').length) },
    { label: 'Alerts', value: String(systemServices.filter((service) => service.status !== 'operational').length) },
  ],
};

const roleDescription: Record<AuthRole, string> = {
  Learner: 'Study assigned sets, take exams, and review progress.',
  Teacher: 'Manage classes, content, exams, and reports.',
  Admin: 'Manage users, resources, and platform health.',
};

export function Sidebar() {
  const { currentUser, role } = useAuth();
  if (!currentUser || !role) return null;

  const groups = roleNav[role];

  return (
    <aside className='hidden w-72 shrink-0 border-r border-slate-200 bg-white lg:block'>
      <nav className='sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto p-4'>
        <div className='mb-5 rounded-lg border border-slate-200 bg-slate-50 p-4'>
          <p className='text-xs font-bold uppercase tracking-wide text-slate-400'>{role} workspace</p>
          <h2 className='mt-1 font-bold text-slate-950'>{currentUser.fullName}</h2>
          <p className='mt-1 text-xs leading-5 text-slate-500'>{roleDescription[role]}</p>
          <div className='mt-4 grid grid-cols-3 gap-2'>
            {roleStats[role].map((item) => (
              <div className='rounded-lg bg-white p-2 text-center' key={item.label}>
                <p className='text-lg font-bold text-slate-950'>{item.value}</p>
                <p className='text-[11px] font-semibold text-slate-500'>{item.label}</p>
              </div>
            ))}
          </div>
        </div>

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
                      `flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition ${
                        isActive ? 'bg-teal-50 text-teal-700' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
                      }`
                    }
                    to={item.to}
                  >
                    <span className='inline-flex min-w-0 items-center gap-3'>
                      <Icon className='shrink-0' size={17} />
                      <span className='truncate'>{item.label}</span>
                    </span>
                    {item.badge ? <Badge tone='slate'>{item.badge}</Badge> : null}
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
