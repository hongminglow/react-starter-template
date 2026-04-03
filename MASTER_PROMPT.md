<!-- OPENSPEC:START -->

# OpenSpec Instructions

These instructions are for AI assistants working in this project.

Always open `@/openspec/AGENTS.md` when the request:

- Mentions planning or proposals (words like proposal, spec, change, plan)
- Introduces new capabilities, breaking changes, architecture shifts, or big performance/security work
- Sounds ambiguous and you need the authoritative spec before coding

Use `@/openspec/AGENTS.md` to learn:

- How to create and apply change proposals
- Spec format and conventions
- Project structure and guidelines

Keep this managed block so 'openspec update' can refresh the instructions.

<!-- OPENSPEC:END -->

# Project Agent Prompt

This repository is a reusable React starter template, not just a demo app. Treat every change as something future teams will inherit.

## Product Intent

- Preserve the repo as a clean starter baseline with practical defaults.
- Keep demo features easy to remove. Platform pieces should be more durable than demo content.
- Prefer reusable abstractions only when they improve clarity across multiple pages.

## Stack and Architecture

- React 19 + TypeScript + Vite + Tailwind CSS v4.
- Shared app-wide wiring belongs in `src/app/`.
- Route-level screens belong in `src/pages/`.
- Reusable UI primitives belong in `src/components/ui/`.
- Reusable higher-level layout pieces belong in `src/components/layout/`.
- Shared API, env, utilities, and validation code belong in `src/lib/`.
- Client-side persisted state belongs in `src/stores/`.

## Styling and UI

- Reuse `src/components/layout/AppShell.tsx` for authenticated pages when possible.
- Keep `src/index.css` as the single source of truth for theme tokens and global visual direction.
- Keep `src/reset.css` imported via `src/index.css`; do not import it separately from page files.
- Every new UI surface must look correct in both light and dark mode.
- Use semantic Tailwind classes backed by the CSS variables in `src/index.css` instead of hardcoded light-only grays.
- Prefer Lucide icons. Do not use emojis as interface icons.
- Avoid clutter in headers and navigation. Keep the top bar action set focused.

## Data and State

- Always use the shared Axios client from `src/lib/axios.ts` for HTTP calls.
- Never hardcode API base URLs inside hooks or components.
- Read Vite env variables through `src/lib/env.ts`, not directly throughout the app.
- Keep route protection concerns inside reusable routing and layout components.

## Code Style

- Use TypeScript strictly and prefer explicit domain types.
- Favor small, composable components over oversized page files.
- Keep comments minimal and only when they add real context.
- Follow Prettier formatting and run `npm run format` after meaningful edits.
- Run `npm run lint` and `npm run build` before finishing substantial changes.
- The ESLint config is intentionally practical. Do not reintroduce noisy rules like unused-vars enforcement or Fast Refresh export restrictions unless the team asks for them.

## Documentation Rules

- Update `README.md` when you change starter capabilities, scripts, structure, or setup instructions.
- Keep `components.json` aligned with the current Tailwind and ShadCN setup.
- If you add a reusable pattern, document the intended usage briefly in `README.md`.

## Safe Change Guidance

- Do not replace shared primitives with page-specific one-offs without a good reason.
- Do not add heavy dependencies unless they materially improve the starter for many projects.
- Prefer boring, maintainable patterns over cleverness.
