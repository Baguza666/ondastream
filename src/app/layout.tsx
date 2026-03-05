import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script"; // FIX: Imported Next.js Script component
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const CANONICAL_URL = "https://www.ondstream.com";
const GA_MEASUREMENT_ID = "G-YE3HRQ2KMT"; // FIX: Your verified GA4 ID

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0A",
};

export const metadata: Metadata = {
  metadataBase: new URL(CANONICAL_URL),
  title: {
    default: "OndStream España | El Mejor IPTV Sin Cortes 2026",
    template: "%s | OndStream",
  },
  description:
    "Disfruta de La Liga, Champions en 4K y +10,000 canales. Cero cortes. Activación instantánea por WhatsApp. Pide tu prueba gratis de 2 horas hoy.",
  keywords: [
    "iptv españa",
    "iptv sin cortes",
    "comprar iptv por whatsapp",
    "alternativa movistar plus",
    "fútbol 4k españa",
    "iptv estable smart tv",
  ],
  authors: [{ name: "OndStream", url: CANONICAL_URL }],
  creator: "OndStream",
  publisher: "OndStream",
  alternates: {
    canonical: CANONICAL_URL,
    languages: {
      "es-ES": CANONICAL_URL,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: CANONICAL_URL,
    siteName: "OndStream",
    title: "OndStream España | El Mejor IPTV Sin Cortes 2026",
    description:
      "Disfruta de La Liga, Champions en 4K y +10,000 canales. Cero cortes. Activación instantánea por WhatsApp. Pide tu prueba gratis de 2 horas hoy.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OndStream España — El Mejor IPTV Sin Cortes 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OndStream España | El Mejor IPTV Sin Cortes 2026",
    description:
      "Disfruta de La Liga, Champions en 4K y +10,000 canales. Cero cortes. Activación instantánea por WhatsApp. Pide tu prueba gratis de 2 horas hoy.",
    images: ["/og-image.png"],
    creator: "@ondstream_es",
    site: "@ondstream_es",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-ES" className="dark" suppressHydrationWarning>
      <head>
        {/* Google Analytics 4 Integration */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>

        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} font-sans bg-background-dark text-text-main overflow-x-hidden antialiased`}
      >
        {children}
      </body>
    </html>
  );
}