import type { Metadata } from "next";
import { Header } from "@/components/header";
import { SITE_CONFIG, getSiteUrl } from "@/lib/config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "PluginStore — WordPress Plugins",
    template: "%s | PluginStore",
  },
  description: SITE_CONFIG.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_CONFIG.name,
    title: "PluginStore — WordPress Plugins",
    description: SITE_CONFIG.description,
    url: "/",
  },
  twitter: {
    card: "summary",
    title: "PluginStore — WordPress Plugins",
    description: SITE_CONFIG.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-stone-50 font-sans text-stone-950 antialiased">
        <Header />
        <div className="flex min-h-[calc(100vh-64px)] flex-col">
          <div className="flex-1">{children}</div>
          <footer className="border-t border-stone-200 bg-white">
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs leading-5 text-stone-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
              <p>© {SITE_CONFIG.name}. Plugin delivery follows manual payment verification.</p>
              <p>WordPress is a trademark of the WordPress Foundation.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
