import React from 'react';
import { ServiceCard, ServiceCardProps } from '../cards/ServiceCard';

interface ServicesGridProps {
  services: ServiceCardProps[];
}

export const ServicesGrid = ({ services }: ServicesGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
};