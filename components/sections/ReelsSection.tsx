'use client';

import React from 'react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';

const REEL_IDS = [
  'Cx__XRINcqT', 
  'CyMV3NhOxwO', 
  'Cxod_A1OT1U'
];

export const ReelsSection = () => {
  return (
    <Section background="gray" className="!py-24 md:!py-32 relative overflow-hidden">
      {/* Glows de fondo para el "Flow" visual */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2FA4B7]/10 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0F3C5C]/5 rounded-full blur-[100px] -ml-48 -mb-48 pointer-events-none" />

      <Container className="relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <span className="inline-block px-5 py-1.5 mb-6 bg-white text-[#2FA4B7] text-[10px] font-black tracking-[0.3em] uppercase rounded-full shadow-sm border border-slate-100">
            Social Proof
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-[#0F3C5C] mb-8 leading-[1.1] tracking-tight">
            Resultados que <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2FA4B7] to-[#0F3C5C]">
              inspiran confianza
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Historias reales de pacientes que transformaron su vida con el equipo de Bahía Surgery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {REEL_IDS.map((id) => (
            <div 
              key={id} 
              className="group relative aspect-[9/16] w-full bg-white rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(15,60,92,0.1)] transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_40px_80px_rgba(47,164,183,0.2)]"
            >
              {/* Botón Flotante de Instagram (Solo visible en Hover) */}
              <div className="absolute top-6 right-6 z-20 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500">
                <div className="bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-xl">
                  <svg className="w-5 h-5 text-[#E4405F]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </div>
              </div>

              <iframe
                src={`https://www.instagram.com/reel/${id}/embed`}
                className="w-full h-full border-none"
                title={`Resultado Real ${id}`}
                scrolling="no"
                // Eliminamos allowTransparency para matar el error de React
              />
              
              {/* Marco elegante tipo NFT */}
              <div className="absolute inset-0 border-[12px] border-white rounded-[3rem] pointer-events-none" />
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a 
            href="https://www.instagram.com/bahiasurgery" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 bg-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all"
          >
            <span className="text-[#0F3C5C] font-black tracking-tight">Ver más en Instagram</span>
            <div className="w-10 h-10 bg-[#2FA4B7] rounded-xl flex items-center justify-center text-white group-hover:rotate-12 transition-transform">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </a>
        </div>
      </Container>
    </Section>
  );
};