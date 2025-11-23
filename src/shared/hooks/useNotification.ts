import { useState, useCallback } from 'react';

export function useNotification() {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');

  const showNotification = useCallback((text: string) => {
    setMessage(text);
    setIsVisible(true);
    
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  }, []);

  return {
    isVisible,
    message,
    showNotification,
  };
}