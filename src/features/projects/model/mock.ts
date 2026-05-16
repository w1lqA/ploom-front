
// export const mockProjects = [
//     {
//         id: 1,
//         title: "Фэнтези замок",
//         description: "Средневековый замок с башнями и мостом",
//         image: "https://images.unsplash.com/photo-1544037943-afd8fa64efbf?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
//         date: "2024-01-15",
//         category: "buildings",
//         status: "completed",
//         isFavorite: false
//     },
//     {
//         id: 2,
//         title: "Спортивный автомобиль",
//         description: "Ретро спорткар с детализированным салоном",
//         image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80",
//         date: "2024-01-12",
//         category: "vehicles",
//         status: "in-progress",
//         isFavorite: true
//     },
//     {
//         id: 3,
//         title: "Киберпанк робот",
//         description: "Андроид в стиле киберпанк с неоновыми элементами",
//         image: "https://images.unsplash.com/photo-1755853913084-c55e7ef1746b?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
//         date: "2024-01-10",
//         category: "characters",
//         status: "draft",
//         isFavorite: false
//     }
// ];

import { mockCatalogProducts } from "@/features/catalog/model/mock";
import { Project } from "@/features/projects/components/ProjectCard";



export const mockProjects: Project[] = mockCatalogProducts.map(product => ({
    ...product,
    isFavorite: true,
    status: product.status === 'in-stock' ? 'completed' : product.status === 'to-order' ? 'in-progress' : 'draft',
}))
