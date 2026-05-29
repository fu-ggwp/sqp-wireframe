import type { ReactNode } from 'react';

interface TableProps {
  headers: string[];
  rows: ReactNode[][];
  emptyMessage?: string;
}

export function Table({ headers, rows, emptyMessage = 'No records found.' }: TableProps) {
  return (
    <div className='overflow-hidden rounded-lg border border-slate-200 bg-white'>
      <div className='overflow-x-auto'>
        <table className='min-w-full divide-y divide-slate-200 text-sm'>
          <thead className='bg-slate-50 text-left text-xs font-bold uppercase tracking-wide text-slate-500'>
            <tr>
              {headers.map((header) => (
                <th key={header} className='px-4 py-3'>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className='divide-y divide-slate-100'>
            {rows.length > 0 ? (
              rows.map((row, index) => (
                <tr key={index} className='align-top hover:bg-slate-50'>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className='px-4 py-3 text-slate-700'>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td className='px-4 py-8 text-center text-slate-500' colSpan={headers.length}>
                  {emptyMessage}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
