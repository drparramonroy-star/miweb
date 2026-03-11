import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'green' | 'turquoise';
  className?: string;
}

export const Badge = ({ 
  children, 
  variant = 'turquoise', 
  className = "" 
}: BadgeProps) => {
  
  const variants = {
    blue: "bg-[#0F3C5C]/10 text-[#0F3C5C]",
    green: "bg-[#5CB85C]/10 text-[#449D44]",
    turquoise: "bg-[#2FA4B7]/10 text-[#2FA4B7]"
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};