import { Button } from "@/shared/ui/Button";
import { LoaderIcon } from "lucide-react";

interface GenerateButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export function GenerateButton({ onClick, disabled, loading }: GenerateButtonProps) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled || loading}
      variant="primary"
      size="lg"
      fullWidth
      className="mb-8 relative overflow-hidden"
    >
      {loading ? (
        <div className="flex items-center justify-center gap-3">
          <LoaderIcon className="animate-spin" />
          <span>Генерация 3D модели...</span>
        </div>
      ) : (
        "Создать 3D модель"
      )}
    </Button>
  );
}