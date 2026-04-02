import { User } from '@/features/auth/types';
import { create } from 'zustand';

interface AuthState {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
  setCredentials: (token: number, user?: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem('token'),
  user: JSON.parse(localStorage.getItem('user') || 'null'),
  isAuthenticated: !!localStorage.getItem('token'),

  setCredentials: (token, user) => {
    const stringToken = String(token);
    localStorage.setItem('token', stringToken);
    if (user) localStorage.setItem('user', JSON.stringify(user));
    
    set({ token: stringToken, user: user || null, isAuthenticated: true });
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    set({ token: null, user: null, isAuthenticated: false });
  },
}));