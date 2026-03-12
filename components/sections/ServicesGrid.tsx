import React from 'react';
import { ServiceCard, ServiceCardProps } from '../cards/ServiceCard';

interface ServicesGridProps {
  services: ServiceCardProps[];
}

export const ServicesGrid = ({ services }: ServicesGridProps) => {
  return (
    // CAMBIO: De grid-cols-3 a grid-cols-2 para forzar el 2x2 perfecto. 
    // Agregamos max-w-5xl para que las tarjetas no queden desproporcionadamente anchas.
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 py-8 max-w-5xl mx-auto">
      {services.map((service, index) => (
        <ServiceCard key={index} index={index} {...service} />
      ))}
    </div>
  );
};