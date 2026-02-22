"use client";

import { useEffect, useReducer, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, Variants } from "framer-motion";

/* ─── España-localised Impulse Data ─── */
const SALES: { name: string; city: string; plan: string }[] = [
    { name: "Carlos", city: "Madrid", plan: "Trimestral" },
    { name: "Laura", city: "Barcelona", plan: "Anual" },
    { name: "David", city: "Valencia", plan: "Trimestral" },
    { name: "María", city: "Sevilla", plan: "Anual" },
    { name: "Alejandro", city: "Bilbao", plan: "Trimestral" },
    { name: "Sofía", city: "Zaragoza", plan: "Anual" },
    { name: "Pablo", city: "Málaga", plan: "Trimestral" },
    { name: "Lucía", city: "Alicante", plan: "Anual" },
];

const VISIBLE_MS = 4_000;
const HIDDEN_MS = 12_000;

type State =
    | { visible: false }
    | { visible: true; sale: (typeof SALES)[number] };

export default function LiveSalesToast() {
    const shouldReduceMotion = useReducedMotion();
    const [hasMounted, setHasMounted] = useState(false); // Hydration Guard
    const [state, dispatch] = useReducer(
        (_: State, next: State) => next,
        { visible: false }
    );

    const showTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        setHasMounted(true); // Component is safe to render on client

        function showNext() {
            const sale = SALES[Math.floor(Math.random() * SALES.length)];
            dispatch({ visible: true, sale });

            hideTimer.current = setTimeout(() => {
                dispatch({ visible: false });
                showTimer.current = setTimeout(showNext, HIDDEN_MS);
            }, VISIBLE_MS);
        }

        showTimer.current = setTimeout(showNext, 3_000);

        return () => {
            if (showTimer.current) clearTimeout(showTimer.current);
            if (hideTimer.current) clearTimeout(hideTimer.current);
        };
    }, []);

    const variants: Variants = shouldReduceMotion
        ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
        : {
            initial: { opacity: 0, y: 20, scale: 0.95 },
            animate: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { type: "spring", stiffness: 320, damping: 28 }
            },
            exit: {
                opacity: 0,
                y: 10,
                scale: 0.97,
                transition: { duration: 0.25 }
            },
        };

    // Prevent Server-Client Mismatch by returning null until mounted
    if (!hasMounted) return null;

    return (
        <div
            aria-live="polite"
            aria-atomic="true"
            className="fixed bottom-auto top-4 left-1/2 -translate-x-1/2 md:top-auto md:bottom-8 md:left-8 md:translate-x-0 z-50 pointer-events-none"
        >
            <AnimatePresence mode="wait">
                {state.visible && (
                    <motion.div
                        key={`${state.sale.name}-${state.sale.city}`}
                        variants={variants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="flex items-center gap-3 bg-[#1A1A1A]/90 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3 shadow-xl max-w-[300px]"
                    >
                        <span className="relative flex h-2.5 w-2.5 shrink-0">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]" />
                        </span>

                        <p className="text-[13px] leading-snug">
                            <span className="font-bold text-[#F5F5F5]">
                                {state.sale.name} en {state.sale.city}
                            </span>{" "}
                            <span className="text-[#25D366] font-semibold">
                                acaba de activar el plan {state.sale.plan}
                            </span>{" "}
                            <span className="text-[#A3A3A3]">✓</span>
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}