import { createContext, useContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { users } from '../data/mockData';
import type { Role, User } from '../types';

type AuthRole = Exclude<Role, 'Guest'>;

interface AuthContextValue {
  currentUser: User | null;
  role: AuthRole | null;
  availableRoles: AuthRole[];
  loginAs: (role: AuthRole) => void;
  switchRole: (role: AuthRole) => boolean;
  logout: () => void;
}

const STORAGE_KEY = 'sqp-demo-auth';
const LEGACY_ROLE_KEY = 'sqp-demo-role';

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

function findUserByRole(role: AuthRole | null) {
  if (!role) return null;
  return users.find((user) => user.role === role) ?? null;
}

function isAuthRole(value: string | null): value is AuthRole {
  return value === 'Learner' || value === 'Teacher' || value === 'Admin';
}

function readStoredAuth(): { userId: string; role: AuthRole } | null {
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (raw) {
    try {
      const parsed = JSON.parse(raw) as { userId?: string; role?: string };
      const parsedRole = parsed.role ?? null;
      if (parsed.userId && isAuthRole(parsedRole)) return { userId: parsed.userId, role: parsedRole };
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }

  const legacyRole = window.localStorage.getItem(LEGACY_ROLE_KEY);
  if (isAuthRole(legacyRole)) {
    const user = findUserByRole(legacyRole);
    if (user) return { userId: user.id, role: legacyRole };
  }

  return null;
}

function writeStoredAuth(userId: string, role: AuthRole) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ userId, role }));
  window.localStorage.removeItem(LEGACY_ROLE_KEY);
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState<{ userId: string; role: AuthRole } | null>(() => readStoredAuth());
  const currentUser = useMemo(() => users.find((user) => user.id === auth?.userId) ?? null, [auth?.userId]);
  const role = auth?.role ?? null;
  const availableRoles = useMemo(() => currentUser?.availableRoles ?? [], [currentUser]);

  const loginAs = (nextRole: AuthRole) => {
    const user = findUserByRole(nextRole);
    if (!user) return;
    writeStoredAuth(user.id, nextRole);
    setAuth({ userId: user.id, role: nextRole });
  };

  const switchRole = (nextRole: AuthRole) => {
    if (!currentUser || currentUser.role === 'Admin' || nextRole === 'Admin') return false;
    if (!currentUser.availableRoles.includes(nextRole)) return false;
    writeStoredAuth(currentUser.id, nextRole);
    setAuth({ userId: currentUser.id, role: nextRole });
    return true;
  };

  const logout = () => {
    window.localStorage.removeItem(STORAGE_KEY);
    window.localStorage.removeItem(LEGACY_ROLE_KEY);
    setAuth(null);
  };

  return <AuthContext.Provider value={{ currentUser, role, availableRoles, loginAs, switchRole, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const value = useContext(AuthContext);
  if (!value) throw new Error('useAuth must be used inside AuthProvider');
  return value;
}
