import { Button } from '@shared/ui/Button';
import { Input } from '@shared/ui/Input';
import { Select } from '@shared/ui/Select';
import { useNotification } from '@shared/hooks/useNotification';

interface AddProjectModalProps {
  onClose: () => void;
}

export function AddProjectModal({ onClose }: AddProjectModalProps) {
  const { showNotification } = useNotification();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showNotification('Проект добавлен в избранное');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div 
        className="bg-dark-card rounded-2xl border border-dark-border w-full max-w-md mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b border-dark-border">
          <h2 className="text-xl font-medium">Добавить проект</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl transition-colors duration-300"
          >
            &times;
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6">
          <div className="mb-4">
            <Input
              label="Название проекта"
              type="text"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-400 text-sm mb-2">Описание</label>
            <textarea 
              className="w-full bg-dark-input border border-dark-border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-gray-500 focus:bg-dark-hover outline-none resize-none" 
              rows={3}
              placeholder="Описание проекта..."
            />
          </div>
          
          <div className="mb-6">
            <Select
              label="Категория"
              options={[
                { value: 'characters', label: 'Персонажи' },
                { value: 'vehicles', label: 'Транспорт' },
                { value: 'buildings', label: 'Здания' },
                { value: 'objects', label: 'Объекты' },
              ]}
            />
          </div>
          
          <div className="flex gap-3 justify-end">
            <Button type="button" variant="secondary" onClick={onClose}>
              Отмена
            </Button>
            <Button type="submit" variant="primary">
              Добавить
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}