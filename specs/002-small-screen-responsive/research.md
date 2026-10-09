# Research: Small-Screen Responsive Layout

## Breakpoint

**Decision**: Treat phone-sized screens as widths below the existing `md` breakpoint (768px). Layout changes apply from 320px through 767px. At 768px and wider, the current layout stays.

**Rationale**: The spec defines phone-sized as 320px through 767px. The page already switches several regions at `md`, which in Tailwind CSS 4 is 768px. Reusing that boundary avoids a second, conflicting width rule.

**Alternatives considered**: A new 480px breakpoint was rejected because the spec’s upper bound is 767px. Switching on touch detection alone was rejected because a landscape phone wider than 767px is defined as the wide layout.

## Section navigation

**Decision**: On phone widths, replace the hidden section list with a button that opens and closes a panel of the same in-page links: Home, About, Expertise, Skills, Projects, and Contact. Choosing a link scrolls to that section and closes the panel. Widening the screen past 767px closes the panel and shows the existing horizontal list.

**Rationale**: The spec requires those six destinations, and the wide-screen list must stay. A panel reuses the current anchors (`#home`, `#about`, `#expertise`, `#skills`, `#projects`, `#contact`) without adding pages.

**Alternatives considered**: A permanently visible stacked list was rejected because it crowds the opening screen. A separate mobile route was rejected because the portfolio is one page.

## Page fit

**Decision**: On phone widths, let each section grow with its content instead of locking the opening screen, skills, and experience stack to exactly one screen height. Clip horizontal overflow at the page. Wrap or shrink display type that would otherwise extend past the screen. Keep the wide-screen heights and the current wording.

**Rationale**: Fixed screen heights and large display type are what push content sideways or hide the rest of a section. Growing with content satisfies the “scroll to reach the rest” rule without changing the wide layout.

**Alternatives considered**: Scaling the entire wide layout down to fit a phone was rejected because text would become unreadable and controls would miss the 44px touch size.

## Pointer and hover

**Decision**: Below 768px, show the system pointer, do not render the decorative cursor, and do not require hover to read or activate anything. Touch targets for View Projects, Contact Me, Hire Me, section links, profile links, and Send Message are at least 44px on the shorter side.

**Rationale**: The page currently hides the system pointer. That only works with a mouse. The spec forbids hover-only behavior on a phone.

**Alternatives considered**: Keeping the decorative cursor and enlarging it was rejected because a finger has no hover position.

## Skills and projects

**Decision**: On phone widths, skills stay a horizontal row the visitor can swipe, but the section scrolls with the page instead of occupying a locked screen. Project cards are readable and swipable immediately; the folder animation must not leave them untouchable. The first and last card of either list remain reachable when the list has one item or many.

**Rationale**: Both areas already have a phone presentation, but the skills section is locked to the screen height and the project row does not accept touch until an animation finishes.

**Alternatives considered**: Replacing both carousels with a vertical list was rejected for projects and skills because swiping is an accepted scenario in the spec and the wide-screen presentation should stay.

## Contact and opening sequence

**Decision**: Keep the contact fields stacked below 768px. Add enough scroll space that the focused field and Send Message can be brought above the on-screen keyboard. The opening sequence already runs for about 2.3 seconds; add a tap target that continues immediately so a slow phone still meets the 3-second limit.

**Rationale**: The form already stacks at the `md` boundary. The remaining gap is the keyboard. The time limit is already met on a normal load, and a continue control covers the slow-device case in the spec.

**Alternatives considered**: Removing the opening sequence was rejected because the spec allows it to remain when it does not block reading.

## Validation

**Decision**: Validate with the existing dev server in a browser at 320px, 390px, a short landscape phone under 767px wide, and a 1280px-wide screen. Do not add a test framework for this feature.

**Rationale**: The repository has no test runner, and the acceptance checks are visual and interactive. A new framework would be outside the layout scope.

**Alternatives considered**: Adding an automated browser suite was rejected as extra scope for a one-page layout change.
