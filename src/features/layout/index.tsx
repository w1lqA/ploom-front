import { Outlet, useLocation } from 'react-router';
import { Header } from './components/Header';
import { Notification } from './components/Notification';
import { Background } from './components/Background';
import { Footer } from './components/Footer';
import { Sidebar } from './components/Sidebar';
import { useState } from 'react';

export function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  
  const isAuthPage = ['/login', '/register', '/profile'].includes(location.pathname);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="bg-gradient-custom text-white min-h-screen overflow-x-hidden">
      <Background />
      
      <main className="flex min-h-screen relative">
        <div className={`flex-1 flex flex-col ${isAuthPage ? 'items-center justify-center' : ''}`}>
          {!isAuthPage && <Header onMenuClick={toggleSidebar} />}
          <div className={isAuthPage ? 'w-full *:mx-auto' : 'flex-1'}>
            <Outlet />
          </div>
          {!isAuthPage && <Footer />}
        </div>
      </main>

      {!isAuthPage && <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />}
      <Notification />
    </div>
  );
}