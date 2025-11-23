import { useNotification } from "@/shared/hooks/useNotification";
import { Button } from "@/shared/ui/Button";

interface GenerateButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}

export function GenerateButton({ onClick, disabled = false }: GenerateButtonProps) {
  const { showNotification } = useNotification();

  const handleClick = () => {
    showNotification('Создаём 3D модель...');
    
    setTimeout(() => {
      showNotification('3D модель успешно создана!');
    }, 2000);
    
    onClick?.();
  };

  return (
    <Button
      onClick={handleClick}
      disabled={disabled}
      variant="primary"
      size="lg"
      fullWidth
      className="mb-8"
    >
      Создать 3D модель
    </Button>
  );
}