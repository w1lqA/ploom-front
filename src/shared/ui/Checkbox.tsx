import { InputHTMLAttributes } from 'react';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

export function Checkbox({ label, id, className = '', ...props }: CheckboxProps) {
  return (
    <div className="flex items-center gap-3">
      <input
        type="checkbox"
        id={id}
        className={`w-4.5 h-4.5 ${className}`}
        {...props}
      />
      <label htmlFor={id} className="text-dark-text-primary text-md cursor-pointer font-medium">
        {label}
      </label>
    </div>
  );
}