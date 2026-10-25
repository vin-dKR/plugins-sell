export const SITE_CONFIG = {
  name: "PluginStore",
  description: "A straightforward catalog of popular WordPress plugins.",
  // Change this to your production domain before deployment.
  url: "https://yourdomain.com",
  upiId: "9142992036@mbkns",
  upiName: "PluginStore",
  // Digits only, including country code. Change this value to update all WhatsApp links.
  whatsappNumber: "9142992036",
} as const;

export function getSiteUrl() {
  return SITE_CONFIG.url.replace(/\/$/, "");
}
