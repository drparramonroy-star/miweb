'use client';

import React from 'react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';

const REELS_DATA = [
  {
    id: 'DV9MTAdkf3z',
    title: 'Cirugía de Bipartición Intestinal',
    description: 'Procedimiento de alta complejidad para el control metabólico.',
    image: '/images/reels/biparticion-preview.jpg', // Toma un screenshot del video
    url: 'https://www.instagram.com/reel/DV9MTAdkf3z/'
  },
  {
    id: 'DIuBarjpmSs',
    title: 'Equipo Quirúrgico',
    description: 'Conoce al equipo multidisciplinario que te acompaña.',
    image: '/images/reels/equipo-preview.jpg', // Toma un screenshot del video
    url: 'https://www.instagram.com/reel/DIuBarjpmSs/'
  },
  {
    id: 'DEk9heuJOEz',
    title: 'Evolución Bariátrica',
    description: 'Resultados y seguimiento de nuestros pacientes.',
    image: '/images/reels/antes-despues.jpg', // Toma un screenshot del video
    url: 'https://www.instagram.com/reel/DEk9heuJOEz/'
  }
];

export const ReelsSection = () => {
  return (
    <Section background="gray" className="!py-24 md:!py-32 relative overflow-hidden">
      <Container className="relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <span className="inline-block px-5 py-1.5 mb-6 bg-white text-[#2FA4B7] text-[10px] font-black tracking-[0.3em] uppercase rounded-full shadow-sm border border-slate-100">
            Casos de Éxito
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-[#0F3C5C] mb-8 leading-[1.1]">
            Evidencia <span className="text-[#2FA4B7]">Clínica</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {REELS_DATA.map((reel) => (
            <a 
              key={reel.id}
              href={reel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[9/16] w-full bg-[#0F3C5C] rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-4"
            >
              {/* Imagen de fondo (Screenshot del Reel) */}
              <img 
                src={reel.image} 
                className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" 
                alt={reel.title}
              />
              
              {/* Overlay de Gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F3C5C] via-transparent to-transparent opacity-80" />

              {/* Icono de Play Central */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-[#2FA4B7] rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white fill-current ml-1" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Info del Video */}
              <div className="absolute bottom-10 left-8 right-8">
                <h3 className="text-white font-black text-xl mb-2">{reel.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{reel.description}</p>
              </div>

              {/* Badge de Instagram */}
              <div className="absolute top-8 left-8">
                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 text-[10px] font-bold text-white">
                  VER EN INSTAGRAM
                </div>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </Section>
  );
};