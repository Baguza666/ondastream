"use client"; // Added: required for onClick event handlers in Next.js App Router

import Image from "next/image";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics"; // Added tracking import
import sellers from "@/data/sellers.json";

interface SellerPlan {
    id: string;
    title: string;
    price: number;
    currency: string;
    duration: string;
    isBestOffer: boolean;
    badgeText?: string;
    features: string[];
    ctaText: string;
    sellerPhone: string;
}

const plans = sellers as SellerPlan[];

export default function PricingCards() {
    return (
        <section
            id="planes"
            aria-labelledby="pricing-heading"
            className="relative py-32 px-6 bg-[#1A1A1A] overflow-hidden"
        >
            <div
                aria-hidden="true"
                className="absolute top-0 right-0 w-1/2 h-full bg-[#25D366]/5 blur-[120px] rounded-full pointer-events-none"
            />

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2
                        id="pricing-heading"
                        className="text-4xl md:text-6xl font-black tracking-tight text-[#F5F5F5] mb-4"
                    >
                        PLAZAS LIMITADAS PARA EL DERBI. ÚNETE HOY.
                    </h2>
                    <p className="text-[#A3A3A3] text-lg">
                        Activa tu cuenta en menos de 5 minutos vía WhatsApp.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
                    {plans.map((plan) => {
                        const href = generateWhatsAppLink(
                            plan.sellerPhone,
                            plan.title,
                            plan.price
                        );

                        return (
                            <article
                                key={plan.id}
                                className={[
                                    "relative flex flex-col rounded-3xl p-10 transition-all duration-300",
                                    plan.isBestOffer
                                        ? [
                                            "bg-[#25D366]",
                                            "border-2 border-[#25D366]",
                                            "shadow-[0_0_60px_rgba(37,211,102,0.35)]",
                                            "md:scale-105 md:-translate-y-4",
                                        ].join(" ")
                                        : [
                                            "bg-[#0A0A0A]",
                                            "border border-white/10",
                                            "hover:border-white/30",
                                        ].join(" "),
                                ].join(" ")}
                            >
                                {plan.isBestOffer && plan.badgeText && (
                                    <div
                                        aria-label="Plan más popular"
                                        className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] font-black py-1.5 px-5 rounded-full uppercase tracking-widest whitespace-nowrap"
                                    >
                                        {plan.badgeText}
                                    </div>
                                )}

                                <p
                                    className={`text-xs font-black uppercase tracking-widest mb-6 ${plan.isBestOffer ? "text-black/60" : "text-[#A3A3A3]"
                                        }`}
                                >
                                    {plan.title}
                                </p>

                                <div className="flex items-baseline gap-1 mb-10">
                                    {plan.price === 0 ? (
                                        <span
                                            className={`text-5xl font-black ${plan.isBestOffer ? "text-black" : "text-[#F5F5F5]"
                                                }`}
                                        >
                                            GRATIS
                                        </span>
                                    ) : (
                                        <>
                                            <span
                                                className={`font-black ${plan.isBestOffer
                                                    ? "text-6xl text-black"
                                                    : "text-5xl text-[#F5F5F5]"
                                                    }`}
                                            >
                                                {plan.price}
                                                {plan.currency}
                                            </span>
                                            <span
                                                className={
                                                    plan.isBestOffer ? "text-black/60" : "text-[#A3A3A3]"
                                                }
                                            >
                                                / {plan.duration}
                                            </span>
                                        </>
                                    )}
                                </div>

                                <ul className="space-y-3 mb-10 flex-1" role="list">
                                    {plan.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className={`flex items-start gap-3 text-sm font-medium ${plan.isBestOffer ? "text-black font-black" : "text-[#F5F5F5]"
                                                }`}
                                        >
                                            <span
                                                aria-hidden="true"
                                                className={`material-symbols-outlined text-lg shrink-0 mt-0.5 ${plan.isBestOffer ? "text-black" : "text-[#25D366]"
                                                    }`}
                                            >
                                                check_circle
                                            </span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={href}
                                    onClick={() => trackWhatsAppClick("Pricing Cards", plan.title)} // Added GA4 trigger passing the plan name
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={[
                                        "mt-auto block w-full text-center py-4 rounded-2xl font-black text-sm uppercase tracking-wider transition-all duration-200",
                                        "focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-black",
                                        plan.isBestOffer
                                            ? "bg-black text-white hover:bg-[#1EBE5D] hover:text-black"
                                            : "bg-white text-black hover:bg-gray-200 transition-colors",
                                    ].join(" ")}
                                >
                                    {plan.ctaText}
                                </a>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}