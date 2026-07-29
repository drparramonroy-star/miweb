import Script from 'next/script';

// ID del contenedor de Google Tag Manager (formato GTM-XXXXXXX).
// Por defecto usa el contenedor de Bahía Surgery; se puede sobrescribir con la
// variable de entorno NEXT_PUBLIC_GTM_ID (Vercel → Settings → Environment Variables).
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-TMPL49T3';

/** Script de inicialización de GTM. Va lo más arriba posible dentro del <body>. */
export function GoogleTagManager() {
  if (!GTM_ID) return null;

  return (
    <Script id="gtm-init" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
    </Script>
  );
}

/** Fallback <noscript> de GTM. Debe ir inmediatamente después de abrir el <body>. */
export function GoogleTagManagerNoScript() {
  if (!GTM_ID) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  );
}
