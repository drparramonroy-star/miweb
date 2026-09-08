import { SITE_CONFIG } from '../../content/config';
import { FAQ_DATA } from '../../content/home/data';

/**
 * Datos estructurados (JSON-LD) del sitio.
 *
 * Le dicen a Google qué es el negocio, dónde atiende y qué procedimientos
 * ofrece. Para un negocio médico local es la señal que conecta las búsquedas
 * con ubicación ("bariatra puerto vallarta") con la ficha del negocio.
 */

/** Ficha del negocio médico + el cirujano responsable. */
export function getMedicalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': `${SITE_CONFIG.url}/#business`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description:
      'Cirugía bariátrica en Puerto Vallarta y Bahía de Banderas: manga gástrica, bypass gástrico y bipartición intestinal con cirujano bariatra certificado.',
    image: `${SITE_CONFIG.url}/images/hero-bahia-surgery.jpg`,
    logo: `${SITE_CONFIG.url}/images/logo-bahia.png`,
    telephone: `+${SITE_CONFIG.phone}`,
    medicalSpecialty: 'Bariatric',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Héroes de Nacozari 280',
      addressLocality: 'Bucerías',
      addressRegion: 'Nayarit',
      addressCountry: 'MX',
    },
    areaServed: SITE_CONFIG.market.areasServed.map((name) => ({
      '@type': 'City',
      name,
    })),
    availableService: [
      'Manga gástrica',
      'Bypass gástrico',
      'Bipartición intestinal',
      'Cirugía laparoscópica',
    ].map((name) => ({
      '@type': 'MedicalProcedure',
      name,
      procedureType: 'https://schema.org/SurgicalProcedure',
    })),
    employee: {
      '@type': 'Physician',
      '@id': `${SITE_CONFIG.url}/#physician`,
      name: SITE_CONFIG.doctor,
      medicalSpecialty: 'Bariatric',
      url: `${SITE_CONFIG.url}/doctor`,
      description: SITE_CONFIG.credentials.certification,
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'Cédula profesional',
          identifier: SITE_CONFIG.credentials.cedulaProfesional,
        },
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'Cédula de especialidad',
          identifier: SITE_CONFIG.credentials.cedulaEspecialidad,
        },
      ],
    },
  };
}

/** Preguntas frecuentes, tomadas de la misma fuente que se renderiza. */
export function getFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${SITE_CONFIG.url}/#faq`,
    mainEntity: FAQ_DATA.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
