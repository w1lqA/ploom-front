import { useNotification } from '../../../shared/hooks/useNotification';

interface GenerateButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}

export function GenerateButton({ onClick, disabled = false }: GenerateButtonProps) {
  const { showNotification } = useNotification();

  const handleClick = () => {
    // Здесь будет логика проверки файла и промпта
    showNotification('Создаём 3D модель...');
    
    // Имитация процесса создания
    setTimeout(() => {
      showNotification('3D модель успешно создана!');
    }, 2000);
    
    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className="w-full bg-dark-border hover:bg-dark-hover disabled:opacity-50 disabled:cursor-not-allowed text-white py-5 rounded-xl text-lg cursor-pointer transition-colors duration-300 mb-8"
    >
      Создать 3D модель
    </button>
  );
}