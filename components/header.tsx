import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/90 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-stone-950" aria-label="PluginStore home">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-stone-950 text-sm font-black text-white shadow-sm">P</span>
          <span>Plugin<span className="text-emerald-600">Store</span></span>
        </Link>
        <div className="flex items-center gap-3">
          <span className="hidden rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800 sm:inline">100 plugins</span>
          <Link href="/#plugins" className="rounded-lg px-2.5 py-2 text-sm font-semibold text-stone-700 transition-colors hover:bg-stone-100 hover:text-stone-950">
            Browse
          </Link>
        </div>
      </div>
    </header>
  );
}
