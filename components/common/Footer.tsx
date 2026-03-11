import React from 'react';
import { Container } from '../ui/Container';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Col 1: Identidad */}
          <div>
            <div className="mb-4">
              <span className="text-[#0F3C5C] font-black text-2xl leading-none">BAHÍA</span>
              <span className="block text-[#2FA4B7] font-bold text-sm tracking-widest uppercase">Surgery</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Especialistas en cirugía bariátrica integral comprometidos con tu salud y bienestar en Nayarit.
            </p>
          </div>

          {/* Col 2: Sedes */}
          <div className="space-y-4">
            <h4 className="text-[#0F3C5C] font-bold">Ubicaciones</h4>
            <div className="text-slate-600 text-sm space-y-2">
              <p><strong>Tepic:</strong> Paseo de la Loma 407, Res. La Loma.</p>
              <p><strong>Bucerías:</strong> Hospital CMQ Riviera Nayarit.</p>
            </div>
          </div>

          {/* Col 3: Legal/Contacto */}
          <div className="space-y-4">
            <h4 className="text-[#0F3C5C] font-bold">Contacto</h4>
            <p className="text-slate-600 text-sm">Dr. Jorge Arturo Parra Monroy</p>
            <p className="text-slate-500 text-xs italic">Cédula Profesional Especialista Certificado</p>
          </div>
        </div>

        {/* Barra inferior: Derechos, Legales y Firma de Agencia */}
        <div className="pt-8 border-t border-slate-200 flex flex-col lg:flex-row justify-between items-center gap-6 text-xs text-slate-400 font-medium">
          
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
            <p>© {currentYear} Bahía Surgery Grupo Bariátrico. Todos los derechos reservados.</p>
            <span className="hidden md:inline text-slate-300">|</span>
            <p>
              Hecho con <span className="text-red-500">❤️</span> por{' '}
              <a 
                href="https://somoslazaro.marketing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#2FA4B7] hover:text-[#0F3C5C] font-bold transition-colors"
              >
                somoslazaro.marketing
              </a>
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-[#2FA4B7] transition-colors">Aviso de Privacidad</a>
            <a href="#" className="hover:text-[#2FA4B7] transition-colors">Términos de Uso</a>
          </div>
          
        </div>
      </Container>
    </footer>
  );
};