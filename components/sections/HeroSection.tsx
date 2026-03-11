import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { WhatsAppButton } from '../common/WhatsAppButton';

interface HeroSectionProps {
  eyebrow?: string; // Frase emocional superior
  title: string;    // H1 SEO Local
  subtitle: string; // Valor médico + humano
  videoSrc?: string; // Opción ideal: video cinematográfico
  imageSrc?: string; // Opción segura: imagen editorial
  primaryCta: {
    label: string;
    phone: string;
    message: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  trustSignals?: string[]; // 4 micro-señales de confianza
}

export const HeroSection = ({
  eyebrow = "Tu nuevo horizonte comienza aquí",
  title,
  subtitle,
  videoSrc,
  imageSrc,
  primaryCta,
  secondaryCta,
  trustSignals = [
    "Equipo Multidisciplinario",
    "Sedes en Tepic y Bucerías",
    "Seguimiento Cercano",
    "Valoración por WhatsApp"
  ]
}: HeroSectionProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0F3C5C]">
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        {videoSrc ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-40"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          imageSrc && (
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover opacity-50"
            />
          )
        )}
        {/* Overlay degradado para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F3C5C]/80 via-[#0F3C5C]/40 to-[#0F3C5C]" />
      </div>

      {/* --- CONTENT LAYER --- */}
      <Container className="relative z-10 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-4xl">
          {/* 1. Frase Emocional */}
          <span className="inline-block text-[#2FA4B7] font-bold tracking-[0.2em] uppercase text-sm mb-4 animate-fade-in-down">
            {eyebrow}
          </span>

          {/* 2. H1 Principal (SEO Local) */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
            {title}
          </h1>

          {/* 3. Subtítulo (Médico + Humano) */}
          <p className="text-lg md:text-xl text-blue-50/90 mb-10 max-w-2xl leading-relaxed">
            {subtitle}
          </p>

          {/* 4. CTAs Inteligentes */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <WhatsAppButton
              phone={primaryCta.phone}
              message={primaryCta.message}
              label={primaryCta.label}
              className="!py-4 !px-8 !text-lg shadow-xl shadow-emerald-900/20"
            />
            {secondaryCta && (
              <Button
                href={secondaryCta.href}
                variant="outline"
                className="!border-white/30 !text-white hover:!bg-white/10 !py-4 !px-8 !text-lg"
              >
                {secondaryCta.label}
              </Button>
            )}
          </div>

          {/* 5. Micro-señales de Confianza e Indicador de Sedes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-t border-white/10 pt-8">
            {trustSignals.map((signal, index) => (
              <div key={index} className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-[#5CB85C] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white/80 text-xs md:text-sm font-medium leading-tight">
                  {signal}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Scroll Hint Sutil */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block animate-bounce text-white/30">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};