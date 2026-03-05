import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-background-dark py-20 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-primary">
                        <span className="material-symbols-outlined text-[28px]">
                            waves
                        </span>
                    </div>
                    <span className="font-black text-2xl md:text-3xl tracking-tighter uppercase italic text-white [text-shadow:_0_2px_10px_rgb(255_255_255_/_20%)]">
                        OndStream
                    </span>
                </div>

                {/* Legal links: Now pointing to our detailed pages */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-xs font-bold text-text-secondary uppercase tracking-[0.2em]">
                    <Link href="/terminos" className="hover:text-primary transition-colors">
                        Términos
                    </Link>
                    <Link href="/privacidad" className="hover:text-primary transition-colors">
                        Privacidad
                    </Link>
                    <Link href="/cookies" className="hover:text-primary transition-colors">
                        Cookies
                    </Link>
                </div>

                {/* Copyright */}
                <div className="text-[10px] text-text-secondary font-medium">
                    © 2026 OndStream España.
                </div>
            </div>
        </footer>
    );
}