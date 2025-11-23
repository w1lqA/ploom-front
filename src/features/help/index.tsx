import { Button } from '@shared/ui/Button';
import { Input } from '@shared/ui/Input';

export function HelpPage() {
  return (
    <div className="max-w-[800px] mx-auto my-12 bg-dark-card p-10 rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.05)]">
      <h1 className="text-3xl font-normal text-center mb-10">Помощь и поддержка</h1>
      
      <div className="flex gap-3 mb-10">
        <Input
          type="text"
          placeholder="Поиск по помощи..."
          className="flex-1"
        />
        <Button variant="primary" size="lg">
          Найти
        </Button>
      </div>

      <div className="space-y-8">
        {/* Секции помощи */}
        <HelpSection 
          title="📝 Как создать 3D модель"
          content={
            <>
              <h3 className="text-white font-medium text-lg mb-3">Из текстового описания</h3>
              <ol className="list-decimal list-inside space-y-2 ml-5 mb-6">
                <li className="text-gray-300">Введите детальное описание модели в поле поиска</li>
                <li className="text-gray-300">Используйте конкретные термины (форма, цвет, стиль)</li>
                <li className="text-gray-300">Нажмите "Создать" и подождите несколько минут</li>
                <li className="text-gray-300">Скачайте готовую модель в нужном формате</li>
              </ol>
              
              <h3 className="text-white font-medium text-lg mb-3">Из изображения</h3>
              <ol className="list-decimal list-inside space-y-2 ml-5">
                <li className="text-gray-300">Выберите "Создать из изображения" в боковом меню</li>
                <li className="text-gray-300">Загрузите чёткое изображение объекта</li>
                <li className="text-gray-300">Укажите дополнительные параметры</li>
                <li className="text-gray-300">Дождитесь обработки и скачайте результат</li>
              </ol>
            </>
          }
        />

        <HelpSection 
          title="📁 Управление проектами"
          content={
            <>
              <h3 className="text-white font-medium text-lg mb-3">Сохранение работ</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Все созданные модели автоматически сохраняются в разделе "Мои проекты".
              </p>
              
              <h3 className="text-white font-medium text-lg mb-3">Экспорт моделей</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Поддерживаются форматы: OBJ, STL, FBX, GLTF. Выберите нужный формат при скачивании.
              </p>
              
              <h3 className="text-white font-medium text-lg mb-3">Организация</h3>
              <p className="text-gray-300 leading-relaxed">
                Создавайте папки и добавляйте теги для удобной сортировки проектов.
              </p>
            </>
          }
        />

        {/* Контакты поддержки */}
        <div className="bg-dark-input p-6 rounded-xl border border-dark-border">
          <h2 className="text-xl font-normal mb-5">📞 Контакты поддержки</h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-gray-300"><strong className="text-white">Email:</strong> support@3dmodelsgenerator.com</p>
              <p className="text-gray-300"><strong className="text-white">Телефон:</strong> +7 (999) 123-45-67</p>
              <p className="text-gray-300"><strong className="text-white">Часы работы:</strong> Пн-Пт, 9:00-18:00</p>
            </div>
            
            <div>
              <h3 className="text-white font-medium text-lg mb-4">Написать в поддержку</h3>
              <textarea 
                placeholder="Опишите вашу проблему..." 
                rows={4}
                className="w-full bg-dark-input border border-dark-border rounded-lg p-4 text-white placeholder-gray-500 focus:border-gray-500 focus:bg-dark-hover outline-none resize-vertical mb-4"
              />
              <Button variant="primary" size="md">
                Отправить сообщение
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <a href="/" className="text-gray-400 hover:text-white text-sm no-underline transition-colors duration-300">
          ← На главную
        </a>
      </div>
    </div>
  );
}

function HelpSection({ title, content }: { title: string; content: React.ReactNode }) {
  return (
    <div className="bg-dark-input p-6 rounded-xl border border-dark-border">
      <h2 className="text-xl font-normal mb-5">{title}</h2>
      <div className="space-y-4">
        {content}
      </div>
    </div>
  );
}