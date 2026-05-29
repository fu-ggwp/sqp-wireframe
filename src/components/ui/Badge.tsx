import type { ReactNode } from 'react';

type BadgeTone = 'slate' | 'teal' | 'blue' | 'amber' | 'rose' | 'emerald';

const toneClasses: Record<BadgeTone, string> = {
  slate: 'bg-slate-100 text-slate-700 border-slate-200',
  teal: 'bg-teal-50 text-teal-700 border-teal-100',
  blue: 'bg-blue-50 text-blue-700 border-blue-100',
  amber: 'bg-amber-50 text-amber-700 border-amber-100',
  rose: 'bg-rose-50 text-rose-700 border-rose-100',
  emerald: 'bg-emerald-50 text-emerald-700 border-emerald-100',
};

export function Badge({ children, tone = 'slate' }: { children: ReactNode; tone?: BadgeTone }) {
  return <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${toneClasses[tone]}`}>{children}</span>;
}
