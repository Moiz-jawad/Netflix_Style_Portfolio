# Data Model: Fit Featured Card

No stored data. These are the visible parts of the opening-screen card.

## FeaturedCard

The portrait frame on the opening screen.

| Field | Value |
| --- | --- |
| Screen sizes | Phone 320px–767px and wide 768px and up |
| Frame | Existing card width. Portrait area stays 330px tall below 768px and 390px tall at 768px and up |
| Contents | One Badge, then one Portrait |
| Motion | The card may tilt. The badge and portrait tilt together |

## Portrait

The current photograph at `src/assets/Portfolio/picture.png`.

| Field | Value |
| --- | --- |
| Subject | Moiz Jawad, unchanged file |
| Head | Top of the hair through the chin, including the ears |
| Fit | Fills the portrait area, aligned to the top |
| Crop allowed | Hands and lower body |
| Crop forbidden | Any part of the head, including on hover |

## Badge

The label on the featured card.

| Field | Value |
| --- | --- |
| Text | FEATURED DEV |
| Place | Inside the card, above the portrait, not over the head |
| Readable | The full label stays inside the card at 320px, 390px, and 1280px |

## Validation rules

- The head is fully inside the portrait area at 320px, 390px, and 1280px.
- The badge rectangle does not intersect the head at those widths, at rest or while the card is tilted or hovered.
- The photograph file is not replaced.
- Opening-screen name, role, summary, and the labels View Projects, Contact Me, and Hire Me are unchanged.
