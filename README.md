# Pura — Landing Page

Landing page para Pura, marca de agua purificada de Mendoza

## Stack

- **Next.js** (App Router) + TypeScript
- **Tailwind CSS v4**
- **Formspree** — backend de formularios
- **PostHog** — product analytics y eventos de conversión
- **Microsoft Clarity** — session recordings y heatmaps
- **Vercel** — deploy

## Setup

```bash
pnpm install
```

Crear `.env.local`:

```
NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN=
NEXT_PUBLIC_POSTHOG_HOST=
NEXT_PUBLIC_CLARITY_PROJECT_ID=
NEXT_PUBLIC_FORMSPREE_ID=
NEXT_PUBLIC_SITE_URL
```

```bash
pnpm dev
```

## Editar contenido

Todo el contenido editable está en un solo archivo: [`content/landing.ts`](content/landing.ts).

Un marketer puede cambiar textos, CTAs, links de Calendly, e imágenes desde ahí sin tocar nada de tracking, SEO ni lógica de formularios.

## Eventos trackeados (PostHog)

| Evento                 | Cuándo                                         |
| ---------------------- | ---------------------------------------------- |
| `lead_form_viewed`     | El formulario entra al viewport                |
| `lead_form_started`    | El usuario hace foco en cualquier campo        |
| `lead_form_submitted`  | Envío exitoso                                  |
| `lead_form_error`      | Error de Formspree                             |
| `meeting_cta_clicked`  | Click en cualquier botón de Calendly           |
| `scroll_depth_reached` | Al alcanzar 25 / 50 / 75 / 90 / 100% de scroll |

Para comparar CTAs en PostHog: `lead_form_submitted` vs `meeting_cta_clicked`.
