import { useState } from 'react';
import { Select } from '@shared/ui/Select';
import { Input } from '@shared/ui/Input';
import { ProductCard } from './components/CatalogCard';
import { Pagination } from './components/Pagination';

export function CatalogPage() {
  const [sortBy, setSortBy] = useState('newest');
  const [category, setCategory] = useState('all');
  const [status, setStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const catalogProducts = [
    {
      id: 1,
      title: "Porsche-стиль купе (3D-брелок)",
      description: "Узнаваемый силуэт спорткара. Модель для 3D-печати. Подходит для брелока, сувенира или награды.",
      image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80",
      date: "2024-01-12",
      category: "vehicles",
      status: 'in-stock' as const,
      price: 2200
    },
    {
      id: 2,
      title: "Брелок машины",
      description: "",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
      date: "2024-01-08",
      category: "vehicles",
      status: 'out-of-stock' as const,
      price: 1200
    },
    {
      id: 3,
      title: "Брелок \"Яичница в сковородке\"",
      description: "Веселая 3D-модель для печати. Идеальная детализация: яйцо глазунья на чугунной сковороде",
      image: "https://thumbs.dreamstime.com/b/%D1%81%D0%BA%D0%BE%D0%B2%D0%BE%D1%80%D0%BE%D0%B4%D0%B0-%D1%81-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D0%B5%D0%B9-%D1%8F%D0%B8%D1%87%D0%BD%D0%B8%D1%86%D1%8B-%D0%B2%D0%B0%D1%80%D0%B8%D1%82%D1%8C-%D0%BF%D0%BB%D0%BE%D1%81%D0%BA%D0%B8%D0%B9-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-119973762.jpg",
      date: "2024-01-05",
      category: "objects",
      status: 'to-order' as const,
      price: 500
    }
  ];

  return (
    <div className="max-w-[1200px] mx-auto mt-[100px]">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-light mb-3">Каталог</h1>
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
              { value: 'price-asc', label: 'Сначала дешёвые' },
              { value: 'price-desc', label: 'Сначала дорогие' },
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
              { value: 'furniture', label: 'Мебель' },
            ]}
            className="min-w-[180px]"
          />
          <Select
            label="Статус:"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            options={[
              { value: 'all', label: 'Все' },
              { value: 'completed', label: 'В наличие' },
              { value: 'in-progress', label: 'Не в наличие' },
              { value: 'to-order', label: 'Под заказ' },
            ]}
            className="min-w-[180px]"
          />
        </div>

        {/* Поиск и кнопка добавления */}
        <div className="flex gap-4 items-end">
          <Input
            label=""
            type="text"
            placeholder="Поиск"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="min-w-[200px]"
          />
        </div>
      </div>

      {/* Сетка карточек */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {catalogProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Пагинация */}
      <Pagination />
    </div>
  );
}