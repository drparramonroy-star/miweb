'use client';

import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';

interface BmiCalculatorSectionProps {
  phone: string;
}

export const BmiCalculatorSection = ({ phone }: BmiCalculatorSectionProps) => {
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [imc, setImc] = useState<number | null>(null);

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100; // Convertir cm a metros

    if (w > 0 && h > 0) {
      const result = w / (h * h);
      setImc(parseFloat(result.toFixed(1)));
    }
  };

  const getImcCategory = (value: number) => {
    if (value < 18.5) return { label: 'Bajo peso', color: 'text-slate-500', bg: 'bg-slate-100', candidate: false };
    if (value >= 18.5 && value < 25) return { label: 'Peso normal', color: 'text-emerald-600', bg: 'bg-emerald-50', candidate: false };
    if (value >= 25 && value < 30) return { label: 'Sobrepeso', color: 'text-yellow-600', bg: 'bg-yellow-50', candidate: true };
    if (value >= 30 && value < 35) return { label: 'Obesidad Grado 1', color: 'text-orange-500', bg: 'bg-orange-50', candidate: true };
    if (value >= 35 && value < 40) return { label: 'Obesidad Grado 2', color: 'text-red-500', bg: 'bg-red-50', candidate: true };
    return { label: 'Obesidad Grado 3', color: 'text-red-700', bg: 'bg-red-100', candidate: true };
  };

  const getWhatsAppLink = (currentImc: number) => {
    const category = getImcCategory(currentImc).label;
    const message = `Hola, hice el test de IMC en la página. Mido ${height}cm, peso ${weight}kg y mi IMC es de ${currentImc} (${category}). Me gustaría agendar una valoración médica.`;
    const encodedMessage = encodeURIComponent(message);
    // Limpiamos el teléfono de espacios o signos
    const cleanPhone = phone.replace(/\D/g, ''); 
    return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
  };

  return (
    <Section background="white" className="!py-20 md:!py-28 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          
          {/* Columna Izquierda: Textos */}
          <div className="max-w-xl">
            <span className="inline-block px-4 py-1.5 mb-6 bg-blue-50 text-[#2FA4B7] font-bold text-xs tracking-widest uppercase rounded-full">
              Herramienta Médica
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F3C5C] mb-6 leading-tight">
              Calcula tu Índice de Masa Corporal (IMC)
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Descubre en menos de un minuto si eres candidato para un procedimiento bariátrico. El IMC es un indicador clave que nos ayuda a determinar el mejor plan de salud para ti.
            </p>
            <ul className="space-y-4 text-slate-600 font-medium">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#2FA4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                Resultados instantáneos
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#2FA4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                100% privado y seguro
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#2FA4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                Envío directo a valoración médica
              </li>
            </ul>
          </div>

          {/* Columna Derecha: Calculadora Interactiva */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl shadow-[#0F3C5C]/5 border border-slate-100">
            <form onSubmit={calculateBMI} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#0F3C5C]">Estatura (cm)</label>
                  <input 
                    type="number" 
                    placeholder="Ej. 165" 
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2FA4B7] focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#0F3C5C]">Peso (kg)</label>
                  <input 
                    type="number" 
                    placeholder="Ej. 85" 
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2FA4B7] focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>
              <button 
                type="submit"
                className="w-full bg-[#0F3C5C] text-white font-bold text-lg py-4 rounded-xl hover:bg-[#0a2a41] transition-colors shadow-lg shadow-[#0F3C5C]/20"
              >
                Calcular mi IMC
              </button>
            </form>

            {/* Resultados (Se muestran al calcular) */}
            {imc !== null && (
              <div className="mt-8 pt-8 border-t border-slate-100 animate-fade-in-down">
                <div className="text-center mb-6">
                  <p className="text-slate-500 text-sm font-medium mb-1">Tu resultado es:</p>
                  <div className="flex items-center justify-center gap-4">
                    <span className="text-5xl font-black text-[#0F3C5C]">{imc}</span>
                    <span className={`px-4 py-2 rounded-lg font-bold text-sm ${getImcCategory(imc).bg} ${getImcCategory(imc).color}`}>
                      {getImcCategory(imc).label}
                    </span>
                  </div>
                </div>

                {getImcCategory(imc).candidate ? (
                  <div className="bg-blue-50/50 p-5 rounded-2xl text-center border border-blue-100/50">
                    <p className="text-[#0F3C5C] font-semibold mb-4 text-sm md:text-base">
                      Tu IMC indica que podrías ser candidato ideal para cirugía bariátrica.
                    </p>
                    <a 
                      href={getWhatsAppLink(imc)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full bg-[#25D366] hover:bg-[#1ea952] text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:-translate-y-0.5"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      Enviar resultados al Especialista
                    </a>
                  </div>
                ) : (
                  <div className="bg-emerald-50/50 p-5 rounded-2xl text-center border border-emerald-100/50">
                    <p className="text-emerald-800 font-medium text-sm">
                      Tu IMC se encuentra en un rango bajo. La cirugía bariátrica no suele estar indicada, pero si tienes dudas sobre tu salud nutricional, puedes consultarnos.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};