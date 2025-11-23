import { createBrowserRouter } from 'react-router';
import { GeneratorPage } from '../features/generator';
import { Layout } from '../features/layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <GeneratorPage />,
      },
      // Здесь добавим другие маршруты позже
    ],
  },
]);