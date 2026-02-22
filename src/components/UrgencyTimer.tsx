"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function UrgencyTimer() {
    const [hasMounted, setHasMounted] = useState(false);
    const [timeLeft, setTimeLeft] = useState(899); // 14:59 minutos
    const [spotsLeft, setSpotsLeft] = useState(12);

    useEffect(() => {
        setHasMounted(true);

        // Cronómetro de cuenta regresiva
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        // Simulación de escasez (alguien compra y bajan los cupos)
        const spotsTimer = setInterval(() => {
            setSpotsLeft((prev) => (prev > 3 ? prev - 1 : prev));
        }, 45000);

        return () => {
            clearInterval(timer);
            clearInterval(spotsTimer);
        };
    }, []);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };

    if (!hasMounted) return null;

    return (
        <section className="px-6 py-8">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-4xl mx-auto bg-[#1A1A1A] border-2 border-dashed border-[#25D366]/30 rounded-3xl p-6 md:p-8 relative overflow-hidden"
            >
                {/* Glow de fondo para atraer atención */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#25D366]/10 blur-[100px]" />

                <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">

                    {/* Texto de Urgencia */}
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                            </span>
                            <span className="text-red-500 font-black text-xs uppercase tracking-widest">
                                Oferta por tiempo limitado
                            </span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-black text-[#F5F5F5] leading-tight mb-2">
                            CONSIGUE TU PRUEBA GRATIS <br />
                            <span className="text-[#25D366]">ANTES DE QUE SE AGOTEN</span>
                        </h2>
                        <p className="text-[#A3A3A3] text-sm">
                            Solo quedan <span className="text-white font-bold">{spotsLeft} accesos</span> disponibles para el Derbi de hoy.
                        </p>
                    </div>

                    {/* El Contador */}
                    <div className="flex items-center gap-4 bg-black/50 px-8 py-4 rounded-2xl border border-white/5">
                        <div className="text-center">
                            <span className="block text-4xl md:text-5xl font-mono font-black text-[#25D366]">
                                {formatTime(timeLeft)}
                            </span>
                            <span className="text-[10px] text-[#A3A3A3] uppercase font-bold tracking-tighter">
                                Minutos Restantes
                            </span>
                        </div>
                    </div>
                </div>

                {/* Barra de Progreso de Cupos */}
                <div className="mt-8">
                    <div className="flex justify-between text-[10px] uppercase font-bold mb-2">
                        <span className="text-[#A3A3A3]">Disponibilidad de Servidor</span>
                        <span className="text-[#25D366]">{Math.round((spotsLeft / 15) * 100)}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-black rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: "100%" }}
                            animate={{ width: `${(spotsLeft / 15) * 100}%` }}
                            className="h-full bg-gradient-to-r from-[#1EBE5D] to-[#25D366]"
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}