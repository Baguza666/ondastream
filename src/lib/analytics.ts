// Utility to track conversion events in GA4
type GtagFunction = (
    command: string,
    action: string,
    params?: Record<string, unknown>
) => void;

interface CustomWindow extends Window {
    gtag?: GtagFunction;
}

export const trackWhatsAppClick = (location: string, plan?: string) => {
    if (typeof window !== "undefined") {
        const win = window as unknown as CustomWindow;
        if (typeof win.gtag === "function") {
            win.gtag("event", "whatsapp_click", {
                event_category: "Conversion",
                event_label: location,
                plan_type: plan || "General",
            });
        }
    }
};