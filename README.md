# experion-site

Mini-sitio legal estático de experion. HTML + CSS puro, sin build step.

- `index.html` — landing.
- `privacidad.html` — Aviso de Privacidad (espejo de `experion-mobile-app/src/components/legal/legalContent.ts`).
- `terminos.html` — Términos y Condiciones.
- `soporte.html` — contacto y emails de soporte.
- `assets/site.css` — design system Electric inline (tokens en `/Users/dan/experion-monorepo/brand/BRAND.md`).
- `CNAME` — `experion.app` para GitHub Pages custom domain.

## Deploy

GitHub Pages desde `main` / `/` root. URL provisional:
`https://daniel18hd.github.io/experion-site/`

Custom domain `experion.app` configurado via Pages settings + `CNAME` file.

## Actualizar contenido legal

La fuente canónica vive en `experion-mobile-app/src/components/legal/legalContent.ts`.
Cuando el copy cambie ahí, replicá los cambios en `privacidad.html` y
`terminos.html` y haz push (la app y el sitio deben quedar sincronizados).
