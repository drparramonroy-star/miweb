export const SITE_CONFIG = {
  name: "Bahía Surgery Grupo Bariátrico",
  doctor: "Dr. Jorge Arturo Parra Monroy",
  phone: "523111050399",
  defaultMessage: "Hola, quiero información sobre cirugía bariátrica.",

  // Dominio canónico. Se usa en sitemap, robots y datos estructurados.
  url: "https://bahiasurgery.com",

  // Mercado principal al que se dirige el sitio y la campaña.
  market: {
    city: "Puerto Vallarta",
    region: "Bahía de Banderas",
    // Localidades cubiertas por la campaña. Alimentan el copy y el JSON-LD.
    areasServed: [
      "Puerto Vallarta",
      "Bahía de Banderas",
      "Nuevo Nayarit",
      "Bucerías",
      "Mezcales",
      "Ixtapa",
      "Las Varas",
      "Rincón de Guayabitos",
      "La Peñita de Jaltemba",
      "Boca de Tomatlán",
      "El Tuito",
      "San Sebastián del Oeste",
    ],
  },

  // Credenciales verificables del cirujano. Son el diferenciador principal:
  // la competencia local no está certificada.
  credentials: {
    cedulaProfesional: "9929191",
    cedulaEspecialidad: "7013561",
    certification:
      "Cirujano certificado por el Colegio Mexicano de Cirugía para la Obesidad y Enfermedades Metabólicas",
  },

  // Paquete quirúrgico integral.
  // showPrice = false muestra solo qué incluye y deja el monto para WhatsApp.
  // Cambiar a true para publicar el precio abierto (requiere OK del cliente).
  package: {
    showPrice: false,
    priceFrom: "76,000",
    currency: "MXN",
    consultationPrice: "1,000",
    includes: [
      "Honorarios del cirujano y del equipo quirúrgico",
      "Hospitalización en el Hospital CMQ",
      "Valoración con nutrióloga y con psicólogo",
      "4 consultas de seguimiento post-operatorio",
    ],
  },
};
