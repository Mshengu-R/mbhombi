import { api } from './client';
import type { Account, Profile, RegisterRequest } from '@/src/types';

// Authentication service functions
export const authService = {
  login: (username: string, password: string) =>
    api<string | { token: string }>('/api/v1/auth/login', {
      method: 'POST', body: JSON.stringify({ username, password }),
    }),
  register: (body: RegisterRequest) => api<string>('/api/v1/auth/register', {
    method: 'POST', body: JSON.stringify(body),
  }),
  logout: () => api('/api/v1/auth/logout', { method: 'POST' }),
};

// Account service functions
export const accountService = {
  list: async (): Promise<Account[]> => {
    const result = await api<Account[] | { accounts?: Account[]; content?: Account[] }>('/api/v1/accounts');
    if (Array.isArray(result)) return result;
    return result.accounts ?? result.content ?? [];
  },
  create: (body: object) => api<Account>('/api/v1/accounts/', {
    method: 'POST', body: JSON.stringify(body),
  }),
};

// Profile service functions
export const profileService = {
  me: () => api<Profile>('/api/v1/profiles/me'),
  update: (body: Profile) => api<Profile>('/api/v1/profiles/me', {
    method: 'PUT', body: JSON.stringify(body),
  }),
  remove: () => api('/api/v1/profiles/me', { method: 'DELETE' }),
};
