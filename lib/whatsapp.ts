import type { Plugin } from "@/lib/plugins";
import { SITE_CONFIG, getSiteUrl } from "@/lib/config";
import { formatPrice } from "@/lib/payment";

export function getPluginPageUrl(slug: string, origin?: string) {
  const siteUrl = (origin || getSiteUrl()).replace(/\/$/, "");
  return `${siteUrl}/plugins/${slug}`;
}

export function getWhatsAppUrl(plugin: Pick<Plugin, "name" | "slug" | "price">, origin?: string) {
  const pluginUrl = getPluginPageUrl(plugin.slug, origin);
  const message = [
    `Hi, I have bought the ${plugin.name} plugin.`,
    "",
    `Plugin: ${plugin.name}`,
    `Price: ${formatPrice(plugin.price)}`,
    `Plugin link: ${pluginUrl}`,
    "",
    "I have completed the payment. Please verify it and provide the plugin.",
  ].join("\n");

  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
