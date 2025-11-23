import { Button } from '@shared/ui/Button';

export function Pagination() {
  return (
    <div className="flex justify-center gap-2 mb-8">
      <Button variant="secondary" size="sm">
        ←
      </Button>
      <Button variant="primary" size="sm">
        1
      </Button>
      <Button variant="secondary" size="sm">
        2
      </Button>
      <Button variant="secondary" size="sm">
        3
      </Button>
      <Button variant="secondary" size="sm">
        ...
      </Button>
      <Button variant="secondary" size="sm">
        →
      </Button>
    </div>
  );
}