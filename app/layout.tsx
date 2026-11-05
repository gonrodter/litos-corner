import type { Metadata, Viewport } from "next";
import { ViewTransition } from "react";
import { Damion, Jost, Overpass, Ultra } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import OrderDialog from "@/components/OrderDialog";
import { site } from "@/lib/content";

const jost = Jost({ variable: "--font-jost", weight: ["400", "500", "600", "700"], style: ["normal", "italic"], subsets: ["latin"], display: "swap" });
const damion = Damion({ variable: "--font-damion", weight: "400", subsets: ["latin"], display: "swap" });
const ultra = Ultra({ variable: "--font-ultra", weight: "400", subsets: ["latin"], display: "swap" });
const overpass = Overpass({ variable: "--font-overpass", weight: ["600", "800"], subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Lito’s Corner · Hamburguesería americana en Chiclana y San Fernando",
    template: "%s · Lito’s Corner",
  },
  description: site.description,
  keywords: [
    "hamburguesas Novo Sancti Petri",
    "hamburguesería Chiclana",
    "hamburguesería San Fernando",
    "hamburguesas a domicilio San Fernando",
    "hamburguesa de retinto",
    "comida americana Novo Sancti Petri",
    "pub americano Chiclana",
    "nachos",
    "burgers La Barrosa",
  ],
  openGraph: {
    title: "Lito’s Corner · Hamburguesería americana en Chiclana y San Fernando",
    description: site.description,
    locale: "es_ES",
    type: "website",
    siteName: site.name,
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#68171c",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${jost.variable} ${damion.variable} ${ultra.variable} ${overpass.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[70] focus:bg-orange focus:px-4 focus:py-2 focus:text-milk">
          Saltar al contenido
        </a>
        <Header />
        {/* Al navegar, la página sale y entra con un fundido (estilos .page en globals.css). */}
        <ViewTransition default="page">
          <div className="flex flex-1 flex-col">
            <main id="main" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ViewTransition>
        <MobileActionBar />
        <OrderDialog />
      </body>
    </html>
  );
}
