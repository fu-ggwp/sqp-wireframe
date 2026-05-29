import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

export function AppShell() {
  return (
    <div className='min-h-screen bg-slate-50'>
      <Header />
      <div className='flex'>
        <Sidebar />
        <main className='min-w-0 flex-1 px-4 py-6 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-7xl space-y-6'>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
