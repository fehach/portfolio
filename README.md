# Federico Hach Portfolio

Personal portfolio site for Federico Miguel Hach Saval, a Zero Trust and cybersecurity architect focused on microsegmentation, PCI-DSS, Cisco security architectures, and AI-powered security automation.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Upstash Redis for the view counter

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

## Environment variables

The view counter API uses Upstash Redis:

```bash
UPSTASH_REDIS_REST_URL=...
UPSTASH_REDIS_REST_TOKEN=...
NEXT_PUBLIC_SITE_URL=https://your-production-domain.com
```

`NEXT_PUBLIC_SITE_URL` is used for canonical URLs, sitemap, robots, and social previews. On Vercel, `VERCEL_URL` is used as a fallback.

## Main sections

- Hero profile and impact metrics
- About and professional timeline
- Projects and case studies
- Talks and internal sessions
- Consulting services
- Technology domains
- Architecture principles
- AI security assistant demo concept
- Contact and view counter

## Deployment

The project is designed for Vercel. Pushes to `main` can trigger production deployments when the GitHub repository is connected to a Vercel project.
