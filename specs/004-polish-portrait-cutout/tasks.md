# Tasks: Polish Portrait Cutout

**Input**: Design documents from `/specs/004-polish-portrait-cutout/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Not requested. Validation is the manual quickstart in the polish phase, plus the pixel comparison inside the story tasks.

**Organization**: Tasks are grouped by user story so each story can be implemented and tested on its own.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/` at repository root
- The portrait is `src/assets/Portfolio/picture.png`
- The card that shows it is `src/components/Hero.jsx`
- Paths below match `specs/004-polish-portrait-cutout/plan.md`

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Keep the existing portrait path and add no packages

- [X] T001 Confirm `src/components/Hero.jsx` imports `src/assets/Portfolio/picture.png`, and do not add an image library to `package.json`. Data-model constraint: "Path: `src/assets/Portfolio/picture.png` remains the file the opening screen shows"

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Read the current portrait and keep an untouched copy for the identity check

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T002 Read `src/assets/Portfolio/picture.png` with Python 3 from the standard library (`zlib` and `struct` only). Confirm it is 666×1138, 8-bit RGBA, and non-interlaced. Count the neutral-gray partially transparent fringe pixels around the hair, shoulders, sleeves, and hands. Copy the untouched file outside `src/` for the later pixel comparison, and do not import that copy from `src/components/Hero.jsx`. Do not write `src/assets/Portfolio/picture.png` in this task. Data-model constraints: "Size: 666×1138 pixels, unchanged" and "Format: 8-bit RGBA PNG" and "Before: Neutral gray color with partial transparency"

**Checkpoint**: Foundation ready — user story implementation can now begin

---

## Phase 3: User Story 1 - Remove the visible cutout edge (Priority: P1) 🎯 MVP

**Goal**: The pale fringe around the hair, shoulders, sleeves, and hands is gone, while the edge stays soft

**Independent Test**: Open the featured card on a phone-sized screen and on a wide screen. No pale outline separates the person from the dark card. Fine hair is not a hard jagged edge.

### Implementation for User Story 1

- [X] T003 [US1] In `src/assets/Portfolio/picture.png`, recolor only neutral-gray partially transparent edge pixels to the nearest opaque subject pixel and keep each pixel’s alpha. Leave skin-colored partial pixels on the face unchanged. Do not set alpha to 0. Write the same 666×1138 8-bit RGBA file back to `src/assets/Portfolio/picture.png`. Data-model constraints: "After: Same transparency, color taken from the nearest opaque subject pixel", "Left alone: Skin-colored partial pixels on the face, and every opaque pixel", "Where: Hair, shoulders, sleeves, and hands", and "After the edit, a scan of partial-transparency pixels finds no neutral-gray fringe of the kind measured before the edit"

**Checkpoint**: User Story 1 removes the pale rim. The identity comparison is User Story 2

---

## Phase 4: User Story 2 - Keep the same person (Priority: P2)

**Goal**: The face, beard, suit, pose, and clasped hands still match the portrait from before the edit

**Independent Test**: Compare the edited file with the untouched copy from T002. Opaque pixels for the face, beard, suit, and hands are unchanged, and the picture is still 666×1138.

### Implementation for User Story 2

- [X] T004 [US2] Compare `src/assets/Portfolio/picture.png` with the untouched copy from T002. Confirm width stays 666 and height stays 1138, and confirm opaque pixels for the face, beard, suit, and hands are unchanged. If any opaque subject pixel changed, restore it from the untouched copy and write `src/assets/Portfolio/picture.png` again. Data-model constraints: "Subject: The same person, dark suit, clasped hands", "Interior: Opaque pixels for the face, beard, suit, and hands stay as they are", and "Opaque face, beard, suit, and hand pixels are unchanged"

**Checkpoint**: User Stories 1 and 2 both hold. The rim is gone and the person is the same

---

## Phase 5: User Story 3 - Keep the card framing (Priority: P3)

**Goal**: The featured card still shows the whole head, the badge stays off the head, and the opening-screen wording is unchanged

**Independent Test**: On a phone-sized screen and on a wide screen, the head is inside the frame, FEATURED DEV does not cover the head, and the name, role, summary, View Projects, Contact Me, and Hire Me read as they did before this feature.

### Implementation for User Story 3

- [X] T005 [US3] In `src/components/Hero.jsx`, leave the portrait import, `object-cover object-top`, the FEATURED DEV badge above the portrait, and the opening name, role, summary, and the labels View Projects, Contact Me, and Hire Me unchanged. If any of those were edited, restore them. Data-model constraints: "Frame: Unchanged. Head from the top of the hair through the chin stays inside", "Badge: FEATURED DEV, above the portrait, off the head", and "Opening-screen name, role, summary, and the labels View Projects, Contact Me, and Hire Me are unchanged"

**Checkpoint**: All three user stories work

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Check the card at the three widths and confirm the fringe count dropped

- [X] T006 Run the seven checks in `specs/004-polish-portrait-cutout/quickstart.md` at 320px, 390px, and 1280px, including hover on the wide screen, and confirm the neutral-gray fringe count from T002 has dropped on `src/assets/Portfolio/picture.png`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — can start immediately
- **Foundational (Phase 2)**: Depends on Setup — BLOCKS all user stories
- **User Stories (Phase 3+)**: Depend on Foundational. T003 and T004 both write `src/assets/Portfolio/picture.png`, so run them in order
- **Polish (Phase 6)**: Depends on the desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Starts after Foundational. No dependency on other stories
- **User Story 2 (P2)**: Starts after T003. It uses the untouched copy from T002 and must not leave a new fringe behind if it restores pixels
- **User Story 3 (P3)**: Starts after the portrait write. It only guards `src/components/Hero.jsx`

### Parallel Opportunities

- No task is marked [P]. T003 and T004 write the same portrait file
- T005 touches a different file, but it is a guard that runs after the portrait edit so the card check sees the polished picture

### Parallel Example: User Story 1

```text
T003 writes src/assets/Portfolio/picture.png.
Do not run another portrait edit beside it.
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: The pale outline is gone on a phone and on a wide screen, and the hair edge is still soft
5. Continue to User Story 2 before calling the portrait done, so the face and suit are confirmed unchanged

### Incremental Delivery

1. Setup + Foundational → original file measured and copied
2. User Story 1 → pale rim removed (MVP)
3. User Story 2 → same person confirmed
4. User Story 3 → card framing and wording unchanged
5. Polish → quickstart at 320px, 390px, and 1280px

### Parallel Team Strategy

One developer should own `src/assets/Portfolio/picture.png` for this feature. Splitting User Story 1 and User Story 2 across people will conflict in that file.

---

## Notes

- [P] tasks = different files, no dependencies. None qualify here
- [Story] label maps a task to its user story
- Each user story can be checked on its own after its task
- Tests were not requested
- Commit after each task or logical group
- Stop at any checkpoint to validate that story
