import type { ReactNode } from 'react';
import { X } from 'lucide-react';
import { Button } from './Button';

interface ModalProps {
  open: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
  footer?: ReactNode;
}

export function Modal({ open, title, children, onClose, footer }: ModalProps) {
  if (!open) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4'>
      <div className='w-full max-w-lg rounded-lg bg-white shadow-soft'>
        <div className='flex items-center justify-between border-b border-slate-100 p-5'>
          <h2 className='text-lg font-bold text-slate-950'>{title}</h2>
          <Button aria-label='Close modal' icon={<X size={18} />} onClick={onClose} size='sm' variant='ghost' />
        </div>
        <div className='p-5'>{children}</div>
        {footer ? <div className='flex justify-end gap-3 border-t border-slate-100 p-5'>{footer}</div> : null}
      </div>
    </div>
  );
}
