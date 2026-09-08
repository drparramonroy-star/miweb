import { SITE_CONFIG } from '../config';
import { ServiceItem, LocationItem, FaqItem } from '../../types/data';

// 1. HERO DATA - Enfocado a Puerto Vallarta y Bahía de Banderas.
// El gancho principal es la certificación: la competencia local no la tiene.
export const HERO_DATA = {
  eyebrow: "Puerto Vallarta y Bahía de Banderas",
  title: "Cirugía Bariátrica en Puerto Vallarta",
  subtitle: "Manga gástrica y bypass gástrico con un cirujano bariatra certificado y un equipo multidisciplinario que te acompaña antes y después. Quirófano en el Hospital CMQ, a minutos de Puerto Vallarta.",
  image: "/images/hero-bahia-surgery.jpg",
  video: "/videos/hero-bg.mp4",
  primaryCta: {
    label: "Ver si soy candidato",
    phone: SITE_CONFIG.phone,
    message: "Hola, me gustaría saber si soy candidato para una cirugía bariátrica."
  },
  secondaryCta: {
    label: "Conocer al Dr. Parra",
    href: "/doctor" // Página interna: mantiene el tráfico dentro del sitio que mide
  },
  trustSignals: [
    "Cirujano Certificado",
    "Atención en Puerto Vallarta",
    "Equipo Multidisciplinario",
    "Paquete Todo Incluido"
  ]
};

// 2. SERVICES DATA
export const SERVICES_DATA = {
  title: "Procedimientos de Cirugía Bariátrica en Puerto Vallarta",
  subtitle: "Cirugía bariátrica por laparoscopía para pacientes de Puerto Vallarta y Bahía de Banderas, con valoración personalizada y seguimiento incluido.",
  items: [
    {
      title: "Manga gástrica",
      description: "Reduce el tamaño del estómago para lograr una pérdida de peso sostenida bajo supervisión médica. Se realiza por laparoscopía, con recuperación rápida.",
      keyMessage: "El procedimiento más solicitado por su seguridad y efectividad.",
      featured: true,
      ctaMessage: "Hola, me interesa información y el precio de la Manga Gástrica."
    },
    {
      title: "Bypass gástrico",
      description: "Modifica el sistema digestivo para favorecer la pérdida de peso y mejorar el control de la diabetes tipo 2.",
      keyMessage: "Ideal para pacientes que requieren un control metabólico más profundo.",
      featured: false,
      ctaMessage: "Hola, quiero saber más y conocer el precio del Bypass Gástrico."
    },
    {
      title: "Bipartición intestinal",
      description: "Técnica que combina la reducción del estómago con una modificación intestinal para un excelente control metabólico.",
      keyMessage: "Equilibrio entre pérdida de peso y buena absorción de nutrientes.",
      featured: false,
      ctaMessage: "Hola, quiero saber más sobre la Bipartición Intestinal."
    },
    {
      title: "Cirugía Laparoscópica",
      description: "Cirugía de mínima invasión. También tratamos hernias, vesícula y cirugía antirreflujo.",
      keyMessage: "Procedimientos más seguros y con recuperación rápida.",
      featured: false,
      ctaMessage: "Hola, me interesa información sobre cirugía laparoscópica (hernias/vesícula/antirreflujo)."
    }
  ]
};

// 3. LOCATIONS DATA - El quirófano de Bucerías es la sede de referencia
// para el paciente de Puerto Vallarta y la bahía.
export const LOCATIONS_DATA = [
  {
    city: "Puerto Vallarta",
    venue: "Hospital CMQ Premiere",
    description: "Consulta y valoración en el corazón de Puerto Vallarta, en Villas Vallarta. Aquí revisamos tu caso, resolvemos tus dudas y definimos el procedimiento adecuado para ti.",
    address: "Av. Francisco Villa 1749, Col. Villas Vallarta, Puerto Vallarta, Jalisco.",
    schedule: "Lun-Vie: 9:00–14:00 | Sáb: 9:00–14:00",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Hospital+CMQ+Premiere+Av+Francisco+Villa+1749+Villas+Vallarta+Puerto+Vallarta",
    // PENDIENTE: falta foto real del Hospital CMQ Premiere (Villas Vallarta).
    imageSrc: "/images/quirofano-2.jpg"
  },
  {
    city: "Bahía de Banderas",
    venue: "Hospital CMQ Riviera Nayarit",
    description: "Nuestro quirófano de referencia para pacientes de Puerto Vallarta y toda la bahía: instalaciones hospitalarias equipadas para la máxima seguridad quirúrgica, a minutos del centro de Vallarta.",
    address: "Héroes de Nacozari 280, Bucerías, Nayarit.",
    schedule: "Mar-Vie: 10:00–14:00 | 16:30–19:00",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Hospital+CMQ+Buceri%CC%81as+He%CC%81roes+de+Nacozari+280",
    // Foto real de la fachada del Hospital CMQ Riviera Nayarit.
    imageSrc: "/images/bento-sedes.jpg"
  },
  {
    city: "Tepic",
    venue: "Consultorio Paseo de la Loma",
    description: "Consultorio para valoraciones médicas, preparación y seguimiento de pacientes de la capital del estado.",
    address: "Paseo de la Loma 407, Residencial La Loma, Tepic, Nayarit.",
    schedule: "Lun: 9:00–14:00 | Sáb: 10:00–14:00",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Paseo+de+la+Loma+407+Residencial+La+Loma+Tepic+Nayarit",
    imageSrc: "/images/sede-tepic.jpg"
  }
];

// 4. FAQ DATA - Prioriza las dudas que aparecen en las búsquedas reales
// de la campaña: precio, ubicación y candidatura.
export const FAQ_DATA: FaqItem[] = [
  {
    question: "¿Cuánto cuesta una manga gástrica en Puerto Vallarta?",
    answer: "Manejamos un paquete quirúrgico todo incluido: honorarios del cirujano y del equipo, hospitalización en el Hospital CMQ, valoración con nutrióloga y psicólogo, y 4 consultas de seguimiento post-operatorio. Escríbenos por WhatsApp y te compartimos el costo exacto según tu caso y el procedimiento que necesites."
  },
  {
    question: "¿Dónde atienden si vivo en Puerto Vallarta?",
    answer: "Las cirugías se realizan en el Hospital CMQ, en Bucerías, a minutos de Puerto Vallarta y con acceso directo desde toda la bahía: Nuevo Nayarit, Mezcales, Ixtapa y la zona norte hasta La Peñita, así como el sur de Vallarta."
  },
  {
    question: "¿Quién es candidato para cirugía bariátrica?",
    answer: "La cirugía bariátrica es una opción para personas con obesidad o sobrepeso que buscan un cambio duradero. En la valoración personalizada analizamos tu índice de masa corporal, tu estado de salud y tus antecedentes para determinar si eres candidato y qué procedimiento te conviene."
  },
  {
    question: "¿El Dr. Parra es cirujano certificado?",
    answer: `Sí. ${SITE_CONFIG.credentials.certification}. Cédula profesional ${SITE_CONFIG.credentials.cedulaProfesional} y cédula de especialidad ${SITE_CONFIG.credentials.cedulaEspecialidad}. La certificación acredita formación y evaluación específica en cirugía bariátrica, no solo en cirugía general.`
  },
  {
    question: "¿Cuál es la diferencia entre manga gástrica y bypass?",
    answer: "La manga reduce el tamaño del estómago; el bypass además modifica el proceso digestivo, con mayor impacto metabólico y mejor control de la diabetes tipo 2. El Dr. Parra te orienta sobre cuál se ajusta mejor a tu perfil durante la valoración."
  },
  {
    question: "¿Cuánto tiempo dura la recuperación?",
    answer: "Al realizarse por laparoscopía (mínima invasión), la recuperación es más rápida y permite retomar actividades normales en pocas semanas, siempre con el seguimiento de nuestro equipo."
  }
];
