import React from 'react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';

interface TrustItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface TrustSectionProps {
  sectionTitle: string;
  items: TrustItem[];
}

export const TrustSection = ({ sectionTitle, items }: TrustSectionProps) => {
  return (
    <Section background="gray" className="!py-16 md:!py-24 border-y border-slate-100">
      <Container>
        {/* Encabezado de Validación */}
        <div className="mb-12 md:mb-16 text-center md:text-left">
          <h2 className="text-[#0F3C5C] text-2xl md:text-3xl font-bold tracking-tight">
            {sectionTitle}
          </h2>
          <div className="w-16 h-1 bg-[#2FA4B7] mt-4 rounded-full mx-auto md:mx-0" />
        </div>

        {/* Grid de Credibilidad */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center md:items-start group transition-all duration-300"
            >
              <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-2xl bg-white shadow-sm text-[#2FA4B7] group-hover:bg-[#2FA4B7] group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-[#0F3C5C] font-bold text-lg mb-3 leading-tight">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};