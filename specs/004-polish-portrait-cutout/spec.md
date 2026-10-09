# Feature Specification: Polish Portrait Cutout

**Feature Branch**: `004-polish-portrait-cutout`

**Created**: 2026-10-09

**Status**: Draft

**Input**: User description: "i want polsihed this picture the cutout visable can you polished this?"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Remove the visible cutout edge (Priority: P1)

A visitor looking at the featured card sees a polished portrait. The pale outline left by the background cutout is no longer visible around the hair, shoulders, sleeves, or hands.

**Why this priority**: The outline makes the portrait look pasted onto the card. Cleaning that edge is the change the owner asked for.

**Independent Test**: Open the featured card on a phone-sized screen and on a wide screen. Look around the hair, shoulders, sleeves, and hands. No pale fringe separates the person from the dark card.

**Acceptance Scenarios**:

1. **Given** a wide screen, **When** the visitor views the featured card, **Then** no pale outline is visible around the hair, shoulders, sleeves, or hands.
2. **Given** a phone-sized screen, **When** the visitor views the featured card, **Then** no pale outline is visible around the hair, shoulders, sleeves, or hands.
3. **Given** either screen size, **When** the visitor looks at the portrait against the dark card, **Then** the person blends into the card without a bright rim.

---

### User Story 2 - Keep the same person (Priority: P2)

A visitor still recognizes the same portrait: the same face, beard, suit, pose, and clasped hands. Polishing the edge does not replace the person or restyle the clothing.

**Why this priority**: A cleaner edge is only useful if the portrait is still the owner’s photograph.

**Independent Test**: Compare the portrait before and after. The face, beard, suit, pose, and clasped hands match the current photograph.

**Acceptance Scenarios**:

1. **Given** the polished portrait, **When** the visitor looks at the face and beard, **Then** they match the current photograph.
2. **Given** the polished portrait, **When** the visitor looks at the suit and clasped hands, **Then** the pose and clothing match the current photograph.

---

### User Story 3 - Keep the card framing (Priority: P3)

A visitor still sees the whole head inside the frame, the FEATURED DEV badge off the head, and the same name, role, and actions around the card.

**Why this priority**: Polishing the photograph should not undo the card fit or rewrite the opening screen.

**Independent Test**: On a phone-sized screen and on a wide screen, confirm the head is inside the frame, the badge does not cover the head, and the opening-screen wording is unchanged.

**Acceptance Scenarios**:

1. **Given** either screen size, **When** the visitor views the featured card, **Then** the whole head, from the top of the hair through the chin, is inside the frame.
2. **Given** either screen size, **When** the visitor views the badge, **Then** FEATURED DEV is readable and does not cover the head.
3. **Given** the opening screen, **When** the visitor reads the name, role, and the labels View Projects, Contact Me, and Hire Me, **Then** that wording is unchanged.

---

### Edge Cases

- On a 320px-wide screen, the pale outline is still absent around the hair and the shoulders.
- On a 1280px-wide screen, the pale outline is still absent, including along the sleeves and hands.
- Fine hair at the top of the head stays natural and is not replaced by a hard or jagged edge.
- The lower body may remain outside the frame, as it does today, as long as the visible edge has no pale outline.
- Hovering or tilting the card does not bring the pale outline back.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The featured portrait MUST NOT show a pale cutout outline around the hair, shoulders, sleeves, or hands on a phone-sized screen or on a wide screen.
- **FR-002**: The portrait MUST remain the same person in the same suit and the same clasped-hands pose. This feature MUST NOT substitute a different photograph.
- **FR-003**: The whole head, from the top of the hair through the chin, MUST stay inside the card frame on a phone-sized screen and on a wide screen.
- **FR-004**: The FEATURED DEV badge MUST stay readable, inside the card, and off the head.
- **FR-005**: The opening-screen name, role, summary, and the labels View Projects, Contact Me, and Hire Me MUST stay as they are.
- **FR-006**: Hovering or tilting the card MUST NOT reveal a pale outline around the person.

### Key Entities

- **Portrait**: The current featured photograph of the person in a dark suit with clasped hands.
- **Cutout edge**: The pale fringe around the hair, shoulders, sleeves, and hands that shows the background was removed.
- **Featured card**: The dark frame on the opening screen where that portrait is shown, including the FEATURED DEV badge.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: At 320px, 390px, and 1280px wide, a visitor sees no pale outline around the hair, shoulders, sleeves, or hands.
- **SC-002**: In a side-by-side look, the face, beard, suit, pose, and clasped hands still match the current portrait.
- **SC-003**: At those same three widths, 100% of the head from the top of the hair through the chin is inside the frame, and the badge overlaps 0% of the head.
- **SC-004**: The opening-screen name, role, summary, and the three action labels remain unchanged.

## Assumptions

- "The cutout visible" means the pale fringe around the person on the current featured portrait, not a request for a new photo or a new background scene.
- Polished means that fringe is gone on the dark card at a normal viewing distance. The face, clothing, and pose stay.
- A phone-sized screen is 320px through 767px wide. A wide screen is 768px and up.
- The featured card, badge placement, and opening-screen wording stay as they are, except for the portrait edge itself.
- Other page sections and profile-link destinations are out of scope.
