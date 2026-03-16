import { SITE_CONFIG } from '../config';
import { ServiceItem, LocationItem, FaqItem } from '../../types/data';

// 1. HERO DATA - Ajustado para estatus (Riviera Nayarit) y autoridad médica
export const HERO_DATA = {
  eyebrow: "Tu nuevo horizonte comienza aquí",
  title: "Cirugía Bariátrica en Tepic y Riviera Nayarit",
  subtitle: "Un equipo bariátrico multidisciplinario que acompaña tu transformación en Tepic y Riviera Nayarit con cirugías bariátricas como: manga gástrica, bypass, bipartición intestinal y cirugía laparoscópica con un seguimiento integral.",
  image: "/images/hero-bahia-surgery.jpg", 
  video: "/videos/hero-bg.mp4", 
  primaryCta: {
    label: "Ver si soy candidato",
    phone: SITE_CONFIG.phone,
    message: "Hola, me gustaría saber si soy candidato para una cirugía bariátrica."
  },
  secondaryCta: {
    label: "Conocer al Dr. Parra",
    href: "https://drjorgeparra.com" // Enlace a sus diplomas y trayectoria
  },
  trustSignals: [
    "Especialistas Certificados",
    "Atención Tepic y Riviera Nayarit",
    "Equipo Multidisciplinario",
    "Seguimiento Post-Operatorio"
  ]
};

// 2. SERVICES DATA - Incluyendo Puerto Vallarta para SEO Local
export const SERVICES_DATA = {
  title: "Procedimientos de Cirugía Bariátrica en Nayarit y Puerto Vallarta",
  subtitle: "Nuestro equipo médico ofrece procedimientos bariátricos seguros y mínimamente invasivos para ayudar a los pacientes a recuperar su salud y calidad de vida.",
  items: [
    {
      title: "Manga gástrica",
      description: "Procedimiento que reduce el tamaño del estómago para ayudar al paciente a perder peso de forma segura bajo supervisión médica.",
      keyMessage: "Es el procedimiento más solicitado por su seguridad y efectividad.",
      featured: true,
      ctaMessage: "Hola, me interesa información sobre la Manga Gástrica."
    },
    {
      title: "Bypass gástrico",
      description: "Cirugía que modifica el sistema digestivo para favorecer la pérdida de peso y mejorar la diabetes tipo 2.",
      keyMessage: "Ideal para pacientes que requieren un control metabólico más profundo.",
      featured: false,
      ctaMessage: "Hola, quiero saber más sobre el Bypass Gástrico."
    },
    {
      title: "Bipartición intestinal",
      description: "Técnica innovadora que combina la reducción del estómago con una modificación intestinal para un excelente control metabólico.",
      keyMessage: "Equilibrio ideal entre pérdida de peso y buena absorción de nutrientes.",
      featured: false,
      ctaMessage: "Hola, quiero saber más sobre la Bipartición Intestinal."
    },
    {
      title: "Cirugía Laparoscópica",
      description: "Realizamos nuestras cirugías con técnicas de mínima invasión. También tratamos problemas de hernias, vesícula y cirugía antirreflujo.",
      keyMessage: "Procedimientos más eficientes, seguros y con recuperación rápida.",
      featured: false,
      ctaMessage: "Hola, me interesa información sobre cirugía laparoscópica (hernias/vesícula/antirreflujo)."
    }
  ]
};

// 3. LOCATIONS DATA
export const LOCATIONS_DATA = [
  {
    city: "Tepic",
    venue: "Consultorio Paseo de la Loma",
    description: "Consultorio equipado donde realizamos las valoraciones médicas iniciales, preparación y seguimiento para pacientes de la capital.",
    address: "Paseo de la Loma 407, Residencial La Loma, Tepic, Nayarit.",
    schedule: "Lun: 9:00–14:00 | Sáb: 10:00–14:00", 
    mapUrl: "https://maps.app.goo.gl/vS1F4F9y7f4L8vXG9", // Ejemplo de link
    imageSrc: "/images/sede-tepic.jpg"
  },
  {
    city: "Riviera Nayarit", // Se cambió Bucerías por Riviera Nayarit por estatus
    venue: "Hospital CMQ Riviera Nayarit",
    description: "Instalaciones hospitalarias de vanguardia con fácil acceso desde Puerto Vallarta, equipadas para la máxima seguridad quirúrgica.",
    address: "Héroes de Nacozari 280, Bucerías, Nayarit.", 
    schedule: "Mar-Vie: 10:00–14:00 | 16:30–19:00",
    mapUrl: "https://maps.app.goo.gl/uR6Y7Z8Q2P3L4M5N6", // Ejemplo de link
    imageSrc: "/images/sede-bucerias.jpg"
  }
];

// 4. FAQ DATA
export const FAQ_DATA: FaqItem[] = [
  {
    question: "¿Quién es candidato para cirugía bariátrica?",
    answer: "La cirugía bariátrica es una opción para personas con obesidad o sobrepeso que buscan un cambio duradero. Durante la valoración personalizada analizamos tu caso para determinar si eres candidato."
  },
  {
    question: "¿Cuál es la diferencia entre manga y bypass?",
    answer: "La manga reduce el tamaño del estómago; el bypass modifica el proceso digestivo para un mayor impacto metabólico. El Dr. Parra te orientará sobre cuál es mejor para tu perfil."
  },
  {
    question: "¿Tienen atención en Puerto Vallarta?",
    answer: "Nuestros procedimientos se realizan en el Hospital CMQ Riviera Nayarit, ubicado en Bucerías, con fácil acceso y cercanía total para pacientes de Puerto Vallarta y toda la bahía."
  },
  {
    question: "¿Cuánto tiempo dura la recuperación?",
    answer: "Gracias al uso de cirugía laparoscópica (mínima invasión), la recuperación es más rápida, permitiendo retomar actividades normales en pocas semanas con el seguimiento de nuestro equipo."
  }
];