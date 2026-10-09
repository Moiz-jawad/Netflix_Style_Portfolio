# Feature Specification: Fit Featured Card

**Feature Branch**: `003-fit-featured-card`

**Created**: 2026-10-09

**Status**: Draft

**Input**: User description: "for the featured card: show the full head inside the frame, and keep the FEATURED DEV badge off the face, on both phone and wide screens."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - See the full head in the featured card (Priority: P1)

A visitor looking at the opening screen sees the featured portrait with the whole head inside the card frame. The top of the hair, the face, and the chin are not cut off by the frame.

**Why this priority**: The card is the first portrait a visitor sees. A cropped head makes the person look unfinished and is the problem reported on the current card.

**Independent Test**: Open the opening screen on a phone-sized screen and on a wide screen. Confirm the top of the hair through the chin sits inside the card frame on both.

**Acceptance Scenarios**:

1. **Given** a wide screen, **When** the visitor views the featured card, **Then** the whole head, from the top of the hair through the chin, is inside the frame.
2. **Given** a phone-sized screen, **When** the visitor views the featured card, **Then** the whole head, from the top of the hair through the chin, is inside the frame.
3. **Given** either screen size, **When** the visitor looks at the card, **Then** the portrait is still the same person and the same photograph.

---

### User Story 2 - Keep the badge off the face (Priority: P2)

A visitor can read the FEATURED DEV badge without it covering the face or the hair.

**Why this priority**: The badge currently crosses the forehead, so the label and the face compete. The head must stay clear even after the frame shows the full head.

**Independent Test**: On a phone-sized screen and on a wide screen, confirm the badge text is fully readable and that no part of the badge touches the hair, forehead, eyes, nose, mouth, beard, or ears.

**Acceptance Scenarios**:

1. **Given** a wide screen, **When** the visitor views the featured card, **Then** the FEATURED DEV badge does not cover any part of the head.
2. **Given** a phone-sized screen, **When** the visitor views the featured card, **Then** the FEATURED DEV badge does not cover any part of the head.
3. **Given** either screen size, **When** the visitor reads the badge, **Then** the words FEATURED DEV are fully visible inside the card.

---

### User Story 3 - Leave the rest of the opening screen alone (Priority: P3)

A visitor still sees the same name, role, summary, and primary actions around the card. Only the way the portrait and badge sit inside the card changes.

**Why this priority**: The card fit should not rewrite the profile or undo the phone layout around it.

**Independent Test**: Compare the opening screen before and after on a phone-sized screen and on a wide screen. The name, role, summary, and action labels are unchanged, and the card still shows the featured portrait.

**Acceptance Scenarios**:

1. **Given** the opening screen, **When** the visitor reads the name, role, and summary, **Then** the wording is the same as before this feature.
2. **Given** the opening screen, **When** the visitor looks for View Projects, Contact Me, and Hire Me, **Then** those actions are still present with the same labels.

---

### Edge Cases

- On a 320px-wide screen, the full head stays inside the frame and the badge stays off the head.
- On a 1280px-wide screen, the full head stays inside the frame and the badge stays off the head.
- The lower body and hands may sit outside the frame when that is the only way to keep the whole head inside.
- The badge may sit over the suit or the card background, and it must not sit over the head.
- Tilting or hovering the card does not crop the head or move the badge onto the head.
- The badge remains inside the card and does not spill past the frame.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The featured card MUST show the whole head inside the frame, from the top of the hair through the chin, on a phone-sized screen and on a wide screen.
- **FR-002**: The featured card MUST use the current portrait of the same person. This feature MUST NOT replace that photograph.
- **FR-003**: The FEATURED DEV badge MUST NOT cover the hair, forehead, eyes, nose, mouth, beard, or ears on a phone-sized screen or on a wide screen.
- **FR-004**: The badge MUST remain inside the card, and the words FEATURED DEV MUST stay fully readable.
- **FR-005**: The name, role, summary, and the labels View Projects, Contact Me, and Hire Me on the opening screen MUST stay as they are.
- **FR-006**: Moving or hovering the card MUST NOT crop the head or place the badge over the head.

### Key Entities

- **Featured card**: The portrait frame on the opening screen, including its badge. It appears on both phone-sized and wide screens.
- **Portrait**: The current photograph of the person. The head is the region from the top of the hair through the chin, including the ears.
- **Badge**: The label that reads FEATURED DEV. It belongs to the card and must stay off the head.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: At 320px, 390px, and 1280px wide, 100% of the head from the top of the hair through the chin is inside the card frame.
- **SC-002**: At those same three widths, the badge overlaps 0% of the head.
- **SC-003**: At those same three widths, the words FEATURED DEV are fully readable and sit entirely inside the card.
- **SC-004**: The opening-screen name, role, summary, and the three action labels remain unchanged on both a phone-sized screen and a wide screen.

## Assumptions

- A phone-sized screen is 320px through 767px wide. A wide screen is 768px and up. These match the sizes already used for the portfolio.
- "Full head" means the top of the hair, the face, the ears, and the chin. It does not require the hands or the full body to stay inside the frame.
- "Off the face" means off the whole head, not only off the eyes and mouth. The badge may cover the suit or the empty area of the card.
- The badge wording stays FEATURED DEV. Only its placement relative to the head may change.
- Other page sections, profile facts, and profile-link destinations are out of scope.
- The phone section list and touch behavior from the small-screen layout stay as they are, except where the card frame or badge must move to meet this spec.
