import React from 'react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { TestimonialCard } from '../cards/TestimonialCard';

export interface Testimonial {
  name: string;
  location: string;
  quote: string;
  keyMessage: string;
  imageSrc?: string;
}

interface TestimonialsSectionProps {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
  background?: 'white' | 'gray' | 'primary';
}

export const TestimonialsSection = ({
  title,
  subtitle,
  testimonials,
  background = 'primary' // Ahora por defecto será Oscuro para romper la monotonía
}: TestimonialsSectionProps) => {
  
  const isDark = background === 'primary';

  return (
    <Section id="testimonios" background={background} className="!py-24 md:!py-32 overflow-hidden relative">
      
      {/* Decoración de fondo si es oscuro */}
      {isDark && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#2FA4B7] opacity-20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-white opacity-5 rounded-full blur-[100px]" />
        </div>
      )}

      <Container className="relative z-10">
        {/* Cabecera Adaptable */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className={`text-3xl md:text-5xl font-bold mb-6 tracking-tight ${isDark ? 'text-white' : 'text-[#0F3C5C]'}`}>
            {title}
          </h2>
          <div className="w-20 h-1.5 bg-[#2FA4B7] mx-auto rounded-full mb-8" />
          <p className={`text-lg md:text-xl leading-relaxed ${isDark ? 'text-blue-100/80' : 'text-slate-600'}`}>
            {subtitle}
          </p>
        </div>

        {/* Slider Híbrido */}
        <div 
          className="flex overflow-x-auto pb-12 -mx-4 px-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0 md:px-0 md:mx-0"
          style={{ scrollbarWidth: 'none' }}
        >
          {testimonials.map((t, index) => (
            <div key={index} className="w-[85vw] flex-shrink-0 snap-center md:w-auto md:flex-shrink">
              {/* Le pasamos a la tarjeta una prop para saber si está en fondo oscuro */}
              <TestimonialCard {...t} isDarkContext={isDark} />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};