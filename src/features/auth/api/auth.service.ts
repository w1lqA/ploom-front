import { AuthResponse } from '@/features/auth/types';
import { apiClient } from '@/shared/api/axios';

export const authService = {
  async login(params: Record<string, string>): Promise<AuthResponse> {
    const response = await apiClient.post<AuthResponse>('/authorize-user', null, { 
      params 
    });
    return response.data;
  },

  async register(formData: FormData, params: Record<string, string>): Promise<AuthResponse> {
    const response = await apiClient.post<AuthResponse>('/register-new-user', formData, {
      params
    });
    return response.data;
  }
};