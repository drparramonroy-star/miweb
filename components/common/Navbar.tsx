'use client';

import React, { useState, useEffect } from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Enlaces actualizados para que coincidan con los IDs de las secciones que creamos
  const navLinks = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Ubicaciones', href: '#ubicaciones' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'Preguntas', href: '#faq' },
  ];

  // Detectar el scroll para cambiar el estilo del Navbar dinámicamente
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquear el scroll del fondo cuando el menú móvil está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm py-2' 
            : 'bg-white/80 backdrop-blur-sm border-transparent py-4'
        }`}
      >
        <Container className="flex items-center justify-between h-16">
          
          {/* Logo (Clickeable para ir arriba) */}
          <a href="#" className="flex flex-col group" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="text-[#0F3C5C] font-black text-xl md:text-2xl leading-none group-hover:text-[#2FA4B7] transition-colors">
              BAHÍA
            </span>
            <span className="text-[#2FA4B7] font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase">
              Surgery
            </span>
          </a>

          {/* Enlaces Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href}
                className="text-slate-600 hover:text-[#2FA4B7] font-semibold transition-colors text-sm uppercase tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <Button href="#contacto" size="sm" variant="primary" className="shadow-md hover:shadow-lg">
              Agendar Valoración
            </Button>
          </div>

          {/* Botón Menú Móvil (Hamburguesa) */}
          <button 
            className="md:hidden text-[#0F3C5C] p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Abrir menú"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </Container>
      </nav>

      {/* OVERLAY Y MENÚ MÓVIL LATERAL (Drawer) */}
      
      {/* Fondo oscuro translúcido */}
      <div 
        className={`fixed inset-0 bg-[#0F3C5C]/40 backdrop-blur-sm z-50 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Panel lateral derecho */}
      <div 
        className={`fixed top-0 right-0 w-[80vw] max-w-sm h-screen bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Cabecera del menú móvil */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <div className="flex flex-col">
            <span className="text-[#0F3C5C] font-black text-xl leading-none">BAHÍA</span>
            <span className="text-[#2FA4B7] font-bold text-[10px] tracking-[0.2em] uppercase">Surgery</span>
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-slate-400 hover:text-[#0F3C5C] p-2 bg-slate-50 rounded-full"
            aria-label="Cerrar menú"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Lista de enlaces móvil */}
        <div className="flex flex-col py-6 px-6 overflow-y-auto flex-grow space-y-2">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-600 hover:text-[#2FA4B7] hover:bg-slate-50 font-semibold text-lg py-4 px-4 rounded-xl transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Botón CTA móvil al fondo */}
        <div className="p-6 border-t border-slate-100 bg-slate-50 mt-auto">
          <Button 
            href="#contacto" 
            variant="primary" 
            className="w-full justify-center !py-4 shadow-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Agendar Valoración
          </Button>
        </div>
      </div>
    </>
  );
};