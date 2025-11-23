import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id?: string;
}

export function Input({ label, id, className = '', ...props }: InputProps) {
  const inputClasses = `
    w-full rounded-lg p-3 outline-none font-light
    bg-dark-input border border-dark-border text-dark-text-primary 
    placeholder:text-dark-text-secondary focus:border-gray-500 focus:bg-dark-hover
    ${className}
  `.trim();

  return (
    <div className="text-md">
      {label && (
        <label htmlFor={id} className="block text-dark-text-primary text-md mb-2 font-light">
          {label}
        </label>
      )}
      <input
        id={id}
        className={inputClasses}
        {...props}
      />
    </div>
  );
}