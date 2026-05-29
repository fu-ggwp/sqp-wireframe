interface ProgressProps {
  value: number;
  label?: string;
}

export function Progress({ value, label }: ProgressProps) {
  const bounded = Math.max(0, Math.min(100, value));

  return (
    <div className='space-y-1.5'>
      {label ? <div className='flex justify-between text-xs font-semibold text-slate-600'><span>{label}</span><span>{bounded}%</span></div> : null}
      <div className='h-2 overflow-hidden rounded-full bg-slate-100'>
        <div className='h-full rounded-full bg-teal-600' style={{ width: `${bounded}%` }} />
      </div>
    </div>
  );
}
