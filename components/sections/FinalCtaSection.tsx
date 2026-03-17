'use client';

import React from 'react';
// Importamos el Container por separado por si acaso
import { Container } from '../ui/Container'; 
import { WhatsAppButton } from '../common/WhatsAppButton';

interface FinalCtaSectionProps {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaPhone: string;
  ctaMessage: string;
}

export const FinalCtaSection = ({
  title,
  subtitle,
  ctaLabel,
  ctaPhone,
  ctaMessage
}: FinalCtaSectionProps) => {
  return (
    // SOLUCIÓN DEFINITIVA: 
    // Usamos un <main> genérico en lugar de <Section> para evitar conflictos de estilos.
    // Forzamos el fondo Navy Profundo con !bg-[#0F3C5C]
    <main className="relative overflow-hidden !py-28 md:!py-36 !bg-[#0F3C5C] w-full">
      
      {/* DECORACIÓN: Luces suaves que dan calidez (Warm & Deep) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Luz de esperanza tenue en la esquina superior */}
        <div className="absolute -top-32 -right-32 w-[700px] h-[700px] bg-white opacity-[0.04] rounded-full blur-[130px]" />
        {/* Resplandor de marca muy sutil en la base */}
        <div className="absolute -bottom-32 -left-32 w-[700px] h-[700px] bg-[#2FA4B7] opacity-[0.06] rounded-full blur-[140px]" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Badge superior: Elegante y profesional. Texto FORZADO blanco sutil */}
          <span className="inline-block px-6 py-2.5 mb-12 bg-white/5 border border-white/10 !text-white/90 font-bold text-[10px] md:text-xs uppercase tracking-[0.35em] rounded-full backdrop-blur-md shadow-inner">
            Da el primer paso hoy
          </span>

          {/* TÍTULO: Forzamos texto blanco !text-white */}
          <h2 className="text-4xl md:text-7xl font-black mb-10 !text-white leading-[1.05] tracking-tight">
            {title}
          </h2>
          
          {/* Divisor suave blanco sutil */}
          <div className="w-24 h-1.5 bg-white/15 rounded-full mb-12" />
          
          {/* SUBTÍTULO: Texto gris azulado claro !text-slate-300 */}
          <p className="text-xl md:text-2xl !text-slate-300 mb-16 max-w-2xl leading-relaxed font-medium">
            {subtitle}
          </p>
          
          {/* BOTÓN DE WHATSAPP: Con efecto de profundidad */}
          <div className="relative group">
            {/* Glow verde sutil alrededor del botón en hover */}
            <div className="absolute -inset-5 bg-[#25D366]/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
            
            <WhatsAppButton
              phone={ctaPhone}
              message={ctaMessage}
              label={ctaLabel}
              // Forzamos fondo verde y texto blanco
              className="relative !bg-[#25D366] hover:!bg-[#1ea952] !text-white !px-14 !py-7 !text-lg md:!text-2xl !rounded-[2.5rem] shadow-[0_20px_60px_rgba(37,211,102,0.4)] transition-all duration-500 transform group-hover:scale-105 font-black uppercase tracking-tight"
            />
          </div>

          {/* MENSAJE DE CONFIANZA: La calidez final */}
          <div className="mt-20 flex flex-col items-center gap-6 w-full">
            {/* Texto forzado gris !text-slate-400 */}
            <p className="!text-slate-400 text-base md:text-lg font-medium max-w-md italic leading-relaxed">
              "Nuestra prioridad es acompañarte en cada paso hacia tu bienestar y nueva vida."
            </p>
            
            {/* Sedes con diseño minimalista. Texto forzado !text-white/30 */}
            <div className="flex items-center gap-4 !text-white/30 text-[10px] md:text-xs uppercase tracking-[0.4em] font-black pt-8 border-t border-white/5 w-full justify-center">
              Tepic
              <span className="w-1 h-1 bg-[#2FA4B7] rounded-full" />
              Puerto Vallarta
            </div>
          </div>

        </div>
      </Container>
    </main>
  );
};