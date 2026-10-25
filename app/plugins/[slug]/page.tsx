import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PaymentModal } from "@/components/payment-modal";
import { SITE_CONFIG, getSiteUrl } from "@/lib/config";
import { formatPrice } from "@/lib/payment";
import { getPluginBySlug, plugins } from "@/lib/plugins";

type PluginPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return plugins.map((plugin) => ({ slug: plugin.slug }));
}

export async function generateMetadata({ params }: PluginPageProps): Promise<Metadata> {
  const { slug } = await params;
  const plugin = getPluginBySlug(slug);

  if (!plugin) return { title: "Plugin not found" };

  const canonical = `/plugins/${plugin.slug}`;
  return {
    title: `${plugin.name} — WordPress Plugin`,
    description: plugin.shortDescription,
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      title: `${plugin.name} — WordPress Plugin`,
      description: plugin.shortDescription,
      siteName: SITE_CONFIG.name,
      images: [{ url: plugin.thumbnail, width: 256, height: 256, alt: `${plugin.name} WordPress plugin icon` }],
    },
    twitter: {
      card: "summary",
      title: `${plugin.name} — WordPress Plugin`,
      description: plugin.shortDescription,
      images: [plugin.thumbnail],
    },
  };
}

export default async function PluginPage({ params }: PluginPageProps) {
  const { slug } = await params;
  const plugin = getPluginBySlug(slug);
  if (!plugin) notFound();

  const pluginUrl = `${getSiteUrl()}/plugins/${plugin.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: plugin.name,
    description: plugin.shortDescription,
    image: plugin.thumbnail,
    url: pluginUrl,
    brand: { "@type": "Brand", name: SITE_CONFIG.name },
    offers: {
      "@type": "Offer",
      price: plugin.price.toFixed(2),
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: pluginUrl,
    },
  };

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Link href="/#plugins" className="inline-flex items-center gap-2 text-sm font-semibold text-stone-600 transition hover:text-emerald-700">
        <span aria-hidden="true">←</span> All plugins
      </Link>

      <article className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-14">
        <div>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-2xl border border-stone-200 bg-white p-5 shadow-sm sm:h-40 sm:w-40">
              <Image src={plugin.thumbnail} alt={`${plugin.name} WordPress plugin icon`} width={128} height={128} priority unoptimized className="h-full w-full object-contain" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">{plugin.category}</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl">{plugin.name}</h1>
              <p className="mt-3 text-lg leading-8 text-stone-600">{plugin.shortDescription}</p>
              {plugin.activeInstalls ? <p className="mt-4 text-sm font-medium text-stone-500">{plugin.activeInstalls} active installations</p> : null}
            </div>
          </div>

          <section className="mt-10 border-t border-stone-200 pt-8" aria-labelledby="about-heading">
            <h2 id="about-heading" className="text-xl font-bold tracking-tight text-stone-950">About this plugin</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-stone-700">{plugin.description}</p>
          </section>

          <section className="mt-10 border-t border-stone-200 pt-8" aria-labelledby="details-heading">
            <h2 id="details-heading" className="text-xl font-bold tracking-tight text-stone-950">Plugin details</h2>
            <dl className="mt-5 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              <div><dt className="text-sm text-stone-500">Category</dt><dd className="mt-1 font-semibold text-stone-900">{plugin.category}</dd></div>
              <div><dt className="text-sm text-stone-500">Author</dt><dd className="mt-1 font-semibold text-stone-900">{plugin.author}</dd></div>
              {plugin.version ? <div><dt className="text-sm text-stone-500">Version</dt><dd className="mt-1 font-semibold text-stone-900">{plugin.version}</dd></div> : null}
              {plugin.lastUpdated ? <div><dt className="text-sm text-stone-500">Last updated</dt><dd className="mt-1 font-semibold text-stone-900">{plugin.lastUpdated}</dd></div> : null}
            </dl>
            <a href={plugin.wordpressUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex text-sm font-semibold text-emerald-700 hover:text-emerald-900">
              View official WordPress.org listing <span className="ml-1" aria-hidden="true">↗</span>
            </a>
          </section>
        </div>

        <aside className="h-fit rounded-2xl border border-stone-200 bg-white p-6 shadow-sm lg:sticky lg:top-6" aria-label="Purchase options">
          <p className="text-sm font-medium text-stone-500">Simple price</p>
          <p className="mt-1 text-4xl font-bold tracking-tight text-stone-950">{formatPrice(plugin.price)}</p>
          <p className="mt-4 text-sm leading-6 text-stone-600">Pay using any UPI app, then send your purchase details to WhatsApp for manual verification and delivery.</p>
          <div className="mt-6"><PaymentModal plugin={plugin} /></div>
          <p className="mt-4 text-xs leading-5 text-stone-500">No account or checkout required. Payment confirmation is handled manually on WhatsApp.</p>
        </aside>
      </article>
    </main>
  );
}
