/**
 * Generates a localized, URL-encoded WhatsApp deep link.
 * @param phone - The seller's phone number including country code (e.g., "+212638108046")
 * @param planName - The name of the plan the user clicked
 * @param price - The price of the plan
 * @returns The fully formatted wa.me URL
 */
export const DEFAULT_WHATSAPP_NUMBER = "+212638108046";

export const generateWhatsAppLink = (
    phone: string,
    planName: string,
    price: number
): string => {
    // Sanitize phone number (strip '+', spaces, dashes, etc. for wa.me URL)
    const targetPhone = (phone || DEFAULT_WHATSAPP_NUMBER).replace(/\D/g, "");

    // Base WhatsApp API URL
    const baseUrl = `https://wa.me/${targetPhone}`;

    // Localized Spanish message matching the 4P strategy
    let rawMessage = "";

    if (planName.toLowerCase() === "prueba gratis") {
        rawMessage = `¡Hola! Estoy en la web y quiero pedir mi Prueba Gratis de 2 horas. ¿Podemos activarla?`;
    } else {
        rawMessage = `¡Hola! Estoy interesado en el plan ${planName} por ${price}€. ¿Me ayudas a activarlo?`;
    }

    // Encode the string to handle spaces, accents (e.g., '€', '¡', '¿')
    const encodedMessage = encodeURIComponent(rawMessage);

    return `${baseUrl}?text=${encodedMessage}`;
};