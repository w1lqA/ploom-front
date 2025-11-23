import { createContext, useContext, type ReactNode } from 'react';
import { useSidebar } from './hooks/useSidebar';
import { Sidebar } from './components/Sidebar';

const SidebarContext = createContext<ReturnType<typeof useSidebar> | null>(null);

export function useSidebarContext() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebarContext must be used within a SidebarProvider');
  }
  return context;
}

interface SidebarProviderProps {
  children: ReactNode;
}

export function SidebarProvider({ children }: SidebarProviderProps) {
  const sidebar = useSidebar();

  return (
    <SidebarContext.Provider value={sidebar}>
      {children}
      <Sidebar />
    </SidebarContext.Provider>
  );
}