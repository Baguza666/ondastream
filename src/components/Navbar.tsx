"use client";

import Link from "next/link";
import { generateWhatsAppLink } from "@/lib/whatsapp";

const WHATSAPP_NUMBER = "34600000000"; // REPLACE with your actual number

export default function Navbar() {
    return (
        <nav className="fixed top-0 z-[100] w-full border-b border-surface-highlight bg-background-dark/80 backdrop-blur-xl">
            <div className="mx-auto flex h-20 max-w-full items-center justify-between px-6 lg:px-12">
                {/* Logo: Routes back to top/home */}
                <Link href="/" className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary">
                        <span className="material-symbols-outlined text-[24px]">
                            waves
                        </span>
                    </div>
                    <h1 className="font-sans text-xl font-black tracking-tighter text-white uppercase italic">
                        OndaStream
                    </h1>
                </Link>

                {/* Desktop nav links: Now mapped to actual page sections */}
                <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-text-secondary">
                    <a
                        href="#catalogo"
                        className="hover:text-primary transition-colors"
                    >
                        Catálogo
                    </a>
                    <a
                        href="#comparacion"
                        className="hover:text-primary transition-colors"
                    >
                        Comparativa
                    </a>
                    <a
                        href="#planes"
                        className="hover:text-primary transition-colors"
                    >
                        Planes
                    </a>
                    <a
                        href="#faq"
                        className="hover:text-primary transition-colors"
                    >
                        FAQ
                    </a>
                </div>

                {/* CTA */}
                <a
                    href={generateWhatsAppLink(WHATSAPP_NUMBER, "Quiero mi Prueba Gratis de 2H", 0)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-bold text-black transition-all hover:bg-primary hover:text-black shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]"
                >
                    <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">bolt</span>
                    <span>PRUEBA GRATIS</span>
                </a>
            </div>
        </nav>
    );
}