# Data Model: Polish Portrait Cutout

No stored records. These are the portrait file and the card that shows it.

## Portrait

The featured photograph at `src/assets/Portfolio/picture.png`.

| Field | Value |
| --- | --- |
| Subject | The same person, dark suit, clasped hands |
| Size | 666×1138 pixels, unchanged |
| Format | 8-bit RGBA PNG |
| Interior | Opaque pixels for the face, beard, suit, and hands stay as they are |
| Path | `src/assets/Portfolio/picture.png` remains the file the opening screen shows |

## CutoutEdge

The partially transparent rim around the person.

| Field | Value |
| --- | --- |
| Where | Hair, shoulders, sleeves, and hands |
| Before | Neutral gray color with partial transparency |
| After | Same transparency, color taken from the nearest opaque subject pixel |
| Left alone | Skin-colored partial pixels on the face, and every opaque pixel |

## FeaturedCard

The opening-screen frame that displays the portrait.

| Field | Value |
| --- | --- |
| Screen sizes | Phone 320px–767px and wide 768px and up |
| Frame | Unchanged. Head from the top of the hair through the chin stays inside |
| Badge | FEATURED DEV, above the portrait, off the head |
| Motion | Tilt and hover do not reveal a pale rim |

## Validation rules

- After the edit, a scan of partial-transparency pixels finds no neutral-gray fringe of the kind measured before the edit.
- Image width stays 666 and height stays 1138.
- Opaque face, beard, suit, and hand pixels are unchanged.
- At 320px, 390px, and 1280px, the card shows no pale outline, the head stays inside the frame, and the badge stays off the head.
- Opening-screen name, role, summary, and the labels View Projects, Contact Me, and Hire Me are unchanged.
