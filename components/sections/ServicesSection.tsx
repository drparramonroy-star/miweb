import React from 'react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { ServicesGrid } from './ServicesGrid';
import { ServiceCardProps } from '../cards/ServiceCard';
import { WhatsAppButton } from '../common/WhatsAppButton';

interface ServicesSectionProps {
  title: string;
  subtitle: string;
  services: ServiceCardProps[];
  ctaLabel?: string;
  ctaPhone?: string;
  ctaMessage?: string;
}

// Aseguramos export nombrado para evitar error ts(2305)
export const ServicesSection = ({
  title,
  subtitle,
  services,
  ctaLabel,
  ctaPhone,
  ctaMessage
}: ServicesSectionProps) => {
  return (
    // CAMBIO: background="gray" para contraste y más padding (!py-24)
    <Section id="procedimientos" background="gray" className="!py-24 md:!py-32">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0F3C5C] mb-6 tracking-tight">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            {subtitle}
          </p>
        </div>

        <ServicesGrid services={services} />

        {ctaLabel && ctaPhone && ctaMessage && (
          <div className="mt-20 md:mt-28 text-center">
            {/* CAMBIO: bg-white y shadow-xl para que resalte sobre el fondo gris */}
            <div className="inline-flex flex-col items-center p-10 md:p-12 bg-white rounded-3xl border border-slate-100 shadow-xl max-w-2xl">
              <p className="text-[#0F3C5C] text-lg font-semibold mb-6">
                ¿No estás seguro de qué procedimiento es ideal para ti?
              </p>
              <WhatsAppButton
                phone={ctaPhone}
                message={ctaMessage}
                label={ctaLabel}
                variant="primary"
                className="shadow-lg"
              />
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
};