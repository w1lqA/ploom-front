import { Link } from 'react-router';
import { useAuthStore } from '@/features/auth/stores/auth.store';

export function Footer() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <footer className="text-center mt-10 py-10">
      <p className="text-gray-500 text-sm">© 2026 Ploom</p>
      <div className="text-gray-400 text-sm mt-3 flex justify-center gap-3">
        {!isAuthenticated ? (
          <>
            <Link 
              to="/login" 
              className="text-white/70 hover:text-white transition-colors duration-300 no-underline"
            >
              Войти
            </Link>
            <span className="text-dark-border">|</span>
            <Link 
              to="/register" 
              className="text-white/70 hover:text-white transition-colors duration-300 no-underline"
            >
              Регистрация
            </Link>
          </>
        ) : (
          <>
            <Link 
              to="/profile" 
              className="text-white/70 hover:text-white transition-colors duration-300 no-underline"
            >
              Личный кабинет
            </Link>
            <span className="text-dark-border">|</span>
            <Link 
              to="/settings" 
              className="text-white/70 hover:text-white transition-colors duration-300 no-underline"
            >
              Настройки
            </Link>
          </>
        )}
      </div>
    </footer>
  );
}