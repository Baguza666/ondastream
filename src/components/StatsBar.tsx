const stats = [
    { value: "99.9%", label: "Uptime Garantizado" },
    { value: "+10k", label: "Canales en Vivo" },
    { value: "4K", label: "Resolución Real" },
    { value: "24/7", label: "Soporte VIP" },
];

export default function StatsBar() {
    return (
        <section className="border-y border-white/5 py-12 bg-white/5">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                        <div className="text-3xl font-black text-white">{stat.value}</div>
                        <div className="text-[10px] font-bold text-text-secondary uppercase tracking-widest mt-1">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
