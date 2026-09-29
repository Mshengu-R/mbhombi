import React, { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { authService } from '@/src/api/services';
import { getToken, removeToken, saveToken } from '@/src/api/client';

type AuthValue = {
  ready: boolean;
  authenticated: boolean;
  signIn(username: string, password: string): Promise<void>;
  signOut(): Promise<void>;
  clearSession(): Promise<void>;
};

const AuthContext = createContext<AuthValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    getToken().then((token) => {
      setAuthenticated(Boolean(token));
      setReady(true);
    });
  }, []);

  async function signIn(username: string, password: string) {
    const response = await authService.login(username, password);
    const token = typeof response === 'string' ? response : response.token;
    if (!token) throw new Error('The backend did not return a JWT.');
    await saveToken(token);
    setAuthenticated(true);
  }

  async function clearSession() {
    await removeToken();
    setAuthenticated(false);
  }

  async function signOut() {
    
    try {
    
      await authService.logout();
     }
      catch { /* Local logout must still work. */ }
    await clearSession();
  }

  return (
    <AuthContext.Provider value={{ ready, authenticated, signIn, signOut, clearSession }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const value = useContext(AuthContext);
  if (!value) throw new Error('useAuth must be used inside AuthProvider.');
  return value;
}
