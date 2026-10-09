# Quickstart: Small-Screen Responsive Layout

Validate the phone layout against [spec.md](./spec.md), the screen classes in [data-model.md](./data-model.md), and the behavior in [contracts/phone-layout.md](./contracts/phone-layout.md).

## Prerequisites

- Node.js and npm installed.
- Dependencies installed with `npm install` from the repository root.

## Run

```bash
npm run dev
```

Open the printed local URL.

## Checks

1. Set the browser width to 320px. Scroll from the opening name to the footer. The page does not scroll sideways, and the name, role, about text, experience, skills, projects, contact form, and footer are readable.
2. Repeat at 390px wide.
3. At either phone width, open the section list and activate Home, About, Expertise, Skills, Projects, and Contact. Each section comes into view and the list closes.
4. Tap View Projects, Contact Me, and Hire Me. Each touch area is at least 44px on the shorter side.
5. Swipe skills and projects until the first and last item have been readable.
6. Focus each contact field with the on-screen keyboard. The active field and Send Message can be brought into view. Submit a valid message.
7. Rotate a phone-sized view between portrait and landscape. The section that was visible stays visible and nothing overlaps.
8. At 1280px wide, confirm the horizontal section list, opening layout, and profile wording match the pre-change wide layout.
9. Reload at 390px. The opening sequence ends within 3 seconds, or Continue dismisses it sooner.

## Expected result

All nine checks pass. Profile links still open the existing GitHub and LinkedIn profiles.
