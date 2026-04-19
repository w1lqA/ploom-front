import { GenerationResponse } from '@/features/generation/types';
import { apiClient } from '@/shared/api/axios';

export const generationService = {
  async generate(userId: string | number, files: File[]): Promise<GenerationResponse> {
    const formData = new FormData();
    
    const isMultiple = files.length > 1;
    const path = isMultiple ? '/generate-from-multiple' : '/generate-from-single';
    const fieldName = isMultiple ? 'images' : 'image';

    files.forEach((file) => {
      formData.append(fieldName, file);
    });

    const response = await apiClient.post<GenerationResponse>(path, formData, {
      params: { user_id: userId },
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    
    return response.data;
  }
};