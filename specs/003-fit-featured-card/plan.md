# Implementation Plan: Fit Featured Card

**Branch**: `003-fit-featured-card` | **Date**: 2026-10-09 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/003-fit-featured-card/spec.md`

**Note**: This template is filled in by the `/speckit-plan` command; its definition describes the execution workflow.

## Summary

Show the whole head inside the featured card and keep the FEATURED DEV badge off the head, on phone widths and wide widths. Keep the current photograph. Align the portrait to the top of its frame so the extra crop falls on the lower body, and place the badge in the card chrome above the photograph so it cannot cover the head. Leave the opening-screen wording and the phone section list unchanged.

## Technical Context

**Language/Version**: JavaScript with React 19.2, built by Vite 8

**Primary Dependencies**: React 19, Tailwind CSS 4. The portrait uses Tailwind `object-cover` with `object-top` so the top of the image stays visible while the frame stays filled.

**Storage**: N/A. The portrait stays the existing file `src/assets/Portfolio/picture.png`.

**Testing**: Manual browser checks in [quickstart.md](./quickstart.md). The repository has no test runner.

**Target Platform**: Mobile and desktop browsers. Phone behavior is 320px–767px wide. Wide behavior is 768px and up.

**Project Type**: Single-page web portfolio

**Performance Goals**: The card still appears with the opening screen. No new animation and no extra wait.

**Constraints**: Do not replace the photograph. Do not change the name, role, summary, or the labels View Projects, Contact Me, and Hire Me. The badge text stays FEATURED DEV. Hover and tilt must not crop the head or move the badge onto the head. Other sections stay as they are.

**Scale/Scope**: One featured card in `src/components/Hero.jsx`.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

No `.specify/memory/constitution.md` exists, so there are no project gates to violate. The gate passes.

**Post-design re-check**: Research, the data model, the featured-card contract, and the quickstart stay inside the spec. They do not replace the photograph, rewrite profile wording, or add a test framework. The gate still passes.

## Project Structure

### Documentation (this feature)

```text
specs/003-fit-featured-card/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── featured-card.md
└── tasks.md              # created later by /speckit-tasks
```

### Source Code (repository root)

```text
src/
└── components/
    └── Hero.jsx          # featured card, portrait, and badge
src/assets/Portfolio/
└── picture.png           # unchanged photograph
```

**Structure Decision**: Change only the featured card in the existing opening section. The photograph file stays. No new package, route, or component.

## Complexity Tracking

No constitution violations.
