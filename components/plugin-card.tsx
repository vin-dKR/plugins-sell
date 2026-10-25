import Image from "next/image";
import Link from "next/link";
import type { Plugin } from "@/lib/plugins";
import { formatPrice } from "@/lib/payment";

export function PluginCard({ plugin }: { plugin: Plugin }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-stone-300 hover:shadow-lg hover:shadow-stone-200/60">
      <div className="flex aspect-[16/9] items-center justify-center border-b border-stone-100 bg-stone-50 p-7">
        <Image
          src={plugin.thumbnail}
          alt={`${plugin.name} WordPress plugin icon`}
          width={128}
          height={128}
          className="h-24 w-24 rounded-xl object-contain shadow-sm"
          unoptimized
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800">
            {plugin.category}
          </span>
          {plugin.activeInstalls ? <span className="text-xs text-stone-500">{plugin.activeInstalls}</span> : null}
        </div>
        <h2 className="text-lg font-bold tracking-tight text-stone-950">{plugin.name}</h2>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-stone-600">{plugin.shortDescription}</p>
        <div className="mt-auto flex items-end justify-between gap-4 pt-6">
          <p className="text-lg font-bold text-stone-950">{formatPrice(plugin.price)}</p>
          <Link
            href={`/plugins/${plugin.slug}`}
            className="text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-900"
            aria-label={`View ${plugin.name}`}
          >
            View plugin <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
