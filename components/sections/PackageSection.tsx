import React from 'react';
import { Section } from '../ui/Section';
import { WhatsAppButton } from '../common/WhatsAppButton';
import { SITE_CONFIG } from '../../content/config';

/**
 * Sección de paquete quirúrgico todo incluido.
 *
 * Responde a la intención de búsqueda que más convierte ("cuánto cuesta la
 * manga gástrica", "manga gástrica precio"). Por defecto NO publica el monto:
 * detalla qué incluye y lleva la cifra a WhatsApp. Para publicar el precio
 * abierto, poner `package.showPrice = true` en content/config.ts.
 */
export const PackageSection = () => {
  const { showPrice, priceFrom, currency, consultationPrice, includes } =
    SITE_CONFIG.package;

  return (
    <Section id="paquete" background="primary" className="!bg-[#0F3C5C]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-[#2FA4B7] font-bold tracking-[0.2em] uppercase text-xs mb-4">
            Costo transparente
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Paquete quirúrgico todo incluido
          </h2>
          <p className="text-blue-50/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Un solo precio, sin sorpresas. Incluye todo lo necesario para tu
            cirugía y tu recuperación, desde la valoración hasta el seguimiento.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-center">
          {/* Qué incluye */}
          <div className="md:col-span-3 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10">
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">
              Qué incluye tu paquete
            </h3>
            <ul className="space-y-4">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-[#5CB85C] shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-blue-50/90 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Precio / CTA */}
          <div className="md:col-span-2 bg-white rounded-3xl p-8 md:p-10 text-center shadow-2xl">
            {showPrice ? (
              <>
                <p className="text-slate-400 text-xs uppercase font-bold tracking-widest mb-2">
                  Paquete desde
                </p>
                <p className="text-[#0F3C5C] text-4xl md:text-5xl font-bold mb-1">
                  ${priceFrom}
                </p>
                <p className="text-slate-400 text-sm mb-6">{currency}</p>
              </>
            ) : (
              <>
                <p className="text-slate-400 text-xs uppercase font-bold tracking-widest mb-3">
                  Tu costo exacto
                </p>
                <p className="text-[#0F3C5C] text-2xl md:text-3xl font-bold mb-4 leading-tight">
                  Te lo confirmamos en minutos
                </p>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                  El precio depende del procedimiento que necesites. Escríbenos y
                  te lo decimos sin compromiso.
                </p>
              </>
            )}

            <WhatsAppButton
              phone={SITE_CONFIG.phone}
              message="Hola, quiero conocer el precio del paquete de cirugía bariátrica."
              label="Pedir precio por WhatsApp"
              source="paquete_precio"
              className="w-full !px-4"
            />

            <p className="text-slate-400 text-xs mt-5 leading-relaxed">
              Consulta de valoración: ${consultationPrice} {currency}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
