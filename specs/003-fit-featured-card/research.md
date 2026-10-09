# Research: Fit Featured Card

## Portrait crop

**Decision**: Keep `object-cover` and add `object-top` on the portrait in `src/components/Hero.jsx`.

**Rationale**: The photograph is a tall portrait (666×1138) with the head near the top. The frame is shorter than that portrait (`h-[330px]`, `md:h-[390px]`). `object-cover` fills the frame and, with the default center position, cuts the top of the hair and the lower body. `object-top` keeps the top of the photograph, including the hair, and lets the extra crop fall on the hands and lower body. Tailwind documents `object-cover` for filling a box and `object-top` for aligning that content to the top.

**Alternatives considered**:

- `object-contain` shows the full body but shrinks the person and leaves empty bars in the frame.
- A custom position such as a percentage offset is a magic number. `object-top` matches a head-at-the-top photograph and is a documented utility.
- Making the frame tall enough for the whole body changes the card more than the spec requires. The spec allows the hands and lower body to sit outside the frame.
- Editing `picture.png` would change the photograph. The spec forbids replacing it.

## Badge placement

**Decision**: Render the FEATURED DEV badge in normal flow above the portrait, inside the card padding, instead of absolutely over the photograph.

**Rationale**: The badge is currently `absolute top-6 left-6`, so it sits on the forehead once the head is at the top of the frame. A badge above the image cannot cover the hair, face, or ears, stays inside the card, and keeps the words FEATURED DEV. The same placement applies below 768px and at 768px and above.

**Alternatives considered**:

- Leaving the badge over the suit still covers the photograph and can collide with the hands.
- Keeping it over the upper corner fails as soon as the head moves to the top of the frame.

## Hover and tilt

**Decision**: Remove the portrait’s hover scale (`group-hover:scale-[1.02]`). Leave the existing card tilt, which rotates the card, badge, and portrait together.

**Rationale**: Scaling the covered image inside a fixed frame crops the edges further and can clip the hair. The tilt transform is on the card wrapper, so the badge and the head move as one unit. With the badge above the portrait, tilt does not place it on the head.

**Alternatives considered**:

- Keeping the 1.02 scale and adding inner padding is extra space that still shrinks away on hover.
- Disabling tilt is unnecessary. The spec only requires that tilt not crop the head or cover it with the badge.
