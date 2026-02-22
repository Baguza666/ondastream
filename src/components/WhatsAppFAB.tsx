"use client";

import { generateWhatsAppLink } from "@/lib/whatsapp";

export default function WhatsAppFAB() {
    return (
        <a
            href={generateWhatsAppLink("", "Información", 0)}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-10 right-10 z-[100] group flex items-center gap-4 bg-whatsapp text-black px-6 py-4 rounded-full font-black text-sm shadow-[0_20px_40px_rgba(37,212,102,0.4)] hover:scale-110 transition-all active:scale-95"
        >
            <span className="hidden group-hover:block transition-all duration-300">
                ¿HABLAMOS?
            </span>
            <span className="material-symbols-outlined text-[28px]">chat</span>
        </a>
    );
}
