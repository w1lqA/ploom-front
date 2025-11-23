import { Button } from "@/shared/ui/Button";
import { Checkbox } from "@/shared/ui/Checkbox";
import { Input } from "@/shared/ui/Input";
import { Select } from "@/shared/ui/Select";


export function SettingsPage() {
  return (
    <div className="max-w-[600px] mx-auto mt-[100px] bg-dark-card p-10 rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.05)]">
      <h1 className="text-4xl mb-8 font-gilroy font-extrabold text-center text-accent">Настройки</h1>
      
      {/* Аккаунт */}
      <div className="mb-10 pb-8 border-b border-dark-border">
        <h2 className="text-2xl mb-5 font-gilroy font-extrabold text-center">Аккаунт</h2>
        <div className="space-y-5 mb-5">
          <Input
            label="Имя пользователя"
            id="username"
            type="text"
            defaultValue="Текущий пользователь"
            placeholder="Введите имя пользователя"
          />
          <Input
            label="Электронная почта"
            id="email"
            type="email"
            defaultValue="user@example.com"
            placeholder="Введите email"
          />
        </div>
        <Button variant="primary" size="md">
          Сохранить изменения
        </Button>
      </div>

      {/* Внешний вид */}
      <div className="mb-10 pb-8 border-b border-dark-border">
        <h2 className="text-2xl mb-5 font-gilroy font-extrabold text-center">Внешний вид</h2>
        <div className="space-y-5">
          <Select
            label="Тема оформления"
            id="theme"
            options={[
              { value: 'dark', label: 'Тёмная' },
              { value: 'light', label: 'Светлая' },
              { value: 'auto', label: 'Системная' },
            ]}
          />
          <Select
            label="Язык интерфейса"
            id="language"
            options={[
              { value: 'ru', label: 'Русский' },
              { value: 'en', label: 'English' },
            ]}
          />
        </div>
      </div>

      {/* Уведомления */}
      <div className="mb-10 pb-8 border-b border-dark-border">
        <h2 className="text-2xl mb-5 font-gilroy font-extrabold text-center">Уведомления</h2>
        <div className="space-y-3">
          <Checkbox
            id="email-notifications"
            label="Email уведомления"
            defaultChecked
          />
          <Checkbox
            id="project-updates"
            label="Обновления проектов"
            defaultChecked
          />
          <Checkbox
            id="newsletter"
            label="Рассылка новостей"
          />
        </div>
      </div>

      {/* Безопасность */}
      <div className="mb-10 pb-8 border-b border-dark-border">
        <h2 className="text-2xl mb-5 font-gilroy font-extrabold text-center">Безопасность</h2>
        <div className="space-y-5 mb-5">
          <Input
            label="Текущий пароль"
            id="current-password"
            type="password"
            placeholder="Введите текущий пароль"
          />
          <Input
            label="Новый пароль"
            id="new-password"
            type="password"
            placeholder="Введите новый пароль"
          />
          <Input
            label="Подтвердите пароль"
            id="confirm-password"
            type="password"
            placeholder="Повторите новый пароль"
          />
        </div>
        <Button variant="primary" size="md">
          Сменить пароль
        </Button>
      </div>

      {/* Опасная зона */}
      <div className="border border-red-500 p-5 rounded-xl bg-red-500 bg-opacity-5 flex flex-col items-center gap-4">
        <h2 className="text-2xl font-gilroy font-light text-center">Опасная зона</h2>
        <p className="text-dark-text-secondary text-sm font-light">Эти действия нельзя отменить. Будьте осторожны.</p>
        <Button variant="primary" size="md" className="bg-red-500 hover:bg-red-600 border-red-500">
          Удалить аккаунт
        </Button>
      </div>
    </div>
  );
}