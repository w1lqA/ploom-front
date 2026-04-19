interface PromptInputProps {
  value?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

export function PromptInput({ value = '', onChange, disabled }: PromptInputProps) {
  return (
    <div className="mb-8">
      <label className="block text-gray-400 text-sm mb-3 text-left">
        Дополнительное описание (необязательно):
      </label>
      <textarea
        value={value}
        disabled={disabled}
        onChange={() => onChange?.(value)}
        className="w-full bg-dark-input border border-dark-border rounded-xl p-5 text-white placeholder-gray-500 focus:border-gray-500 focus:bg-dark-hover outline-none resize-y text-lg min-h-[120px] transition-all duration-300"
        placeholder="Опишите, что вы хотите создать... Например: 'космический корабль в футуристическом стиле'"
      />
    </div>
  );
}