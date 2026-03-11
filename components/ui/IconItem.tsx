import React from 'react';

interface IconItemProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  className?: string;
}

export const IconItem = ({ icon, title, description, className = "" }: IconItemProps) => {
  return (
    <div className={`flex flex-col items-center text-center p-4 ${className}`}>
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#2FA4B7]/10 text-[#2FA4B7] mb-4">
        {icon}
      </div>
      <h4 className="text-[#0F3C5C] font-bold text-lg mb-2 leading-tight">
        {title}
      </h4>
      {description && (
        <p className="text-slate-500 text-sm leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};