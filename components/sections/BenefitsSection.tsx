'use client';

import React from 'react';
import { Container } from '../ui/Container';

interface Benefit {
  title: string;
  description: string;
  keyMessage: string;
  icon: React.ReactNode;
}

interface BenefitsSectionProps {
  title: string;
  subtitle: string;
  benefits: Benefit[];
}

export const BenefitsSection = ({ 
  title, 
  subtitle, 
  benefits 
}: BenefitsSectionProps) => {
  return (
    <section className="!bg-[#0F3C5C] !py-24 md:!py-32 relative overflow-hidden w-full">
      
      {/* Decoración de fondo sutil */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2FA4B7] opacity-[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white opacity-[0.02] rounded-full blur-[100px]" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight leading-[1.1]">
            {title}
          </h2>
          <div className="w-20 h-1.5 bg-[#2FA4B7] rounded-full mb-8 opacity-50" />
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl font-medium">
            {subtitle}
          </p>
        </div>
      </Container>

      {/* CONTENEDOR CARRUSEL */}
      <div className="relative w-full overflow-x-auto pb-12 hide-scrollbar snap-x snap-mandatory">
        <div className="flex gap-6 px-[5%] md:px-[10%] min-w-max">
          
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`snap-center w-[85vw] md:w-[450px] rounded-[3rem] p-10 md:p-12 transition-all duration-700 flex flex-col justify-between h-[550px] md:h-[600px] group
                ${index % 2 === 0 
                  ? 'bg-white/5 border border-white/10 hover:bg-white/10' 
                  : 'bg-white text-[#0F3C5C]'
                }`}
            >
              <div>
                {/* Contenedor de Imagen/Icono */}
                <div className={`mb-10 w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.03]
                  ${index % 2 === 0 ? 'bg-white/5' : 'bg-slate-50'}`}
                >
                  {benefit.icon}
                </div>
                
                <h3 className={`text-2xl md:text-3xl font-black mb-4 tracking-tight
                  ${index % 2 === 0 ? 'text-white' : 'text-[#0F3C5C]'}`}
                >
                  {benefit.title}
                </h3>
                
                <p className={`text-lg leading-relaxed font-medium
                  ${index % 2 === 0 ? 'text-slate-400' : 'text-slate-500'}`}
                >
                  {benefit.description}
                </p>
              </div>

              <div className="mt-8">
                <span className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em]
                  ${index % 2 === 0 
                    ? 'bg-[#2FA4B7]/10 text-[#2FA4B7] border border-[#2FA4B7]/20' 
                    : 'bg-blue-50 text-[#0F3C5C]'
                  }`}
                >
                  {benefit.keyMessage}
                </span>
              </div>
            </div>
          ))}

          {/* Spacer final */}
          <div className="w-[5vw] md:w-[10vw]" />
        </div>
      </div>
    </section>
  );
};