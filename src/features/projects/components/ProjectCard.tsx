import { useState } from 'react';
import { Button } from '@shared/ui/Button';
import { useNotification } from '@shared/hooks/useNotification';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  status: 'completed' | 'in-progress' | 'draft';
  isFavorite: boolean;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isFavorite, setIsFavorite] = useState(project.isFavorite);
  const { showNotification } = useNotification();

  const statusColors = {
    completed: 'bg-green-500',
    'in-progress': 'bg-yellow-500',
    draft: 'bg-gray-500'
  };

  const categoryNames = {
    characters: 'Персонажи',
    vehicles: 'Транспорт',
    buildings: 'Здания',
    objects: 'Объекты',
    furniture: 'Мебель'
  };

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    showNotification(
      isFavorite 
        ? `Удалено из избранного: ${project.title}`
        : `Добавлено в избранное: ${project.title}`
    );
  };

  const handleOpenClick = () => {
    showNotification(`Открываем проект: ${project.title}`);
  };

  const handleEditClick = () => {
    showNotification(`Редактируем проект: ${project.title}`);
  };

  return (
    <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden hover:border-gray-500 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)] transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300"
        />
        <button
          onClick={handleFavoriteClick}
          className={`absolute top-2 right-2 bg-black bg-opacity-70 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-90 hover:scale-110 transition-all duration-300 ${
            isFavorite ? 'text-red-500' : 'text-gray-400'
          }`}
        >
          {isFavorite ? '♥' : '♡'}
        </button>
        <div className={`absolute top-2 left-2 text-white text-xs px-2 py-1 rounded ${statusColors[project.status]}`}>
          {project.status === 'completed' && 'Завершён'}
          {project.status === 'in-progress' && 'В процессе'}
          {project.status === 'draft' && 'Черновик'}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-medium mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-3 leading-relaxed">{project.description}</p>
        
        <div className="flex justify-between text-gray-400 text-xs mb-4">
          <span>{new Date(project.date).toLocaleDateString('ru-RU')}</span>
          <span>{categoryNames[project.category as keyof typeof categoryNames] || project.category}</span>
        </div>
        
        <div className="flex gap-2">
          <Button 
            variant="secondary" 
            size="sm" 
            fullWidth
            onClick={handleEditClick}
          >
            Редактировать
          </Button>
          <Button 
            variant="primary" 
            size="sm" 
            fullWidth
            onClick={handleOpenClick}
          >
            {project.status === 'completed' ? 'Открыть' : 'Продолжить'}
          </Button>
        </div>
      </div>
    </div>
  );
}