import React from 'react';
import { Container } from './Container';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: 'white' | 'gray' | 'primary' | 'none';
}

export const Section = ({ 
  children, 
  id, 
  className = "", 
  background = 'white' 
}: SectionProps) => {
  
  const bgStyles = {
    white: 'bg-white',
    gray: 'bg-slate-50',
    primary: 'bg-blue-600 text-white',
    none: ''
  };

  return (
    <section 
      id={id} 
      className={`py-12 md:py-20 ${bgStyles[background]} ${className}`}
    >
      <Container>
        {children}
      </Container>
    </section>
  );
};