import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const SITE_URL = "https://saer.cl";
const SITE_TITLE = "SAER TI | Soluciones Tecnológicas para la Industria Chilena";
const SITE_DESCRIPTION =
  "Empresa chilena de software especializada en FleetCore para minería y construcción, Licitex para licitaciones públicas, desarrollo de sitios web, e-commerce, software a medida y aplicaciones web y móviles.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "software chile",
    "fleetcore",
    "licitex",
    "desarrollo de software a medida",
    "desarrollo web chile",
    "ecommerce chile",
    "aplicaciones móviles",
    "minería",
    "construcción",
    "municipalidades",
    "licitaciones MOP",
  ],
  authors: [{ name: "SAER TI" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: SITE_URL,
    siteName: "SAER TI",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
