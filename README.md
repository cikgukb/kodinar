# Koperasi Kodinar — Laman Profil

Laman statik (HTML/CSS/JS) di `public/`, deploy sebagai Cloudflare Worker (static assets).

## Deploy
- **Auto:** tambah GitHub secrets `CLOUDFLARE_API_TOKEN` & `CLOUDFLARE_ACCOUNT_ID`, push ke `main`.
- **Manual:** `npx wrangler login && npx wrangler deploy`

## Perlu dikemas kini
- Nombor WhatsApp di `public/main.js` (`WHATSAPP`)
