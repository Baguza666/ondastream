import Image from "next/image";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import content from "@/data/content.json";

interface ContentItem {
    id: string;
    title: string;
    category: string;
    imageSrc: string;
    altText: string;
}

/* Duplicate array for seamless infinite scroll */
const filmstripItems: ContentItem[] = [
    ...(content as ContentItem[]),
    ...(content as ContentItem[]),
];

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-end">
            {/* ─── Filmstrip Background ─── */}
            <div className="absolute inset-0 z-0 overflow-hidden pt-20">
                <div className="filmstrip-track gap-4 px-4 py-8">
                    {filmstripItems.map((item, i) => (
                        <div
                            key={`${item.id}-${i}`}
                            className="content-card relative group shrink-0 w-[280px] sm:w-[340px] lg:w-[400px] h-[65vh] sm:h-[70vh] lg:h-[75vh] overflow-hidden rounded-2xl glass-panel"
                        >
                            {/* Poster image */}
                            <div className="absolute inset-0 blurred-bg">
                                <Image
                                    src={item.imageSrc}
                                    alt={item.altText}
                                    fill
                                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 400px"
                                    className="object-cover"
                                    loading="lazy"
                                />
                            </div>

                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                            {/* Card content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                                <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1 block">
                                    {item.category}
                                </span>
                                <h3 className="text-2xl lg:text-3xl font-black text-white mb-6">
                                    {item.title}
                                </h3>
                                <div className="flex gap-3 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <a
                                        href={generateWhatsAppLink("", "Prueba Gratis", 0)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-primary text-black py-4 rounded-xl font-bold text-xs uppercase tracking-tighter text-center"
                                    >
                                        Añadir a Prueba
                                    </a>
                                    <button className="flex-1 bg-white/10 text-white py-4 rounded-xl font-bold text-xs uppercase tracking-tighter backdrop-blur-md hover:bg-white/20">
                                        Más info
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ─── Dark overlay so text stays legible over the filmstrip ─── */}
            <div className="absolute inset-0 z-10 bg-black/70" aria-hidden="true" />

            {/* ─── Bottom Gradient + Copy ─── */}
            <div className="relative z-20 w-full bg-gradient-to-t from-background-dark via-background-dark/60 to-transparent pt-32 pb-16 pointer-events-none">
                <div className="mx-auto px-6 max-w-5xl text-center pointer-events-auto">
                    {/* Badge */}
                    <div className="mb-6 inline-flex items-center rounded-full bg-black/40 border border-white/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-primary backdrop-blur-md">
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_#25d466]" />
                        Streaming de Nueva Generación
                    </div>

                    {/* Headline */}
                    <h2 className="font-sans text-5xl font-black leading-[1.1] tracking-tight text-white sm:text-7xl lg:text-8xl">
                        NO SÓLO TV.
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary/40">
                            EXPERIENCIAS.
                        </span>
                    </h2>

                    {/* Subtext */}
                    <p className="mt-8 text-lg text-text-secondary max-w-2xl mx-auto font-medium">
                        Desliza para descubrir el catálogo más grande de España. Fútbol, cine
                        y series en 4K real. Sin intermediarios, directo a tu pantalla.
                    </p>

                    {/* ─── Single WhatsApp CTA ─── */}
                    <div className="mt-10">
                        <a
                            href={generateWhatsAppLink("", "Prueba Gratis", 0)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-black font-bold text-lg px-8 py-4 rounded-xl hover:bg-[#1EBE5D] active:scale-95 transition-all shadow-[0_8px_30px_rgba(37,211,102,0.4)]"
                        >
                            <span className="material-symbols-outlined text-[22px]">chat</span>
                            Pide tu Prueba Gratis
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
