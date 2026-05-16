import { useAuth } from '@/features/auth/hooks/useAuth';
import { useAuthStore } from '@/features/auth/stores/auth.store';
import { Link, useLocation } from 'react-router';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { logout } = useAuth();
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);
  const location = useLocation();

  const handleLogout = () => {
    logout();
    onClose();
  };

  const menuSections = [
    {
      title: 'Создание',
      items: [
        { label: 'Из изображения', to: '/' },
        { label: 'Избранное', to: '/favorites' },
        { label: 'Мои проекты', to: '/projects' },
      ],
    },
    {
      title: 'Готовые решения',
      items: [
        { label: 'Каталог', to: '/catalog' }
      ]
    },
    {
      title: 'Пользователь',
      items: isAuthenticated
        ? [
          { label: 'Профиль', to: '/profile' },
          { label: 'Выйти', onClick: handleLogout },
        ]
        : [
          { label: 'Войти', to: '/login' },
          { label: 'Регистрация', to: '/register' },
        ],
    },
    {
      title: 'Настройки',
      items: [
        { label: 'Настройки', to: '/settings' },
        { label: 'Помощь', to: '/help' },
      ],
    },
  ];

  const baseButtonClasses = `w-full text-left p-4 rounded-lg menu-item-transition border border-transparent hover:border-gray-500 hover:translate-x-1`

  const isActiveLink = (to: string) => {
    if (to === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(to);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-transparent z-998"
          onClick={onClose}
        />
      )}
      {/* Sidebar */}
      <aside
        className={`fixed top-0 h-screen w-full max-w-sm p-6 sidebar-transition z-999 overflow-y-auto border-l border-dark-border shadow-[-5px_0_25px_rgba(0,0,0,0.5)]
          bg-dark-card/80 backdrop-blur-sm
          ${isOpen ? 'right-0' : '-right-96'}
        `}
      >
        <h2 className="text-2xl text-start mb-8 md:mt-2 mt-20">Меню</h2>

        {menuSections.map((section, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-dark-text-primary text-lg mb-4 pb-2 border-b border-dark-border font-normal">
              {section.title}
            </h3>
            <div className="flex flex-col gap-2">
              {section.items.map((item, itemIndex) =>
                item.to ? (
                  <Link
                    key={itemIndex}
                    to={item.to}
                    onClick={onClose}
                    className={`${baseButtonClasses} ${isActiveLink(item.to) && 'border-gray-500'}`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={itemIndex}
                    onClick={item.onClick}
                    className={`${baseButtonClasses}`}
                  >
                    {item.label}
                  </button>
                )
              )}
            </div>
          </div>
        ))}
      </aside>
    </>
  );
}