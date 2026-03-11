import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bahía Surgery | Cirugía Bariátrica en Nayarit",
  description: "Especialistas en Manga Gástrica y Bypass Gástrico liderados por el Dr. Jorge Arturo Parra Monroy en Tepic y Bucerías.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}