import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { generationService } from '../api/generation.service';
import { useAuthStore } from '@/features/auth/stores/auth.store';
import { AxiosError } from 'axios';
import { ApiError } from '@/shared/types';

export function useGenerate() {
  const user = useAuthStore((state) => state.user);

  return useMutation({
    mutationFn: (files: File[]) => {
      if (!user?.user_id) throw new Error('Пользователь не авторизован');
      return generationService.generate(user.user_id, files);
    },
    onSuccess: () => {
      toast.success('3D модель успешно создана!');
    },
    onError: (error: AxiosError<ApiError>) => {
      const message = error.response?.data?.message || 'Ошибка генерации';
      toast.error(message);
    }
  });
}