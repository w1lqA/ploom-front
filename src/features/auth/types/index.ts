export interface User {
  user_id: number;
  name: string;
  surname: string;
  email: string;
  profile_image_path?: string;
}

export interface AuthResponse {
  message: string;
  token: number;
  user?: User;
}