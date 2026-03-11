import React from 'react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { FaqAccordion } from '../ui/FaqAccordion';

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  title: string;
  subtitle: string;
  items: FaqItem[];
  background?: 'white' | 'gray' | 'primary';
}

export const FaqSection = ({ 
  title, 
  subtitle, 
  items,
  background = 'gray' // Fondo gris para contrastar con la caja blanca central
}: FaqSectionProps) => {
  return (
    <Section id="faq" background={background} className="!py-24 md:!py-32">
      <Container>
        {/* Cabecera Premium SEO */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0F3C5C] mb-6 tracking-tight">
            {title}
          </h2>
          <div className="w-20 h-1.5 bg-[#2FA4B7] mx-auto rounded-full mb-8" />
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Contenedor del Acordeón (Caja Blanca Elevada) */}
        <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100">
          <FaqAccordion items={items} />
        </div>
      </Container>
    </Section>
  );
};