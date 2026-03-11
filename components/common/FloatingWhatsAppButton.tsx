import React from 'react';

interface FloatingWhatsAppButtonProps {
  phone: string;
  message: string;
  label?: string;
}

export const FloatingWhatsAppButton = ({
  phone,
  message,
  label = "WhatsApp"
}: FloatingWhatsAppButtonProps) => {
  const cleanPhone = phone.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Etiqueta flotante opcional (visible en hover) */}
      <span className="mr-3 px-4 py-2 bg-white text-[#0F3C5C] text-sm font-bold rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block border border-slate-100">
        {label}
      </span>
      
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center"
      >
        <svg 
          className="w-7 h-7" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.886.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
        </svg>
      </a>
    </div>
  );
};