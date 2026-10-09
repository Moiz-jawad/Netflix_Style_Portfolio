# Data Model: Small-Screen Responsive Layout

No persisted records. These are the layout concepts the page must honor.

## ScreenSizeClass

| Field | Rule |
| --- | --- |
| name | `phone` or `wide` |
| minWidth | Phone: 320px. Wide: 768px. |
| maxWidth | Phone: 767px. Wide: none. |
| input | Phone uses touch. Wide may use a pointer and hover. |

A landscape phone whose width is 768px or more is `wide`. Rotation does not create a third class.

## PageSection

| Field | Rule |
| --- | --- |
| id | `home`, `about`, `expertise`, `skills`, `projects`, `contact`, `footer` |
| anchor | `#home`, `#about`, `#expertise`, `#skills`, `#projects`, `#contact`. The footer is reached by scrolling to the end. |
| requiredContent | The wording already shown on a wide screen, wrapped or stacked on a phone. No new facts. |

Every section is reachable by scrolling. The six anchored sections are also reachable from the phone section list.

## PrimaryControl

| Name | Target | Minimum touch size on a phone |
| --- | --- | --- |
| Section list button | Opens or closes the phone section list | 44px shorter side |
| Section link | Matching page section | 44px shorter side |
| View Projects | `#projects` | 44px shorter side |
| Contact Me | `#contact` | 44px shorter side |
| Hire Me | `#hire` | 44px shorter side |
| GitHub | Existing GitHub profile URL | 44px shorter side |
| LinkedIn | Existing LinkedIn profile URL | 44px shorter side |
| Send Message | Submits the contact form | 44px shorter side |
| Continue | Dismisses the opening sequence | 44px shorter side |

## SectionListState

States: `closed`, `open`.

- Phone load starts `closed`.
- The section button toggles `open` and `closed`.
- Choosing a section link moves to `closed` and shows that section.
- Entering the `wide` class forces `closed` and shows the horizontal list instead of the button.

## OpeningSequenceState

States: `playing`, `finished`.

- `playing` lasts at most 3 seconds, or until Continue is used.
- `finished` shows the page and does not cover it again during the visit.

## Validation rules

- Phone page scroll is vertical only. Content may swipe inside skills and projects.
- Overlapping text is invalid in both size classes.
- Wide-screen layout and profile wording stay unchanged except where phone layout wraps or stacks the same words.
- A list of one skill group or one project is still fully readable. A longer list can reach the first and last item.
