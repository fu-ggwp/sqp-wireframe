import type { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
  actions?: ReactNode;
  eyebrow?: string;
}

export function PageHeader({ title, description, actions }: PageHeaderProps) {
  return (
    <div className='flex flex-col gap-4 border-b border-slate-200 pb-6 lg:flex-row lg:items-end lg:justify-between'>
      <div className='max-w-3xl'>
        <h1 className='text-3xl font-bold tracking-tight text-slate-950'>{title}</h1>
        <p className='mt-2 text-sm leading-6 text-slate-600'>{description}</p>
      </div>
      {actions ? <div className='flex flex-wrap gap-3'>{actions}</div> : null}
    </div>
  );
}
