// src/features/generation/hooks/useGenerate.ts
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { generationService } from '../api/generation.service';
import { useAuthStore } from '@/features/auth/stores/auth.store';
import { AxiosError } from 'axios';
import { ApiError } from '@/shared/types';

interface GenerateMutationResult {
  modelUrl: string;
  message: string;
}

export function useGenerate() {
  const user = useAuthStore((state) => state.user);

  return useMutation<GenerateMutationResult, AxiosError<ApiError>, File[]>({
    mutationFn: async (files: File[]) => {
      if (!user?.user_id) throw new Error('Пользователь не авторизован');
      const response = await generationService.generate(user.user_id, files);
      return {
        modelUrl: response.generated_image_url,
        message: response.message
      };
    },
    onSuccess: (data) => {
      toast.success(data.message || '3D модель успешно создана!');
    },
    onError: (error: AxiosError<ApiError>) => {
      const message = error.response?.data?.message || 'Ошибка генерации';
      toast.error(message);
    }
  });
}