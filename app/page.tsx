import { PluginBrowser } from "@/components/plugin-browser";
import { pluginCategories, plugins } from "@/lib/plugins";

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-12 lg:px-8">
      <PluginBrowser plugins={plugins} categories={pluginCategories} />
    </main>
  );
}
