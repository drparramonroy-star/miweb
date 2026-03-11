import React from 'react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { ProcessStepCard } from '../cards/ProcessStepCard';
import { WhatsAppButton } from '../common/WhatsAppButton';

export interface StepItem {
  title: string;
  description: string;
  keyMessage: string; // Nuevo: El mensaje de tranquilidad/seguridad
  icon?: React.ReactNode;
}

interface ProcessSectionProps {
  title: string;
  subtitle: string;
  steps: StepItem[];
  ctaLabel?: string;
  ctaPhone?: string;
  ctaMessage?: string;
  background?: 'white' | 'gray' | 'primary';
}

export const ProcessSection = ({
  title,
  subtitle,
  steps,
  ctaLabel,
  ctaPhone,
  ctaMessage,
  background = 'gray'
}: ProcessSectionProps) => {
  return (
    <Section id="proceso" background={background} className="!py-24 md:!py-32 overflow-hidden">
      <Container>
        {/* Encabezado del Proceso */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0F3C5C] mb-6 tracking-tight">
            {title}
          </h2>
          <div className="w-20 h-1.5 bg-[#2FA4B7] mx-auto rounded-full mb-8" />
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Timeline Visual (Contenedor Relativo) */}
        <div className="relative mb-24">
          
          {/* Línea conectora horizontal (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-[#2FA4B7]/30 to-transparent z-0" />
          
          {/* Línea conectora vertical (Mobile) */}
          <div className="block lg:hidden absolute top-0 bottom-0 left-8 w-0.5 bg-gradient-to-b from-transparent via-[#2FA4B7]/30 to-transparent z-0" />

          {/* Grid de Pasos */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((item, index) => (
              <ProcessStepCard
                key={index}
                step={index + 1}
                title={item.title}
                description={item.description}
                keyMessage={item.keyMessage} // Pasamos el nuevo dato
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Bloque de Conversión Final del Proceso */}
        {ctaLabel && ctaPhone && (
          <div className="flex flex-col items-center justify-center text-center p-10 md:p-14 bg-[#0F3C5C] rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden max-w-4xl mx-auto group">
            {/* Decoración visual Premium */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2FA4B7] opacity-20 rounded-full blur-3xl -mr-20 -mt-20 transition-transform duration-1000 group-hover:scale-150" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl -ml-10 -mb-10" />
            
            <h4 className="text-2xl md:text-4xl font-bold mb-6 relative z-10 tracking-tight">
              ¿Listo para dar el primer paso?
            </h4>
            <p className="text-blue-100/90 mb-10 max-w-xl relative z-10 text-lg">
              Nuestro equipo está listo para acompañarte en tu transformación con seguridad, claridad y calidez humana.
            </p>
            <WhatsAppButton
              phone={ctaPhone}
              message={ctaMessage || ""}
              label={ctaLabel}
              variant="primary"
              className="!bg-[#25D366] hover:!bg-[#1ea952] !text-white !scale-110 shadow-lg shadow-green-900/20 transition-transform relative z-10"
            />
          </div>
        )}
      </Container>
    </Section>
  );
};