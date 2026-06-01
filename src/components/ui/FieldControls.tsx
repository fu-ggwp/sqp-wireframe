import type { ReactNode } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Button } from './Button';
import { Card, CardBody } from './Card';
import { Input } from './Input';
import { Select } from './Select';

interface FilterOption {
  label: string;
  options: { value: string; label: string }[];
  value?: string;
  onChange?: (value: string) => void;
}

interface ListFieldBarProps {
  searchLabel?: string;
  searchPlaceholder?: string;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  filters?: FilterOption[];
  sortOptions?: { value: string; label: string }[];
  sortValue?: string;
  onSortChange?: (value: string) => void;
  children?: ReactNode;
}

export function ListFieldBar({
  searchLabel = 'Search Keyword',
  searchPlaceholder = 'Enter keyword',
  searchValue,
  onSearchChange,
  filters = [],
  sortOptions = [
    { value: 'latest', label: 'Latest updated' },
    { value: 'name-asc', label: 'Name A-Z' },
    { value: 'name-desc', label: 'Name Z-A' },
  ],
  sortValue,
  onSortChange,
  children,
}: ListFieldBarProps) {
  return (
    <Card>
      <CardBody className='space-y-4'>
        <div className='grid gap-4 md:grid-cols-[minmax(240px,1fr)_repeat(2,minmax(170px,220px))_auto]'>
          <Input
            label={searchLabel}
            onChange={(event) => onSearchChange?.(event.target.value)}
            placeholder={searchPlaceholder}
            value={searchValue}
          />
          {filters.slice(0, 2).map((filter) => (
            <Select key={filter.label} label={filter.label} onChange={(event) => filter.onChange?.(event.target.value)} options={filter.options} value={filter.value} />
          ))}
          <div className='flex items-end'>
            <Button icon={<Search size={16} />} variant='secondary'>Apply</Button>
          </div>
        </div>
        <div className='grid gap-4 md:grid-cols-3 xl:grid-cols-4'>
          {filters.slice(2).map((filter) => (
            <Select key={filter.label} label={filter.label} onChange={(event) => filter.onChange?.(event.target.value)} options={filter.options} value={filter.value} />
          ))}
          <Select label='Sort By' onChange={(event) => onSortChange?.(event.target.value)} options={sortOptions} value={sortValue} />
          <div className='flex items-end justify-end gap-2'>
            {children}
            <Button icon={<SlidersHorizontal size={16} />} variant='ghost'>Reset Filters</Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export function PaginationBar({ label = 'Showing 1-10 of 24 records', compact = false }: { label?: string; compact?: boolean }) {
  const controls = (
    <div className='flex flex-wrap items-center gap-2'>
      {!compact ? <Select className='h-9 w-28' label='Rows Per Page' options={[{ value: '10', label: '10 rows' }, { value: '25', label: '25 rows' }, { value: '50', label: '50 rows' }]} /> : null}
      <Button size='sm' variant='secondary'>Previous</Button>
      <Button size='sm'>1</Button>
      <Button size='sm' variant='secondary'>2</Button>
      <Button size='sm' variant='secondary'>Next</Button>
    </div>
  );

  if (compact) return <div className='flex justify-end'>{controls}</div>;

  return (
    <div className='flex flex-wrap items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm'>
      <span className='font-semibold text-slate-600'>{label}</span>
      {controls}
    </div>
  );
}

export function FieldNote({ children }: { children: ReactNode }) {
  return <div className='rounded-lg border border-dashed border-slate-300 bg-slate-50 p-4 text-sm font-semibold text-slate-600'>{children}</div>;
}
