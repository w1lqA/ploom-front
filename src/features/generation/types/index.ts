export interface GenerationResponse {
  message: string;
  generated_image_url: string;
}

export interface GenerationParams {
  userId: string | number;
  images: File[];
}