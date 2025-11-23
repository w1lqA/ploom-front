import { Outlet } from 'react-router';
import { Header } from './components/Header';
import { Notification } from './components/Notification';
import { Background } from './components/Background';
import { Footer } from './components/Footer';
import { SidebarProvider } from '../../features/sidebar';

export function Layout() {
  return (
    <SidebarProvider>
      <div className="bg-gradient-custom text-white min-h-screen overflow-x-hidden">
        <Background />
        
        <main className="flex min-h-screen relative">
          <div className="flex-1 flex flex-col">
            <Header />
            <div className="flex-1">
              <Outlet />
            </div>
            <Footer />
          </div>
        </main>

        <Notification />
      </div>
    </SidebarProvider>
  );
}