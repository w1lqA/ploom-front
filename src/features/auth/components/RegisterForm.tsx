import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Link } from 'react-router';

interface RegisterFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

export function RegisterForm({ onSubmit, isLoading }: RegisterFormProps) {
  return (
    <div className="max-w-[400px] w-full bg-dark-card p-10 rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.05)] text-center">
      <h1 className="text-3xl font-normal mb-6">Регистрация</h1>
      <form onSubmit={onSubmit} className="space-y-4 mb-4">
        <div className="flex gap-4">
          <Input
            label="Имя"
            name="name"
            type="text"
            placeholder="Иван"
            required
          />
          <Input
            label="Фамилия"
            name="surname"
            type="text"
            placeholder="Иванов"
            required
          />
        </div>
        
        <Input
          label="Электронная почта"
          name="email"
          type="email"
          placeholder="Введите email"
          required
        />
        
        <Input
          label="Пароль"
          name="password"
          type="password"
          placeholder="Введите пароль"
          required
        />

        <Input
          label="Фото профиля"
          name="profile_image"
          type="file"
          accept="image/*"
        />

        <Button 
          type="submit" 
          variant="primary" 
          size="lg" 
          fullWidth 
          disabled={isLoading}
        >
          {isLoading ? 'Создание...' : 'Создать аккаунт'}
        </Button>
      </form>

      <p className="text-gray-400 text-sm mt-4">
        Уже есть аккаунт?{' '}
        <Link to="/login" className="text-white font-medium hover:underline">
          Войти
        </Link>
      </p>

      <Link to="/" className="inline-block mt-5 text-gray-400 hover:text-white text-sm no-underline transition-colors duration-300">
        ← На главную
      </Link>
    </div>
  );
}