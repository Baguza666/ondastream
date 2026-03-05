"use client";

import { useState, useEffect } from "react";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";
import { motion } from "framer-motion";

interface ComparisonRow {
    label: string;
    villain: string;
    hero: string;
    painPoint?: boolean;
}

const WHATSAPP_NUMBER = "34600000000"; // REPLACE with your actual number

const rows: ComparisonRow[] = [
    {
        label: "Precio mensual",
        villain: "120€ / mes",
        hero: "Desde 5€ / mes", // UPDATED: Math reflects the new 60€ yearly plan
        painPoint: true,
    },
    {
        label: "Fútbol y Motor",
        villain: "Paquetes extra caros",
        hero: "Todo incluido",
    },
    {
        label: "Contrato",
        villain: "Permanencia 12 meses",
        hero: "Sin compromiso",
    },
    {
        label: "Activación",
        villain: "Días de espera + instalador",
        hero: "Instantáneo por WhatsApp",
    },
    {
        label: "Dispositivos",
        villain: "Solo tu TV de casa",
        hero: "Smart TV, móvil, tablet",
    },
];

export default function ComparisonMatrix() {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) return null;

    return (
        <section
            id="comparacion"
            aria-labelledby="comparison-heading"
            className="py-24 px-6 bg-[#0A0A0A] overflow-hidden"
        >
            <div className="max-w-4xl mx-auto">
                {/* ─── Header ─── */}
                <div className="text-center mb-14">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-[#25D366] mb-4">
                        La Verdad Incómoda
                    </p>
                    <h2
                        id="comparison-heading"
                        className="text-4xl md:text-5xl font-black tracking-tight text-[#F5F5F5] leading-tight"
                    >
                        ¿Cuánto llevas pagando de más?
                    </h2>
                </div>

                {/* ─── Table ─── */}
                <div
                    role="table"
                    aria-label="Comparación entre TV Tradicional y OndStream"
                    className="relative"
                >
                    <div
                        role="row"
                        className="grid grid-cols-[0.8fr_1.1fr_1.1fr] md:grid-cols-[1fr_1fr_1fr] gap-3 mb-4 text-center"
                    >
                        <div role="columnheader" className="text-xs text-transparent" aria-hidden="true" />

                        {/* ACCESSIBILITY FIX: Removed opacity-40 for sufficient contrast */}
                        <div
                            role="columnheader"
                            className="rounded-2xl bg-white/5 border border-white/10 py-5 px-3 grayscale"
                        >
                            <span className="text-3xl mb-2 block">📺</span>
                            <p className="text-[10px] md:text-xs font-black text-[#A3A3A3] uppercase tracking-wider leading-tight">
                                TV Tradicional
                            </p>
                        </div>

                        <div
                            role="columnheader"
                            className="rounded-2xl bg-[#25D366]/10 border-2 border-[#25D366] py-5 px-3 shadow-[0_0_40px_rgba(37,211,102,0.25)] relative overflow-hidden"
                        >
                            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#25D366] to-transparent" />
                            <span className="text-3xl mb-2 block">⚡</span>
                            <p className="text-[10px] md:text-xs font-black text-[#25D366] uppercase tracking-wider leading-tight">
                                OndStream
                            </p>
                        </div>
                    </div>

                    {rows.map((row, i) => (
                        <motion.div
                            key={row.label}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            role="row"
                            className="grid grid-cols-[0.8fr_1.1fr_1.1fr] md:grid-cols-[1fr_1fr_1fr] gap-3 mb-3 items-center"
                        >
                            <div
                                role="rowheader"
                                className="text-[10px] md:text-xs font-bold text-[#A3A3A3] uppercase tracking-wider text-right pr-2 leading-tight"
                            >
                                {row.label}
                            </div>

                            <div
                                role="cell"
                                className="rounded-xl bg-white/[0.02] border border-white/5 py-4 px-3 text-center opacity-30"
                            >
                                <p className="text-xs md:text-sm font-semibold text-[#A3A3A3] leading-tight line-through decoration-red-600/50">
                                    {row.villain}
                                </p>
                            </div>

                            <div
                                role="cell"
                                className={`rounded-xl bg-[#25D366]/10 border ${row.painPoint ? 'border-[#25D366]' : 'border-[#25D366]/30'} py-4 px-3 text-center transition-all hover:bg-[#25D366]/20`}
                            >
                                <p className="text-xs md:text-sm font-black text-[#F5F5F5] leading-tight">
                                    {row.hero}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ─── Bottom CTA ─── */}
                <div className="mt-16 text-center">
                    <div className="inline-block relative">
                        <p className="text-[#A3A3A3] text-sm mb-8">
                            Ahorra más de{" "}
                            {/* UPDATED MATH: 120€ * 12 = 1440€. 1440€ - 60€ = 1380€ savings */}
                            <span className="text-[#25D366] font-black text-xl">1.380€ al año</span>
                            {" "}sin renunciar a nada.
                        </p>
                    </div>

                    <a
                        href={generateWhatsAppLink(WHATSAPP_NUMBER, "Comparación de Ahorro", 0)}
                        onClick={() => trackWhatsAppClick("Comparison Matrix CTA")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-3 bg-[#25D366] text-black font-black text-sm md:text-base uppercase tracking-wider px-10 py-5 rounded-2xl hover:bg-[#1EBE5D] active:scale-95 transition-all shadow-[0_20px_50px_rgba(37,211,102,0.3)] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-4 focus:ring-offset-black"
                    >
                        <span className="material-symbols-outlined text-[24px] group-hover:rotate-12 transition-transform">rocket_launch</span>
                        <span>¡Quiero empezar a ahorrar ahora!</span>
                    </a>

                    {/* ACCESSIBILITY FIX: Removed opacity-50 for sufficient contrast */}
                    <p className="mt-4 text-[10px] text-[#A3A3A3] uppercase tracking-widest">
                        Activación instantánea • Sin permanencia
                    </p>
                </div>
            </div>
        </section>
    );
}