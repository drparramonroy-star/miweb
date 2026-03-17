'use client';

import React from 'react';

// Componentes con rutas corregidas (4 niveles hacia arriba)
import { Container } from '../../../../components/ui/Container';
import { Button } from '../../../../components/ui/Button';
import { Section } from '../../../../components/ui/Section';

export default function DoctorProfilePage() {
  return (
    <main className="bg-slate-50 min-h-screen pb-20">
      
      {/* 1. HEADER / TARJETA DIGITAL (Look Moderno/NFT) */}
      <section className="bg-[#0F3C5C] pt-32 pb-24 text-white rounded-b-[4rem] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#2FA4B7] rounded-full blur-[100px] opacity-20 -mr-20 -mt-20" />
        
        <Container className="max-w-4xl text-center relative z-10">
          <div className="relative inline-block mb-10">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-[3rem] border-4 border-[#2FA4B7] overflow-hidden mx-auto shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 bg-white">
              <img 
                src="/images/dr.webp" 
                alt="Dr. Jorge Parra Monroy" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#2FA4B7] p-4 rounded-2xl shadow-xl border-4 border-[#0F3C5C]">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">Dr. Jorge Parra</h1>
          <p className="text-[#2FA4B7] font-bold text-xl mb-10 uppercase tracking-[0.3em]">Cirujano Bariatra y Laparoscopista</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="https://wa.me/523111050399" variant="primary" className="!bg-[#2FA4B7] !border-none px-10 py-6 text-lg shadow-lg hover:shadow-[#2FA4B7]/40">
              Agendar Cita
            </Button>
            <a 
              href="https://www.instagram.com/dr.jorge.parra" 
              target="_blank"
              className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl hover:bg-white/20 transition-all text-white font-bold"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              Instagram
            </a>
          </div>
        </Container>
      </section>

      {/* 2. REGISTRO MÉDICO Y CÉDULAS */}
      <Container className="max-w-4xl -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 flex flex-col justify-center text-center">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#2FA4B7] font-black mb-2">Cédula Profesional</span>
            <p className="text-3xl font-mono font-bold text-[#0F3C5C]">9929191</p>
          </div>
          <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 flex flex-col justify-center text-center">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#2FA4B7] font-black mb-2">Cédula Especialidad</span>
            <p className="text-3xl font-mono font-bold text-[#0F3C5C]">7013561</p>
          </div>
        </div>
      </Container>

      {/* 3. CONÓCEME & TRAYECTORIA */}
      <Container className="max-w-4xl mt-16 relative z-10">
        <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl border border-slate-50">
          <div className="flex items-center gap-6 mb-10 justify-center">
            <div className="h-1.5 w-16 bg-[#2FA4B7] rounded-full" />
            <h2 className="text-3xl font-bold text-[#0F3C5C]">Sobre mí</h2>
            <div className="h-1.5 w-16 bg-[#2FA4B7] rounded-full hidden md:block" />
          </div>
          
          <div className="prose prose-lg text-slate-600 space-y-6 max-w-none text-center md:text-left">
            <p className="leading-relaxed text-xl">
              Egresado de la <strong className="text-[#0F3C5C]">Universidad de Guadalajara</strong>, especialista en Cirugía General en el Hospital Civil de Tepic y fellow de Cirugía Laparoscópica en <strong className="text-[#2FA4B7]">Hospital Sant Pau de Barcelona, España</strong> avalado por la Universidad Autónoma de Barcelona.
            </p>
            <p className="leading-relaxed">
              Cuento con una amplia experiencia en cirugía bariátrica y metabólica. Miembro de la Asociación Mexicana de Cirugía Endoscópica y Asociación Mexicana de Cirugía General con certificación vigente como Cirujano General.
            </p>
          </div>
        </div>
      </Container>

      {/* 4. EQUIPO MULTIDISCIPLINARIO */}
      <Container className="max-w-4xl mt-16">
        <h3 className="text-2xl font-bold text-[#0F3C5C] mb-8 text-center uppercase tracking-widest">Equipo Multidisciplinario</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Nutrición', 'Psicología Bariátrica', 'Medicina Interna'].map((item) => (
            <div key={item} className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 text-center text-[#0F3C5C]">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-[#2FA4B7]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
              </div>
              <p className="font-bold">{item}</p>
            </div>
          ))}
        </div>
      </Container>

      {/* 5. SERVICIOS Y ESPECIALIDADES */}
      <Container className="max-w-4xl mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border-t-8 border-[#2FA4B7]">
            <h3 className="text-2xl font-black text-[#0F3C5C] mb-6 uppercase tracking-tight">Cirugía para la Obesidad</h3>
            <ul className="space-y-4 text-slate-600 font-medium">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#2FA4B7] rounded-full" /> Manga gástrica</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#2FA4B7] rounded-full" /> Bypass gástrico en Y de Roux</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#2FA4B7] rounded-full" /> Minibypass gástrico</li>
              <li className="flex items-center gap-2 text-[#0F3C5C] font-bold"><div className="w-1.5 h-1.5 bg-[#0F3C5C] rounded-full" /> Bipartición Intestinal</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#2FA4B7] rounded-full" /> Cirugía de revisión</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#2FA4B7] rounded-full" /> Retiro de Banda</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border-t-8 border-slate-200">
            <h3 className="text-2xl font-black text-[#0F3C5C] mb-6 uppercase tracking-tight">Cirugía General</h3>
            <ul className="space-y-4 text-slate-600 font-medium">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-300 rounded-full" /> Cirugía de vesícula</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-300 rounded-full" /> Hernia hiatal y reflujo</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-300 rounded-full" /> Hernia inguinal</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-300 rounded-full" /> Cirugía de colon e intestino</li>
            </ul>
          </div>
        </div>
      </Container>

      {/* 6. PREGUNTAS FRECUENTES */}
      <Container className="max-w-4xl mt-24 relative z-10">
        <h2 className="text-3xl font-black text-[#0F3C5C] mb-12 text-center uppercase tracking-widest">Preguntas Frecuentes</h2>
        <div className="space-y-4 max-w-2xl mx-auto">
          {[
            { q: "¿Qué es la cirugía bariátrica?", a: "Es un conjunto de procedimientos para perder peso mediante la reducción del estómago o modificando la absorción de nutrientes." },
            { q: "¿Soy candidato adecuado?", a: "Suele indicarse en personas con un índice de masa corporal (IMC) superior a 40, o superiores a 35 con enfermedades relacionadas con la obesidad." },
            { q: "¿Qué cambios debo hacer?", a: "Requiere un compromiso con nuevos hábitos alimenticios y actividad física constante para asegurar resultados duraderos y seguros." }
          ].map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h4 className="font-bold text-[#0F3C5C] mb-2">{faq.q}</h4>
              <p className="text-slate-500 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </Container>

      {/* 7. UBICACIONES DETALLADAS */}
      <Container className="max-w-4xl mt-24 relative z-10">
        <div className="bg-[#0F3C5C] p-10 md:p-16 rounded-[4rem] text-white shadow-2xl relative overflow-hidden text-center md:text-left">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#2FA4B7] opacity-20 blur-3xl" />
          <h2 className="text-3xl font-bold mb-12">Ubicaciones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-[#2FA4B7] font-black uppercase tracking-widest mb-4">Tepic</h4>
              <p className="text-sm opacity-80 mb-6">
                Av Del Valle #91- 3er piso, Col. Ciudad Del Valle.<br />
                Paseo de La Loma #407, Col Centro.
              </p>
              <p className="font-bold text-xl">(311) 10 50 399</p>
            </div>
            <div>
              <h4 className="text-[#2FA4B7] font-black uppercase tracking-widest mb-4">Puerto Vallarta</h4>
              <p className="text-sm opacity-80 mb-6">
                Hospital CMQ Premiere.<br />
                Av. Francisco Villa 1749, Col. Villas Vallarta.
              </p>
              <p className="font-bold text-xl">(311) 10 50 399</p>
            </div>
          </div>
          <Button 
            href="https://wa.me/523111050399" 
            className="mt-12 w-full !bg-white !text-[#0F3C5C] border-none font-black py-7 text-lg rounded-2xl shadow-xl hover:!bg-slate-100 transition-all transform hover:scale-[1.01]"
          >
            Agendar en cualquiera de las sedes
          </Button>
        </div>
      </Container>

      {/* 8. HORARIOS CARD (Final) */}
      <Container className="max-w-4xl mt-12 mb-20 text-center relative z-10">
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 inline-block px-12">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Horario de Atención</p>
          <p className="text-[#0F3C5C] font-bold text-lg leading-snug">Lun - Vie: 09:00 - 14:00<br/>Sáb: 09:00 - 14:00</p>
        </div>
      </Container>

      {/* --- NUEVA SECCIÓN --- */}
      {/* 9. QR DE CONTACTO RÁPIDO (El toque NFT Digital Card) */}
      <Container className="max-w-4xl mt-24 mb-32 text-center relative z-10">
        <div className="bg-white p-12 md:p-16 rounded-[3rem] shadow-2xl border border-slate-100 inline-block">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#2FA4B7] font-black mb-4 block">NFT Digital Card</span>
          <h3 className="text-3xl font-black text-[#0F3C5C] mb-8 leading-tight">Acceso Directo <br/> a mi Contacto</h3>

          {/* Recuadro elegante para el QR */}
          <div className="w-64 h-64 bg-slate-50 mx-auto rounded-3xl flex items-center justify-center border-8 border-[#0F3C5C] p-4 shadow-inner relative hover:scale-105 transition-transform duration-500 group">
            {/* Detalles tech en las esquinas */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-4 border-l-4 border-[#2FA4B7] rounded-tl-sm"/>
            <div className="absolute top-2 right-2 w-4 h-4 border-t-4 border-r-4 border-[#2FA4B7] rounded-tr-sm"/>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-4 border-l-4 border-[#2FA4B7] rounded-bl-sm"/>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-4 border-r-4 border-[#2FA4B7] rounded-br-sm"/>

            {/* AQUÍ VA EL QR REAL */}
            <img 
              src="/images/qr-profile.png" // User must save the QR image with this name
              alt="Código QR Perfil Dr. Jorge Parra" 
              className="w-full h-full object-contain"
            />
          </div>

          <p className="mt-10 text-slate-500 text-sm max-w-sm mx-auto leading-relaxed">
            Escanea con la cámara de tu celular para abrir este perfil al instante, guardar mi WhatsApp y ver mis sedes.
          </p>
        </div>
      </Container>

    </main>
  );
}