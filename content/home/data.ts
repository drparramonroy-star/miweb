import { SITE_CONFIG } from '../config';
import { ServiceItem, LocationItem, FaqItem } from '../../types/data';

// 1. HERO DATA
export const HERO_DATA = {
  eyebrow: "Tu nuevo horizonte comienza aquí",
  title: "Cirugía Bariátrica en Tepic y Bucerías, Nayarit",
  subtitle: "Un equipo bariátrico multidisciplinario que acompaña tu transformación en Tepic y Bucerías con manga gástrica, bypass y seguimiento integral.",
  image: "/images/hero-bahia-surgery.jpg", 
  video: "/videos/hero-bg.mp4", 
  primaryCta: {
    label: "Ver si soy candidato",
    phone: SITE_CONFIG.phone,
    message: "Hola, me gustaría saber si soy candidato para una cirugía bariátrica."
  },
  secondaryCta: {
    label: "Conocer procedimientos",
    href: "#procedimientos"
  },
  trustSignals: [
    "Especialistas Certificados",
    "Atención Tepic y Bucerías",
    "Equipo Multidisciplinario",
    "Seguimiento Post-Operatorio"
  ]
};

// 2. SERVICES DATA (AQUÍ ESTÁ LA MEJORA)
export const SERVICES_DATA = {
  title: "Procedimientos de Cirugía Bariátrica en Nayarit",
  subtitle: "Nuestro equipo médico ofrece procedimientos bariátricos seguros y acompañados por especialistas para ayudar a pacientes a recuperar su salud y calidad de vida.",
  items: [
    {
      title: "Manga gástrica",
      description: "Procedimiento que reduce el tamaño del estómago para ayudar al paciente a perder peso de forma segura bajo supervisión médica.",
      keyMessage: "Es el procedimiento más solicitado por su seguridad y efectividad metabólica.",
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
      title: "Evaluación integral",
      description: "Valoración médica completa para determinar si eres candidato y cuál es el procedimiento adecuado para ti.",
      keyMessage: "Incluye revisión del historial clínico y orientación por nuestro equipo especialista.",
      featured: false,
      ctaMessage: "Hola, quiero agendar una evaluación para ver si soy candidato."
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
    mapUrl: "#", // Aquí pondrás el link real de Google Maps
    imageSrc: "/images/sede-tepic.jpg"
  },
  {
    city: "Bucerías",
    venue: "Hospital CMQ Riviera Nayarit",
    description: "Instalaciones hospitalarias de vanguardia equipadas con máxima seguridad para realizar nuestros procedimientos bariátricos.",
    address: "Héroes de Nacozari 280, Bucerías, Nayarit.", 
    schedule: "Mar-Vie: 10:00–14:00 | 16:30–19:00",
    mapUrl: "#", // Aquí pondrás el link real de Google Maps
    imageSrc: "/images/sede-bucerias.jpg"
  }
];

// 4. FAQ DATA (Dudas Frecuentes - Estrategia SEO)
export const FAQ_DATA: FaqItem[] = [
  {
    question: "¿Quién es candidato para cirugía bariátrica?",
    answer: "La cirugía bariátrica puede ser una opción para personas con obesidad o sobrepeso que no han logrado resultados duraderos con otros métodos. Durante la valoración médica se analiza el estado de salud del paciente y se determina si es candidato para el procedimiento."
  },
  {
    question: "¿Cuál es la diferencia entre manga gástrica y bypass gástrico?",
    answer: "La manga gástrica reduce el tamaño del estómago para favorecer la pérdida de peso. El bypass gástrico modifica el sistema digestivo para lograr efectos metabólicos más profundos. Durante la valoración médica se determina cuál procedimiento es el más adecuado para ti."
  },
  {
    question: "¿Cuánto cuesta la manga gástrica en Nayarit?",
    answer: "El costo puede variar dependiendo del caso de cada paciente, el tipo de procedimiento y el proceso médico necesario. Por esta razón es importante realizar primero una valoración médica personalizada para darte un presupuesto exacto y transparente."
  },
  {
    question: "¿Cuánto tiempo dura la recuperación?",
    answer: "La mayoría de los pacientes pueden retomar sus actividades gradualmente durante las semanas posteriores al procedimiento, siguiendo siempre las indicaciones y el acompañamiento constante de nuestro equipo médico."
  },
  {
    question: "¿Dónde se realizan las cirugías?",
    answer: "Las valoraciones médicas iniciales se realizan en nuestro consultorio en Tepic, y los procedimientos quirúrgicos se llevan a cabo en instalaciones hospitalarias de primer nivel en Bucerías, equipadas con la máxima seguridad para cirugía bariátrica."
  }
];