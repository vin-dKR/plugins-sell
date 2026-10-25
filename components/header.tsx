import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-stone-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-bold tracking-tight text-stone-950" aria-label="PluginStore home">
          Plugin<span className="text-emerald-600">Store</span>
        </Link>
        <Link href="/#plugins" className="text-sm font-medium text-stone-600 transition-colors hover:text-stone-950">
          Plugins
        </Link>
      </div>
    </header>
  );
}
