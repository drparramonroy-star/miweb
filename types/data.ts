import { ReactNode } from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  featured?: boolean;
  ctaMessage?: string;
}

export interface LocationItem {
  city: string;
  venue: string;
  address: string;
  schedule?: string;
  mapUrl: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}