import React from 'react';
import { Section } from '../ui/Section';
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
    <Section background="primary" className="!py-24 md:!py-32 relative overflow-hidden">
      
      {/* Decoración visual calmante y elegante */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Halo de luz de esperanza al fondo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2FA4B7] opacity-20 rounded-full blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Sutil Etiqueta Superior de Bienvenida */}
          <span className="inline-block px-5 py-2 mb-8 bg-white/10 border border-white/20 text-white font-semibold text-xs md:text-sm uppercase tracking-widest rounded-full backdrop-blur-sm shadow-sm">
            Da el primer paso hoy
          </span>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight tracking-tight">
            {title}
          </h2>
          
          <div className="w-24 h-1.5 bg-[#2FA4B7] rounded-full mb-8" />
          
          <p className="text-xl md:text-2xl text-blue-100/90 mb-12 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
          
          {/* Botón Destacado con Efecto Glow */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#25D366] to-[#1ea952] rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
            <WhatsAppButton
              phone={ctaPhone}
              message={ctaMessage}
              label={ctaLabel}
              className="relative !bg-[#25D366] hover:!bg-[#1ea952] text-white !px-10 !py-5 !text-lg md:!text-xl !rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Reductor de fricción psicológica (Vital para la conversión) */}
          <p className="mt-8 text-blue-100/70 text-sm md:text-base font-medium max-w-lg">
            La valoración inicial permite resolver dudas y conocer si eres candidato para cirugía bariátrica. Sin compromisos.
          </p>

          <div className="mt-10 pt-8 border-t border-white/10 flex items-center justify-center gap-2 text-white/40 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            Atención bariátrica en Tepic y Bucerías, Nayarit.
          </div>
        </div>
      </Container>
    </Section>
  );
};