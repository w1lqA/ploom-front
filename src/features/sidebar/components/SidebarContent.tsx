import { Link } from 'react-router';

interface SidebarContentProps {
  onClose: () => void;
}

export function SidebarContent({ onClose }: SidebarContentProps) {
  const menuSections = [
    {
      title: 'Создание',
      items: [
        { label: 'Из изображения', onClick: onClose },
        { label: 'Избранное', to: '/favorites' },
        { label: 'Мои проекты', to: '/my-projects' },
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

  return (
    <>
      <h2 className="text-2xl text-center mb-8">Меню</h2>
      
      {menuSections.map((section, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-dark-text-primary text-lg mb-4 pb-2 border-b border-dark-border font-normal">
            {section.title}
          </h3>
          <div className="space-y-2">
            {section.items.map((item, itemIndex) =>
              item.to ? (
                <Link
                  key={itemIndex}
                  to={item.to}
                  onClick={onClose}
                  className="block p-4 rounded-lg menu-item-transition border border-transparent hover:bg-dark-hover hover:border-gray-500 hover:translate-x-1 text-white no-underline"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={itemIndex}
                  onClick={item.onClick}
                  className="w-full text-left p-4 rounded-lg menu-item-transition border border-transparent hover:bg-dark-hover hover:border-gray-500 hover:translate-x-1"
                >
                  {item.label}
                </button>
              )
            )}
          </div>
        </div>
      ))}
    </>
  );
}