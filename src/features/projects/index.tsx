import { useState } from 'react';
import { Button } from '@shared/ui/Button';
import { Input } from '@shared/ui/Input';
import { Select } from '@shared/ui/Select';
import { ProjectsStats } from './components/ProjectsStats';
import { Pagination } from './components/Pagination';
import { Project, ProjectCard } from './components/ProjectCard';
import { mockProjects } from '@/features/projects/model/mock';

export function ProjectsPage() {
  const [sortBy, setSortBy] = useState('newest');
  const [category, setCategory] = useState('all');
  const [status, setStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="max-w-[1200px] mx-auto mt-[100px]">
      {/* Заголовок */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-light mb-3">Мои проекты</h1>
        <p className="text-gray-400 text-lg">Все ваши созданные 3D модели</p>
      </div>

      {/* Панель управления */}
      <div className="flex flex-col lg:flex-row gap-6 mb-8 p-6 bg-dark-card rounded-xl border border-dark-border">
        {/* Фильтрация */}
        <div className="flex flex-wrap gap-4 flex-1">
          <Select
            label="Сортировка:"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            options={[
              { value: 'newest', label: 'Сначала новые' },
              { value: 'oldest', label: 'Сначала старые' },
              { value: 'name', label: 'По названию' },
              { value: 'date', label: 'По дате' },
            ]}
            className="min-w-[180px]"
          />
          <Select
            label="Категория:"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            options={[
              { value: 'all', label: 'Все проекты' },
              { value: 'characters', label: 'Персонажи' },
              { value: 'vehicles', label: 'Транспорт' },
              { value: 'buildings', label: 'Здания' },
              { value: 'objects', label: 'Объекты' },
              { value: 'furniture', label: 'Мебель' },
            ]}
            className="min-w-[180px]"
          />
          <Select
            label="Статус:"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            options={[
              { value: 'all', label: 'Все статусы' },
              { value: 'completed', label: 'Завершённые' },
              { value: 'in-progress', label: 'В процессе' },
              { value: 'draft', label: 'Черновики' },
            ]}
            className="min-w-[180px]"
          />
        </div>

        {/* Поиск и кнопка добавления */}
        <div className="flex gap-4 items-end">
          <Input
            label="Поиск:"
            type="text"
            placeholder="Название проекта..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="min-w-[200px]"
          />
          <Button variant="primary" size="md">
            + Создать
          </Button>
        </div>
      </div>

      {/* Сетка проектов */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {mockProjects.map((project) => (
          <ProjectCard key={project.id} project={project as Project} />
        ))}
      </div>

      {/* Пагинация */}
      <Pagination />

      {/* Статистика */}
      <ProjectsStats />
    </div>
  );
}