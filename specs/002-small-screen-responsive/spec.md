# Feature Specification: Small-Screen Responsive Layout

**Feature Branch**: `002-small-screen-responsive`

**Created**: 2026-10-09

**Status**: Draft

**Input**: User description: "for now it not responsive for small device made them responsive"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Read the whole portfolio on a phone (Priority: P1)

A visitor opens the portfolio on a phone and can read every section from the opening name through the footer. Text stays inside the screen, lines wrap, and the page itself does not scroll sideways.

**Why this priority**: The page is currently unusable on a small device if content is clipped or wider than the screen. Reading the profile is the reason the page exists.

**Independent Test**: Open the page at a narrow phone width and a common phone width, scroll from top to bottom, and confirm every section’s text is fully readable with no sideways page scroll.

**Acceptance Scenarios**:

1. **Given** a phone-width screen, **When** the visitor scrolls from the opening screen to the footer, **Then** the page does not scroll horizontally and no text is cut off by the screen edge.
2. **Given** the narrowest common phone width, **When** the visitor views the name, role, about text, experience, skills, projects, contact form, and footer, **Then** each block is stacked or wrapped so it fits the width.
3. **Given** a section whose content is taller than the screen, **When** the visitor scrolls, **Then** the hidden part can be reached and is not permanently covered.

---

### User Story 2 - Move between sections on a phone (Priority: P2)

A visitor on a phone can jump to Home, About, Expertise, Skills, Projects, and Contact, and can use View Projects, Contact Me, and Hire Me.

**Why this priority**: The section list is hidden on small screens today, so a phone visitor cannot jump to a section the way a desktop visitor can.

**Independent Test**: On a phone-width screen, open the section list, choose each destination, and confirm the matching section comes into view.

**Acceptance Scenarios**:

1. **Given** a phone-width screen, **When** the visitor opens the section list, **Then** Home, About, Expertise, Skills, Projects, and Contact are all available.
2. **Given** the section list is open, **When** the visitor chooses a section, **Then** that section is shown and the list does not keep covering the page.
3. **Given** the opening screen, **When** the visitor chooses View Projects or Contact Me, **Then** the projects or contact area is shown.

---

### User Story 3 - Use the page by touch (Priority: P3)

A visitor using a finger can activate controls, swipe through skills and projects, and fill the contact form without a mouse pointer or hover.

**Why this priority**: Small devices are touched. Controls that only appear on hover, or a pointer that replaces the finger, block the primary tasks.

**Independent Test**: With touch only, swipe every skill group and project, tap each primary control, and submit the contact form after filling every field.

**Acceptance Scenarios**:

1. **Given** a touch phone, **When** the visitor taps a control, **Then** the control responds without requiring hover.
2. **Given** the skills area, **When** the visitor swipes, **Then** every skill group can be brought fully on screen and its names can be read.
3. **Given** the projects area, **When** the visitor swipes, **Then** every project title, summary, and tags can be read.
4. **Given** the contact form, **When** the visitor fills each field and sends the message, **Then** the fields and the send action stay reachable while the on-screen keyboard is open.

---

### Edge Cases

- A 320px-wide screen still shows the name, role, and primary actions without overlap.
- A short landscape phone does not trap the visitor on the opening screen; the rest of the page can be scrolled to.
- Long profile text, long skill names, and the footer links wrap instead of forcing sideways scrolling.
- Zooming the page to 200% does not hide the send action or the section list.
- The opening name animation finishes or can be skipped so it does not block the page on a slow phone.
- If a project or skill list has one item or many items, swiping still reaches the first and last item.
- Rotating from portrait to landscape and back keeps the visitor in the same section without a blank or overlapping layout.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: On a phone-sized screen, the page MUST fit the screen width so the visitor never has to scroll the page sideways to read content.
- **FR-002**: The opening screen, about, experience, skills, projects, contact, and footer MUST each remain reachable and readable on a phone-sized screen.
- **FR-003**: Text that is visible on a wide screen MUST remain available on a phone-sized screen, wrapping or stacking rather than being clipped.
- **FR-004**: A phone visitor MUST be able to open a section list and go to Home, About, Expertise, Skills, Projects, and Contact.
- **FR-005**: View Projects, Contact Me, Hire Me, the profile links, and Send Message MUST be tappable on a phone-sized screen.
- **FR-006**: Primary controls MUST provide a touch area at least 44px on the shorter side.
- **FR-007**: Skills and projects MUST be browsable by touch so the first and last item can be read without a mouse.
- **FR-008**: The contact form MUST stack its fields on a phone-sized screen, and the visitor MUST be able to reach every field and the send action while typing.
- **FR-009**: Hover-only behavior MUST NOT be required to read content or activate a control on a phone.
- **FR-010**: The wide-screen layout and the existing profile wording MUST stay as they are, except where a phone layout needs the same wording to wrap or stack.
- **FR-011**: The opening sequence MUST end on its own within 3 seconds or offer a way to continue, so it does not block a phone visitor.

### Key Entities

- **Screen size class**: Phone-sized means a screen from 320px wide through 767px wide, in portrait or landscape. Wider screens keep the current layout.
- **Page section**: One of opening, about, experience, skills, projects, contact, and footer. Each section has a readable title and body on every screen size class.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: On both a 320px-wide screen and a 390px-wide screen, a visitor can scroll from the top of the page to the footer with zero horizontal scrolling of the page.
- **SC-002**: A visitor can reach every page section within 30 seconds using either scrolling or the section list.
- **SC-003**: 100% of the profile wording shown on a wide screen remains readable on a phone-sized screen, with no overlapping text.
- **SC-004**: Every primary control has a touch area of at least 44px on its shorter side, and a visitor can activate it with one tap.
- **SC-005**: A visitor can fill and send the contact form on a phone in one pass, without the keyboard covering the active field or the send action for the rest of the task.
- **SC-006**: After rotating between portrait and landscape, the same section is still visible and no content overlaps.

## Assumptions

- "Small device" means a phone-sized screen from 320px through 767px wide. Tablet and desktop widths already follow the current layout and are out of scope except to confirm they do not regress.
- The visitor’s goal is to read the existing portfolio and send a message. No new profile facts, sections, or languages are part of this feature.
- Touch is the primary input on a phone. A mouse pointer and hover are not required there.
- The opening sequence may stay, but it must not block reading for more than 3 seconds.
- Profile links stay the current GitHub and LinkedIn destinations. Their labels may wrap.
- A 44px shorter-side touch area is the acceptance measure for primary controls.
- The page is viewed in a normal mobile browser with the on-screen keyboard for the contact form.
