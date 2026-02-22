// Utility to track conversion events in GA4
export const trackWhatsAppClick = (location: string, plan?: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag('event', 'whatsapp_click', {
            'event_category': 'Conversion',
            'event_label': location,
            'plan_type': plan || 'General',
        });
    }
};