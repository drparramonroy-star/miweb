import type { Metadata } from "next";
import "./globals.css";
import { GoogleTagManager, GoogleTagManagerNoScript } from "../../components/analytics/GoogleTagManager";

export const metadata: Metadata = {
  title: "Bahía Surgery | Cirugía Bariátrica en Puerto Vallarta",
  description: "Manga gástrica y bypass gástrico en Puerto Vallarta y Bahía de Banderas con el Dr. Jorge Arturo Parra Monroy, cirujano bariatra certificado. Paquete todo incluido.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased">
        <GoogleTagManager />
        <GoogleTagManagerNoScript />
        {children}
      </body>
    </html>
  );
}