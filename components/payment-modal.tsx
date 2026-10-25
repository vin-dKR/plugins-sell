"use client";

import { useEffect, useId, useState } from "react";
import Image from "next/image";
import type { Plugin } from "@/lib/plugins";
import { SITE_CONFIG } from "@/lib/config";
import { formatPrice, getUpiUri } from "@/lib/payment";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function PaymentModal({ plugin }: { plugin: Plugin }) {
  const [isOpen, setIsOpen] = useState(false);
  const headingId = useId();
  const upiUri = getUpiUri(plugin);
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=340x340&format=png&margin=12&data=${encodeURIComponent(upiUri)}`;

  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  const continueToWhatsApp = () => {
    const origin = window.location.origin;
    window.location.assign(getWhatsAppUrl(plugin, origin));
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-emerald-700 px-5 text-sm font-bold text-white transition hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-200 sm:w-auto"
      >
        Buy plugin
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-stone-950/45 p-3 backdrop-blur-sm sm:items-center sm:p-6" role="presentation" onMouseDown={() => setIsOpen(false)}>
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby={headingId}
            className="max-h-[92dvh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl sm:p-7"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-emerald-700">Manual payment</p>
                <h2 id={headingId} className="mt-1 text-xl font-bold tracking-tight text-stone-950">Pay for {plugin.name}</h2>
              </div>
              <button type="button" onClick={() => setIsOpen(false)} className="-mr-2 -mt-2 rounded-lg p-2 text-stone-500 hover:bg-stone-100 hover:text-stone-900" aria-label="Close payment dialog">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 6 12 12M18 6 6 18" /></svg>
              </button>
            </div>

            <div className="mt-5 rounded-xl bg-stone-50 p-4 text-center">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-stone-500">Amount</p>
              <p className="mt-1 text-3xl font-bold tracking-tight text-stone-950">{formatPrice(plugin.price)}</p>
              <p className="mt-4 text-sm leading-6 text-stone-600">Scan this QR code using any UPI app.</p>
              <div className="mx-auto mt-3 w-full max-w-[260px] rounded-xl bg-white p-3 shadow-sm ring-1 ring-stone-200">
                <Image src={qrCodeUrl} alt={`UPI payment QR code for ${plugin.name}, amount ${formatPrice(plugin.price)}`} width={260} height={260} unoptimized className="h-auto w-full" priority />
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between rounded-xl border border-stone-200 px-4 py-3">
              <div><p className="text-xs font-medium text-stone-500">UPI ID</p><p className="mt-0.5 text-sm font-bold text-stone-900">{SITE_CONFIG.upiId}</p></div>
              <a href={upiUri} className="rounded-lg bg-stone-100 px-3 py-2 text-xs font-bold text-stone-800 transition hover:bg-stone-200">Pay using UPI</a>
            </div>

            <p className="mt-4 text-sm leading-6 text-stone-600">After completing the payment, tap “I&apos;ve Paid” and send the requested message on WhatsApp. Your payment will be manually verified before the plugin is delivered.</p>
            <button type="button" onClick={continueToWhatsApp} className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 text-sm font-bold text-white transition hover:bg-[#1fb557] focus:outline-none focus:ring-4 focus:ring-green-100">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M20.5 3.5A11.9 11.9 0 0 0 12.05 0C5.48 0 .15 5.33.15 11.91c0 2.1.55 4.15 1.6 5.95L.05 24l6.32-1.66a11.9 11.9 0 0 0 5.68 1.44h.01c6.57 0 11.9-5.33 11.9-11.91 0-3.18-1.24-6.16-3.46-8.37ZM12.05 21.77c-1.79 0-3.54-.48-5.06-1.38l-.36-.21-3.75.98 1-3.65-.24-.38a9.85 9.85 0 0 1-1.51-5.23c0-5.45 4.43-9.88 9.89-9.88 2.64 0 5.12 1.03 6.98 2.9a9.81 9.81 0 0 1 2.89 6.98c0 5.45-4.43 9.89-9.85 9.89Zm5.42-7.41c-.3-.15-1.79-.88-2.07-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.22-.65.08-1.78-.89-2.95-1.59-4.12-3.6-.31-.54.31-.5.89-1.66.1-.2.05-.37-.02-.52-.08-.15-.68-1.64-.93-2.25-.25-.59-.5-.51-.68-.52h-.58c-.2 0-.52.08-.8.37-.27.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.13 3.25 5.16 4.56.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.79-.74 2.04-1.46.25-.71.25-1.32.17-1.45-.07-.12-.27-.2-.57-.35Z" /></svg>
              I&apos;ve Paid — Continue to WhatsApp
            </button>
          </section>
        </div>
      ) : null}
    </>
  );
}
