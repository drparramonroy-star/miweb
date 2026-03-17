'use client';

import React from 'react';
import { Container } from '../ui/Container';
import { WhatsAppButton } from '../common/WhatsAppButton';

export interface StepItem {
  title: string;
  description: string;
  keyMessage: string;
}

interface ProcessSectionProps {
  title: string;
  subtitle: string;
  steps: StepItem[];
  ctaLabel?: string;
  ctaPhone?: string;
  ctaMessage?: string;
  // AGREGAMOS ESTO PARA QUE TYPESCRIPT NO SE QUEJE:
  background?: 'white' | 'gray' | 'primary' | string; 
}

export const ProcessSection = ({ 
  title, 
  subtitle, 
  steps, 
  ctaLabel, 
  ctaPhone, 
  ctaMessage,
  background // Lo recibimos aunque estemos forzando el Navy para el look Apple
}: ProcessSectionProps) => {
  return (
    // Mantenemos el !bg-[#0F3C5C] para que el diseño Apple no se rompa
    <section id="proceso" className="!bg-[#0F3C5C] !py-24 md:!py-32 relative overflow-hidden w-full">
      
      {/* Decoración de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#2FA4B7] opacity-[0.03] rounded-full blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mb-16 md:mb-20">
          <span className="text-[#2FA4B7] font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">Paso a Paso</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight leading-[1.1]">{title}</h2>
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl font-medium">{subtitle}</p>
        </div>
      </Container>

      {/* CARRUSEL DE PASOS */}
      <div className="relative w-full overflow-x-auto pb-12 hide-scrollbar snap-x snap-mandatory">
        <div className="flex gap-8 px-[5%] md:px-[10%] min-w-max">
          {steps.map((item, index) => (
            <div key={index} className="snap-center w-[80vw] md:w-[400px] bg-white/5 border border-white/10 rounded-[3rem] p-10 md:p-12 flex flex-col justify-between h-[500px] md:h-[550px] relative group overflow-hidden transition-all duration-500 hover:bg-white/10">
              <div className="absolute -top-10 -right-10 text-[15rem] font-black text-white opacity-[0.03] select-none group-hover:opacity-[0.06] transition-opacity duration-700 leading-none">
                {index + 1}
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#2FA4B7] flex items-center justify-center mb-10 shadow-lg shadow-[#2FA4B7]/20 group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl font-black">{index + 1}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-6 tracking-tight leading-tight">{item.title}</h3>
                <p className="text-lg text-slate-300 leading-relaxed font-medium">{item.description}</p>
              </div>
              <div className="relative z-10 mt-8">
                <div className="bg-[#2FA4B7]/10 border border-[#2FA4B7]/20 rounded-2xl px-6 py-4">
                  <p className="text-[#2FA4B7] font-bold text-xs uppercase tracking-widest text-center">{item.keyMessage}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="w-[5vw] md:w-[10vw]" />
        </div>
      </div>

      {/* BLOQUE DE CIERRE (CTA) */}
      <Container className="mt-20 relative z-10">
        <div className="flex flex-col items-center justify-center text-center p-10 md:p-20 bg-white/5 border border-white/10 rounded-[4rem] backdrop-blur-md shadow-2xl max-w-5xl mx-auto group">
          <h4 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tight leading-tight">
            ¿Listo para tu <br/> <span className="text-[#2FA4B7]">nueva etapa?</span>
          </h4>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl font-medium italic">
            "No solo operamos estómagos, transformamos vidas con seguridad y calidez humana."
          </p>
          {ctaLabel && ctaPhone && (
            <div className="relative">
              <div className="absolute -inset-4 bg-[#25D366]/20 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              <WhatsAppButton
                phone={ctaPhone}
                message={ctaMessage || ""}
                label={ctaLabel}
                className="relative !bg-[#25D366] hover:!bg-[#1ea952] !text-white !px-12 !py-6 !text-lg md:!text-xl !rounded-[2rem] shadow-2xl transition-all duration-500 transform group-hover:scale-105 font-black"
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};