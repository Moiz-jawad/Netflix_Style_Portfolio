# Implementation Plan: Polish Portrait Cutout

**Branch**: `004-polish-portrait-cutout` | **Date**: 2026-10-09 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/004-polish-portrait-cutout/spec.md`

**Note**: This template is filled in by the `/speckit-plan` command; its definition describes the execution workflow.

## Summary

Remove the pale cutout fringe from the featured portrait so the person blends into the dark card. The fringe is in the image file: partially transparent edge pixels are neutral gray, and they turn into a light rim on the dark card. Recolor those edge pixels to the nearby subject color and keep their softness. Leave the face, suit, pose, card frame, and opening-screen wording unchanged.

## Technical Context

**Language/Version**: The site is JavaScript with React 19.2, built by Vite 8. The portrait edit is a one-time file change with Python 3 from the standard library. No new runtime package.

**Primary Dependencies**: React 19 and Tailwind CSS 4 display the portrait. They do not change for this feature. The edit reads and writes PNG data with Python’s `zlib` and `struct` modules.

**Storage**: The portrait file `src/assets/Portfolio/picture.png` (666×1138, 8-bit RGBA). The same path stays the featured portrait.

**Testing**: Manual browser checks in [quickstart.md](./quickstart.md), plus a pixel check that the pale gray fringe count has dropped. The repository has no test runner.

**Target Platform**: Mobile and desktop browsers. Phone behavior is 320px–767px wide. Wide behavior is 768px and up.

**Project Type**: Single-page web portfolio

**Performance Goals**: The polished file stays a single PNG of about the current size. The opening screen does not gain a wait or a new request.

**Constraints**: Do not replace the person, suit, or clasped-hands pose. Do not change image width or height. Do not move the FEATURED DEV badge or change opening-screen wording. Hover and tilt must not bring the pale rim back.

**Scale/Scope**: One portrait file. `src/components/Hero.jsx` keeps importing that file and keeps the current card layout.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

No `.specify/memory/constitution.md` exists, so there are no project gates to violate. The gate passes.

**Post-design re-check**: Research, the data model, the portrait contract, and the quickstart stay inside the spec. They edit the existing portrait’s edge only. They do not add a page, a package, or a test framework. The gate still passes.

## Project Structure

### Documentation (this feature)

```text
specs/004-polish-portrait-cutout/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── portrait-edge.md
└── tasks.md              # created later by /speckit-tasks
```

### Source Code (repository root)

```text
src/assets/Portfolio/
└── picture.png           # same file, fringe recolored
src/components/
└── Hero.jsx              # import and card layout stay
```

**Structure Decision**: Polish the existing portrait file. The featured card already shows that file, so no component, route, or package is added.

## Complexity Tracking

No constitution violations.
