import { ImageResponse } from 'next/og';

// Configuración de la imagen
export const runtime = 'edge';
export const alt = 'Bahía Surgery - Grupo Bariátrico en Nayarit';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0F3C5C', // Azul profundo de la marca
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Logo / Título */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ color: 'white', fontSize: 80, fontWeight: 'bold', letterSpacing: '-0.02em', margin: 0 }}>
            BAHÍA
          </div>
          <div style={{ color: '#2FA4B7', fontSize: 24, fontWeight: 'bold', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: -10 }}>
            Surgery
          </div>
        </div>

        {/* Subtítulo */}
        <div style={{ color: '#E0F2FE', fontSize: 32, marginTop: 40, textAlign: 'center', maxWidth: '80%' }}>
          Especialistas en cirugía bariátrica integral
        </div>
        
        {/* Ubicaciones */}
        <div style={{ color: 'white', fontSize: 24, marginTop: 60, opacity: 0.8 }}>
          Tepic • Bucerías
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}