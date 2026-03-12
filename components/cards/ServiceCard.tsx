import React from 'react';
import { Badge } from '../ui/Badge';
import { WhatsAppButton } from '../common/WhatsAppButton';

export interface ServiceCardProps {
  title: string;
  description: string;
  keyMessage: string;
  icon?: React.ReactNode;
  featured?: boolean;
  ctaLabel?: string;
  ctaPhone: string;
  ctaMessage: string;
  index?: number; // Nuevo: Nos permite saber qué número de tarjeta es para cambiar su color
}

export const ServiceCard = ({
  title,
  description,
  keyMessage,
  icon,
  featured = false,
  ctaLabel = "Más información",
  ctaPhone,
  ctaMessage,
  index = 0
}: ServiceCardProps) => {
  
  // Paletas de colores minimalistas para cada una de las 4 tarjetas
  const cardVariants = [
    { 
      // 1. Manga (Turquesa de la marca)
      borderHover: "hover:border-[#2FA4B7]",
      iconBg: "bg-[#2FA4B7]/10",
      iconColor: "text-[#2FA4B7]",
      noteBg: "bg-[#2FA4B7]/5",
      noteBorder: "border-[#2FA4B7]/20",
      noteText: "text-[#0F3C5C]"
    },
    { 
      // 2. Bypass (Azul Profundo)
      borderHover: "hover:border-[#0F3C5C]",
      iconBg: "bg-[#0F3C5C]/10",
      iconColor: "text-[#0F3C5C]",
      noteBg: "bg-[#0F3C5C]/5",
      noteBorder: "border-[#0F3C5C]/20",
      noteText: "text-[#0F3C5C]"
    },
    { 
      // 3. Bipartición (Esmeralda Médico)
      borderHover: "hover:border-emerald-500",
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-600",
      noteBg: "bg-emerald-50",
      noteBorder: "border-emerald-100",
      noteText: "text-emerald-900"
    },
    { 
      // 4. Laparoscópica (Celeste Limpio)
      borderHover: "hover:border-sky-500",
      iconBg: "bg-sky-500/10",
      iconColor: "text-sky-600",
      noteBg: "bg-sky-50",
      noteBorder: "border-sky-100",
      noteText: "text-sky-900"
    }
  ];

  // Asignamos la paleta basándonos en el orden de la tarjeta
  const variant = cardVariants[index % 4];

  return (
    <div className={`relative flex flex-col h-full p-8 md:p-10 rounded-3xl transition-all duration-300 border bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 ${variant.borderHover} ${featured ? 'border-[#2FA4B7]/30' : 'border-slate-100'}`}>
      
      {/* Badge de Procedimiento Estrella (Alineado arriba a la izquierda para no romper la simetría) */}
      {featured && (
        <div className="absolute -top-3.5 left-8">
          <Badge variant="turquoise" className="!px-5 !py-1 shadow-sm whitespace-nowrap text-xs">
            Procedimiento Estrella
          </Badge>
        </div>
      )}

      {/* Icono Estilizado con color dinámico */}
      {icon && (
        <div className={`mb-8 flex items-center justify-center w-14 h-14 rounded-2xl ${variant.iconBg} ${variant.iconColor}`}>
          {icon}
        </div>
      )}

      <h3 className="text-2xl font-bold text-[#0F3C5C] mb-4 tracking-tight">
        {title}
      </h3>

      <p className="text-slate-600 mb-8 leading-relaxed text-base">
        {description}
      </p>

      {/* Bloque de Valor / Key Message con fondo sutil dinámico */}
      <div className={`mb-10 p-5 rounded-2xl text-sm font-medium leading-snug border ${variant.noteBg} ${variant.noteBorder} ${variant.noteText}`}>
        <span className="block mb-1.5 text-[10px] uppercase tracking-widest opacity-60 font-bold">Nota médica:</span>
        {keyMessage}
      </div>

      <div className="mt-auto">
        <WhatsAppButton
          phone={ctaPhone}
          message={ctaMessage}
          label={ctaLabel}
          variant={featured ? 'primary' : 'outline'}
          className="w-full !py-4 !rounded-xl font-bold"
        />
      </div>
    </div>
  );
};