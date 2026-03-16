'use client';

import React, { useState, useEffect } from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Servicios', href: '#procedimientos' },
    { label: 'Ubicaciones', href: '#ubicaciones' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'Preguntas', href: '#faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm py-2' 
            : 'bg-transparent py-4'
        }`}
      >
        <Container className="flex items-center justify-between h-16">
          
          {/* Logo con Ajuste de Tamaño y Color Dinámico */}
          <a href="#" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
            <img 
              src="/images/logo-bahia.png" 
              alt="Bahía Surgery Logo" 
              className={`transition-all duration-300 object-contain 
                ${isScrolled 
                  ? 'h-9 md:h-10' // Tamaño minimalista cuando hay scroll (sobre blanco)
                  : 'h-11 md:h-13 brightness-0 invert' // Un poco más grande + efecto BLANCO al inicio (sobre oscuro)
                }`}
            />
          </a>

          {/* Enlaces Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href}
                className={`font-semibold transition-colors text-xs uppercase tracking-widest ${
                  isScrolled ? 'text-slate-600 hover:text-[#2FA4B7]' : 'text-white hover:text-white/80'
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button 
              href="https://wa.me/5213119929191" // Actualizado con el teléfono real si lo deseas
              size="sm" 
              variant={isScrolled ? 'primary' : 'outline'} 
              className={`shadow-md ${!isScrolled ? '!border-white !text-white hover:!bg-white hover:!text-[#0F3C5C]' : ''}`}
            >
              Agendar Valoración
            </Button>
          </div>

          {/* Botón Menú Móvil */}
          <button 
            className={`md:hidden p-2 focus:outline-none ${isScrolled ? 'text-[#0F3C5C]' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </Container>
      </nav>

      {/* MENÚ MÓVIL (DRAWER) */}
      <div 
        className={`fixed inset-0 bg-[#0F3C5C]/40 backdrop-blur-sm z-50 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div className={`fixed top-0 right-0 w-[80vw] max-w-sm h-screen bg-white z-50 transform transition-transform duration-300 md:hidden flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between p-6 border-b">
          {/* Logo Negro en el menú móvil (ya que el fondo es blanco) */}
          <img src="/images/logo-bahia.png" alt="Logo" className="h-9" />
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-slate-400 p-2"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg></button>
        </div>
        <div className="flex flex-col py-6 px-6 space-y-2">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 font-semibold text-lg py-4 px-4 rounded-xl hover:bg-slate-50">{link.label}</a>
          ))}
        </div>
        <div className="p-6 border-t mt-auto bg-slate-50">
          <Button href="https://wa.me/5213119929191" variant="primary" className="w-full justify-center !py-4 shadow-lg" onClick={() => setIsMobileMenuOpen(false)}>Agendar Valoración</Button>
        </div>
      </div>
    </>
  );
};