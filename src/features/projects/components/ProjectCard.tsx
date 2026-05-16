// src/features/projects/components/ProjectCard.tsx
import { useState } from 'react';
import { Button } from '@shared/ui/Button';
import { useNotification } from '@shared/hooks/useNotification';
import { ProductModal } from '@/features/catalog/components/ProductModal';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  modelUrl: string;
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { showNotification } = useNotification();

  const statusColors = {
    completed: 'bg-green-500',
    'in-progress': 'bg-yellow-500',
    draft: 'bg-gray-500'
  };

  const statusLabels = {
    completed: 'Завершён',
    'in-progress': 'В процессе',
    draft: 'Черновик'
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

  const handleEditClick = () => {
    showNotification(`Редактируем проект: ${project.title}`);
  };

  const productForModal = {
    id: project.id,
    title: project.title,
    description: project.description,
    image: project.image,
    modelUrl: project.modelUrl,
    date: project.date,
    category: project.category,
    status: project.status === 'completed' ? 'in-stock' : project.status === 'in-progress' ? 'to-order' : 'out-of-stock',
    price: 0
  } as const;

  return (
    <>
      <div className="bg-dark-card rounded-xl border flex flex-col justify-between w-full border-dark-border overflow-hidden hover:border-gray-500 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)] transition-all duration-300">
        <div
          className="relative h-48 overflow-hidden cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleFavoriteClick();
            }}
            className={`absolute top-2 right-2 bg-black bg-opacity-70 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-90 hover:scale-110 transition-all duration-300 ${isFavorite ? 'text-red-500' : 'text-gray-400'
              }`}
          >
            {isFavorite ? '♥' : '♡'}
          </button>
          <div className={`absolute top-2 left-2 text-white text-xs px-2 py-1 rounded ${statusColors[project.status]}`}>
            {statusLabels[project.status]}
          </div>
          <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white text-sm font-medium px-3 py-1.5 rounded-lg bg-black/70">
              3D просмотр
            </span>
          </div>
        </div>

        <div className="p-5 flex flex-col w-full flex-1">
          <h3 className="text-lg font-medium mb-2">{project.title}</h3>
          <p className="text-gray-400 text-sm mb-3 leading-relaxed line-clamp-2">{project.description}</p>

          <div className="flex justify-between text-gray-400 text-xs mb-4 mt-auto">
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
              onClick={() => setIsModalOpen(true)}
            >
              {project.status === 'completed' ? 'Открыть 3D' : 'Продолжить'}
            </Button>
          </div>
        </div>
      </div>

      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={productForModal}
      />
    </>
  );
}