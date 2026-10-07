# Portfolio build checklist

## Phase A — Files and content data

- [x] Read the project brief and inspect the supplied portrait, logos, resume, paper, and logo archive.
- [x] Keep all portfolio copy and editable content in the clearly labeled `PORTFOLIO_CONTENT` object in `content.js`.
- [x] Use the resume and brief as the source of truth; retain all listed roles, dates, degree details, skills, and measurements.
- [x] Use the provided portrait, resume PDF, employer marks, and university marks at their supplied paths.
- [x] Create themed fallbacks for the three optional project-art files that are not present.
- [x] Record unresolved assets, links, and questions in `MISSING.md` with exact destinations and ready-to-paste prompts.
- [x] Keep the Amdocs title as “Software Engineer” from the resume; do not display a phone number.

## Phase B — Layout and responsive styling

- [x] Create the static `index.html`, `styles.css`, `main.js`, and `content.js` site with no framework, package install, or build step.
- [x] Add sticky navigation to every section, an active-section indicator, a scroll-progress bar, and a resume download.
- [x] Build the hero, experience, projects/research, education, skills, life-outside-work, contact, and footer sections in the requested order.
- [x] Use a readable forest/paper/leaf palette, generous reading measure, keyboard focus styles, semantic landmarks, alt text, and inline social SVGs.
- [x] Add responsive layouts for small phones, tablets, laptops, and wide screens.
- [x] Add page title, description, Open Graph metadata, and a terminal-inspired SVG favicon.

## Phase C — Animations and interactions

- [x] Add the under-two-second, skippable, once-per-session boot sequence.
- [x] Add an animated hero headline and section-title decoding while keeping equivalent readable text available to assistive technology.
- [x] Add scroll reveals, hover/press feedback, skill-category filters, and a copy-email control.
- [x] Add the desktop-only phosphor cursor trail and the keyboard-opened command-prompt easter egg.
- [x] Respect reduced-motion preferences and avoid hiding content while animations initialize.
- [x] Make the mobile navigation toggle accessible, closable by Escape and after choosing a link.

## Phase D — QA

- [x] Confirm all sections and resume facts are represented, with no invented roles, dates, figures, or URLs.
- [x] Confirm the resume download and provided images/logos resolve to files in the repository.
- [x] Confirm unavailable project imagery, the IEEE Xplore link, and other open questions are visible in the missing-items checklist.
- [x] Check responsive layouts, navigation behavior, keyboard interactions, reduced-motion behavior, and browser-console errors.
- [x] Finish with all definition-of-done checks reported as PASS or FIXED in the handoff.
