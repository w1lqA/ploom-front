import { Button } from '@/shared/ui/Button';
import { Link } from 'react-router';
import { User } from '@/features/auth/types';
import { UserIcon } from 'lucide-react';

interface ProfilePageProps {
  user: User | null;
  onLogout: () => void;
  onEditProfile?: () => void;
}

export function Profile({ user, onLogout, onEditProfile }: ProfilePageProps) {
  // const avatarUrl = user?.profile_image_path
  //   ? `https://ploom-backend.onrender.com/static/${user.profile_image_path.split('\\').pop()}`
  //   : "https://via.placeholder.com/120";

  return (
    <div className="max-w-[400px] w-full bg-dark-card p-10 rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.05)] text-center">
      <h1 className="text-3xl font-normal mb-6">Личный кабинет</h1>

      <div className="flex flex-col items-center gap-3 mb-6">
        <div className='w-30 h-30 rounded-full border-2 border-dark-border '>
          {/* {avatarUrl ? (
            <img
              src={avatarUrl}
              alt="Аватар"
              className="w-full h-full object-cover"
            />
          ) : (

          )} */}
          <UserIcon className='w-full h-full scale-60 stroke-dark-border' strokeWidth={1}/>

        </div>
        <h2 className="text-xl font-normal">
          {user ? `${user.name} ${user.surname}` : 'Загрузка...'}
        </h2>
        <p className="text-gray-400 text-sm">{user?.email || 'email@example.com'}</p>
      </div>

      <div className="space-y-3">
        <Button variant="primary" size="lg" fullWidth onClick={onEditProfile}>
          Редактировать профиль
        </Button>
        <Button variant="secondary" size="lg" fullWidth onClick={onLogout}>
          Выйти
        </Button>
      </div>

      <Link to="/" className="inline-block mt-5 text-gray-400 hover:text-white text-sm no-underline transition-colors duration-300">
        ← На главную
      </Link>
    </div>
  );
}