"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { generateWhatsAppLink } from "@/lib/whatsapp";

// LOCK TOKENS: Primary #25D366, Background #0A0A0A
const WHATSAPP_NUMBER = "34610975802";

interface FAQItem {
    q: string;
    a: string;
    id: string;
}

const FAQ_DATA: FAQItem[] = [
    {
        id: "estabilidad",
        q: "¿La señal se corta durante el fútbol?",
        a: "Absolutamente no. Nuestra infraestructura está optimizada para eventos de alta demanda como La Liga y Champions. Con servidores dedicados en Europa y tecnología anti-buffer, garantizamos un 99.9% de uptime incluso en 4K real.",
    },
    {
        id: "acceso",
        q: "¿Cómo recibo mi cuenta?",
        a: "La activación es instantánea. En menos de 5 minutos tras hablar con nosotros por WhatsApp, recibirás tus credenciales y una guía paso a paso. Sin instaladores y sin esperas.",
    },
    {
        id: "dispositivos",
        q: "¿Puedo verlo en mi Smart TV?",
        a: "Sí. Funciona en todas las Smart TV (Samsung, LG, Android TV), además de Amazon Fire Stick, Chromecast, móviles, tablets y PC. Puedes llevar tu televisión contigo a cualquier lugar.",
    },
    {
        id: "legalidad",
        q: "¿Es seguro y privado?",
        a: "Operamos bajo estrictos protocolos de privacidad y neutralidad de red. OndStream utiliza conexiones cifradas para garantizar que tu navegación sea 100% privada y anónima en todo momento.",
    },
];

export default function FAQ() {
    const [hasMounted, setHasMounted] = useState(false);
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    useEffect(() => {
        setHasMounted(true); // Hydration Guard
    }, []);

    if (!hasMounted) return null;

    return (
        <section
            id="faq"
            aria-labelledby="faq-heading"
            className="py-24 px-6 bg-[#0A0A0A]"
        >
            <div className="max-w-2xl mx-auto">
                {/* ─── Header: Clarity-First ─── */}
                <div className="text-center mb-12">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-[#25D366] mb-3">
                        Dudas resueltas
                    </p>
                    <h2
                        id="faq-heading"
                        className="text-3xl md:text-5xl font-black tracking-tight text-[#F5F5F5]"
                    >
                        Preguntas Frecuentes
                    </h2>
                </div>

                {/* ─── Accordion: High Information Density ─── */}
                <div className="space-y-3" role="list">
                    {FAQ_DATA.map((item, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div
                                key={item.id}
                                role="listitem"
                                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                                    ? "bg-[#1A1A1A] border-[#25D366]/40 shadow-[0_0_20px_rgba(37,211,102,0.05)]"
                                    : "bg-[#1A1A1A]/50 border-white/5 hover:border-white/15"
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : i)}
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-answer-${i}`}
                                    id={`faq-question-${i}`}
                                    className="w-full flex items-center justify-between gap-4 px-6 py-5 min-h-[52px] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
                                >
                                    <span className="text-sm md:text-base font-bold text-[#F5F5F5] leading-snug">
                                        {item.q}
                                    </span>

                                    <motion.span
                                        animate={{ rotate: isOpen ? 135 : 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        aria-hidden="true"
                                        className={`shrink-0 w-6 h-6 rounded-full border flex items-center justify-center text-lg font-light transition-colors ${isOpen ? "border-[#25D366] text-[#25D366]" : "border-white/20 text-[#A3A3A3]"
                                            }`}
                                    >
                                        +
                                    </motion.span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            id={`faq-answer-${i}`}
                                            role="region"
                                            aria-labelledby={`faq-question-${i}`}
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                                        >
                                            <p className="px-6 pb-6 text-sm leading-relaxed text-[#A3A3A3]">
                                                {item.a}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

                {/* ─── Final CTA: Rejection Handling ─── */}
                <div className="mt-16 text-center">
                    <p className="text-[#A3A3A3] text-sm mb-6">
                        ¿Tu duda no está aquí?
                    </p>
                    <a
                        href={generateWhatsAppLink(WHATSAPP_NUMBER, "Consulta Personalizada", 0)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 bg-white text-black font-black text-xs md:text-sm uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-[#25D366] hover:text-black transition-all shadow-xl active:scale-95"
                    >
                        <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">support_agent</span>
                        Hablar con soporte humano ahora
                    </a>
                </div>
            </div>
        </section>
    );
}