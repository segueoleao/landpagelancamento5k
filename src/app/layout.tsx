import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Corra Mais | Conquiste seus primeiros 5 km em 12 semanas",
  description: "Conquiste seus primeiros 5 km em 12 semanas. Conheça o programa online Corra Mais e comece a correr com confiança, consistência e segurança.",
  openGraph: {
    title: "Corra Mais | Seus primeiros 5 km começam aqui",
    description: "O seu ritmo. A sua jornada. A sua linha de chegada.",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/images/hero-dupla.jpg", width: 1024, height: 1024, alt: "Programa Corra Mais" }],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
