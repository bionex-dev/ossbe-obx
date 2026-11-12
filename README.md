# OSBEE SOLUTIONS PRIVATE LIMITED — website

Next.js (App Router) + TypeScript + SCSS modules. Static, no backend.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start
```

Set the production origin before deploying (enables canonical URLs and correct sitemap/robots/Open Graph URLs):

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

- All site text lives in `src/data/website-content.ts` (verbatim from the original site). Edit text there, not in components.
- Content audit and verification: `CONTENT_REPORT.md`.
