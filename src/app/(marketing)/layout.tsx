import React from 'react';
import { Metadata } from 'next'; // Importamos tipos de Metadata
import { Navbar } from '../../../components/common/Navbar';
import { Footer } from '../../../components/common/Footer';

// ESTO ES LO QUE FALTA: Metadata Global para el sitio
export const metadata: Metadata = {
  title: 'Bahía Surgery | Cirugía Bariátrica en Nayarit y Vallarta',
  description: 'Especialistas en pérdida de peso y bienestar. Manga Gástrica, Bypass y Bipartición Intestinal con el equipo del Dr. Jorge Parra.',
  openGraph: {
    title: 'Bahía Surgery - Tu nueva etapa comienza hoy',
    description: 'Atención bariátrica con enfoque humano y especializado en Tepic y Puerto Vallarta.',
    images: ['/images/quirofano-1.jpg'], // Imagen por defecto si no es la del doctor
  },
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}