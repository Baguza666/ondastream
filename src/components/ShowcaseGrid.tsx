"use client";

import Image from "next/image";
import content from "@/data/content.json";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";

interface ContentItem {
    id: string;
    title: string;
    category: string;
    imageSrc: string;
    altText: string;
}

export default function ShowcaseGrid() {
    // Replace this with your actual WhatsApp business number (include country code, no +)
    const WHATSAPP_NUMBER = "34600000000";

    return (
        <section id="catalogo" className="py-12 md:py-24 px-6">
            <div className="max-w-7xl mx-auto">
                {/* ─── Section header ─── */}
                <div className="mb-8 md:mb-16 text-center md:text-left">
                    {/* ACCESSIBILITY FIX: Changed from h3 to p to respect heading hierarchy */}
                    <p className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">
                        Catálogo Destacado
                    </p>
                    {/* ACCESSIBILITY FIX: Changed from div to h2 for SEO semantic structure */}
                    <h2 className="text-3xl md:text-5xl font-black max-w-3xl leading-none text-white">
                        TODO LO QUE BUSCAS, EN UNA SOLA APP.
                    </h2>
                </div>

                {/* ─── Horizontal scroll on mobile, 3-col grid on desktop ─── */}
                <div className="h-[350px] md:h-auto flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {(content as ContentItem[]).map((item, i) => (
                        <div
                            key={item.id}
                            className="relative group w-[250px] h-[350px] shrink-0 snap-center md:w-auto md:h-auto md:aspect-[3/4] overflow-hidden rounded-2xl glass-panel animate-[fadeIn_0.5s_ease_both]"
                        >
                            {/* PERFORMANCE FIX: Add priority to the first 3 images to fix LCP */}
                            <Image
                                src={item.imageSrc}
                                alt={item.altText}
                                fill
                                sizes="(max-width: 768px) 280px, 33vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                priority={i < 3}
                            />

                            {/* Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                            {/* Text */}
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1 block">
                                    {item.category}
                                </span>
                                {/* ACCESSIBILITY FIX: Changed from h4 to h3 to follow the h2 above */}
                                <h3 className="text-2xl font-black text-white mb-4">
                                    {item.title}
                                </h3>

                                {/* CTA: Tracked and customized WhatsApp message */}
                                <a
                                    href={generateWhatsAppLink(WHATSAPP_NUMBER, `Prueba Gratis: ${item.title}`, 0)}
                                    onClick={() => trackWhatsAppClick("Showcase Grid", item.title)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-primary text-black px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-tighter opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300"
                                >
                                    Probar Gratis
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}