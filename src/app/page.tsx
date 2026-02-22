import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ComparisonMatrix from "@/components/ComparisonMatrix";
import UrgencyTimer from "@/components/UrgencyTimer";
import ShowcaseGrid from "@/components/ShowcaseGrid";
import PricingCards from "@/components/PricingCards";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import LiveSalesToast from "@/components/LiveSalesToast";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      {/* 1. NAVEGACIÓN: "The Perfect Header" con acceso rápido */}
      <Navbar />

      {/* 2. ATENCIÓN: Gancho visual masivo y promesa de valor */}
      <Hero />

      {/* 3. AUTORIDAD: Prueba social inmediata con números reales */}
      <StatsBar />

      {/* 4. DOLOR: Comparativa de ahorro para activar el sesgo cognitivo de pérdida */}
      <ComparisonMatrix />

      {/* 5. URGENCIA: El disparador impulsivo para forzar la decisión */}
      <UrgencyTimer />

      {/* 6. DESEO: Demostración visual del valor del producto (Showcase) */}
      <ShowcaseGrid />

      {/* 7. ACCIÓN: Cierre de venta con jerarquía clara y resaltado de oferta */}
      <PricingCards />

      {/* 8. CONFIANZA: Responde las últimas objeciones antes de comprar */}
      <FAQ />

      {/* 9. CIERRE Y CONFIANZA */}
      <Footer />
      {/* CAPA DE PERSUASIÓN: Prueba social dinámica (FOMO) */}
      <LiveSalesToast />
    </main>
  );
}