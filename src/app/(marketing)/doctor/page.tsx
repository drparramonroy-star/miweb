'use client';

import React from 'react';

// Componentes con rutas corregidas
import { Container } from '../../../../components/ui/Container';
import { Button } from '../../../../components/ui/Button';
import { Section } from '../../../../components/ui/Section';

export default function DoctorProfilePage() {
  return (
    <main className="bg-slate-50 min-h-screen pb-20">
      {/* 1. HEADER / TARJETA DIGITAL (Look Moderno/NFT) */}
      <section className="bg-[#0F3C5C] pt-32 pb-24 text-white rounded-b-[4rem] shadow-2xl relative overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#2FA4B7] rounded-full blur-[100px] opacity-20 -mr-20 -mt-20" />
        
        <Container className="max-w-4xl text-center relative z-10">
          <div className="relative inline-block mb-10">
            {/* Foto principal del Doctor */}
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-[3rem] border-4 border-[#2FA4B7] overflow-hidden mx-auto shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 bg-white">
              <img 
                src="/images/dr.webp" 
                alt="Dr. Jorge Parra Monroy" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Badge de Verificado */}
            <div className="absolute -bottom-4 -right-4 bg-[#2FA4B7] p-4 rounded-2xl shadow-xl border-4 border-[#0F3C5C]">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">Dr. Jorge Parra</h1>
          <p className="text-[#2FA4B7] font-bold text-xl mb-10 uppercase tracking-[0.3em]">Cirujano Bariatra</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="https://wa.me/523111050399" variant="primary" className="!bg-[#2FA4B7] !border-none px-10 py-6 text-lg shadow-lg hover:shadow-[#2FA4B7]/40">
              Agendar Cita
            </Button>
            <a 
              href="https://www.instagram.com/bahiasurgery/" 
              target="_blank"
              className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl hover:bg-white/20 transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              Instagram
            </a>
          </div>
        </Container>
      </section>

      {/* 2. REGISTRO MÉDICO Y CÉDULAS (Autoridad) */}
      <Container className="max-w-4xl -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 flex flex-col justify-center">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#2FA4B7] font-black mb-2">Cédula Profesional</span>
            <p className="text-3xl font-mono font-bold text-[#0F3C5C]">9929191</p>
          </div>
          <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 flex flex-col justify-center">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#2FA4B7] font-black mb-2">Cédula Especialidad</span>
            <p className="text-3xl font-mono font-bold text-[#0F3C5C]">7013561</p>
          </div>
        </div>
      </Container>

      {/* 3. CONÓCEME & TRAYECTORIA */}
      <Container className="max-w-4xl mt-16">
        <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl border border-slate-50">
          <div className="flex items-center gap-6 mb-10">
            <div className="h-1.5 w-16 bg-[#2FA4B7] rounded-full" />
            <h2 className="text-3xl font-bold text-[#0F3C5C]">Trayectoria y Formación</h2>
          </div>
          
          <div className="prose prose-lg text-slate-600 space-y-6">
            <p className="leading-relaxed">
              Egresado de la <strong className="text-[#0F3C5C]">Universidad de Guadalajara</strong>, especialista en Cirugía General en el Hospital Civil de Tepic y fellow de Cirugía Laparoscópica en <strong className="text-[#2FA4B7]">Hospital Sant Pau de Barcelona, España</strong> avalado por la Universidad Autónoma de Barcelona.
            </p>
            <p className="leading-relaxed">
              Cuento con una amplia experiencia en cirugía bariátrica, tales como manga gástrica, bypass gástrico, cirugía de revisión, cirugía gastrointestinal y de hernias.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-[#2FA4B7]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.382 0z"/></svg>
              </div>
              <span className="text-sm font-bold text-[#0F3C5C]">Certificado por la AMCE</span>
            </div>
            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-[#2FA4B7]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.382 0z"/></svg>
              </div>
              <span className="text-sm font-bold text-[#0F3C5C]">Asoc. Mexicana de Cirugía General</span>
            </div>
          </div>
        </div>
      </Container>

      {/* 4. DISPONIBILIDAD Y CONTACTO */}
      <Container className="max-w-4xl mt-12 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Horarios Card */}
          <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-50">
            <h3 className="text-[#0F3C5C] font-bold text-xl mb-8 flex items-center gap-3">
              <div className="w-2 h-2 bg-[#2FA4B7] rounded-full animate-pulse" />
              Horario de Consulta
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-slate-50">
                <span className="text-slate-500 font-medium">Lunes - Viernes</span>
                <span className="text-[#0F3C5C] font-bold">09:00 - 14:00</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-50">
                <span className="text-slate-500 font-medium">Sábado</span>
                <span className="text-[#0F3C5C] font-bold">09:00 - 14:00</span>
              </div>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-[#2FA4B7] p-10 rounded-[2.5rem] shadow-xl text-white flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-xl mb-4">Citas y Emergencias</h3>
              <p className="text-4xl font-black mb-8 leading-none tracking-tight">(311) 10 50 399</p>
            </div>
            <Button 
              href="https://wa.me/523111050399" 
              className="w-full bg-white text-[#2FA4B7] border-none font-black py-4 rounded-2xl shadow-lg"
            >
              Contactar ahora
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}