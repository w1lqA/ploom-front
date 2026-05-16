// src/features/catalog/components/ProductModal.tsx
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { ModelViewer } from '@/features/generation/components/ModelViewer';
import type { Product } from './CatalogCard';
import { Lightbulb } from 'lucide-react';

interface ProductModalProps {
    isOpen: boolean;
    onClose: () => void;
    product: Product | null;
}

export function ProductModal({ isOpen, onClose, product }: ProductModalProps) {
    if (!product) return null;

    const statusLabels = {
        'in-stock': 'В наличии',
        'out-of-stock': 'Нет в наличии',
        'to-order': 'Под заказ'
    };

    const statusColors = {
        'in-stock': 'bg-green-500/20 text-green-400 border-green-500/30',
        'out-of-stock': 'bg-red-500/20 text-red-400 border-red-500/30',
        'to-order': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
    };

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'RUB',
            maximumFractionDigits: 0,
        }).format(price);
    };

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto mt-20 md:hidden">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full relative max-w-5xl transform overflow-hidden rounded-2xl bg-dark-card border border-dark-border shadow-xl transition-all">
                                {/* Кнопка закрытия */}
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-black/50 hover:bg-black/70 transition-colors text-white/70 hover:text-white"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
                                    {/* 3D модель */}
                                    <div className="space-y-3">
                                        <div className="text-sm text-gray-400 flex items-center gap-2">
                                            <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                            3D модель
                                        </div>
                                        <div className="bg-black/30 rounded-xl overflow-hidden border border-dark-border">
                                            <ModelViewer
                                                modelUrl={product.modelUrl}
                                            />
                                        </div>
                                        <p className='inline-flex gap-2 items-center text-sm text-gray-500'>
                                            <Lightbulb strokeWidth={1} className='w-6 h-6' />
                                            <span>
                                                Совет: используйте мышь для вращения и масштабирования модели
                                            </span>
                                        </p>
                                    </div>

                                    {/* Информация о продукте */}
                                    <div className="flex flex-col">
                                        <div className="mb-4">
                                            <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${statusColors[product.status]} mb-4`}>
                                                {statusLabels[product.status]}
                                            </div>
                                            <Dialog.Title as="h2" className="text-2xl font-bold text-white mb-2">
                                                {product.title}
                                            </Dialog.Title>
                                            <p className="text-gray-400 leading-relaxed">
                                                {product.description || 'Описание отсутствует'}
                                            </p>
                                        </div>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between items-center pb-2 border-b border-dark-border">
                                                <span className="text-gray-400">Категория</span>
                                                <span className="text-white capitalize">{product.category}</span>
                                            </div>
                                            <div className="flex justify-between items-center pb-2 border-b border-dark-border">
                                                <span className="text-gray-400">Дата добавления</span>
                                                <span className="text-white">{new Date(product.date).toLocaleDateString('ru-RU')}</span>
                                            </div>
                                            <div className="flex justify-between items-center pb-2 border-b border-dark-border">
                                                <span className="text-gray-400">Артикул</span>
                                                <span className="text-white">#{product.id}</span>
                                            </div>
                                        </div>

                                        <div className="mt-auto">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="text-gray-400">Цена</span>
                                                <span className="text-3xl font-bold text-white">
                                                    {formatPrice(product.price)}
                                                </span>
                                            </div>

                                            <motion.button
                                                whileHover={{ scale: product.status !== 'out-of-stock' ? 1.02 : 1 }}
                                                whileTap={{ scale: product.status !== 'out-of-stock' ? 0.98 : 1 }}
                                                disabled={product.status === 'out-of-stock'}
                                                className={`w-full py-3 rounded-xl font-medium transition-all ${product.status === 'out-of-stock'
                                                    ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                                                    : 'bg-accent text-white hover:shadow-lg hover:shadow-orange-500/25'
                                                    }`}
                                                onClick={() => {
                                                    onClose();
                                                }}
                                            >
                                                {product.status === 'out-of-stock'
                                                    ? 'Нет в наличии'
                                                    : product.status === 'to-order'
                                                        ? 'Под заказ'
                                                        : 'Добавить в корзину'
                                                }
                                            </motion.button>
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}