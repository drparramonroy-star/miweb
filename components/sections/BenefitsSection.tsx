import React from 'react';
import { Section } from '../ui/Section';
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
    <Section background="primary" className="!py-24 md:!py-32 relative overflow-hidden">
      {/* Decoración de fondo premium */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#2FA4B7] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#2FA4B7] rounded-full blur-[100px]" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            {title}
          </h2>
          <div className="w-20 h-1.5 bg-[#2FA4B7] rounded-full mb-8" />
          <p className="text-lg md:text-xl text-blue-100/80 leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          
          {/* Bloque 1: Tepic y Bucerías (Para tu foto 1200x800) */}
          <div className="md:col-span-4 bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2.5rem] hover:bg-white/10 transition-colors group overflow-hidden">
            <div className="flex flex-col h-full">
              {/* Ajuste: max-h-72 y aspecto para que no se corte el paisaje/edificio */}
              <div className="mb-8 w-full aspect-[16/9] md:aspect-[21/9] max-h-72 rounded-3xl overflow-hidden shadow-lg group-hover:scale-[1.02] transition-transform duration-500">
                {benefits[0].icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{benefits[0].title}</h3>
              <p className="text-blue-100/70 text-lg mb-6 max-w-xl">{benefits[0].description}</p>
              <span className="mt-auto text-[#2FA4B7] font-semibold text-sm uppercase tracking-widest">
                {benefits[0].keyMessage}
              </span>
            </div>
          </div>

          {/* Bloque 2: Equipo (Para tu foto 800x800) */}
          <div className="md:col-span-2 bg-[#2FA4B7] p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-cyan-900/20 overflow-hidden group">
            <div className="flex flex-col h-full text-white">
              {/* Ajuste: aspect-square para respetar la foto 1:1 del doctor */}
              <div className="mb-6 w-full aspect-square rounded-2xl overflow-hidden bg-white/10 group-hover:scale-105 transition-transform duration-500 shadow-md">
                {benefits[1].icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{benefits[1].title}</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6">{benefits[1].description}</p>
              <span className="mt-auto text-white font-bold text-[10px] uppercase tracking-tighter">
                {benefits[1].keyMessage}
              </span>
            </div>
          </div>

          {/* Bloque 3: Paciente Local (Para tu foto 800x800) */}
          <div className="md:col-span-2 bg-white/5 border border-white/10 p-8 md:p-10 rounded-[2.5rem] hover:bg-white/10 transition-colors overflow-hidden group">
            <div className="flex flex-col h-full text-white">
              {/* Ajuste: aspect-square para respetar la foto 1:1 local */}
              <div className="mb-6 w-full aspect-square rounded-2xl overflow-hidden bg-white/5 group-hover:scale-105 transition-transform duration-500 shadow-md">
                {benefits[2].icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{benefits[2].title}</h3>
              <p className="text-blue-100/60 text-sm leading-relaxed mb-4">{benefits[2].description}</p>
              <span className="mt-auto text-[#2FA4B7] font-medium text-xs">
                {benefits[2].keyMessage}
              </span>
            </div>
          </div>

          {/* Bloque 4: Seguimiento (Para tu foto 1200x600 - MUY RECTANGULAR) */}
          <div className="md:col-span-4 bg-white p-6 md:p-8 rounded-[2.5rem] shadow-2xl overflow-hidden group">
            {/* Ajuste: Cambiamos a flexDirection y el contenedor de imagen respeta el rectángulo */}
            <div className="flex flex-col md:flex-row gap-8 items-center h-full">
              <div className="flex-shrink-0 w-full md:w-1/2 aspect-[2/1] md:aspect-auto md:h-full min-h-[220px] rounded-2xl overflow-hidden bg-slate-50 shadow-inner">
                {benefits[3].icon}
              </div>
              <div className="w-full md:w-1/2 py-4 pr-4">
                <h3 className="text-2xl md:text-3xl font-bold text-[#0F3C5C] mb-3">{benefits[3].title}</h3>
                <p className="text-slate-500 text-lg mb-6">{benefits[3].description}</p>
                <div className="inline-block px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-bold shadow-sm">
                  {benefits[3].keyMessage}
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
};