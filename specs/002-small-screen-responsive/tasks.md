# Tasks: Small-Screen Responsive Layout

**Input**: Design documents from `/specs/002-small-screen-responsive/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Not requested. Validation is the manual quickstart in the polish phase.

**Organization**: Tasks are grouped by user story so each story can be implemented and tested on its own.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/` at repository root
- Paths below match `specs/002-small-screen-responsive/plan.md`

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Lock the width rule before any layout edit

- [X] T001 Document in `src/index.css` that phone layout is 320px through 767px and wide layout is 768px and above, matching ScreenSizeClass in `specs/002-small-screen-responsive/data-model.md`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Stop phone widths from scrolling sideways or losing the system pointer

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T002 [P] In `src/index.css`, clip horizontal overflow on the document and add scroll padding so jumps to `#home`, `#about`, `#expertise`, `#skills`, `#projects`, and `#contact` are not hidden under the header
- [X] T003 [P] In `src/App.jsx`, apply `cursor-none` only at 768px and above so widths 320px through 767px keep the system pointer
- [X] T004 [P] In `src/components/CustomCursor.jsx`, render nothing when the viewport is below 768px

**Checkpoint**: Foundation ready — user story implementation can now begin

---

## Phase 3: User Story 1 - Read the whole portfolio on a phone (Priority: P1) 🎯 MVP

**Goal**: A visitor can scroll from the opening name to the footer on a phone with no sideways page scroll and no clipped profile wording

**Independent Test**: At 320px and 390px wide, scroll from the top to the footer. The page does not scroll horizontally, and the name, role, about text, experience, skills, projects, contact form, and footer are readable.

### Implementation for User Story 1

- [X] T005 [P] [US1] In `src/components/Hero.jsx`, below 768px replace the locked screen height with a minimum height so opening content can scroll, hide the local cursor dots, and wrap the name, role, stack line, and summary inside 320px. At 768px and above keep the current opening layout and wording
- [X] T006 [P] [US1] In `src/components/About.jsx`, stack the biography, milestones, and tools in one column below 768px and let that text wrap inside 320px without changing the wording
- [X] T007 [P] [US1] In `src/components/Expertise.jsx`, lay role cards in normal document flow below 768px so later cards are not covered by sticky cards, keeping the existing role wording
- [X] T008 [P] [US1] In `src/components/Skills.jsx`, below 768px let the section grow with the page instead of locking to one screen height, and wrap skill names inside the card
- [X] T009 [P] [US1] In `src/components/Projects.jsx`, below 768px keep each card’s title, summary, and tags inside the screen width so the page itself does not scroll sideways
- [X] T010 [P] [US1] In `src/components/Contact.jsx`, below 768px keep the fields in one column and let the section grow taller than the screen instead of clipping the form
- [X] T011 [P] [US1] In `src/components/Footer.jsx`, wrap the section links, profile links, location, and copyright so a 320px width does not scroll sideways

**Checkpoint**: User Story 1 is readable on a phone without the section list or touch-size work

---

## Phase 4: User Story 2 - Move between sections on a phone (Priority: P2)

**Goal**: A phone visitor can open a section list and jump to every anchored section

**Independent Test**: Below 768px, open the section list and choose Home, About, Expertise, Skills, Projects, and Contact. Each section comes into view and the list closes. At 768px and above, the existing horizontal list is shown instead.

### Implementation for User Story 2

- [X] T012 [P] [US2] In `src/components/Hero.jsx`, set `id="home"` on the opening section. Below 768px add a section button at least 44px on the shorter side that toggles the list between closed and open. The open panel lists Home, About, Expertise, Skills, Projects, and Contact, linking to `#home`, `#about`, `#expertise`, `#skills`, `#projects`, and `#contact`. Choosing a link closes the list. At 768px and above force the list closed and keep the existing horizontal navigation and labels
- [X] T013 [P] [US2] In `src/components/Contact.jsx`, add `id="hire"` on the contact section so the existing Hire Me link in `src/components/Hero.jsx` lands on the contact area without changing form wording

**Checkpoint**: User Stories 1 and 2 both work on a phone

---

## Phase 5: User Story 3 - Use the page by touch (Priority: P3)

**Goal**: A finger can activate every primary control, swipe skills and projects, and complete the contact form without hover

**Independent Test**: With touch only below 768px, swipe to the first and last skill group and project card, tap each primary control, and submit the contact form while the keyboard is open.

### Implementation for User Story 3

- [X] T014 [P] [US3] In `src/components/Hero.jsx`, give View Projects, Contact Me, Hire Me, and each phone section link a touch area at least 44px on the shorter side, and activate them on a single tap without hover
- [X] T015 [P] [US3] In `src/components/Footer.jsx`, give the section links, GitHub (`https://github.com/Moiz-jawad`), and LinkedIn (`https://pk.linkedin.com/in/moiz-jawad`) a touch area at least 44px on the shorter side below 768px without changing those destinations
- [X] T016 [P] [US3] In `src/components/Contact.jsx`, make Send Message at least 44px on the shorter side and add scroll margin plus bottom padding so the focused field and Send Message can sit above the on-screen keyboard
- [X] T017 [P] [US3] In `src/components/Projects.jsx`, below 768px enable pointer events on the project scroller immediately, without waiting for the folder animation, and allow a swipe to reach the first and last card
- [X] T018 [P] [US3] In `src/components/Skills.jsx`, below 768px keep horizontal touch panning able to reach the first and last skill group, and do not let skill chips widen the page

**Checkpoint**: All three user stories work independently

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Opening-sequence limit and the full quickstart

- [X] T019 [P] In `src/components/NetflixPreloader.jsx`, add a Continue control at least 44px on the shorter side that dismisses the sequence immediately, while the automatic finish stays at or under 3 seconds
- [X] T020 Run the nine checks in `specs/002-small-screen-responsive/quickstart.md` at 320px, 390px, a landscape width still under 767px, and 1280px

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — can start immediately
- **Foundational (Phase 2)**: Depends on Setup — BLOCKS all user stories
- **User Stories (Phase 3+)**: Depend on Foundational completion
  - US1 has no dependency on US2 or US3
  - US2 and US3 are independently testable after Foundational, but they edit files that US1 also edits (`src/components/Hero.jsx`, `src/components/Contact.jsx`, `src/components/Footer.jsx`, `src/components/Projects.jsx`, `src/components/Skills.jsx`). Finish the US1 task for a file before the later story task for that same file
- **Polish (Phase 6)**: Depends on the desired stories being complete. T020 depends on T019

### User Story Dependencies

- **User Story 1 (P1)**: Starts after Foundational. No dependency on other stories
- **User Story 2 (P2)**: Starts after Foundational. Uses the same anchors US1 makes readable. Does not require US3
- **User Story 3 (P3)**: Starts after Foundational. Touch sizing and swipe behavior sit on top of the US1 layout for the shared files

### Parallel Opportunities

- T002, T003, and T004 touch different files and can run together
- T005 through T011 touch different files and can run together
- T012 and T013 touch different files and can run together
- T014 through T018 touch different files and can run together
- T019 can start once the stories are done; T020 waits for T019

### Parallel Example: User Story 1

```bash
Task: "T006 Stack and wrap about content in src/components/About.jsx"
Task: "T007 Flow expertise cards in src/components/Expertise.jsx"
Task: "T008 Let skills grow with the page in src/components/Skills.jsx"
Task: "T011 Wrap footer content in src/components/Footer.jsx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Scroll a 320px and a 390px width from top to footer with no sideways scrolling
5. Demo the readable phone page before adding navigation or touch sizing

### Incremental Delivery

1. Setup + Foundational → pointer and overflow baseline
2. User Story 1 → readable phone page (MVP)
3. User Story 2 → section jumps
4. User Story 3 → touch targets, swipe, and the contact keyboard
5. Polish → Continue control and the quickstart checklist

### Parallel Team Strategy

After Foundational:

- Developer A: User Story 1 files
- Developer B: User Story 2 after `src/components/Hero.jsx` US1 work lands
- Developer C: User Story 3 after the matching US1 file lands

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps a task to US1, US2, or US3
- Phone means 320px through 767px. Wide means 768px and above
- Do not change profile wording or the GitHub and LinkedIn destinations
- Commit after each task or logical group
- Stop at any checkpoint to validate that story on its own
