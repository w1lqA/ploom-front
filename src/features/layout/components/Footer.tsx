import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="text-center mt-10 py-5">
      <p className="text-gray-400 text-sm">© 2025 3D Models Generator</p>
      <div className="text-gray-400 text-sm mt-2">
        <Link to="/login" className="text-white hover:text-gray-300 transition-colors duration-300 no-underline">
          Войти
        </Link>{' '}
        |{' '}
        <Link to="/register" className="text-white hover:text-gray-300 transition-colors duration-300 no-underline">
          Регистрация
        </Link>{' '}
        |{' '}
        <Link to="/profile" className="text-white hover:text-gray-300 transition-colors duration-300 no-underline">
          Профиль
        </Link>
      </div>
    </footer>
  );
}