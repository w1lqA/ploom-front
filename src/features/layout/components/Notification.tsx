import { useNotification } from '../../../shared/hooks/useNotification';

export function Notification() {
  const { isVisible, message } = useNotification();

  return (
    <div 
      className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-dark-border text-white px-5 py-3 rounded-lg border border-gray-500 shadow-[0_5px_15px_rgba(0,0,0,0.3)] transition-transform duration-400 z-[1000] ${
        isVisible ? 'translate-y-0' : 'translate-y-[100px]'
      }`}
    >
      {message}
    </div>
  );
}