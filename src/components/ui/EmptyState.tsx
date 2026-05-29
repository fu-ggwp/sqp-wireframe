import type { ReactNode } from 'react';

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description: string;
  action?: ReactNode;
}

export function EmptyState({ icon, title, description, action }: EmptyStateProps) {
  return (
    <div className='rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center'>
      {icon ? <div className='mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-600'>{icon}</div> : null}
      <h3 className='text-base font-bold text-slate-950'>{title}</h3>
      <p className='mx-auto mt-1 max-w-md text-sm text-slate-500'>{description}</p>
      {action ? <div className='mt-5'>{action}</div> : null}
    </div>
  );
}
