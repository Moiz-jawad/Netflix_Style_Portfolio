# Research: Polish Portrait Cutout

## Where the rim comes from

**Decision**: Treat the pale outline as contaminated color in `src/assets/Portfolio/picture.png`, not as a problem in the card layout.

**Rationale**: The file is a 666×1138 8-bit RGBA PNG. The area outside the person is transparent. Along the hair, shoulders, sleeves, and hands, partially transparent pixels are neutral gray (about 100–130 in each channel) while the opaque suit next to them is near black (about 30). Drawn on the dark card, that gray fringe becomes a light rim. The face edge is different: those partial pixels are already skin-colored, so they are not the cutout line.

**Alternatives considered**:

- A CSS filter on the card would brighten or darken the whole portrait, including the face.
- A mask that clips the silhouette would make the hair and hands jagged and would hide part of the person.
- Replacing the file with a different photograph would break the requirement to keep the same person.

## How to remove it

**Decision**: Recolor only the neutral-gray, partially transparent edge pixels to the color of the nearest opaque subject pixel. Keep each pixel’s alpha so the edge stays soft. Do not change opaque interior pixels. Write the result back to `src/assets/Portfolio/picture.png` at the same 666×1138 size.

**Rationale**: Keeping alpha preserves fine hair. Copying the nearby suit, skin, or hand color makes the soft edge match the person instead of a gray matte. Opaque pixels hold the face, beard, suit, and hands, so leaving them unchanged keeps the same photograph. Python’s standard library can read and write this non-interlaced PNG, so the site gains no dependency.

**Alternatives considered**:

- Deleting partial pixels (alpha set to 0) removes the rim but leaves a hard cutout, which the spec rejects for the hair.
- Assuming one white background color and un-matting the whole image also shifts skin tones on the face edge.
- Adding Pillow or ImageMagick would be a new tool for a one-time edit. The standard library is enough.

## What stays on the page

**Decision**: Do not edit `src/components/Hero.jsx` for this feature. It already imports `picture.png`, aligns the portrait to the top, and places FEATURED DEV above the head.

**Rationale**: The spec keeps the frame, the badge, and the opening-screen wording. Changing the card would risk cropping the head or covering the face again. Because the rim is in the file, a new file at the same path updates the card on both phone and wide screens, including while the card tilts.
