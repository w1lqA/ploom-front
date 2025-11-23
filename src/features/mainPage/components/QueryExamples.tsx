import { useNotification } from "@/shared/hooks/useNotification";

const EXAMPLE_QUERIES = [
  'космический корабль',
  'реалистичный дракон',
  'спортивная машина',
  'робот-помощник'
];

interface QueryExamplesProps {
  onQuerySelect?: (query: string) => void;
}

export function QueryExamples({ onQuerySelect }: QueryExamplesProps) {
  const { showNotification } = useNotification();

  const handleQueryClick = (query: string) => {
    onQuerySelect?.(query);
    showNotification(`Заполнено: ${query}`);
  };

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {EXAMPLE_QUERIES.map((query, index) => (
        <button
          key={index}
          onClick={() => handleQueryClick(query)}
          className="bg-dark-card border border-dark-border rounded-full px-5 py-3 text-sm cursor-pointer transition-all duration-300 hover:bg-accent hover:border-accent"
        >
          {query}
        </button>
      ))}
    </div>
  );
}