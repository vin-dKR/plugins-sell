# PluginStore

A simple static WordPress plugin catalog built with Next.js, TypeScript, and Tailwind CSS. It uses UPI QR payments and sends customers to WhatsApp for manual payment verification and fulfillment. There is no checkout, database, authentication, or payment-gateway integration.

## Run locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## Configuration

Update the single configuration file at `lib/config.ts` before deployment:

- `url` — your production domain, used for canonicals, sitemap entries, structured data, and fallback purchase links.
- `upiId` and `upiName` — payment destination and UPI display name.
- `whatsappNumber` — the WhatsApp destination number in international digits-only format.

The catalog is static in `lib/plugins.ts`. Every plugin route is pre-generated, has page-specific metadata, and is included in `sitemap.xml`.

## Validate

```bash
npx tsc --noEmit
npm run lint
npx next build --webpack
```

`next build` defaults to Turbopack in this Next.js version. In some restricted local environments its CSS worker cannot open the temporary local port it needs; the documented webpack build command above is an equivalent production validation fallback.
