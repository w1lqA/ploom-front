import { Button } from '@/shared/ui/Button';
import { Link } from 'react-router';

export function ProfilePage() {
  return (
    <div className="max-w-[400px] w-full bg-dark-card p-10 rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.05)] text-center">
      <h1 className="text-3xl font-normal mb-6">Личный кабинет</h1>

      <div className="flex flex-col items-center gap-3 mb-6">
        <img 
          src="https://via.placeholder.com/120" 
          alt="Аватар" 
          className="w-30 h-30 rounded-full border-2 border-dark-border"
        />
        <h2 className="text-xl font-normal">Имя пользователя</h2>
        <p className="text-gray-400 text-sm">user@example.com</p>
      </div>

      <div className="space-y-3">
        <Button variant="primary" size="lg" fullWidth>
          Редактировать профиль
        </Button>
        <Button variant="secondary" size="lg" fullWidth>
          Выйти
        </Button>
      </div>

      <Link to="/" className="inline-block mt-5 text-gray-400 hover:text-white text-sm no-underline transition-colors duration-300">
        ← На главную
      </Link>
    </div>
  );
}