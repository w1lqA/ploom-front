import { SelectHTMLAttributes } from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  id?: string;
  options: SelectOption[];
}

export function Select({ label, id, options, className = '', ...props }: SelectProps) {
  const selectClasses = `
    w-full rounded-lg p-3 outline-none font-light appearance-none
    bg-dark-input border border-dark-border text-dark-text-primary 
    placeholder:text-dark-text-secondary focus:border-gray-500 focus:bg-dark-hover
    bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23ffffff'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")]
    bg-no-repeat bg-right-12 bg-center bg-16
    pr-12
    ${className}
  `.trim();

  return (
    <div className="text-md">
      {label && (
        <label htmlFor={id} className="block text-dark-text-primary text-md mb-2 font-light">
          {label}
        </label>
      )}
      <select
        id={id}
        className={selectClasses}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}