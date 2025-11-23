import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = 'rounded-xl cursor-pointer transition-colors duration-300 font-medium';
  
  const variants = {
    primary: 'bg-accent hover:bg-dark-border text-white',
    secondary: 'bg-dark-card hover:bg-accent text-white',
    outline: 'bg-transparent hover:bg-accent text-white'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const width = fullWidth ? 'w-full' : '';

  const buttonClasses = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${width}
    ${className}
  `.trim();

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}