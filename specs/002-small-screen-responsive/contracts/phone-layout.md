# UI Contract: Phone Layout

The portfolio remains one page. This contract is the visitor-facing behavior below 768px. At 768px and wider, the current layout remains the contract.

## Sections

| Anchor | Section | Phone presentation |
| --- | --- | --- |
| `#home` | Opening | Name, role, summary, and primary actions fit the width. Content taller than the screen scrolls into view. |
| `#about` | About | Biography, milestones, and tools stack and wrap. |
| `#expertise` | Experience | Role cards follow one another down the page and do not stick over later cards. |
| `#skills` | Skills | Groups swipe horizontally. The page itself still scrolls vertically. |
| `#projects` | Projects | Cards swipe horizontally and accept touch without waiting for an animation. |
| `#contact` | Contact | Fields stack. The active field and Send Message can be scrolled above the keyboard. |
| end of page | Footer | Name, section links, profile links, location, and copyright wrap inside the screen. |

## Section list

- A button labeled so a visitor knows it opens sections is visible on the opening screen.
- The open panel lists Home, About, Expertise, Skills, Projects, and Contact, in that order.
- Activating an item scrolls to its anchor and closes the panel.
- The panel does not cover the chosen section after navigation.

## Primary actions

View Projects, Contact Me, Hire Me, each section link, GitHub, LinkedIn, Send Message, and Continue each expose a touch area at least 44px on the shorter side and activate on a single tap.

## Invariants

- No sideways scrolling of the page at 320px or 390px width.
- Profile wording shown on a wide screen is still present.
- GitHub and LinkedIn destinations do not change.
- Rotation between portrait and landscape keeps the current section visible and unobscured.
