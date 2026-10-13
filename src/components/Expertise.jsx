import Timeline from './ui/timeline';

const U = (id) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=80`;

/** Dark / red Netflix-toned stills for each career beat. */
const topJourneyData = [
  {
    id: '2025-june',
    year: '2025',
    month: 'June',
    content: 'Android Developer at Digital Empowerment Network — Flutter apps and offline-safe sync.',
    image: U('1511707171634-5f897ff02aa9'),
    imageAlt: 'Smartphone glowing in a dark frame — mobile chapter',
  },
  {
    id: '2025-sep-qonkar',
    year: '2025',
    month: 'September',
    content: 'Associate Software Developer at Qonkar Technologies — real-world front-end shipping.',
    image: U('1555066931-4365d14bab8c'),
    imageAlt: 'Code on a dark screen — front-end chapter',
  },
  {
    id: '2025-december-ship',
    year: '2025',
    month: 'December',
    content: 'Qonkar internship wrap — production web delivery from Sept 16 to Dec 15.',
    image: U('1461749280684-dccba630e2f6'),
    imageAlt: 'Monitor filled with code — shipping chapter',
  },
  {
    id: '2026-april',
    year: '2026',
    month: 'April',
    content: 'Junior Flutter Developer at TeamX Pakistan — cross-platform apps, APIs, and CI/CD.',
    image: U('1531297484001-80022131f5a1'),
    imageAlt: 'Modern MacBook on a dark desk — TeamX chapter',
  },
];

const bottomJourneyData = [
  {
    id: '2025-sep-flutter',
    year: '2025',
    month: 'September',
    content: 'Flutter track at DEN — modular UI that cut frontend build time by ~40%.',
    image: U('1518770660439-4636190af475'),
    imageAlt: 'Circuit board in deep shadow — Flutter systems chapter',
  },
  {
    id: '2026-may',
    year: '2026',
    month: 'May',
    content: 'Karachi base — TeamX, portfolio originals, and full-stack delivery worldwide.',
    image: U('1446776653964-20c1d3a81b06'),
    imageAlt: 'City lights at night — Karachi chapter',
  },
  {
    id: '2026-june',
    year: '2026',
    month: 'June',
    content: 'Shipping Flutter + React products with Node.js, Express, MongoDB, and Supabase.',
    image: U('1558494949-ef010cbdcc31'),
    imageAlt: 'Server racks in a dark data center — full-stack chapter',
  },
];

/**
 * Experience section — Hyperiux/21st horizontal Timeline,
 * Netflix-dark theme (#050505 / #E50914) with Moiz career milestones.
 */
const Expertise = () => (
  <Timeline
    id="expertise"
    title="Career Storyline"
    periodLabel="2025 — 2026"
    textColor="#ffffff"
    mutedTextColor="rgba(255,255,255,0.55)"
    activeColor="#E50914"
    backgroundColor="#050505"
    imageUrl={U('1574267432553-4b4628081c31')}
    imageAlt="Red cinema seats — career storyline opening frame"
    topJourneyData={topJourneyData}
    bottomJourneyData={bottomJourneyData}
    duration={1.4}
  />
);

export default Expertise;
