// src/features/catalog/components/CatalogCard.tsx
import { useState } from 'react';
import { Button } from '@shared/ui/Button';
import { useNotification } from '@shared/hooks/useNotification';
import { ProductModal } from './ProductModal';

export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  modelUrl: string;
  date: string;
  category: string;
  status: 'in-stock' | 'out-of-stock' | 'to-order';
  price: number;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { showNotification } = useNotification();

  const statusColors = {
    'in-stock': 'bg-green-500',
    'out-of-stock': 'bg-red-500',
    'to-order': 'bg-yellow-500'
  };

  const statusLabels = {
    'in-stock': 'В наличии',
    'out-of-stock': 'Нет в наличии',
    'to-order': 'Под заказ'
  };

  const handleBuyClick = () => {
    showNotification(`Добавлено в корзину: ${product.title}`);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <>
      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden hover:border-gray-500 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)] transition-all duration-300 flex flex-col h-full">
        <div 
          className="relative h-48 m-5 mb-0 overflow-hidden rounded-lg border border-dark-border cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <img 
            src={product.image} 
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className={`absolute top-2 left-2 text-white text-xs px-2 py-1 rounded ${statusColors[product.status]}`}>
            {statusLabels[product.status]}
          </div>
          <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white text-sm font-medium px-3 py-1.5 rounded-lg bg-black/70">
              Подробнее
            </span>
          </div>
        </div>
        
        <div className="p-5 pt-0 flex flex-col flex-1">
          <h3 className="text-lg font-medium mb-2">{product.title}</h3>
          <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">{product.description}</p>
          
          <div className="flex flex-col items-end gap-2 mt-auto">
            <span className="text-xl font-bold text-white">
              {formatPrice(product.price)}
            </span>
            <div className="flex gap-2 w-full">
              <Button 
                variant="secondary"
                size="sm"
                onClick={() => setIsModalOpen(true)}
                className="flex-1"
              >
                3D просмотр
              </Button>
              <Button 
                variant={product.status === 'out-of-stock' ? 'secondary' : 'primary'}
                size="sm"
                disabled={product.status === 'out-of-stock'}
                onClick={handleBuyClick}
                className={product.status === 'out-of-stock' ? 'cursor-not-allowed flex-1' : 'flex-1'}
              >
                {product.status === 'out-of-stock' ? 'Нет в наличии' : product.status === 'to-order' ? 'Под заказ' : 'Купить'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <ProductModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={product}
      />
    </>
  );
}