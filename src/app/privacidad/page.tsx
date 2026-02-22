import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Política de Privacidad | OndaStream",
    description: "Conoce cómo protegemos tus datos personales y tu privacidad en OndaStream bajo el marco del RGPD.",
};

export default function PrivacidadPage() {
    return (
        <main className="min-h-screen bg-[#0A0A0A] flex flex-col">
            <Navbar />
            <div className="flex-1 max-w-4xl mx-auto px-6 py-32 w-full">
                <h1 className="text-3xl md:text-5xl font-black text-[#F5F5F5] mb-6 uppercase tracking-tight">
                    Política de Privacidad
                </h1>
                <p className="text-[#25D366] font-bold mb-12 uppercase tracking-widest text-sm">Última actualización: Febrero 2026</p>

                <div className="space-y-10 text-[#A3A3A3] text-sm md:text-base leading-relaxed">
                    <section>
                        <h2 className="text-[#F5F5F5] font-bold text-xl mb-4">1. Identidad del Responsable</h2>
                        <p>
                            En cumplimiento con el Reglamento General de Protección de Datos (RGPD) de la Unión Europea, te informamos que OndaStream es el responsable del tratamiento de los datos personales que se recopilen a través de esta plataforma y de nuestros canales de atención al cliente (WhatsApp).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-[#F5F5F5] font-bold text-xl mb-4">2. Datos que Recopilamos y Finalidad</h2>
                        <p className="mb-3">Recopilamos la información estrictamente necesaria para la prestación del servicio:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Datos de Contacto:</strong> Tu número de teléfono (vía WhatsApp) para el envío de credenciales, activación del servicio y soporte técnico 24/7.</li>
                            <li><strong>Datos de Conexión:</strong> Direcciones IP e información del dispositivo únicamente por motivos de seguridad, prevención de fraude (como el uso simultáneo no autorizado) y optimización del enrutamiento de la señal 4K.</li>
                            <li><strong>Datos de Navegación:</strong> Métricas anónimas mediante Google Analytics 4 para mejorar la experiencia de usuario en nuestra web.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-[#F5F5F5] font-bold text-xl mb-4">3. Seguridad y Retención de Datos</h2>
                        <p>
                            OndaStream no procesa ni almacena datos bancarios o de tarjetas de crédito en sus servidores. Todas las transacciones se realizan mediante pasarelas externas seguras. Tus datos de contacto se cifran y se conservan únicamente mientras mantengas una suscripción activa con nosotros, o hasta que solicites su eliminación.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-[#F5F5F5] font-bold text-xl mb-4">4. Derechos del Usuario (Derechos ARCO)</h2>
                        <p>
                            Tienes derecho a Acceder, Rectificar, Cancelar u Oponerte al tratamiento de tus datos en cualquier momento. Puedes ejercer estos derechos enviando un mensaje directo a nuestro equipo de soporte a través de nuestro canal oficial de WhatsApp, y tu solicitud será procesada en un plazo máximo de 48 horas.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}