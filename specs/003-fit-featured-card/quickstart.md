# Quickstart: Fit Featured Card

## Prerequisites

- Dev server running (`npm run dev`)
- The featured card uses `src/assets/Portfolio/picture.png`

## Run

Open the site and dismiss the opening sequence with Continue if it is still on screen. Stay on the opening screen so the featured card is in view.

## Checks

1. At 1280px wide, the top of the hair, the face, the ears, and the chin are inside the card. The hands may be cropped.
2. At 390px wide, the same head is fully inside the card.
3. At 320px wide, the same head is fully inside the card.
4. At each of those widths, the FEATURED DEV label is fully readable, inside the card, and does not touch the head.
5. On a wide screen, hover and move across the card. The head stays inside the frame and the label stays off the head.
6. The name, role, summary, View Projects, Contact Me, and Hire Me still read as they did before this change.
7. The photograph is still `src/assets/Portfolio/picture.png`.

## Expected result

All seven checks pass. Details of the card parts are in [data-model.md](./data-model.md) and [contracts/featured-card.md](./contracts/featured-card.md).
