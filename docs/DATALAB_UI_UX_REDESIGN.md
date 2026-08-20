# DATA Lab UI/UX Redesign Audit

## Scope and baseline

This audit records the current Vite/React implementation before the redesign. The app is a single-page, hash-navigated research-lab website. There is no client-side router and no backend/API layer in the source tree.

## 1. Current routes/pages

- `/` renders the complete homepage from `src/App.jsx`.
- Hash sections are the effective pages/routes: `#hero`, `#research`, `#about`, `#publications`, `#people`, `#partners`, and `#contact`.
- `Nav` and `Footer` link to those sections. `useActiveNav` observes section visibility to mark navigation state.
- There are no separate route components, route guards, authentication, or CMS pages.

## 2. Existing reusable components

- Shell: `Nav`, `Footer`, `BrandLogo`, `SectionHeader`, `FadeIn`.
- Homepage sections: `Hero`, `HeroVisualization`, `Research`, `About`, `Publications`, `People`, `Partners`, `Contact`.
- People: `PersonAvatar`, `PersonModal`; modal styles live in `PersonModal.css`.
- Data and behavior: `useActiveNav`, `usePublications`, `parseBib`, `formatCitation`.
- Theme: `ThemeProvider` and `useTheme` in `src/context/ThemeContext.jsx`.

## 3. Existing layout structure

`App` renders a sticky navigation, a single `<main>` containing the seven sections in sequence, and a footer. Sections use IDs for anchor navigation. Most sections are full-width blocks with content widths and grids controlled by `App.css`.

## 4. Current design tokens/colors

- `src/index.css` defines two theme token sets using `[data-theme='dark']` and `[data-theme='light']`.
- The default/legacy system is dark navy (`#0A2342`) with translucent white surfaces and multiple gradient variables.
- The light system uses blue-gray backgrounds and navy text, but is not the only available mode.
- `App.css` repeats many colors, opacity values, shadows, gradients, and theme overrides instead of using one compact token system.

## 5. Typography

- `Inter` is loaded from Google Fonts in `index.html` and used globally with a system fallback.
- Heading hierarchy is heavily weight-driven (`800`/`900`) with negative letter spacing and gradient text in the hero and labels.
- Several font sizes are declared in `App.css`, including responsive overrides.

## 6. Buttons

- `.btn-primary`, `.btn-outline`, `.nav-cta`, publication action buttons, and modal controls form several overlapping button styles.
- Buttons use moderate radii but add shadows and translate-on-hover effects.
- Several links wrap a `<button>`, which is invalid interactive nesting and should be replaced with styled links.

## 7. Cards

- Research areas are eight repeated icon cards with numbers and accent bars.
- People are clickable cards with avatars, role badges, and CV affordances.
- Publications are list-like cards with multiple action buttons.
- `App.css` contains numerous card variants and hover shadows; the redesign should retain only meaningful framed surfaces.

## 8. Navigation

- Sticky `Nav` contains the brand, six section links, a theme toggle, a `Join Us` CTA, and a mobile menu toggle.
- The mobile menu is stateful and uses `nav--open` CSS rules.
- Active state comes from `useActiveNav`.
- Current navigation is translucent/blurred and includes a theme control that must be removed for light-only mode.

## 9. Footer

- `Footer` has a brand description, navigation links, connect links, copyright, GitHub, and email icon links.
- Footer is dark and separately styled from the light sections.
- Existing contact and social destinations should remain available.

## 10. Images/assets

- Brand assets are served from `public/images/branding` and exposed through `BrandLogo`/`brandAssets.js`.
- People assets are served from `public/images/people`; some people use `PersonAvatar` initials when no photo exists.
- Partner directories exist but `partners` is currently empty, so the section renders its empty state.
- The hero currently uses a custom animated SVG visualization rather than an authentic lab image.
- Existing generated build assets are in `build/` and should not be edited as source.

## 11. Mobile implementation

- `App.css` includes mobile media queries for navigation, hero, grids, people, publications, contact, and footer.
- Mobile navigation is a collapsible menu controlled by React state.
- The site is technically responsive but inherits desktop-first compositions, large section paddings, and repeated card grids that need independent mobile review.

## 12. Existing animations

- `FadeIn` uses `IntersectionObserver` for reveal-on-scroll.
- The hero has animated SVG nodes/ellipses, a grid background, and a pulsing glow.
- CSS includes floating, glow, gradient-shift, dot-pulse, marquee, and hover translation behaviors.
- Partners includes a marquee implementation, though the current data set is empty.

## 13. Repeated components

- `SectionHeader` is used by Research, People, and Partners.
- `FadeIn` wraps most content blocks.
- `PersonCard` is local to People and opens `PersonModal`.
- Publication filters use a local `FilterChip` component.
- Data is centralized in `src/data/content.js`, with bibliography data in `src/data/publications.bib`.

## 14. Hardcoded styles

- `About.jsx` contains an inline underline style.
- Component classes and visual tokens are mostly hardcoded in the large `App.css` rather than composed from a small design-token layer.
- Hero SVG contains hardcoded visual colors, labels, animation timings, and geometry.
- `index.html` hardcodes theme initialization, font loading, icon font loading, and metadata.

## 15. Dead or duplicated code

- Dark and light token definitions coexist even though the redesign requires light mode only.
- Theme context state, localStorage persistence, theme toggle markup, and theme bootstrap script become dead code after light-mode consolidation.
- Gradient utilities and several glow/animation rules are candidates for removal.
- Empty partner data leaves a collaboration section without actual partner records; the empty state should remain truthful and compact.
- `HeroVisualization` is decorative and duplicates research labels already represented in content data.
- Existing built output is a generated artifact, not a source surface.

## 16. Visually AI-generated sections/patterns

- Hero combines an oversized marketing headline, gradient text, glow, grid, and animated abstract network.
- Research repeats eight icon-plus-title-plus-description cards.
- Theme styling uses gradients, translucent surfaces, and glow effects throughout.
- Many sections rely on centered headings and repeated reveal animations.
- Repeated pills/badges, floating shadows, and decorative iconography compete with research content.

## 17. Accessibility issues

- Theme toggle introduces unnecessary mode complexity and must be removed.
- Links wrapping buttons create invalid nested interactive elements in Hero, Nav, and Contact.
- Icon-font-only controls require careful accessible labels and focus styling.
- Heading hierarchy and section landmarks should be reviewed after layout changes.
- Person cards are buttons and should retain clear focus states and modal keyboard behavior.
- Embedded map should keep its descriptive iframe title and external directions link.

## 18. Responsive issues

- Hero visual and decorative elements consume substantial space without adding essential information on small screens.
- Repeated research cards become a tall mobile stack.
- Publication action clusters can wrap awkwardly.
- Navigation, footer columns, people groups, map, and button widths need viewport-specific verification.
- Section paddings and heading scale should be reduced without collapsing readable line lengths.

## 19. Content that should remain unchanged

- DATA Lab identity and Kuwait University / Department of Computer Science affiliation.
- Research areas and descriptions in `content.js`, including hypergraph learning, graph systems, NLP, machine learning, behavioral health, financial crime detection, data management, and network science.
- People names, roles, research descriptions, photos, CV data, and modal behavior.
- Publication bibliography loading, filtering, citation copying, and external publication links.
- Partner data contract and truthful empty state.
- Contact email, Instagram, physical location, map, directions, GitHub, and footer links.

## 20. Simplification/consolidation opportunities

- Establish one light-only token system in `index.css` and replace theme-specific overrides.
- Keep one shared container, section heading pattern, primary/secondary/text-link button system, and restrained surface style.
- Convert hero and contact link/button nesting to semantic anchors.
- Keep publication records as a structured list rather than adding card decoration.
- Retain `PersonModal` and `PersonAvatar` because they provide real functionality.
- Retain `FadeIn` only if reduced-motion behavior and restrained use are preserved.
- Remove decorative hero SVG/glow/grid and unused theme code once the replacement shell is validated.

## Redesign implementation notes

The redesign will proceed in this order: light-only foundation and metadata, shared navigation/footer/container styles, editorial hero and research rhythm, publication and people hierarchy, then responsive/accessibility cleanup. The single-page hash structure is preserved to avoid breaking existing links and deployment behavior.
