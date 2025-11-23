import { Link, useLocation, useRoutes } from 'react-router';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const menuSections = [
    {
      title: 'Создание',
      items: [
        { label: 'Из изображения', to: '/'},
        { label: 'Избранное', to: '/favorites' },
        { label: 'Мои проекты', to: '/projects' },
      ],
    },
    {
      title: 'Пользователь',
      items: [
        { label: 'Профиль', to: '/profile' },
        { label: 'Войти', to: '/login' },
        { label: 'Регистрация', to: '/register' },
        { label: 'Выйти', onClick: onClose },
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

  const location = useLocation();

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
        className={`fixed top-0 h-screen bg-dark-card w-full max-w-sm p-6 sidebar-transition z-999 overflow-y-auto border-l border-dark-border shadow-[-5px_0_25px_rgba(0,0,0,0.5)] ${
          isOpen ? 'right-0' : '-right-96'
        }`}
      >
        <h2 className="text-2xl text-start mb-8 mt-2">Меню</h2>
        
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