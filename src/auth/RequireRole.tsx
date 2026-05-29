import type { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import type { Role } from '../types';
import { useAuth } from './AuthContext';

type AuthRole = Exclude<Role, 'Guest'>;

export function RequireRole({ allowed, children }: { allowed: AuthRole[]; children: ReactNode }) {
  const { role } = useAuth();
  const location = useLocation();

  if (!role) {
    return <Navigate replace state={{ from: location.pathname }} to='/auth/login' />;
  }

  if (!allowed.includes(role)) {
    return <Navigate replace to='/access-denied' />;
  }

  return children;
}

export function AllowGuestOrRole({ allowed, children }: { allowed: AuthRole[]; children: ReactNode }) {
  const { role } = useAuth();

  if (role && !allowed.includes(role)) {
    return <Navigate replace to='/access-denied' />;
  }

  return children;
}
