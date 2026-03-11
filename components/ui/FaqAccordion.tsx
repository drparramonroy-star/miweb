'use client';

import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export const FaqAccordion = ({ items }: FaqAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {items.map((item, index) => (
        <div 
          key={index}
          className="border border-slate-100 rounded-2xl bg-white overflow-hidden transition-all duration-200"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
          >
            <span className="font-bold text-[#0F3C5C] pr-4">
              {item.question}
            </span>
            <svg
              className={`w-5 h-5 text-[#2FA4B7] transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <div
            className={`transition-all duration-300 ease-in-out ${
              openIndex === index 
                ? 'max-h-[500px] opacity-100' 
                : 'max-h-0 opacity-0 overflow-hidden'
            }`}
          >
            <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};