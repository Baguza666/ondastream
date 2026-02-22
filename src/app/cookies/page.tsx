import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Política de Cookies | OndaStream",
    description: "Información sobre el uso de cookies y tecnologías de seguimiento en OndaStream.",
};

export default function CookiesPage() {
    return (
        <main className="min-h-screen bg-[#0A0A0A] flex flex-col">
            <Navbar />
            <div className="flex-1 max-w-4xl mx-auto px-6 py-32 w-full">
                <h1 className="text-3xl md:text-5xl font-black text-[#F5F5F5] mb-6 uppercase tracking-tight">
                    Política de Cookies
                </h1>
                <p className="text-[#25D366] font-bold mb-12 uppercase tracking-widest text-sm">Última actualización: Febrero 2026</p>

                <div className="space-y-10 text-[#A3A3A3] text-sm md:text-base leading-relaxed">
                    <section>
                        <h2 className="text-[#F5F5F5] font-bold text-xl mb-4">1. ¿Qué son las Cookies?</h2>
                        <p>
                            Una cookie es un pequeño archivo de texto que un sitio web almacena en tu ordenador o dispositivo móvil cuando lo visitas. Facilita la navegación y nos permite entender cómo interactúas con nuestra web para mejorar tu experiencia.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-[#F5F5F5] font-bold text-xl mb-4">2. Tipos de Cookies que Utilizamos</h2>
                        <ul className="list-disc pl-5 space-y-4">
                            <li>
                                <strong className="text-[#F5F5F5]">Cookies Técnicas (Estrictamente Necesarias):</strong> Son esenciales para que la página web funcione correctamente. No requieren consentimiento y no pueden desactivarse en nuestros sistemas.
                            </li>
                            <li>
                                <strong className="text-[#F5F5F5]">Cookies Analíticas (Google Analytics 4):</strong> Utilizamos GA4 para medir el volumen de visitas, las interacciones con nuestros botones de contacto y el rendimiento de la web. Esta información es agregada y, por lo tanto, anónima. Nos ayuda a saber qué apartados son más útiles para nuestros usuarios.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-[#F5F5F5] font-bold text-xl mb-4">3. Cómo Gestionar o Desactivar las Cookies</h2>
                        <p>
                            Puedes configurar tu navegador para que rechace todas las cookies o para que te avise cuando se envíe una. Sin embargo, si no aceptas las cookies, es posible que no puedas utilizar algunas porciones de nuestro sitio web. Puedes gestionar esto desde los ajustes de privacidad de navegadores como Chrome, Safari, Firefox o Edge.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}