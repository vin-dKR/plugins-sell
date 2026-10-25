export interface Plugin {
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  thumbnail: string;
  image?: string;
  wordpressUrl: string;
  category: PluginCategory;
  author: string;
  version?: string;
  rating?: number;
  activeInstalls?: string;
  lastUpdated?: string;
}

export type PluginCategory =
  | "Analytics"
  | "Backup"
  | "Ecommerce"
  | "Forms"
  | "Marketing"
  | "Page Builder"
  | "Performance"
  | "SEO"
  | "Security"
  | "Utility";

const wordpressPluginUrl = (slug: string) => `https://wordpress.org/plugins/${slug}/`;
const wordpressIcon = (slug: string) => `https://ps.w.org/${slug}/assets/icon-256x256.png`;

type PluginSeed = Omit<Plugin, "thumbnail" | "wordpressUrl">;

const seedPlugins: PluginSeed[] = [
  { slug: "elementor", name: "Elementor Website Builder", shortDescription: "Drag-and-drop website builder for WordPress.", description: "Elementor is a visual website builder that lets you design pages and complete WordPress sites with a live, drag-and-drop editor.", price: 299.98, category: "Page Builder", author: "Elementor.com", activeInstalls: "10+ million" },
  { slug: "woocommerce", name: "WooCommerce", shortDescription: "Open-source ecommerce for WordPress.", description: "WooCommerce adds a flexible, open-source ecommerce platform to WordPress so you can sell products, subscriptions, downloads, and more.", price: 399.98, category: "Ecommerce", author: "Automattic", activeInstalls: "7+ million" },
  { slug: "wordpress-seo", name: "Yoast SEO", shortDescription: "SEO tools and on-page optimization for WordPress.", description: "Yoast SEO helps you optimize content, technical SEO, and site visibility with practical checks and search appearance controls.", price: 349.92, category: "SEO", author: "Team Yoast", activeInstalls: "10+ million" },
  { slug: "contact-form-7", name: "Contact Form 7", shortDescription: "Simple and flexible contact form management.", description: "Contact Form 7 is a long-standing WordPress form plugin for creating and managing multiple contact forms.", price: 99.92, category: "Forms", author: "Takayuki Miyoshi", activeInstalls: "10+ million" },
  { slug: "wpforms-lite", name: "WPForms", shortDescription: "Beginner-friendly drag-and-drop form builder.", description: "WPForms makes it easy to create contact forms, feedback forms, subscription forms, and other WordPress forms.", price: 249.92, category: "Forms", author: "WPForms", activeInstalls: "6+ million" },
  { slug: "seo-by-rank-math", name: "Rank Math SEO", shortDescription: "SEO toolkit with content and schema tools.", description: "Rank Math provides WordPress SEO tools for optimizing posts, metadata, structured data, sitemaps, and more.", price: 299.98, category: "SEO", author: "Rank Math", activeInstalls: "3+ million" },
  { slug: "litespeed-cache", name: "LiteSpeed Cache", shortDescription: "All-in-one site acceleration and optimization.", description: "LiteSpeed Cache combines page caching with image, database, CSS, and JavaScript optimization features for WordPress sites.", price: 149.92, category: "Performance", author: "LiteSpeed Technologies", activeInstalls: "7+ million" },
  { slug: "wordfence", name: "Wordfence Security", shortDescription: "Firewall, malware scanning, and login protection.", description: "Wordfence is a WordPress security plugin with an endpoint firewall, malware scanner, and tools to protect login pages.", price: 399.98, category: "Security", author: "Wordfence", activeInstalls: "5+ million" },
  { slug: "updraftplus", name: "UpdraftPlus", shortDescription: "Backup and restore WordPress sites.", description: "UpdraftPlus helps you create scheduled WordPress backups and restore files and databases when you need them.", price: 299.98, category: "Backup", author: "UpdraftPlus.Com, DavidAnderson", activeInstalls: "3+ million" },
  { slug: "really-simple-ssl", name: "Really Simple Security", shortDescription: "SSL, security hardening, and login protection.", description: "Really Simple Security helps WordPress sites move to HTTPS and includes practical security and login hardening features.", price: 199.98, category: "Security", author: "Really Simple Plugins", activeInstalls: "5+ million" },
  { slug: "advanced-custom-fields", name: "Advanced Custom Fields", shortDescription: "Custom fields for WordPress content and templates.", description: "Advanced Custom Fields gives WordPress developers an approachable way to add and manage custom fields for posts, pages, users, and more.", price: 499.98, category: "Utility", author: "WP Engine", activeInstalls: "2+ million" },
  { slug: "redirection", name: "Redirection", shortDescription: "Manage 301 redirects and monitor 404 errors.", description: "Redirection lets you manage redirects, track 404 errors, and tidy up URL changes without editing server configuration.", price: 129.98, category: "SEO", author: "John Godley", activeInstalls: "2+ million" },
  { slug: "wp-smushit", name: "Smush", shortDescription: "Image compression and optimization for WordPress.", description: "Smush optimizes images with compression, lazy loading, and image delivery controls to help keep pages lightweight.", price: 249.92, category: "Performance", author: "WPMU DEV", activeInstalls: "1+ million" },
  { slug: "google-analytics-for-wordpress", name: "MonsterInsights", shortDescription: "Google Analytics dashboard for WordPress.", description: "MonsterInsights connects Google Analytics to WordPress and presents useful reporting data within the admin dashboard.", price: 449.98, category: "Analytics", author: "MonsterInsights", activeInstalls: "3+ million" },
  { slug: "wp-mail-smtp", name: "WP Mail SMTP", shortDescription: "Reliable WordPress email delivery via SMTP.", description: "WP Mail SMTP helps configure WordPress email with authenticated mailers and SMTP services so important messages are delivered reliably.", price: 199.98, category: "Utility", author: "WP Mail SMTP", activeInstalls: "4+ million" },
  { slug: "classic-editor", name: "Classic Editor", shortDescription: "Restore the classic WordPress editor.", description: "Classic Editor restores the former WordPress editor and familiar editing workflows for users who prefer it.", price: 99.92, category: "Utility", author: "WordPress Contributors", activeInstalls: "10+ million" },
  { slug: "duplicate-post", name: "Yoast Duplicate Post", shortDescription: "Clone posts, pages, and custom content.", description: "Yoast Duplicate Post lets you clone content and use rewrite-and-republish workflows for updating live posts safely.", price: 129.98, category: "Utility", author: "Enrico Battocchi & Team Yoast", activeInstalls: "4+ million" },
  { slug: "all-in-one-wp-migration", name: "All-in-One WP Migration", shortDescription: "Export, import, and migrate WordPress sites.", description: "All-in-One WP Migration is a simple migration tool for exporting and importing WordPress sites, databases, media, and plugins.", price: 349.92, category: "Backup", author: "ServMask", activeInstalls: "5+ million" },
  { slug: "w3-total-cache", name: "W3 Total Cache", shortDescription: "Improve performance with caching and optimization.", description: "W3 Total Cache helps improve WordPress performance through caching, minification, content delivery, and related optimization features.", price: 199.98, category: "Performance", author: "BoldGrid", activeInstalls: "1+ million" },
  { slug: "wp-super-cache", name: "WP Super Cache", shortDescription: "Fast static HTML caching for WordPress.", description: "WP Super Cache creates static HTML files for WordPress pages to reduce PHP processing and improve page delivery.", price: 149.92, category: "Performance", author: "Automattic", activeInstalls: "2+ million" },
  { slug: "autoptimize", name: "Autoptimize", shortDescription: "Optimize CSS, JavaScript, HTML, and images.", description: "Autoptimize improves front-end performance by aggregating and optimizing code, plus optional image and font optimization integrations.", price: 149.92, category: "Performance", author: "Frank Goossens", activeInstalls: "1+ million" },
  { slug: "wp-optimize", name: "WP-Optimize", shortDescription: "Cache, clean databases, and optimize images.", description: "WP-Optimize brings page caching, database cleanup, and image compression into one WordPress performance plugin.", price: 249.92, category: "Performance", author: "TeamUpdraft, DavidAnderson", activeInstalls: "1+ million" },
  { slug: "wordpress-importer", name: "WordPress Importer", shortDescription: "Import WordPress posts, pages, and comments.", description: "WordPress Importer imports content from a WordPress export file, including posts, pages, custom post types, comments, and users.", price: 99.92, category: "Utility", author: "wordpressdotorg", activeInstalls: "200,000+" },
  { slug: "insert-headers-and-footers", name: "WPCode", shortDescription: "Add code snippets and header/footer scripts.", description: "WPCode lets you add custom code snippets, tracking scripts, and header or footer code to WordPress without editing theme files.", price: 199.98, category: "Utility", author: "WPCode", activeInstalls: "2+ million" },
  { slug: "simple-301-redirects", name: "Simple 301 Redirects", shortDescription: "Create straightforward 301 redirects.", description: "Simple 301 Redirects provides a lightweight interface for mapping old URLs to new locations on a WordPress site.", price: 99.92, category: "SEO", author: "WPDeveloper", activeInstalls: "300,000+" },
  { slug: "easy-digital-downloads", name: "Easy Digital Downloads", shortDescription: "Sell digital products with WordPress.", description: "Easy Digital Downloads is an ecommerce platform focused on selling digital products, software, subscriptions, and downloads.", price: 499.98, category: "Ecommerce", author: "Easy Digital Downloads", activeInstalls: "50,000+" },
  { slug: "woocommerce-gateway-stripe", name: "WooCommerce Stripe Payment Gateway", shortDescription: "Accept Stripe payments in WooCommerce.", description: "This official WooCommerce extension connects Stripe payment methods to a WooCommerce store.", price: 399.98, category: "Ecommerce", author: "WooCommerce", activeInstalls: "900,000+" },
  { slug: "woocommerce-payments", name: "WooPayments", shortDescription: "Integrated payments for WooCommerce stores.", description: "WooPayments provides a payment solution built for WooCommerce with card payments, local methods, and transaction management.", price: 449.98, category: "Ecommerce", author: "Automattic", activeInstalls: "900,000+" },
  { slug: "mailchimp-for-woocommerce", name: "Mailchimp for WooCommerce", shortDescription: "Sync WooCommerce data with Mailchimp.", description: "Mailchimp for WooCommerce connects store and customer data with Mailchimp to support ecommerce email marketing.", price: 249.92, category: "Marketing", author: "Mailchimp", activeInstalls: "20,000+" },
  { slug: "ti-woocommerce-wishlist", name: "TI WooCommerce Wishlist", shortDescription: "Let shoppers save products to a wishlist.", description: "TI WooCommerce Wishlist adds wishlist features that allow customers to save products and share lists from a WooCommerce store.", price: 199.98, category: "Ecommerce", author: "TemplateInvaders", activeInstalls: "100,000+" },
  { slug: "all-in-one-seo-pack", name: "All in One SEO", shortDescription: "WordPress SEO and website optimization tools.", description: "All in One SEO includes SEO analysis, XML sitemaps, schema support, social metadata, and other WordPress SEO features.", price: 349.92, category: "SEO", author: "All in One SEO Team", activeInstalls: "3+ million" },
  { slug: "google-site-kit", name: "Site Kit by Google", shortDescription: "Official Google tools dashboard for WordPress.", description: "Site Kit is Google’s official WordPress plugin for connecting Search Console, Analytics, AdSense, and PageSpeed Insights.", price: 299.98, category: "Analytics", author: "Google", activeInstalls: "5+ million" },
  { slug: "shortpixel-image-optimiser", name: "ShortPixel Image Optimizer", shortDescription: "Compress and optimize WordPress media.", description: "ShortPixel optimizes media library images and documents while supporting modern image formats and image compression choices.", price: 249.92, category: "Performance", author: "ShortPixel", activeInstalls: "300,000+" },
  { slug: "imagify", name: "Imagify", shortDescription: "Image optimization for faster websites.", description: "Imagify compresses and resizes WordPress images, with options for WebP and modern image optimization workflows.", price: 199.98, category: "Performance", author: "Imagify – Optimize Images & Convert WebP", activeInstalls: "800,000+" },
  { slug: "broken-link-checker", name: "Broken Link Checker", shortDescription: "Find and monitor broken links on WordPress.", description: "Broken Link Checker scans a WordPress site for broken links and helps you identify links that need to be corrected or removed.", price: 149.92, category: "SEO", author: "WPMU DEV", activeInstalls: "700,000+" },
  { slug: "akismet", name: "Akismet Anti-spam", shortDescription: "Spam protection for comments and forms.", description: "Akismet filters comment and form spam by checking submissions against its global spam-protection service.", price: 149.92, category: "Security", author: "Automattic", activeInstalls: "5+ million" },
  { slug: "duplicate-page", name: "Duplicate Page", shortDescription: "Duplicate posts, pages, and custom posts.", description: "Duplicate Page provides a quick way to clone WordPress posts, pages, and custom post types with their content and settings.", price: 99.92, category: "Utility", author: "mndpsingh287", activeInstalls: "3+ million" },
  { slug: "wp-fastest-cache", name: "WP Fastest Cache", shortDescription: "Caching and basic optimization for WordPress.", description: "WP Fastest Cache creates cached pages to improve load times and includes practical options for minification and cache management.", price: 199.98, category: "Performance", author: "Emre Vona", activeInstalls: "1+ million" },
  { slug: "disable-comments", name: "Disable Comments", shortDescription: "Turn off comments site-wide or by content type.", description: "Disable Comments lets you globally disable comments and remove comment-related features from selected WordPress content types.", price: 99.92, category: "Utility", author: "WPDeveloper", activeInstalls: "1+ million" },
  { slug: "tablepress", name: "TablePress", shortDescription: "Create and manage tables in WordPress.", description: "TablePress makes it possible to create, import, edit, and embed tables on WordPress posts and pages without code.", price: 249.92, category: "Utility", author: "Tobias Bäthge", activeInstalls: "700,000+" },
  { slug: "webp-express", name: "WebP Express", shortDescription: "Serve WebP images to supported browsers.", description: "WebP Express helps serve WebP images to compatible browsers while retaining fallbacks for other visitors.", price: 129.98, category: "Performance", author: "Bjorn Rosell", activeInstalls: "300,000+" },
  { slug: "popup-maker", name: "Popup Maker", shortDescription: "Build popups, modals, and opt-in forms.", description: "Popup Maker helps you create responsive popups, slide-ins, announcements, and conversion-focused campaigns in WordPress.", price: 349.92, category: "Marketing", author: "Popup Maker", activeInstalls: "700,000+" },
  { slug: "woocommerce-pdf-invoices-packing-slips", name: "WooCommerce PDF Invoices & Packing Slips", shortDescription: "Attach PDF invoices and packing slips to WooCommerce orders.", description: "This WooCommerce extension creates PDF invoices and packing slips that can be attached to order emails and downloaded by customers.", price: 299.98, category: "Ecommerce", author: "WP Overnight", activeInstalls: "300,000+" },
  { slug: "translatepress-multilingual", name: "TranslatePress", shortDescription: "Translate WordPress sites from the front end.", description: "TranslatePress provides a visual way to translate WordPress content, themes, and plugins directly from the front end.", price: 399.98, category: "Marketing", author: "Cozmoslabs, Razvan Mocanu", activeInstalls: "300,000+" },
  { slug: "polylang", name: "Polylang", shortDescription: "Create a multilingual WordPress website.", description: "Polylang allows you to create and manage multilingual WordPress content, including posts, pages, menus, and categories.", price: 299.98, category: "Marketing", author: "WP SYNTEX", activeInstalls: "700,000+" },
  { slug: "ultimate-member", name: "Ultimate Member", shortDescription: "User profiles, memberships, and community features.", description: "Ultimate Member adds user registration, profiles, directories, account pages, and membership features to WordPress.", price: 499.98, category: "Utility", author: "Ultimate Member", activeInstalls: "200,000+" },
  { slug: "wpdiscuz", name: "wpDiscuz", shortDescription: "Advanced, real-time WordPress comments.", description: "wpDiscuz enhances WordPress comments with live updates, comment forms, voting, and engagement-oriented discussion features.", price: 199.98, category: "Utility", author: "gVectors Team", activeInstalls: "100,000+" },
  { slug: "cookie-law-info", name: "GDPR Cookie Consent", shortDescription: "Cookie consent and privacy compliance tools.", description: "GDPR Cookie Consent helps create configurable cookie notices, consent banners, and privacy controls for WordPress sites.", price: 249.92, category: "Security", author: "WebToffee", activeInstalls: "1+ million" },
  { slug: "regenerate-thumbnails", name: "Regenerate Thumbnails", shortDescription: "Regenerate media thumbnails after size changes.", description: "Regenerate Thumbnails recreates image thumbnails after you change WordPress media dimensions or install a new theme.", price: 99.92, category: "Utility", author: "Alex Mills (Viper007Bond)", activeInstalls: "1+ million" },
  { slug: "better-search-replace", name: "Better Search Replace", shortDescription: "Run search and replace operations on a WordPress database.", description: "Better Search Replace helps safely search and replace database values, which is especially useful after site migrations or domain changes.", price: 149.92, category: "Utility", author: "WP Engine", activeInstalls: "1+ million" },
];

export const plugins: Plugin[] = seedPlugins.map((plugin) => ({
  ...plugin,
  thumbnail: wordpressIcon(plugin.slug),
  wordpressUrl: wordpressPluginUrl(plugin.slug),
}));

export const pluginCategories = [...new Set(plugins.map((plugin) => plugin.category))].sort();

export function getPluginBySlug(slug: string) {
  return plugins.find((plugin) => plugin.slug === slug);
}
