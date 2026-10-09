# Implementation Plan: Small-Screen Responsive Layout

**Branch**: `002-small-screen-responsive` | **Date**: 2026-10-09 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/002-small-screen-responsive/spec.md`

**Note**: This template is filled in by the `/speckit-plan` command; its definition describes the execution workflow.

## Summary

Make the existing one-page portfolio readable and tappable from 320px through 767px without changing the wide-screen layout or the profile wording. Phone layout is the current default styles below Tailwind’s `md` breakpoint (768px): a section button and panel, content that can grow past one screen, wrapped text, 44px touch targets, swipeable skills and projects that accept touch immediately, and a contact form that can scroll above the keyboard. The decorative cursor is limited to wide screens. The opening sequence keeps its current timing and gains a continue control.

## Technical Context

**Language/Version**: JavaScript with React 19.2, built by Vite 8

**Primary Dependencies**: React 19, Tailwind CSS 4, GSAP 3, Framer Motion 12

**Storage**: N/A

**Testing**: Manual browser checks documented in [quickstart.md](./quickstart.md). The repository has no test runner.

**Target Platform**: Mobile and desktop browsers. Phone behavior is 320px–767px wide. Wide behavior is 768px and up.

**Project Type**: Single-page web portfolio

**Performance Goals**: Opening sequence ends within 3 seconds or can be dismissed sooner. Phone scrolling stays vertical only.

**Constraints**: Do not change profile wording or profile-link destinations. Do not redesign widths at 768px and above. Primary phone controls are at least 44px on the shorter side. No hover-only actions below 768px.

**Scale/Scope**: One page, seven sections, the controls listed in [data-model.md](./data-model.md).

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

No `.specify/memory/constitution.md` exists, so there are no project gates to violate. The gate passes.

**Post-design re-check**: Research, the data model, the phone-layout contract, and the quickstart stay inside the spec. They do not add pages, profile facts, or a new test framework. The gate still passes.

## Project Structure

### Documentation (this feature)

```text
specs/002-small-screen-responsive/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── phone-layout.md
└── tasks.md              # created later by /speckit-tasks
```

### Source Code (repository root)

```text
src/
├── App.jsx
├── index.css
└── components/
    ├── NetflixPreloader.jsx
    ├── CustomCursor.jsx
    ├── Hero.jsx
    ├── About.jsx
    ├── Expertise.jsx
    ├── Skills.jsx
    ├── Projects.jsx
    ├── Contact.jsx
    └── Footer.jsx
```

**Structure Decision**: Keep the current single-page React layout. Phone behavior is added in the existing section components and global cursor styles. No new package, route, or backend.

## Complexity Tracking

No constitution violations.
