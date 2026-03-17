'use client';

import React, { useState, useEffect } from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Dr. Jorge Parra', href: '/doctor', highlight: true },
    { label: 'Servicios', href: '#procedimientos' },
    { label: 'Ubicaciones', href: '#ubicaciones' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Testimonios', href: '#testimonios' },
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
        className={`fixed top-0 w-full z-40 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#0F3C5C]/95 backdrop-blur-md border-b border-white/5 shadow-xl py-3' 
            : 'bg-transparent py-6'
        }`}
      >
        <Container className="flex items-center justify-between h-20 md:h-24 transition-all duration-500">
          
          {/* Logo Circular - Aumentado de tamaño */}
          <a href="/" className="flex items-center relative z-10" onClick={() => setIsMobileMenuOpen(false)}>
            <div className={`transition-all duration-500 p-1 rounded-full 
              ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
              <img 
                src="/images/logo-bahia.png" 
                alt="Bahía Surgery Logo" 
                className={`transition-all duration-500 object-contain rounded-full
                  ${isScrolled 
                    ? 'h-16 md:h-20 w-16 md:w-20' // Tamaño SCROLLED (se ve sobre el navy)
                    : 'h-20 md:h-28 w-20 md:w-28 brightness-0 invert' // Tamaño INICIAL (Grande y Blanco)
                  }`}
              />
            </div>
          </a>

          {/* Enlaces Desktop */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href}
                className={`font-black transition-colors text-[10px] uppercase tracking-[0.3em] ${
                  link.highlight 
                    ? 'text-[#2FA4B7] hover:text-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button 
              href="https://wa.me/523111050399" 
              size="sm" 
              className="!bg-[#2FA4B7] !text-white font-black text-[10px] tracking-[0.2em] px-8 py-5 rounded-2xl shadow-lg hover:scale-105 transition-transform"
            >
              CITAS
            </Button>
          </div>

          {/* Menú Móvil */}
          <button 
            className="lg:hidden p-3 text-white focus:outline-none bg-white/5 rounded-2xl backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </Container>
      </nav>

      {/* DRAWER MÓVIL (Mismo diseño premium) */}
      <div 
        className={`fixed inset-0 bg-[#0F3C5C]/60 backdrop-blur-md z-50 transition-opacity duration-500 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div className={`fixed top-0 right-0 w-[85vw] max-w-sm h-screen bg-[#0F3C5C] z-50 transform transition-transform duration-500 lg:hidden flex flex-col border-l border-white/10 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between p-8 border-b border-white/5">
          <img src="/images/logo-bahia.png" alt="Logo" className="h-16 w-16 brightness-0 invert" />
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-white/40 p-2"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg></button>
        </div>
        <div className="flex flex-col py-10 px-8 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)} 
              className={`font-black text-xl py-5 px-6 rounded-3xl transition-all ${
                link.highlight ? 'bg-[#2FA4B7] text-white shadow-xl shadow-cyan-900/40' : 'text-white/60 hover:bg-white/5 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="p-8 mt-auto">
          <Button href="https://wa.me/523111050399" className="w-full !bg-[#25D366] !text-white !py-6 rounded-3xl font-black shadow-2xl" onClick={() => setIsMobileMenuOpen(false)}>HABLAR CON EL DOCTOR</Button>
        </div>
      </div>
    </>
  );
};