import React from 'react';

export interface ProcessStepCardProps {
  step: number;
  title: string;
  description: string;
  keyMessage: string; // El mensaje clave de tranquilidad
  isLast?: boolean;
}

export const ProcessStepCard = ({
  step,
  title,
  description,
  keyMessage,
  isLast
}: ProcessStepCardProps) => {
  return (
    <div className="relative group z-10 flex flex-col items-start lg:items-center h-full">
      
      {/* El "Nodo" del Timeline (Círculo Flotante) */}
      <div className="flex items-center justify-center w-16 h-16 mb-6 md:mb-8 rounded-full bg-white border-[6px] border-slate-50 shadow-lg text-[#2FA4B7] font-bold text-2xl relative z-10 group-hover:scale-110 group-hover:border-[#2FA4B7]/20 group-hover:bg-[#2FA4B7] group-hover:text-white transition-all duration-500">
        {step}
      </div>

      {/* La Tarjeta de Contenido */}
      <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-100 shadow-sm group-hover:shadow-xl transition-all duration-500 w-full flex flex-col flex-grow relative overflow-hidden">
        
        {/* Un brillo sutil de fondo en el hover */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#2FA4B7] opacity-0 group-hover:opacity-5 rounded-full blur-2xl -mr-16 -mt-16 transition-opacity duration-500" />

        <h3 className="text-xl md:text-2xl font-bold text-[#0F3C5C] mb-4 tracking-tight relative z-10">
          {title}
        </h3>
        
        <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-8 flex-grow relative z-10">
          {description}
        </p>

        {/* Mensaje Clave Estratégico (Tranquilidad) */}
        <div className="mt-auto pt-5 border-t border-slate-50 relative z-10">
          <div className="inline-block px-3 py-1 mb-2 bg-blue-50 text-[#2FA4B7] font-bold text-[10px] uppercase tracking-widest rounded-md">
            Nuestro enfoque
          </div>
          <p className="text-[#0F3C5C] font-semibold text-sm leading-snug">
            {keyMessage}
          </p>
        </div>
      </div>

    </div>
  );
};