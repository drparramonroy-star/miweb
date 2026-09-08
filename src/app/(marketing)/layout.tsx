import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '../../../components/common/Navbar';
import { Footer } from '../../../components/common/Footer';
import { SITE_CONFIG } from '../../../content/config';
import { getMedicalBusinessSchema, getFaqSchema } from '../../../lib/seo/jsonld';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: 'Cirugía Bariátrica en Puerto Vallarta | Bahía Surgery',
  description:
    'Manga gástrica y bypass gástrico en Puerto Vallarta y Bahía de Banderas. Cirujano bariatra certificado, equipo multidisciplinario y paquete quirúrgico todo incluido.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Cirugía Bariátrica en Puerto Vallarta | Bahía Surgery',
    description:
      'Manga gástrica y bypass con cirujano bariatra certificado, a minutos de Puerto Vallarta. Paquete todo incluido.',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: 'es_MX',
    type: 'website',
    images: ['/images/cirugia-laparoscopica.jpg'],
  },
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Datos estructurados para búsqueda local médica */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getMedicalBusinessSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqSchema()) }}
      />
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
