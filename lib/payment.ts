import type { Plugin } from "@/lib/plugins";
import { SITE_CONFIG } from "@/lib/config";

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: Number.isInteger(price) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(price);
}

export function getUpiUri(plugin: Pick<Plugin, "price">) {
  const params = new URLSearchParams({
    pa: SITE_CONFIG.upiId,
    pn: SITE_CONFIG.upiName,
    am: plugin.price.toFixed(2),
    cu: "INR",
  });

  return `upi://pay?${params.toString()}`;
}
