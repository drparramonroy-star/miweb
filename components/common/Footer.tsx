import React from 'react';
import { Container } from '../ui/Container';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Columna 1: Identidad y Logo */}
          <div className="lg:col-span-1">
            <a href="#" className="inline-block mb-6">
              <img 
                src="/images/logo-bahia.png" 
                alt="Bahía Surgery" 
                className="h-10 md:h-12 object-contain"
              />
            </a>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Especialistas en cirugía bariátrica avanzada. Transformamos vidas a través de un enfoque multidisciplinario y humano en Nayarit y la Riviera.
            </p>
            {/* Redes Sociales Sutiles */}
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/bahiasurgery" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#2FA4B7] hover:text-white transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

          {/* Columna 2: Ubicaciones Médicas */}
          <div>
            <h4 className="text-[#0F3C5C] font-bold text-sm uppercase tracking-widest mb-6">Ubicaciones</h4>
            <div className="space-y-6">
              <div>
                <p className="text-[#0F3C5C] font-bold text-sm">Sede Tepic</p>
                <p className="text-slate-500 text-sm">Paseo de la Loma 407, Residencial La Loma.</p>
              </div>
              <div>
                <p className="text-[#0F3C5C] font-bold text-sm">Sede Riviera Nayarit</p>
                <p className="text-slate-500 text-sm">Hospital CMQ, Héroes de Nacozari 280, Bucerías.</p>
              </div>
            </div>
          </div>

          {/* Columna 3: Registro y Cédulas */}
          <div>
            <h4 className="text-[#0F3C5C] font-bold text-sm uppercase tracking-widest mb-6">Responsable Médico</h4>
            <div className="space-y-4">
              <p className="text-[#0F3C5C] font-bold text-sm leading-tight">
                Dr. Jorge Arturo Parra Monroy
              </p>
              <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Cédula Profesional:</p>
                <p className="text-slate-700 font-mono text-xs">9929191</p>
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Cédula Especialidad:</p>
                <p className="text-slate-700 font-mono text-xs">7013561</p>
              </div>
              <p className="text-slate-500 text-[10px] italic">
                Cirujano certificado por el Colegio Mexicano de Cirugía para la Obesidad y Enfermedades Metabólicas.
              </p>
            </div>
          </div>

          {/* Columna 4: Navegación Rápida */}
          <div>
            <h4 className="text-[#0F3C5C] font-bold text-sm uppercase tracking-widest mb-6">Navegación</h4>
            <ul className="space-y-3">
              {['Procedimientos', 'Ubicaciones', 'Proceso', 'Testimonios', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-slate-500 hover:text-[#2FA4B7] text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a href="https://drjorgeparra.com" target="_blank" className="text-[#2FA4B7] font-bold text-sm hover:underline">
                  Trayectoria Médica
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Barra Inferior Legal */}
        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-400 text-[10px] md:text-xs text-center md:text-left">
            <p>© {currentYear} Bahía Surgery Grupo Bariátrico. Todos los derechos reservados.</p>
            <p className="mt-1">Estrategia y Desarrollo por <a href="https://somoslazaro.marketing" className="text-[#0F3C5C] font-bold hover:text-[#2FA4B7]">somoslazaro.marketing</a></p>
          </div>
          
          <div className="flex gap-6 text-[10px] uppercase tracking-widest font-bold text-slate-400">
            <a href="#" className="hover:text-[#0F3C5C] transition-colors">Privacidad</a>
            <a href="#" className="hover:text-[#0F3C5C] transition-colors">Términos</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};