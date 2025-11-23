import { useState } from 'react';

interface PromptInputProps {
  value?: string;
  onChange?: (value: string) => void;
}

export function PromptInput({ value = '', onChange }: PromptInputProps) {
  const [prompt, setPrompt] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setPrompt(newValue);
    onChange?.(newValue);
  };

  return (
    <div className="mb-8">
      <label className="block text-gray-400 text-sm mb-3 text-left">
        Дополнительное описание (необязательно):
      </label>
      <textarea
        value={prompt}
        onChange={handleChange}
        className="w-full bg-dark-input border border-dark-border rounded-xl p-5 text-white placeholder-gray-500 focus:border-gray-500 focus:bg-dark-hover outline-none resize-y text-lg min-h-[120px] transition-all duration-300"
        placeholder="Опишите, что вы хотите создать... Например: 'космический корабль в футуристическом стиле'"
      />
    </div>
  );
}