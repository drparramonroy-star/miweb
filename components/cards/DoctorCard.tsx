import React from 'react';

interface DoctorCardProps {
  name: string;
  role: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  highlights: string[];
}

export const DoctorCard = ({
  name,
  role,
  description,
  imageSrc,
  imageAlt,
  highlights
}: DoctorCardProps) => {
  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-100 shadow-xl overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        {/* Imagen del Doctor */}
        <div className="w-full lg:w-2/5">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border-4 border-slate-50">
            <img 
              src={imageSrc} 
              alt={imageAlt || name} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Información Profesional */}
        <div className="w-full lg:w-3/5">
          <span className="text-[#2FA4B7] font-bold uppercase tracking-widest text-sm mb-2 block">Especialista Responsable</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F3C5C] mb-2">{name}</h2>
          <p className="text-xl text-[#2FA4B7] font-medium mb-6">{role}</p>
          
          <div className="w-16 h-1 bg-[#2FA4B7] rounded-full mb-6"></div>
          
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            {description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center space-x-3 text-slate-700">
                <svg className="w-5 h-5 text-[#5CB85C] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-sm font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};