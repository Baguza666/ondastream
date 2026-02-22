"use client";

import { motion } from "framer-motion";

const features = [
    {
        title: "Cero Cortes",
        description:
            "Nuestra red de servidores privados está balanceada dinámicamente para que no pierdas ni un segundo de acción, incluso en eventos masivos.",
    },
    {
        title: "Catálogo Infinito",
        description:
            "Olvídate de pagar 5 plataformas distintas. Aquí tienes Netflix, HBO, Disney, DAZN y Movistar en una sola App centralizada.",
    },
    {
        title: "Soporte Humano",
        description:
            "Sin bots. Si tienes un problema, nos escribes por WhatsApp y un técnico real te ayuda a configurar tu dispositivo en minutos.",
    },
];

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function FeaturesMatrix() {
    return (
        <section id="deportes" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-24"
                >
                    <h3 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">
                        Por qué elegirnos
                    </h3>
                    <div className="text-4xl md:text-6xl font-black max-w-3xl leading-none">
                        LA SEÑAL QUE NUNCA FALLA, EN CUALQUIER LUGAR.
                    </div>
                </motion.div>

                {/* Features grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid md:grid-cols-3 gap-16"
                >
                    {features.map((feature) => (
                        <motion.div
                            key={feature.title}
                            variants={itemVariants}
                            className="group feature-bar"
                        >
                            {/* Animated progress bar */}
                            <div className="h-1 bg-white/10 w-full mb-8 overflow-hidden">
                                <div className="bar-fill h-full bg-primary" />
                            </div>
                            <h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
                            <p className="text-text-secondary leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
