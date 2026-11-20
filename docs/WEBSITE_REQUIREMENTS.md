# TubePilot Official Website — Requirements & Acceptance Checklist

**Project:** TubePilot Official Website  
**Production domain:** https://www.tubepilot.shop  
**Hosting:** Vercel  
**Repository:** https://github.com/hero08164-cmd/code-crate-transit-hub  
**Default branch:** main  
**Last reviewed:** 2026-11-21

This document is the implementation source of truth for the public TubePilot website. It records agreed requirements, the current repository baseline, and the work still requiring implementation or live verification. A checked item means it is present in the repository, not necessarily verified on the production deployment.

## 1. Product positioning and brand

- Present TubePilot as an **AI YouTube Creator OS** by Bharat Cloud Technologies.
- Primary message: **“Build better videos. Grow with intention.”**
- Product workflow: **CREATE • OPTIMIZE • SCHEDULE • GROW**.
- Keep the public website focused on YouTube creator workflows.
- Use the official TubePilot logo and verified product screenshots/assets. Do not substitute unrelated logos or placeholder founder imagery.
- Keep the visual system clean, premium, readable, and consistent across desktop and mobile. Existing brand direction uses white/light surfaces with plum/purple accents; preserve established brand tokens unless a deliberate redesign is approved.
- Do not publish unsupported claims, fake testimonials, fabricated user counts, or unverified feature availability.

## 2. Domain and deployment rules

- Canonical production origin: `https://www.tubepilot.shop`.
- All canonical, Open Graph, Twitter, JSON-LD, sitemap, robots, and internal absolute URLs must use the canonical `.shop` domain.
- Redirect non-canonical host variants to the canonical host using one permanent redirect. Avoid redirect loops.
- Keep Vercel connected to the GitHub `main` branch and ensure production deployments use the intended project and domain.
- Verify every production deployment after build; a GitHub commit alone does not prove the live site is updated.
- Do not rewrite published Git history or force-push. This repository is connected to Lovable.

## 3. Information architecture and required pages

Existing route files include the following public pages. Keep routes stable and ensure every page has a working direct URL, page title, description, canonical URL, navigation path, and responsive layout.

| Route | Purpose |
|---|---|
| `/` | Homepage and primary product introduction |
| `/about` | About TubePilot and Bharat Cloud Technologies |
| `/founder` | Founder profile and product story |
| `/features` | YouTube-focused product features |
| `/ai-studio` | Free AI Studio / creator tool landing page |
| `/mcp` | Model Context Protocol information |
| `/docs` | Product documentation |
| `/blog` | Creator education and product updates |
| `/faq` | Frequently asked questions |
| `/contact` | Contact and support route |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `/refund` | Refund/cancellation policy |
| `/delete-account` | Account deletion instructions |
| `/watch-time-calculator` | Free YouTube watch-time utility |
| `/channel-name-generator` | Free channel-name utility |
| `/youtube-thumbnail-downloader` | YouTube thumbnail utility |

### Homepage requirements

- Keep the hero clean and conversion-focused; use the approved headline.
- Explain the product in plain language and show the primary YouTube creator workflow.
- Include clear sections for Features, How it works, and Pricing.
- Include app download CTA with the verified Google Play URL.
- Link to Founder, Features, and AI Studio without crowding the hero.
- Do not place the AI Studio generator form on the homepage; it belongs at `/ai-studio`.
- Ensure all homepage anchor links work from both the homepage and other routes.

### Founder page requirements

- Route must resolve at `/founder` and render its full content.
- Use the approved founder image at `/images/founder.png`; confirm the asset exists in the deployed build.
- Add unique title, description, canonical URL, Open Graph and Twitter metadata.
- Founder structured data must match visible page content.
- Legacy typo/image paths may redirect to the correct route/asset only when needed; test the redirects in production.
- Verify both www and non-www entry URLs resolve to the canonical page.

### AI Studio requirements

- Keep the tool at `/ai-studio`.
- Clearly distinguish demo/template output from live AI output.
- Do not label locally templated suggestions as AI-generated live model responses.
- If a live model is connected later, call it through a secured server-side endpoint; never expose provider API keys in browser code.
- Add clear input validation, loading, error, copy, and accessible result states.
- Confirm all generated text is editable and users can copy it.
- Add a visible route back to the main TubePilot product and the verified app download link.

## 4. Navigation and responsive UX

- Shared header and footer must appear consistently across all pages.
- Main navigation should expose Features, How it works, Pricing, About, Founder, AI Studio, MCP, Docs, Blog, FAQ, and Contact in a clear hierarchy.
- Mobile navigation must animate smoothly, open/close reliably, close after navigation, close on Escape and backdrop tap, and never block page content with a stale overlay.
- Ensure mobile drawer/backdrop stacking order is correct and the page does not scroll behind an open drawer.
- Test header/footer, menus, anchor links, forms, buttons, cards, and text wrapping at narrow phone widths, tablets, and desktop widths.
- Provide visible keyboard focus, semantic landmarks, accessible names, and a skip-to-content link.
- Respect reduced-motion preferences for non-essential animation.

## 5. SEO, discovery, and social previews

- Every indexable page must have a unique, accurate title and meta description.
- Set one canonical URL per indexable page on `https://www.tubepilot.shop`.
- Provide Open Graph and Twitter card metadata with valid absolute image URLs.
- Ensure social preview images exist, load, and use appropriate dimensions.
- Maintain a valid XML sitemap containing only canonical, indexable, successful pages.
- Maintain a robots.txt that allows intended crawling and references the canonical sitemap.
- Keep Google Search Console verification configured; verify ownership on the production domain and submit the sitemap after deployment.
- Check Google indexing, duplicate host variants, soft-404s, redirects, and page experience in Search Console.
- Add and validate JSON-LD where it matches visible content:
  - SoftwareApplication for TubePilot.
  - Organization for Bharat Cloud Technologies / TubePilot brand relationship.
  - Person for the founder page.
  - WebSite for the canonical website.
  - FAQPage only on a page with visible matching FAQs.
- Do not add misleading review, rating, price, or availability structured data.
- Keep metadata and structured data consistent with the actual Google Play listing and app capabilities.
- Maintain sensible internal links between relevant product, help, legal, founder, and tool pages.

## 6. Content, trust, and conversion

- Explain what TubePilot does, who it is for, and which YouTube tasks it supports.
- Feature descriptions must match the currently shipped Android app; do not promise unshipped features.
- Pricing and offer information must be accurate, current, and consistent with the app.
- Provide working contact/support information and clear privacy, terms, refund, and account-deletion information.
- Verify all social and Google Play destinations before publishing. Preserve the approved official links:
  - LinkedIn company: https://www.linkedin.com/company/tubepilotapp/
  - LinkedIn organization profile: https://www.linkedin.com/in/bharatcloudtechnologies
  - Instagram: https://www.instagram.com/tubepilot.app
  - X: https://x.com/TubePilotApp
  - Facebook: https://www.facebook.com/share/1Emmw34QZi/
  - YouTube: https://youtube.com/@officialtubepilot
  - Google Play: https://play.google.com/store/apps/details?id=com.tubepilot.app

## 7. Performance, quality, and security

- Optimize images (modern formats where suitable, responsive sizing, intrinsic width/height, lazy-load below-the-fold media).
- Avoid layout shifts, oversized bundles, unnecessary third-party scripts, and blocking assets.
- Keep pages usable on slower mobile connections.
- Validate forms on both client and server where a backend exists; protect against spam and unsafe input.
- Never commit API keys, tokens, passwords, private credentials, or sensitive user data.
- Use HTTPS for all production resources and external links.
- Keep dependencies maintained and run the available checks before release.
- Add meaningful 404 and error states with a clear route back home.
- Keep semantic HTML, accessible contrast, heading order, and descriptive image alt text.

## 8. Engineering and repository rules

- Current stack from repository: React 19, TypeScript, Vite, TanStack Start/Router, Tailwind CSS 4, and Lucide icons.
- Page bodies for migrated pages live in `src/content/*.ts` as raw HTML rendered by `ParsedHtml`. Follow `AGENTS.md`; do not rewrite those bodies into JSX without a clear reason.
- Shared header/footer/root shell live under `src/components/site/` and `src/routes/__root.tsx`.
- Keep existing `tp-` CSS tokens namespaced in `src/styles.css`.
- Preserve generated route-tree conventions.
- Available quality commands:
  - `npm run build`
  - `npm run lint`
  - `npm test`
- Fix errors rather than hiding them or weakening checks.

## 9. Current repository baseline and known follow-ups

The following observations were confirmed from the repository on 2026-11-21:

- [x] Vercel is the intended host and `https://www.tubepilot.shop` is the approved canonical domain.
- [x] Shared root shell includes the site header, footer, back-to-top control, skip link, and a not-found component.
- [x] Existing route files cover the core product, founder, AI Studio, help, legal, and utility pages listed above.
- [x] Homepage route contains canonical and social metadata.
- [x] Root route includes SoftwareApplication, Organization, Person, and WebSite JSON-LD.
- [x] Sitemap and robots.txt exist in `public/`.
- [x] Google verification meta tag is present in the root route.
- [x] Mobile navigation code includes route-change close, Escape close, and body-scroll locking.
- [x] AI Studio visibly identifies its current local template/demo mode.
- [ ] Run a fresh production build, lint, and tests against the current main branch.
- [ ] Touch-test mobile navigation on a real phone across all routes.
- [ ] Validate all CTA, social, Google Play, contact, and footer links.
- [ ] Validate every sitemap URL returns the intended successful page and is canonical.
- [ ] Confirm live Vercel deployment and www/non-www canonical redirects.
- [ ] Confirm `/founder` and `/images/founder.png` work on the live production deployment.
- [ ] Verify the legacy redirects `/founc` → `/founder` and `/founder.png` → `/images/founder.png` in production.
- [ ] Check actual Search Console indexing and submit sitemap after the final deployment.
- [ ] Review every page's metadata, image previews, and JSON-LD against its visible content.
- [ ] Review contact form delivery and legal-page accuracy; repository presence alone does not prove these workflows are operational.
- [ ] Confirm the Google Play listing URL and app identifier are correct before release.

## 10. Definition of done

The website is release-ready only when:

1. The production domain serves the intended latest build over HTTPS.
2. All required routes load directly and through navigation without 404s.
3. The founder page and founder image work on production.
4. Mobile navigation and all interactive controls pass phone testing.
5. All CTAs and external links resolve to the correct destinations.
6. Sitemap, robots.txt, canonical tags, metadata, social previews, and structured data validate.
7. Build, lint, and automated tests pass.
8. No secrets or unsupported product claims are published.
9. Search Console verification and sitemap submission are completed by an authorized account holder.
10. The deployed production site is manually smoke-tested after release.

**Important:** This checklist is the agreed requirements baseline. Items marked pending must not be described as completed until tested on the live deployment.
