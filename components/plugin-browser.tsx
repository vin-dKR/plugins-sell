"use client";

import { useMemo, useState } from "react";
import { PluginCard } from "@/components/plugin-card";
import type { Plugin } from "@/lib/plugins";

type PluginBrowserProps = {
  plugins: Plugin[];
  categories: string[];
};

export function PluginBrowser({ plugins, categories }: PluginBrowserProps) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const visiblePlugins = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return plugins.filter((plugin) => {
      const matchesCategory = selectedCategory === "All" || plugin.category === selectedCategory;
      const searchable = `${plugin.name} ${plugin.category} ${plugin.shortDescription} ${plugin.description}`.toLowerCase();
      return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [plugins, query, selectedCategory]);

  return (
    <section id="plugins" className="scroll-mt-20" aria-labelledby="plugins-heading">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-emerald-700"><span className="h-2 w-2 rounded-full bg-emerald-500" /> WordPress plugins</div>
          <h1 id="plugins-heading" className="mt-2 text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl">
            Find the plugin you need.
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-stone-600 sm:text-base sm:leading-7">
            A curated catalog of popular WordPress plugins at simple prices.
          </p>
        </div>
        <p className="text-sm text-stone-500">{visiblePlugins.length} of {plugins.length} plugins</p>
      </div>

      <div className="mb-6 space-y-4 rounded-2xl border border-stone-200 bg-white p-3 shadow-sm sm:p-4">
        <label htmlFor="plugin-search" className="sr-only">Search plugins</label>
        <div className="relative max-w-xl">
          <svg aria-hidden="true" viewBox="0 0 24 24" className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-stone-400" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" />
          </svg>
          <input
            id="plugin-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search plugins, categories, or features..."
            className="h-12 w-full rounded-xl border border-stone-200 bg-stone-50 pl-11 pr-4 text-sm text-stone-950 outline-none transition placeholder:text-stone-400 focus:border-emerald-600 focus:bg-white focus:ring-4 focus:ring-emerald-100"
          />
        </div>
        <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1" aria-label="Plugin categories">
          {["All", ...categories].map((category) => (
            <button
              type="button"
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`shrink-0 rounded-full px-3.5 py-2 text-sm font-medium transition ${selectedCategory === category ? "bg-stone-950 text-white" : "bg-stone-100 text-stone-700 hover:bg-stone-200"}`}
              aria-pressed={selectedCategory === category}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {visiblePlugins.length ? (
        <div className="grid gap-4 min-[430px]:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          {visiblePlugins.map((plugin) => <PluginCard key={plugin.slug} plugin={plugin} />)}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 px-6 py-16 text-center">
          <p className="text-lg font-semibold text-stone-900">No plugins found</p>
          <p className="mt-1 text-sm text-stone-600">Try a different search or category.</p>
        </div>
      )}
    </section>
  );
}
