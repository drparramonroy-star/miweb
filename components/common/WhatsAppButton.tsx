import React from 'react';

interface WhatsAppButtonProps {
  phone: string;
  message: string;
  label: string;
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
}

export const WhatsAppButton = ({
  phone,
  message,
  label,
  variant = 'primary',
  className = ""
}: WhatsAppButtonProps) => {
  
  // Limpiar el número de teléfono (solo números) y codificar el mensaje
  const cleanPhone = phone.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;

  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 active:scale-95";
  
  const variants = {
    primary: "bg-[#25D366] text-white hover:bg-[#128C7E] shadow-lg",
    outline: "border-2 border-[#25D366] text-[#128C7E] hover:bg-[#25D366] hover:text-white",
    ghost: "text-[#128C7E] hover:bg-emerald-50"
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <svg 
        className="w-5 h-5 mr-2" 
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.886.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
      </svg>
      {label}
    </a>
  );
};