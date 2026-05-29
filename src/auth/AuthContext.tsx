import { createContext, useContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { users } from '../data/mockData';
import type { Role, User } from '../types';

type AuthRole = Exclude<Role, 'Guest'>;

interface AuthContextValue {
  currentUser: User | null;
  role: AuthRole | null;
  loginAs: (role: AuthRole) => void;
  logout: () => void;
}

const STORAGE_KEY = 'sqp-demo-role';

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

function findUserByRole(role: AuthRole | null) {
  if (!role) return null;
  return users.find((user) => user.role === role) ?? null;
}

function readStoredRole(): AuthRole | null {
  const value = window.localStorage.getItem(STORAGE_KEY);
  return value === 'Learner' || value === 'Teacher' || value === 'Admin' ? value : null;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<AuthRole | null>(() => readStoredRole());
  const currentUser = useMemo(() => findUserByRole(role), [role]);

  const loginAs = (nextRole: AuthRole) => {
    window.localStorage.setItem(STORAGE_KEY, nextRole);
    setRole(nextRole);
  };

  const logout = () => {
    window.localStorage.removeItem(STORAGE_KEY);
    setRole(null);
  };

  return <AuthContext.Provider value={{ currentUser, role, loginAs, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const value = useContext(AuthContext);
  if (!value) throw new Error('useAuth must be used inside AuthProvider');
  return value;
}
