# Quickstart: Polish Portrait Cutout

## Prerequisites

- Dev server running (`npm run dev`)
- The featured card still uses `src/assets/Portfolio/picture.png`
- Python 3 is available for the pixel check. No extra package is required

## Run

Open the site and dismiss the opening sequence with Continue if it is still on screen. Stay on the opening screen so the featured card is in view.

## Checks

1. At 1280px wide, look around the hair, shoulders, sleeves, and hands. No pale outline separates the person from the dark card.
2. At 390px wide, the same edges have no pale outline.
3. At 320px wide, the same edges have no pale outline.
4. On a wide screen, hover and move across the card. The pale outline does not return, the head stays inside the frame, and FEATURED DEV stays off the head.
5. The face, beard, suit, pose, and clasped hands still match the portrait from before this edit.
6. The name, role, summary, View Projects, Contact Me, and Hire Me still read as they did before this change.
7. Confirm the file is still 666×1138. A pixel scan of partially transparent pixels no longer finds a neutral-gray fringe around the silhouette. The rules for that fringe are in [data-model.md](./data-model.md).

## Expected result

All seven checks pass. What the visitor should see is in [contracts/portrait-edge.md](./contracts/portrait-edge.md).
