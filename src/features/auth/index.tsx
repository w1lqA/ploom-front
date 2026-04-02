import { LoginForm } from '@/features/auth/components/LoginForm';
import { useAuth } from './hooks/useAuth';
import { RegisterForm } from '@/features/auth/components/RegisterForm';

export const LoginPage = () => {
  const { login, isLoggingIn } = useAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    login(data);
  };

  return <LoginForm onSubmit={handleSubmit} isLoading={isLoggingIn} />;
};

export const RegisterPage = () => {
  const { register, isRegistering } = useAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    
    const params = {
      name: fd.get('name') as string,
      surname: fd.get('surname') as string,
      email: fd.get('email') as string,
      password: fd.get('password') as string,
    };

    const bodyFormData = new FormData();
    const file = fd.get('profile_image') as File;
    if (file && file.size > 0) bodyFormData.append('profile_image', file);

    register({ formData: bodyFormData, params });
  };

  return <RegisterForm onSubmit={handleSubmit} isLoading={isRegistering} />;
};
