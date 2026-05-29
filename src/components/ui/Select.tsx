import type { SelectHTMLAttributes } from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: Option[];
  helper?: string;
}

export function Select({ label, options, helper, className = '', id, ...props }: SelectProps) {
  const selectId = id ?? props.name;

  return (
    <label className='block space-y-1.5' htmlFor={selectId}>
      {label ? <span className='text-sm font-semibold text-slate-700'>{label}</span> : null}
      <select
        id={selectId}
        className={`focus-ring h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-900 ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {helper ? <span className='block text-xs text-slate-500'>{helper}</span> : null}
    </label>
  );
}
