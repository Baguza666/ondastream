import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Términos y Condiciones | OndaStream",
    description: "Términos y condiciones de uso del servicio de suscripción de OndaStream.",
};

export default function TerminosPage() {
    return (
        <main className="min-h-screen bg-[#0A0A0A] flex flex-col">
            <Navbar />
            <div className="flex-1 max-w-4xl mx-auto px-6 py-32 w-full">
                <h1 className="text-3xl md:text-5xl font-black text-[#F5F5F5] mb-6 uppercase tracking-tight">
                    Términos y Condiciones
                </h1>
                <p className="text-[#25D366] font-bold mb-12 uppercase tracking-widest text-sm">Última actualización: Febrero 2026</p>

                <div className="space-y-10 text-[#A3A3A3] text-sm md:text-base leading-relaxed">
                    <section>
                        <h2 className="text-[#F5F5F5] font-bold text-xl mb-4">1. Aceptación del Servicio</h2>
                        <p>
                            Al contratar y utilizar los servicios de OndaStream (en adelante, "el Servicio"), el usuario acepta los presentes términos en su totalidad. El Servicio consiste en la provisión de acceso a una plataforma agregadora de contenido multimedia digital para streaming a través de internet.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-[#F5F5F5] font-bold text-xl mb-4">2. Uso Permitido y Restricciones</h2>
                        <p className="mb-3">El acceso a OndaStream es de carácter estrictamente personal y residencial. Queda terminantemente prohibido:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Compartir credenciales de acceso en foros públicos o con terceros fuera del núcleo familiar contratado.</li>
                            <li>La retransmisión pública del contenido en bares, restaurantes, locales comerciales o plataformas de streaming (Twitch, YouTube, etc.).</li>
                            <li>Cualquier intento de ingeniería inversa, reventa o explotación comercial de la señal.</li>
                        </ul>
                        <p className="mt-4 text-red-400">El incumplimiento de estas normas resultará en la suspensión inmediata e irrevocable de la cuenta, sin derecho a reembolso.</p>
                    </section>

                    <section>
                        <h2 className="text-[#F5F5F5] font-bold text-xl mb-4">3. Disponibilidad del Servicio (Uptime)</h2>
                        <p>
                            OndaStream garantiza una infraestructura de alta calidad con un uptime objetivo del 99.9%. Sin embargo, la calidad final del streaming depende directamente de la conexión a internet del usuario, su proveedor de servicios (ISP) y la capacidad de su dispositivo (Smart TV, móvil, etc.). OndaStream no se hace responsable por cortes derivados de fallos en el hardware del cliente o caídas generales de internet.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-[#F5F5F5] font-bold text-xl mb-4">4. Pagos y Política de Reembolso</h2>
                        <p>
                            Debido a la naturaleza digital e inmediata del servicio, y al ofrecer pruebas gratuitas para verificar la compatibilidad y calidad antes de la compra, <strong>no se ofrecen reembolsos una vez activado un plan (Trimestral o Anual)</strong>. El usuario es libre de no renovar su suscripción al finalizar su ciclo sin ninguna penalización.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}