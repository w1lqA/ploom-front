import { useAuthStore } from '@/features/auth/stores/auth.store';
import { Settings } from '@/features/settings/components/Settings';
import { toast } from 'sonner';

export const SettingsPage = () => {
  const user = useAuthStore((state) => state.user);

  const handleAccountUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    
    // Пока просто выводим в консоль, так как метода на бэкенде еще нет
    console.log("Данные для обновления:", data);
    toast.info("Функционал обновления профиля в разработке");
  };

  return <Settings user={user} onSubmitAccount={handleAccountUpdate} />;
};