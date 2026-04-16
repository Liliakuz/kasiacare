# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### KasiaCare (`artifacts/kasiacare`)
- **Type**: React + Vite marketing website
- **Preview Path**: `/`
- **Description**: 7-page marketing website for KasiaCare — care plan software for families, personal aids, and caregivers. Named in memory of Kasia (1938–2023).
- **Pages**: Home (`/`), About (`/about`), Features (`/features`), Pricing (`/pricing`), Angels (`/angels`), Contact (`/contact`), Privacy (`/privacy`)
- **Brand Colors**: Navy (#1a3a5c), Rose (#c4667a), Gold (#c8952a), Cream (#faf7f2)
- **Fonts**: Cormorant Garamond (headings), DM Sans (body)
- **No backend** — pure static frontend
