import { useState } from 'react';
import { Button } from '@shared/ui/Button';
import { Select } from '@shared/ui/Select';
import { ProjectCard } from '@features/projects/components/ProjectCard';
import { AddProjectModal } from './components/AddProjectModal';

export function FavoritesPage() {
  const [sortBy, setSortBy] = useState('newest');
  const [category, setCategory] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);

  const favoriteProjects = [
    {
      id: 1,
      title: "Спортивный автомобиль",
      description: "Ретро спорткар с детализированным салоном",
      image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80",
      date: "2024-01-12",
      category: "vehicles",
      status: "in-progress" as const,
      isFavorite: true
    },
    {
      id: 2,
      title: "Современный диван",
      description: "Угловой диван в скандинавском стиле",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
      date: "2024-01-08",
      category: "furniture",
      status: "completed" as const,
      isFavorite: true
    }
  ];

  return (
    <div className="max-w-[1200px] mx-auto mt-[100px]">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-light mb-3">Избранное</h1>
        <p className="text-gray-400 text-lg">Ваши сохранённые проекты</p>
      </div>

      {/* Фильтрация */}
      <div className="flex gap-5 mb-8 p-5 bg-dark-card rounded-xl border border-dark-border">
        <Select
          label="Сортировка:"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          options={[
            { value: 'newest', label: 'Сначала новые' },
            { value: 'oldest', label: 'Сначала старые' },
            { value: 'name', label: 'По названию' },
          ]}
          className="min-w-[180px]"
        />
        <Select
          label="Категория:"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          options={[
            { value: 'all', label: 'Все' },
            { value: 'characters', label: 'Персонажи' },
            { value: 'vehicles', label: 'Транспорт' },
            { value: 'buildings', label: 'Здания' },
            { value: 'objects', label: 'Объекты' },
          ]}
          className="min-w-[180px]"
        />
      </div>

      {/* Сетка карточек */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {favoriteProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Кнопка добавления */}
      <div className="text-center py-10">
        <Button
          variant="outline"
          size="lg"
          onClick={() => setShowAddModal(true)}
          className="border-dashed hover:scale-105"
        >
          <span className="text-2xl font-light mr-2">+</span>
          Добавить проект
        </Button>
      </div>

      {/* Модальное окно */}
      {showAddModal && (
        <AddProjectModal onClose={() => setShowAddModal(false)} />
      )}
    </div>
  );
}