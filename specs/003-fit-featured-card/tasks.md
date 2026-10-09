# Tasks: Fit Featured Card

**Input**: Design documents from `/specs/003-fit-featured-card/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Not requested. Validation is the manual quickstart in the polish phase.

**Organization**: Tasks are grouped by user story so each story can be implemented and tested on its own.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/` at repository root
- The featured card, portrait, and badge are all in `src/components/Hero.jsx`
- Paths below match `specs/003-fit-featured-card/plan.md`

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Keep the current photograph as the portrait source

- [X] T001 In `src/components/Hero.jsx`, keep the portrait import pointed at `src/assets/Portfolio/picture.png` and do not edit that image file. Data-model constraint: "Subject: Moiz Jawad, unchanged file"

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Keep the badge and portrait inside the same tilted card

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T002 In `src/components/Hero.jsx`, keep the portrait and the FEATURED DEV badge inside the element with `ref={cardRef}` so tilt rotates them together. Do not move the tilt transform onto the image alone. Data-model constraint: "Motion: The card may tilt. The badge and portrait tilt together"

**Checkpoint**: Foundation ready — user story implementation can now begin

---

## Phase 3: User Story 1 - See the full head in the featured card (Priority: P1) 🎯 MVP

**Goal**: The whole head stays inside the frame on a phone and on a wide screen, including while the card is hovered

**Independent Test**: On a phone-sized screen and on a wide screen, the top of the hair through the chin sits inside the card frame. Hovering the card does not clip the hair. The photograph is still the same file.

### Implementation for User Story 1

- [X] T003 [US1] In `src/components/Hero.jsx`, add `object-top` to the portrait that already has `object-cover`, and keep the frame `h-[330px] md:h-[390px]`. Data-model constraints: "Fit: Fills the portrait area, aligned to the top", "Crop allowed: Hands and lower body", "Crop forbidden: Any part of the head, including on hover", "Frame: Portrait area stays 330px tall below 768px and 390px tall at 768px and up"
- [X] T004 [US1] In `src/components/Hero.jsx`, remove `group-hover:scale-[1.02]` and `transition-transform duration-500` from the portrait so hover does not crop the head. Keep `filter contrast-125 brightness-105`. Data-model constraint: "Crop forbidden: Any part of the head, including on hover"

**Checkpoint**: User Story 1 shows the full head. The badge may still cover the forehead until User Story 2

---

## Phase 4: User Story 2 - Keep the badge off the face (Priority: P2)

**Goal**: The FEATURED DEV badge is readable inside the card and does not cover the head

**Independent Test**: On a phone-sized screen and on a wide screen, the badge does not touch the hair, forehead, eyes, nose, mouth, beard, or ears, and the words FEATURED DEV are fully visible inside the card.

### Implementation for User Story 2

- [X] T005 [US2] In `src/components/Hero.jsx`, take the badge out of `absolute top-6 left-6` and place it in normal flow above the portrait, inside the card, still reading FEATURED DEV. Keep the red label styles. Data-model constraints: "Text: FEATURED DEV", "Place: Inside the card, above the portrait, not over the head", "Readable: The full label stays inside the card at 320px, 390px, and 1280px"

**Checkpoint**: User Stories 1 and 2 both work. The head is inside the frame and the badge is off the head

---

## Phase 5: User Story 3 - Leave the rest of the opening screen alone (Priority: P3)

**Goal**: The name, role, summary, and primary action labels stay as they are

**Independent Test**: On a phone-sized screen and on a wide screen, the name, role, summary, View Projects, Contact Me, and Hire Me still use their current wording, and the card still shows the featured portrait.

### Implementation for User Story 3

- [X] T006 [US3] In `src/components/Hero.jsx`, leave the opening name, role, summary, and the labels View Projects, Contact Me, and Hire Me unchanged. If an earlier task edited any of those strings, restore them. Contract rule: "The opening-screen name, role, and summary keep their current wording" and "View Projects, Contact Me, and Hire Me keep their current labels"

**Checkpoint**: All three user stories work

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Check the card at the three widths in the quickstart

- [X] T007 Run the seven checks in `specs/003-fit-featured-card/quickstart.md` at 320px, 390px, and 1280px, including hover on the wide screen

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — can start immediately
- **Foundational (Phase 2)**: Depends on Setup — BLOCKS all user stories
- **User Stories (Phase 3+)**: Depend on Foundational. They all edit `src/components/Hero.jsx`, so run them in priority order rather than in parallel
- **Polish (Phase 6)**: Depends on the desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Starts after Foundational. No dependency on other stories
- **User Story 2 (P2)**: Starts after the User Story 1 edits in `src/components/Hero.jsx`. Independently testable by checking the badge, but it must not overwrite the `object-top` change
- **User Story 3 (P3)**: Starts after the card edits. It restores wording only if a card task changed it

### Parallel Opportunities

- No task is marked [P]. T003, T004, T005, and T006 all change `src/components/Hero.jsx`
- T001 only guards `src/assets/Portfolio/picture.png` and the import beside it, and T002 must finish before any story edits that same component

### Parallel Example: User Story 1

```text
T003 and T004 both edit the portrait class in src/components/Hero.jsx.
Run T003, then T004. Do not launch them together.
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: The full head is inside the frame on a phone and on a wide screen
5. Continue to User Story 2 before calling the reported card done, because the badge still sits on the forehead until T005

### Incremental Delivery

1. Setup + Foundational → photograph and tilt wrapper preserved
2. User Story 1 → full head inside the frame (MVP)
3. User Story 2 → badge off the head
4. User Story 3 → surrounding wording unchanged
5. Polish → quickstart at 320px, 390px, and 1280px

### Parallel Team Strategy

One developer should own `src/components/Hero.jsx` for this feature. Splitting the three stories across people will conflict in that file.

---

## Notes

- [P] tasks = different files, no dependencies. None qualify here
- [Story] label maps a task to its user story
- Each user story can be checked on its own after its task
- Tests were not requested
- Commit after each task or logical group
- Stop at any checkpoint to validate that story
