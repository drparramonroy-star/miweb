import React from 'react';

export interface TestimonialCardProps {
  name: string;
  location: string;
  quote: string;
  keyMessage: string; 
  imageSrc?: string;
  imageAlt?: string;
  isDarkContext?: boolean; // Nuevo: Le avisa a la tarjeta si el fondo es oscuro
}

export const TestimonialCard = ({
  name,
  location,
  quote,
  keyMessage,
  imageSrc,
  imageAlt,
  isDarkContext = false // Por defecto es falso para mantener retrocompatibilidad
}: TestimonialCardProps) => {
  return (
    <div className={`p-8 md:p-10 rounded-[2rem] border shadow-md hover:shadow-xl transition-all duration-500 flex flex-col h-full mx-2 md:mx-0 group ${
      isDarkContext 
        ? 'bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10' // Modo Cristal Premium
        : 'bg-white border-slate-100 hover:-translate-y-1' // Modo Blanco Normal
    }`}>
      
      {/* Icono de comillas Premium */}
      <div className={`mb-6 transform group-hover:scale-110 transition-transform duration-500 origin-left ${
        isDarkContext ? 'text-[#2FA4B7]' : 'text-[#2FA4B7] opacity-20'
      }`}>
        <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H12.017V21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.91243 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H7.017C6.46472 8 6.017 8.44772 6.017 9V12C6.017 12.5523 5.5693 13 5.017 13H4.017V21H6.017Z" />
        </svg>
      </div>

      {/* Experiencia Breve */}
      <p className={`leading-relaxed text-base md:text-lg mb-8 flex-grow ${
        isDarkContext ? 'text-blue-50/90' : 'text-slate-600'
      }`}>
        "{quote}"
      </p>

      {/* Mensaje Emocional Destacado */}
      <div className={`mb-8 p-4 rounded-xl border ${
        isDarkContext ? 'bg-white/10 border-white/10' : 'bg-blue-50/50 border-blue-100/50'
      }`}>
        <p className={`font-semibold text-sm md:text-base leading-snug ${
          isDarkContext ? 'text-white' : 'text-[#0F3C5C]'
        }`}>
          {keyMessage}
        </p>
      </div>

      {/* Perfil del Paciente */}
      <div className={`flex items-center gap-4 mt-auto pt-6 border-t ${
        isDarkContext ? 'border-white/10' : 'border-slate-50'
      }`}>
        {imageSrc ? (
          <img 
            src={imageSrc} 
            alt={imageAlt || name} 
            className={`w-14 h-14 rounded-full object-cover border-2 shadow-sm ${
              isDarkContext ? 'border-white/20' : 'border-white'
            }`}
          />
        ) : (
          <div className={`w-14 h-14 rounded-full border flex items-center justify-center font-bold text-xl shadow-sm ${
            isDarkContext ? 'bg-white/10 border-white/10 text-white' : 'bg-slate-50 border-slate-100 text-[#2FA4B7]'
          }`}>
            {name.charAt(0)}
          </div>
        )}
        <div>
          <h4 className={`font-bold text-base ${
            isDarkContext ? 'text-white' : 'text-[#0F3C5C]'
          }`}>{name}</h4>
          <p className={`text-sm font-medium ${
            isDarkContext ? 'text-blue-100/60' : 'text-slate-500'
          }`}>
            {location}
          </p>
        </div>
      </div>
    </div>
  );
};