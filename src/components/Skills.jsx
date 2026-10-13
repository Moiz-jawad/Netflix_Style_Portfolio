import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FocusPullCarousel from './ui/focus-pull-carousel';

gsap.registerPlugin(ScrollTrigger);

const U = (id) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=1400&auto=format&fit=crop`;

/** Cinematic, dark, Netflix-adjacent stills — one per skill stack. */
const skillCategories = [
  {
    title: 'Mobile',
    desc: 'Cross-platform apps with Flutter and Dart — Provider, Riverpod, Material, Cupertino, and motion polish.',
    tag: 'FLUTTER',
    skills: ['Flutter', 'Dart', 'Provider', 'Riverpod', 'Material Design', 'Cupertino', 'Animations', 'Lottie'],
    image: U('1511707171634-5f897ff02aa9'),
    alt: 'Smartphone glowing in a dark cinematic frame',
  },
  {
    title: 'Frontend',
    desc: 'Web interfaces with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui.',
    tag: 'REACT',
    skills: ['React', 'TypeScript', 'HTML5', 'CSS3', 'Redux', 'Vite', 'Tailwind CSS', 'shadcn/ui'],
    image: U('1555066931-4365d14bab8c'),
    alt: 'Code on a dark screen with neon highlights',
  },
  {
    title: 'Backend',
    desc: 'Server and cloud work with Node.js, Express, MongoDB, Supabase, and Firebase.',
    tag: 'APIS',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'Supabase', 'Firebase', 'Firestore', 'Storage'],
    image: U('1558494949-ef010cbdcc31'),
    alt: 'Server racks lit in a dark data center',
  },
  {
    title: 'Integrations',
    desc: 'REST APIs, JWT and OAuth, real-time systems, Maps, AI, and AdMob/AdSense.',
    tag: 'SYSTEMS',
    skills: ['REST APIs', 'JWT', 'OAuth', 'Real-time', 'Google Maps', 'AI integrations', 'AdMob'],
    image: U('1518770660439-4636190af475'),
    alt: 'Circuit board close-up in deep shadow',
  },
  {
    title: 'Delivery',
    desc: 'Git, CI/CD, Agile, code reviews, and hosting on Render, GitHub Pages, and cloud.',
    tag: 'PRACTICE',
    skills: ['Git', 'GitHub', 'CI/CD', 'Agile', 'Code review', 'Render', 'GitHub Pages'],
    image: U('1446776653964-20c1d3a81b06'),
    alt: 'City lights at night from above',
  },
  {
    title: 'Certificates',
    desc: 'Certifications listed on the resume.',
    tag: 'CERTS',
    skills: [
      'Dart/Flutter Bootcamp',
      'Firebase for Flutter',
      'Google Mobile Ads',
      'JavaScript Essentials',
      'Node.js & Express',
      'React JS',
    ],
    // Classic red theater seats — reads clearly under the Netflix overlay.
    image: U('1574267432553-4b4628081c31'),
    alt: 'Rows of red cinema seats in a dark theater',
  },
];

const slides = skillCategories.map((category, i) => ({
  title: category.title,
  caption: category.desc,
  image: category.image,
  alt: category.alt,
  overlay: (
    <div
      className={`flex h-full flex-col justify-between p-6 md:p-8 ${
        category.title === 'Certificates'
          ? 'bg-gradient-to-t from-black via-black/65 to-red-950/25'
          : 'bg-gradient-to-t from-black via-black/75 to-black/25'
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="rounded border border-red-600/40 bg-red-600/20 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest text-red-400 backdrop-blur-sm">
          {category.tag}
        </span>
        <span className="font-mono text-xs text-white/55">
          [ {String(i + 1).padStart(2, '0')} / {String(skillCategories.length).padStart(2, '0')} ]
        </span>
      </div>

      <div className="space-y-3">
        <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.9)]">
          {category.title}
        </h3>
        <p className="max-w-[36ch] text-sm leading-relaxed text-white/85 md:text-base">{category.desc}</p>
      </div>

      <div className="flex flex-wrap gap-2 border-t border-white/20 pt-4">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="rounded border border-white/20 bg-black/50 px-2.5 py-1 font-mono text-[11px] text-white/90 backdrop-blur-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  ),
}));

const Skills = () => {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const carouselRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
        const steps = Math.max(1, skillCategories.length - 1);

        // Page scroll → horizontal strip 1:1 — same continuous focus pull as dragging.
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${steps * window.innerHeight * 0.95}`,
          pin: pinRef.current,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            carouselRef.current?.setProgress(self.progress);
          },
        });

        requestAnimationFrame(() => carouselRef.current?.setProgress(0));
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative w-full bg-[#0b0b0b] text-white overflow-x-clip"
    >
      <div
        ref={pinRef}
        className="relative flex min-h-[100svh] flex-col justify-center py-20 md:py-8"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black via-[#140203] to-black opacity-80" />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <h1
            className="text-[22vw] md:text-[16vw] font-black uppercase leading-none tracking-tighter text-transparent mix-blend-overlay"
            style={{ WebkitTextStroke: '2px rgba(229,9,20,0.28)' }}
            aria-hidden="true"
          >
            SKILLS
          </h1>
        </div>

        <div className="relative z-10 mx-auto mb-8 max-w-3xl px-6 text-center md:mb-12 md:px-12">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-red-500">
            Stack · Systems · Delivery
          </p>
          <h2 className="text-3xl font-black tracking-tight text-balance md:text-5xl">
            Every skill, brought into focus.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/55 md:text-base">
            Scroll to rack focus through each stack — the same curve, blur, and flatten as dragging the
            strip. On phones, swipe.
          </p>
        </div>

        <div className="relative z-10">
          <FocusPullCarousel
            ref={carouselRef}
            slides={slides}
            height="min(72svh, 680px)"
            cardWidth="min(max(72vw, 280px), 420px)"
            aspect="3 / 4"
            blur={7}
            autoplay={0}
            background="transparent"
            ink="#f5f5f5"
            radius="28px"
            scrollLinked
            showNav={false}
            ariaLabel="Skills carousel"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
