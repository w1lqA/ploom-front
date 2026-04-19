import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { AxiosError } from 'axios';
import { toast } from 'sonner';
import { useAuthStore } from '@/features/auth/stores/auth.store';
import { authService } from '@/features/auth/api/auth.service';
import { ApiError } from '@/shared/types';

export function useAuth() {
  const setCredentials = useAuthStore((s) => s.setCredentials);
  const clearCredentials = useAuthStore((s) => s.logout); 
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: authService.login,
    onSuccess: (data) => {
      setCredentials(data.token, data.user);
      toast.success(data.message || 'Успешный вход!');
      navigate('/');
    },
    onError: (error: AxiosError<ApiError>) => {
      toast.error(error.response?.data?.message || 'Ошибка входа');
    }
  });

  const registerMutation = useMutation({
    mutationFn: ({ formData, params }: { formData: FormData; params: Record<string, string> }) =>
      authService.register(formData, params),
    onSuccess: (data) => {
      toast.success(data.message);
      navigate('/login'); 
    },
    onError: (error: AxiosError<ApiError>) => {
      toast.error(error.response?.data?.message || 'Ошибка регистрации');
    }
  });

  const logout = () => {
    clearCredentials();
    toast.info('Вы вышли из системы');
    navigate('/login');
  };

  return {
    login: loginMutation.mutate,
    isLoggingIn: loginMutation.isPending,
    register: registerMutation.mutate,
    isRegistering: registerMutation.isPending,
    logout,
  };
}