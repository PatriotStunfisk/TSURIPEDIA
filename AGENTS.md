# Repository guidelines

## Project and structure
- The GitHub repository is named **TSURIPEDIA**; the public service is **UOLINK（ウオリンク）**, a comprehensive fishing information site for Japanese anglers. Preserve the UOLINK branding; the README and example URL still use the older name.
- Stack: Next.js App Router, React 19, strict TypeScript, and Three.js. See `package.json` for exact versions.
- `app/`: routes, layouts, metadata, sitemap, robots, global CSS, and page CSS modules. Main sections include fish, methods, spots, gear, guide, cooking, game, and admin.
- `components/`: reusable UI and browser interactions, including fish viewers and maps; associated CSS modules live alongside components.
- `lib/`: static content and shared registries. `lib/fish-species/<slug>.ts` is the authoring source for the seven migrated species and new full species; register each in `lib/fish-species/index.ts`. `data.ts`, `fish-details.ts`, `launch-fish.ts`, and `cooking-data.ts` retain compatibility views and remaining legacy data. `lib/fish-registry.ts` combines profile information, and `lib/all-guides.ts` combines guide article collections. Prefer these registries when consuming or enumerating content.
- `public/`: images, brand assets, and GLB models. Reference them by root-relative URL.
- `supabase/schema.sql`: proposed CMS schema. The README describes live authentication, database, and storage integration as future work; do not assume the admin UI is a connected CMS.

## UOLINK product and content architecture
- Build toward a database-driven site connecting **fish × fishing methods × fishing spots × gear × cooking**, with capacity for 100–300 fish species and hundreds to 1,000+ pages. These are architectural goals, not a claim that the current site already supports automatic propagation.
- Author a new full species in one profile file plus its index registration; do not duplicate its fields in compatibility views. See `docs/fish-species.md`. Keep profile imports directed toward the shared types/helper, never back toward consumer registries.
- Make adding one fish species as simple as possible. Aim for one authoritative species data entry, with stable identifiers and relationships supplying the fish index, detail page, SEO metadata, sitemap, identification guidance, related fish, methods, GUIDE articles, recipes, spots, and gear wherever relevant information exists.
- Maintain the centralized approach of `fish-registry.ts` and `all-guides.ts`. Derive lists, lookups, and relationships from shared data rather than duplicating fish records or per-page registration logic. When practical, consolidate duplicate information and processing incrementally.
- Keep a reusable baseline for new species with explicit extensions for rich species-specific content and presentation. Preserve the dedicated designs and detailed information already built for タチウオ, アジ, マダイ, and other established pages.
- Do not create empty or low-quality pages just to populate relationships or increase SEO page counts. Link to useful, existing content and handle missing optional information gracefully.

## Development and validation
- Install dependencies with `npm install`; run locally with `npm run dev`.
- Run `npm run build` for production validation and `npm run start` to serve a completed build.
- With dependencies installed, run `npx tsc --noEmit` for a TypeScript check. The config includes generated `.next/types`, so route type validation also depends on Next.js generation/build.
- Run `npm run lint` for ESLint syntax and basic correctness checks. TypeScript and build provide type and route validation.
- Run `npm run test:content` for content registry and relationship regression tests. For behavioral changes, verify the affected routes and interactions in a browser at desktop and mobile sizes; check console errors and asset loading. For 3D changes, check dragging, resizing, and fallback behavior.
- After code changes, run TypeScript checks, build, lint, and checks of related pages wherever feasible. Investigate and fix errors encountered; do not report the work as complete while known errors remain. If a check cannot run or an error cannot be resolved within the authorized scope, clearly report the cause and outstanding work rather than claiming success.
- Documentation-only changes do not require installing dependencies or running a build. Report checks actually performed and any limitations.

## Implementation conventions
- Use TypeScript and existing `@/` root imports. Follow the surrounding formatting and avoid unrelated reformatting of the compact source files.
- Keep server-rendered routes as server components unless browser state or APIs require a client component. Use `'use client'` at browser-interaction boundaries.
- Use existing CSS modules for scoped styles and `app/globals.css` for shared styles; no utility CSS framework is configured.
- Keep Japanese user-facing copy, meaningful alt text, semantic links/buttons, and accessible controls.
- When adding content, update the appropriate source collection and registry wiring, then check list pages, detail pages, related links, metadata, and sitemap coverage against the shared content architecture.
- Keep browser-only Three.js work inside client lifecycle code and clean up animation frames, listeners, observers, and GPU resources. Preserve a usable fallback when rendering fails.
- Keep branding, canonical URLs, structured data, sitemap, and robots consistent when changing site identity. `app/layout.tsx` currently hardcodes the site URL; do not assume `.env.example` controls it.

## SEO and future monetization
- Consider title, description, canonical URLs, sitemap coverage, useful internal links, mobile presentation, and Core Web Vitals when changing pages. Prioritize helpful content and performance; do not mass-generate low-quality pages solely for SEO.
- Make the path **fish → fishing method → required gear → product** easy to express through reusable data relationships. Allow for future Amazon/Rakuten product affiliate links, display advertising, fishing-boat bookings, fishing-gear services, and direct advertising from boat operators and tackle shops.
- Do not add advertising code without explicit user authorization. Future monetization plans do not authorize implementing ad or affiliate integrations now.

## Scope, preservation, and configuration
- Read relevant files before changing code and prioritize preserving existing functionality. Use small, safe changes rather than a large refactor in one step; keep work focused on the requested task and preserve unrelated working-tree edits.
- Preserve the current UOLINK design. Existing URLs and slugs must remain unchanged by default, and existing cross-links must keep working. Do not independently undertake major redesigns, URL changes, bulk deletions, or data deletion; obtain explicit authorization for such changes.
- Do not delete, replace, or modify existing images without authorization. Match image filenames and code references exactly, including letter case, and check affected asset URLs.
- Use `.env.example` as the configuration reference. Keep real credentials out of tracked files and never expose `SUPABASE_SERVICE_ROLE_KEY` to client code.
- Do not run database schema changes or production deployments as part of routine local verification.

## Working with the user
- The user is not a programmer. Carry out development tasks that Codex can perform within the available permissions instead of handing executable work back to the user. Ask only for input or authorization actually needed to proceed.
- At the end of work, report in clear Japanese: what changed, why it changed, validation results, and remaining issues. Distinguish completed checks from checks that could not run, and state when no issues remain.
