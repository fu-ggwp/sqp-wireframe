import type { InputHTMLAttributes, ReactNode } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helper?: ReactNode;
  error?: ReactNode;
}

export function Input({ label, helper, error, className = '', id, ...props }: InputProps) {
  const inputId = id ?? props.name;

  return (
    <label className='block space-y-1.5' htmlFor={inputId}>
      {label ? <span className='text-sm font-semibold text-slate-700'>{label}</span> : null}
      <input
        id={inputId}
        className={`focus-ring h-11 w-full rounded-lg border bg-white px-3 text-sm text-slate-900 placeholder:text-slate-400 ${error ? 'border-rose-300 bg-rose-50' : 'border-slate-200'} ${className}`}
        {...props}
      />
      {error ? <span className='block text-xs font-medium text-rose-600'>{error}</span> : null}
      {!error && helper ? <span className='block text-xs text-slate-500'>{helper}</span> : null}
    </label>
  );
}
