import { useSidebar } from '../hooks/useSidebar';
import { SidebarContent } from './SidebarContent';

export function Sidebar() {
  const { isOpen, closeSidebar } = useSidebar();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-[998]"
          onClick={closeSidebar}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={`fixed top-0 h-screen bg-dark-card p-6 sidebar-transition z-[999] overflow-y-auto border-l border-dark-border shadow-[-5px_0_25px_rgba(0,0,0,0.5)] ${
          isOpen ? 'right-0' : 'right-[-350px]'
        }`}
      >
        <SidebarContent onClose={closeSidebar} />
      </aside>
    </>
  );
}