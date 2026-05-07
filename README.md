# Daifend

Daifend.AI marketing site (Next.js 15) with premium futuristic UI, animations, and a Docker + Caddy deployment setup.

## Local development

```bash
cd daifend-ai
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run start
```

## Docker + Caddy (recommended)

```bash
docker compose up --build
```

If you deploy on a server, make sure the `caddy/` folder is present (it contains `caddy/Caddyfile`). We mount the **directory** into `/etc/caddy` to avoid file-vs-directory bind mount errors.
