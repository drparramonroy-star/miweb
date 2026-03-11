import React from 'react';
import Link from 'next/link';

// 1. Aquí está la clave: Le decimos a TypeScript explícitamente que acepte onClick
export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: any; // <-- Usamos 'any' para evitar cualquier conflicto estricto de TS entre botones y links
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button = ({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = "",
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) => {
  
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-[#0F3C5C] text-white hover:bg-[#0A2A41] focus:ring-[#0F3C5C]",
    secondary: "bg-[#2FA4B7] text-white hover:bg-[#258A9B] focus:ring-[#2FA4B7]",
    outline: "border-2 border-[#0F3C5C] text-[#0F3C5C] hover:bg-[#F5F7F8] focus:ring-[#0F3C5C]"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      type={type} 
      className={combinedClasses} 
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};