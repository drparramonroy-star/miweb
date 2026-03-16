'use client';

import React from 'react';

// Secciones
import { HeroSection } from '../../../components/sections/HeroSection';
import { TrustSection } from '../../../components/sections/TrustSection';
import { ServicesSection } from '../../../components/sections/ServicesSection';
import { BenefitsSection } from '../../../components/sections/BenefitsSection';
import { LocationsSection } from '../../../components/sections/LocationsSection';
import { ProcessSection } from '../../../components/sections/ProcessSection';
import { TestimonialsSection } from '../../../components/sections/TestimonialsSection';
import { FaqSection } from '../../../components/sections/FaqSection';
import { FinalCtaSection } from '../../../components/sections/FinalCtaSection';
import { FloatingWhatsAppButton } from '../../../components/common/FloatingWhatsAppButton';
import { BmiCalculatorSection } from '../../../components/sections/BmiCalculatorSection';
// IMPORTANTE: Nueva sección de Reels
import { ReelsSection } from '../../../components/sections/ReelsSection';

// Contenido
import { SITE_CONFIG } from '../../../content/config';
import { HERO_DATA, SERVICES_DATA, LOCATIONS_DATA, FAQ_DATA } from '../../../content/home/data';

export default function HomePage() {
  return (
    <main className="relative">
      {/* 1. HERO (Fondo Oscuro / Video) */}
      <HeroSection 
        eyebrow={HERO_DATA.eyebrow}
        title={HERO_DATA.title}
        subtitle={HERO_DATA.subtitle}
        imageSrc={HERO_DATA.image}
        videoSrc={HERO_DATA.video}
        primaryCta={HERO_DATA.primaryCta}
        secondaryCta={HERO_DATA.secondaryCta}
        trustSignals={HERO_DATA.trustSignals}
      />

      {/* 2. TRUST BAR - Actualizado con Puerto Vallarta */}
      <TrustSection 
        sectionTitle="Atención bariátrica con enfoque humano y especializado"
        items={[
          { 
            title: "Enfoque especializado", 
            description: "Centrados en cirugía bariátrica como manga gástrica, bypass gástrico y bipartición intestinal.",
            icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
          },
          { 
            title: "Equipo multidisciplinario", 
            description: "Médico, nutrición y psicología trabajando para ti.",
            icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 005.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
          },
          { 
            title: "Nayarit y Puerto Vallarta", 
            description: "Sedes en Tepic y Riviera Nayarit, con fácil acceso desde toda la bahía.",
            icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          },
          { 
            title: "Seguimiento cercano", 
            description: "Acompañamiento constante antes y después de tu cirugía.",
            icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
          }
        ]}
      />

      {/* 3. SERVICIOS */}
      <ServicesSection 
        title={SERVICES_DATA.title}
        subtitle={SERVICES_DATA.subtitle}
        services={SERVICES_DATA.items.map(s => ({
          ...s,
          ctaPhone: SITE_CONFIG.phone,
          ctaLabel: s.featured ? "Agendar consulta" : "Más información",
          keyMessage: s.keyMessage,
          icon: s.title.includes("Manga") ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          )
        }))}
      />

      {/* 4. BENEFICIOS (BENTO GRID) */}
      <BenefitsSection 
        title="¿Por qué Bahía Surgery?"
        subtitle="Un enfoque multidisciplinario diseñado para pacientes que buscan resultados permanentes y seguros en Nayarit y Riviera Nayarit."
        benefits={[
          { 
            title: "Tepic y Riviera Nayarit", 
            description: "Dos sedes estratégicas para acompañarte en la capital y la zona costera.",
            keyMessage: "Mayor cercanía y seguimiento local",
            icon: <img src="/images/quirofano-1.jpg" className="w-full h-full object-cover" alt="Instalaciones y Sedes" />
          },
          { 
            title: "Equipo Multidisciplinario", 
            description: "Cirujano, Nutrición y Psicología integrados en un solo plan de salud.",
            keyMessage: "Atención Integral 360°",
            icon: <img src="/images/quirofano-2.jpg" className="w-full h-full object-cover" alt="Equipo Médico en acción" />
          },
          { 
            title: "Enfoque personalizado", 
            description: "Atención médica diseñada a la medida de la realidad y necesidades de cada paciente.",
            keyMessage: "Trato humano y directo",
            icon: <img src="/images/bento-local.jpg" className="w-full h-full object-cover" alt="Atención personalizada" />
          },
          { 
            title: "Seguimiento Continuo", 
            description: "Control médico riguroso desde la valoración inicial hasta tu éxito post-operatorio.",
            keyMessage: "Acompañamiento de por vida",
            icon: <img src="/images/bento-seguimiento.jpg" className="w-full h-full object-cover" alt="Seguimiento médico" />
          }
        ]}
      />

      {/* CALCULADORA IMC */}
      <BmiCalculatorSection phone={SITE_CONFIG.phone} />

      {/* 5. UBICACIONES */}
      <LocationsSection 
        title="Nuestras Ubicaciones"
        subtitle="Encuéntranos en Tepic y Riviera Nayarit con instalaciones de primer nivel."
        locations={LOCATIONS_DATA.map(l => ({
          ...l,
          ctaPhone: SITE_CONFIG.phone,
          ctaMessage: `Hola, quiero informes de la sede ${l.city}`
        }))}
      />

      {/* 6. PROCESO (TIMELINE) */}
      <ProcessSection 
        background="gray"
        title="Tu proceso hacia una nueva etapa"
        subtitle="Nuestro equipo acompaña cada etapa del proceso bariátrico para que el paciente avance con seguridad y claridad."
        steps={[
          { 
            title: "Valoración inicial", 
            description: "Consulta médica donde se evalúa el estado de salud y se determina si eres candidato.",
            keyMessage: "Recibe orientación clara y personalizada."
          },
          { 
            title: "Preparación y evaluación", 
            description: "Orientación nutricional, médica y psicológica para preparar tu cuerpo.",
            keyMessage: "Planificación cuidadosa y profesional."
          },
          { 
            title: "Cirugía bariátrica", 
            description: "Procedimiento realizado en instalaciones equipadas con tecnología especializada.",
            keyMessage: "Seguridad médica en todo momento."
          },
          { 
            title: "Seguimiento y nueva etapa", 
            description: "Acompañamiento post-operatorio para consolidar tu transformación.",
            keyMessage: "Tu éxito es nuestro objetivo final."
          }
        ]}
        ctaLabel="Iniciar mi valoración"
        ctaPhone={SITE_CONFIG.phone}
        ctaMessage="Hola, me gustaría iniciar mi proceso y agendar una valoración inicial."
      />

      {/* 7. TESTIMONIOS */}
      <TestimonialsSection 
        background="white"
        title="Historias de pacientes"
        subtitle="Personas que decidieron dar el paso hacia una nueva etapa con acompañamiento bariátrico."
        testimonials={[
          {
            name: "Paciente",
            location: "Tepic, Nayarit",
            quote: "La valoración médica me ayudó a entender qué opción era la adecuada para mí y el proceso se sintió acompañado desde el inicio.",
            keyMessage: "Hoy me siento con más energía."
          },
          {
            name: "Paciente",
            location: "Riviera Nayarit",
            quote: "Tenía muchas dudas antes de iniciar. El equipo explicó cada paso con claridad y eso me dio mucha confianza.",
            keyMessage: "Valoro mucho el seguimiento post-cirugía."
          }
        ]} 
      />

      {/* --- NUEVA SECCIÓN: REELS DE INSTAGRAM --- */}
      <ReelsSection />

      {/* 8. FAQ */}
      <FaqSection 
        title="Dudas Frecuentes"
        subtitle="Información importante para tu tranquilidad."
        items={FAQ_DATA}
      />

      {/* 9. FINAL CTA */}
      <FinalCtaSection 
        title="Tu nuevo horizonte comienza hoy"
        subtitle="Agenda tu valoración y recupera tu calidad de vida con el Dr. Parra Monroy."
        ctaLabel="Hablar con un especialista"
        ctaPhone={SITE_CONFIG.phone}
        ctaMessage={SITE_CONFIG.defaultMessage}
      />

      {/* 10. FLOATING BUTTON */}
      <FloatingWhatsAppButton 
        phone={SITE_CONFIG.phone}
        message={SITE_CONFIG.defaultMessage}
        label="¿Dudas? Escríbenos"
      />
    </main>
  );
}