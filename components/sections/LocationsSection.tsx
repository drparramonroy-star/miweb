import React from 'react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { LocationCard } from '../cards/LocationCard';

interface LocationItem extends React.ComponentProps<typeof LocationCard> {}

interface LocationsSectionProps {
  title: string;
  subtitle: string;
  locations: LocationItem[];
  background?: 'white' | 'gray' | 'primary';
}

export const LocationsSection = ({
  title,
  subtitle,
  locations,
  background = 'white' // Fondo blanco para contrastar con el Bento Grid azul anterior
}: LocationsSectionProps) => {
  return (
    <Section id="ubicaciones" background={background} className="!py-24 md:!py-32">
      <Container>
        {/* Cabecera SEO Local */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0F3C5C] mb-6 tracking-tight">
            {title}
          </h2>
          <div className="w-20 h-1.5 bg-[#2FA4B7] mx-auto rounded-full mb-8" />
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Grid de 2 Tarjetas Grandes (Tepic / Bucerías) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {locations.map((loc, index) => (
            <LocationCard key={index} {...loc} />
          ))}
        </div>
      </Container>
    </Section>
  );
};