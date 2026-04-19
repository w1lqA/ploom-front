const EXAMPLE_QUERIES = [
  'космический корабль',
  'реалистичный дракон',
  'спортивная машина',
  'робот-помощник'
];

interface QueryExamplesProps {
  onQuerySelect?: (query: string) => void;
  disabled?: boolean
}

export function QueryExamples({ onQuerySelect, disabled }: QueryExamplesProps) {
  return (
    <div className={`flex flex-wrap gap-3 justify-center ${disabled ? 'pointer-events-none opacity-50' : ''}`}>
      {EXAMPLE_QUERIES.map((query, index) => (
        <button
          key={index}
          type="button"
          disabled={disabled}
          onClick={() => onQuerySelect?.(query)}
          className="bg-dark-card border border-dark-border rounded-full px-5 py-2 text-sm text-gray-300 transition-all hover:border-accent hover:text-white disabled:cursor-not-allowed"
        >
          {query}
        </button>
      ))}
    </div>
  );
}
