"use client";

import { generateWhatsAppLink } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";

// REPLACE with your actual WhatsApp business number
const WHATSAPP_NUMBER = "34600000000";

const planes = [
    {
        id: "prueba",
        name: "Prueba",
        price: "GRATIS",
        duration: "2 Horas",
        features: [
            "Acceso completo al catálogo",
            "Calidad 4K sin cortes",
            "Soporte técnico 24/7"
        ],
        cta: "Pedir Prueba",
        message: "Quiero mi Prueba Gratis de 2H",
        highlight: false
    },
    {
        id: "trimestral",
        name: "Trimestral",
        price: "30€",
        duration: "3 Meses",
        features: [
            "Sale a 10€ / mes",
            "Todos los canales en vivo",
            "Cine y Series actualizados",
            "Fútbol y Motor en Directo"
        ],
        cta: "Comprar Trimestral",
        message: "Quiero el plan Trimestral de 30€",
        highlight: false
    },
    {
        id: "anual",
        name: "Anual",
        price: "60€",
        duration: "12 Meses",
        features: [
            "Sale a solo 5€ / mes",
            "Ahorro máximo garantizado",
            "Todos los canales en vivo",
            "Cine, Series y Deportes"
        ],
        cta: "Comprar Anual",
        message: "Quiero el plan Anual de 60€",
        highlight: true, // This triggers the green "Most Popular" styling
        badge: "MÁS POPULAR"
    }
];

export default function PricingCards() {
    return (
        <section id="planes" className="py-24 px-6 bg-background-dark">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">
                        Elige tu plan
                    </p>
                    <h2 className="text-3xl md:text-5xl font-black text-white max-w-2xl mx-auto leading-none">
                        PLAZAS LIMITADAS PARA EL DERBI. ÚNETE HOY.
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {planes.map((plan) => (
                        <div
                            key={plan.id}
                            className={`relative flex flex-col p-8 rounded-3xl transition-transform duration-300 hover:-translate-y-2 ${plan.highlight
                                    ? "bg-primary text-black shadow-[0_0_40px_rgba(37,211,102,0.3)] scale-105 z-10"
                                    : "bg-white/5 border border-white/10 text-white"
                                }`}
                        >
                            {/* Badge */}
                            {plan.badge && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-primary border border-primary text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
                                    {plan.badge}
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className={`text-sm font-black uppercase tracking-widest mb-2 ${plan.highlight ? "text-black/70" : "text-text-secondary"}`}>
                                    {plan.name}
                                </h3>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-5xl font-black tracking-tighter">
                                        {plan.price}
                                    </span>
                                    {plan.duration && (
                                        <span className={`text-sm font-bold uppercase tracking-wider ${plan.highlight ? "text-black/70" : "text-text-secondary"}`}>
                                            / {plan.duration}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <ul className="mb-10 flex-1 space-y-4">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-[18px]">
                                            check_circle
                                        </span>
                                        <span className={`text-sm font-semibold ${plan.highlight ? "text-black/80" : "text-[#A3A3A3]"}`}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={generateWhatsAppLink(WHATSAPP_NUMBER, plan.message, 0)}
                                onClick={() => trackWhatsAppClick("Pricing Card", plan.name)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`block w-full text-center py-4 rounded-xl font-black text-sm uppercase tracking-widest transition-all ${plan.highlight
                                        ? "bg-black text-white hover:bg-black/80"
                                        : "bg-white text-black hover:bg-primary"
                                    }`}
                            >
                                {plan.cta}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}