import { createBrowserRouter } from 'react-router';
import { Layout } from '@features/layout';
import { SettingsPage } from '@features/settings';
import { LoginPage, RegisterPage } from '@features/auth';
import { ProfilePage } from '@features/profile';
import { ProjectsPage } from '@features/projects';
import { FavoritesPage } from '@features/favorites';
import { HelpPage } from '@features/help';
import { MainPage } from '@/features/mainPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'settings',
        element: <SettingsPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
      {
        path: 'profile',
        element: <ProfilePage />,
      },
      {
        path: 'projects',
        element: <ProjectsPage />,
      },
      {
        path: 'favorites',
        element: <FavoritesPage />,
      },
      {
        path: 'help',
        element: <HelpPage />,
      },
    ],
  },
]);