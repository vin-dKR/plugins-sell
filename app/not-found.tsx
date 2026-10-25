import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">404</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-stone-950">Plugin not found</h1>
      <p className="mt-3 text-stone-600">This plugin may have moved or is not in the catalog.</p>
      <Link href="/" className="mt-7 rounded-xl bg-emerald-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-800">Browse all plugins</Link>
    </main>
  );
}
