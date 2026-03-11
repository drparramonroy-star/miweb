import React from 'react';
import { WhatsAppButton } from '../common/WhatsAppButton';
import { Button } from '../ui/Button';

export interface LocationCardProps {
  city: string;
  venue: string;
  description?: string; // Añadido para explicar el nivel de las instalaciones
  address: string;
  schedule?: string;
  mapUrl: string;
  imageSrc?: string;
  imageAlt?: string;
  ctaPhone?: string;
  ctaMessage?: string;
}

export const LocationCard = ({
  city,
  venue,
  description,
  address,
  schedule,
  mapUrl,
  imageSrc,
  imageAlt,
  ctaPhone,
  ctaMessage
}: LocationCardProps) => {
  return (
    <div className="flex flex-col h-full bg-white rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 border border-slate-100 group">
      
      {/* Imagen Premium de la Sede */}
      {imageSrc && (
        <div className="relative h-64 md:h-72 w-full overflow-hidden bg-slate-100">
          <img 
            src={imageSrc} 
            alt={imageAlt || venue} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          {/* Overlay suave y Etiqueta de Ciudad */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F3C5C]/60 to-transparent" />
          <div className="absolute bottom-6 left-6 md:left-8">
            <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md text-white font-bold text-xs uppercase tracking-widest rounded-full border border-white/30 shadow-sm">
              Sede {city}
            </span>
          </div>
        </div>
      )}

      <div className="p-8 md:p-10 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-[#0F3C5C] mb-4 tracking-tight">{venue}</h3>
        
        {/* Nueva Descripción Estratégica */}
        {description && (
          <p className="text-slate-600 mb-8 leading-relaxed text-lg">
            {description}
          </p>
        )}
        
        {/* Bloque de Información Gris (Da orden visual) */}
        <div className="bg-slate-50 p-6 rounded-2xl space-y-4 mb-8 flex-grow border border-slate-100/50">
          <p className="text-slate-600 text-sm md:text-base flex items-start">
            <svg className="w-6 h-6 mr-3 text-[#2FA4B7] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            <span className="leading-snug">{address}</span>
          </p>
          {schedule && (
            <p className="text-slate-600 text-sm md:text-base flex items-start">
              <svg className="w-6 h-6 mr-3 text-[#2FA4B7] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span>{schedule}</span>
            </p>
          )}
        </div>

        {/* Botones de Acción */}
        <div className="flex flex-col gap-3 mt-auto">
          {ctaPhone && ctaMessage && (
            <WhatsAppButton 
              phone={ctaPhone} 
              message={ctaMessage} 
              label="Agendar valoración aquí" 
              className="w-full !py-4 shadow-md !rounded-xl"
            />
          )}
          <Button href={mapUrl} variant="outline" className="w-full !py-4 !rounded-xl">
            Ver ubicación en mapa
          </Button>
        </div>
      </div>
    </div>
  );
};