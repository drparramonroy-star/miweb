import React from 'react';
import { Badge } from '../ui/Badge';
import { WhatsAppButton } from '../common/WhatsAppButton';

export interface ServiceCardProps {
  title: string;
  description: string;
  keyMessage: string; // Nuevo: Para el insight médico/humano
  icon?: React.ReactNode;
  featured?: boolean;
  ctaLabel?: string;
  ctaPhone: string;
  ctaMessage: string;
}

export const ServiceCard = ({
  title,
  description,
  keyMessage,
  icon,
  featured = false,
  ctaLabel = "Más información",
  ctaPhone,
  ctaMessage
}: ServiceCardProps) => {
  return (
    <div className={`relative flex flex-col h-full p-8 md:p-10 rounded-3xl transition-all duration-500 border ${
      featured 
        ? 'border-[#2FA4B7] bg-white shadow-[0_20px_50px_rgba(47,164,183,0.15)] scale-105 z-10' 
        : 'border-slate-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1'
    }`}>
      {/* Badge de Procedimiento Estrella */}
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <Badge variant="turquoise" className="!px-6 !py-1.5 shadow-md whitespace-nowrap">
            Procedimiento Estrella
          </Badge>
        </div>
      )}

      {/* Icono Estilizado */}
      {icon && (
        <div className={`mb-8 flex items-center justify-center w-16 h-16 rounded-2xl ${
          featured ? 'bg-[#2FA4B7] text-white shadow-lg shadow-cyan-100' : 'bg-[#2FA4B7]/10 text-[#2FA4B7]'
        }`}>
          {icon}
        </div>
      )}

      <h3 className="text-2xl font-bold text-[#0F3C5C] mb-4 tracking-tight">
        {title}
      </h3>

      <p className="text-slate-600 mb-8 leading-relaxed text-base md:text-lg">
        {description}
      </p>

      {/* Bloque de Valor / Key Message */}
      <div className={`mb-10 p-5 rounded-2xl text-sm md:text-base font-medium leading-snug ${
        featured ? 'bg-emerald-50 text-emerald-800 border border-emerald-100' : 'bg-blue-50 text-[#0F3C5C]/80 border border-blue-100'
      }`}>
        <span className="block mb-1 text-[10px] uppercase tracking-widest opacity-60">Nota médica:</span>
        {keyMessage}
      </div>

      <div className="mt-auto">
        <WhatsAppButton
          phone={ctaPhone}
          message={ctaMessage}
          label={ctaLabel}
          variant={featured ? 'primary' : 'outline'}
          className={`w-full !py-4 !rounded-xl font-bold ${featured ? 'shadow-lg' : ''}`}
        />
      </div>
    </div>
  );
};