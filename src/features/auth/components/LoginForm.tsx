import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Link } from 'react-router';

export function LoginForm({ onSubmit, isLoading }: { onSubmit: (e: React.FormEvent<HTMLFormElement>) => void, isLoading: boolean }) {
  return (
    <div className="max-w-[400px] w-full bg-dark-card p-10 rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.05)] text-center">
      <h1 className="text-3xl font-normal mb-6">Вход в аккаунт</h1>
      <form onSubmit={onSubmit} className="space-y-4 mb-4">
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
        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          disabled={isLoading}
        >
          {isLoading ? 'Вход...' : 'Войти'}
        </Button>
      </form>
      <p className="text-gray-400 text-sm mt-4">
        <span>Нет аккаунта?</span>
        <Link to="/register" className="text-white font-medium hover:underline">
          Зарегистрироваться
        </Link>
      </p>
    </div>
  );
}