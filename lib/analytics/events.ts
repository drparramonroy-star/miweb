// Capa de tracking desacoplada del proveedor.
// Empuja eventos al dataLayer de Google Tag Manager. Si GTM no está cargado
// (sin NEXT_PUBLIC_GTM_ID), estas funciones simplemente no hacen nada.

type DataLayerObject = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: DataLayerObject[];
  }
}

/** Empuja un evento genérico al dataLayer. Seguro en SSR (no hace nada en el server). */
export function pushEvent(event: string, params: DataLayerObject = {}): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

/** Clic en cualquier botón o enlace de WhatsApp. `source` indica de dónde salió. */
export function trackWhatsAppClick(source: string): void {
  pushEvent('whatsapp_click', { source });
}

/** El usuario calculó su IMC en la calculadora de la landing. */
export function trackBmiCalculated(
  imc: number,
  category: string,
  candidate: boolean,
): void {
  pushEvent('bmi_calculated', { imc, category, candidate });
}
