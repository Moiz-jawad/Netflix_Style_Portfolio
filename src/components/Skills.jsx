import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  { 
    title: 'Mobile', 
    desc: 'Cross-platform mobile apps with Flutter and Dart, including Provider and Riverpod for state, Material and Cupertino UI, and motion polish.', 
    tag: 'FLUTTER',
    skills: ['Flutter', 'Dart', 'Provider', 'Riverpod', 'Material Design', 'Cupertino Widgets', 'Animations', 'Lottie', 'Shimmer Effects', 'Glassmorphism', 'UI/UX'] 
  },
  { 
    title: 'Frontend', 
    desc: 'Web interfaces with React, TypeScript, HTML5, CSS3, Redux, Context API, Vite, Tailwind CSS, and shadcn/ui.', 
    tag: 'REACT',
    skills: ['React', 'TypeScript', 'HTML5', 'CSS3', 'Redux', 'Context API', 'Vite', 'Tailwind CSS', 'shadcn/ui'] 
  },
  { 
    title: 'Backend', 
    desc: 'Server and cloud work with Node.js, Express.js, MongoDB, Supabase, and Firebase Auth, Firestore, and Storage.', 
    tag: 'APIS',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'Supabase', 'Firebase', 'Firebase Authentication', 'Firestore', 'Storage'] 
  },
  { 
    title: 'Integrations', 
    desc: 'REST APIs, JWT and OAuth, real-time systems, Google Maps, AI integrations, and Google AdMob/AdSense.', 
    tag: 'SYSTEMS',
    skills: ['REST APIs', 'Authentication', 'JWT', 'OAuth', 'Real-time', 'Google Maps', 'AI integrations', 'Google AdMob/AdSense'] 
  },
  { 
    title: 'Delivery', 
    desc: 'Git and GitHub, CI/CD, Agile practices, code reviews, and hosting on Render, GitHub Pages, and cloud hosts.', 
    tag: 'PRACTICE',
    skills: ['Git', 'GitHub', 'CI/CD', 'Agile', 'Code review', 'Render', 'GitHub Pages', 'Cloud Hosting'] 
  },
  { 
    title: 'Certificates', 
    desc: 'Certifications listed on the resume.', 
    tag: 'CERTS',
    skills: [
      'Dart/Flutter Development Bootcamp (App Brewery / Udemy, 2024)',
      'Firebase for Flutter (Google, 2024)',
      'Google Mobile Ads Certification (Google, 2025)',
      'JavaScript Essentials (Udemy, 2025)',
      'Node.js & Express.js Mastery (Udemy, 2025)',
      'React JS Development (Udemy, 2025)',
    ] 
  },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const bgRefs = useRef([]);
  const textRefs = useRef([]);

  const handleScroll = (e) => {
    if (window.innerWidth >= 768) return;
    const container = e.target;
    const center = container.scrollLeft + container.offsetWidth / 2;

    let activeIdx = 0;
    let minDiff = Infinity;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const diff = Math.abs(cardCenter - center);
      if (diff < minDiff) {
        minDiff = diff;
        activeIdx = i;
      }
    });

    cardsRef.current.forEach((card) => {
      if (card) gsap.set(card, { scale: 1 });
    });

    bgRefs.current.forEach((bg, i) => {
      if (bg) gsap.to(bg, { opacity: i === activeIdx ? 1 : 0, duration: 0.4, overwrite: "auto" });
    });

    textRefs.current.forEach((txt, i) => {
      if (txt) gsap.to(txt, { opacity: i === activeIdx ? 1 : 0, duration: 0.4, overwrite: "auto" });
    });
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      const syncBackdrop = (p) => {
        bgRefs.current.forEach((bg, i) => {
          if (!bg) return;
          const itemOpacity = Math.max(0, 1 - Math.abs(i - p));
          gsap.set(bg, { opacity: itemOpacity });
          if (textRefs.current[i]) {
            gsap.set(textRefs.current[i], { opacity: itemOpacity });
          }
        });
      };

      const placeCentered = (p, { circular }) => {
        const RADIUS = 780;
        const ANGLE_STEP = 0.48;

        cardsRef.current.forEach((card, i) => {
          if (!card) return;
          const offset = i - p;
          const focused = Math.abs(offset) < 0.35;
          const absOff = Math.abs(offset);

          if (circular) {
            const theta = offset * ANGLE_STEP;
            gsap.set(card, {
              left: '50%',
              top: '50%',
              xPercent: -50,
              yPercent: -50,
              x: RADIUS * Math.sin(theta),
              y: -RADIUS * (1 - Math.cos(theta)),
              z: 0,
              scale: focused ? 1 : Math.max(0.84, 1 - absOff * 0.08),
              rotation: 0,
              rotationZ: 0,
              rotationY: 0,
              opacity: focused ? 1 : Math.max(0.4, 0.72 - absOff * 0.16),
              zIndex: Math.round(100 - absOff * 10),
            });
          } else {
            gsap.set(card, {
              left: '50%',
              top: '50%',
              xPercent: -50,
              yPercent: -50,
              x: 0,
              y: 0,
              z: 0,
              scale: 1,
              rotation: 0,
              rotationZ: 0,
              rotationY: 0,
              opacity: focused ? 1 : 0,
              zIndex: focused ? 100 : 1,
            });
          }
        });

        syncBackdrop(p);
      };

      mm.add(
        {
          isWide: '(min-width: 768px)',
          isPhone: '(max-width: 767px)',
          reduceMotion: '(prefers-reduced-motion: reduce)',
        },
        (context) => {
          const { isWide, isPhone, reduceMotion } = context.conditions;

          if (isPhone) {
            cardsRef.current.forEach((card) => {
              if (card) {
                gsap.set(card, { clearProps: 'transform,left,top,opacity,zIndex,position' });
                gsap.set(card, { scale: 1 });
              }
            });

            bgRefs.current.forEach((bg, i) => {
              if (bg) gsap.set(bg, { clearProps: 'all', opacity: i === 0 ? 1 : 0 });
            });

            textRefs.current.forEach((txt, i) => {
              if (txt) gsap.set(txt, { clearProps: 'all', opacity: i === 0 ? 1 : 0 });
            });
            return;
          }

          if (!isWide) return;

          const circular = !reduceMotion;
          placeCentered(0, { circular });

          ScrollTrigger.create({
            trigger: sectionRef.current,
            start: 'top top',
            end: '+=500%',
            pin: true,
            scrub: 1,
            snap: 1 / (skillCategories.length - 1),
            onUpdate: (self) => {
              const p = self.progress * (skillCategories.length - 1);
              placeCentered(p, { circular });
            },
          });
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="skills"
      ref={sectionRef} 
      className="relative w-full h-auto min-h-[70vh] py-16 md:h-screen md:min-h-0 md:py-0 bg-[#0b0b0b] text-white overflow-x-clip overflow-y-visible flex items-center justify-center select-none"
    >
      {/* Dynamic Netflix Dark Background Vignettes */}
      {skillCategories.map((_, i) => (
        <div 
          key={i}
          ref={el => bgRefs.current[i] = el}
          className="absolute inset-0 z-0 pointer-events-none opacity-0 bg-gradient-to-tr from-black via-[#140203] to-black"
        />
      ))}

      {/* Massive Background Typography (Netflix Red & White Outline) */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        {skillCategories.map((_, i) => (
          <h1 
            key={`text-${i}`}
            ref={el => textRefs.current[i] = el}
            className="absolute text-[22vw] md:text-[18vw] font-black uppercase text-transparent leading-none tracking-tighter mix-blend-overlay"
            style={{ 
               WebkitTextStroke: `2px ${i % 2 === 0 ? 'rgba(229,9,20,0.3)' : 'rgba(255,255,255,0.15)'}`,
               opacity: 0 
            }}
          >
            SKILLS
          </h1>
        ))}
      </div>

      {/* Carousel Container */}
      <div 
        className="relative w-full h-auto md:h-full flex md:items-center md:justify-center z-10 overflow-x-auto overflow-y-visible md:overflow-visible snap-x snap-mandatory scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] items-center px-4 md:px-0 gap-4 md:gap-0 touch-pan-x"
        onScroll={handleScroll}
      >
        {skillCategories.map((category, i) => (
          <div 
            key={i}
            ref={el => cardsRef.current[i] = el}
            className="md:absolute relative shrink-0 snap-center w-[calc(100%-2.5rem)] max-w-[360px] md:max-w-none md:w-[440px] h-auto rounded-[32px] p-6 md:p-10 bg-[#141414]/95 backdrop-blur-2xl border border-white/15 flex flex-col justify-between overflow-hidden group shadow-[0_30px_60px_rgba(0,0,0,0.9)] hover:border-red-600/80 transition-colors duration-500"
          >
            {/* Inner Red Glossy Reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-red-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20" />
            
            {/* Top Card Metadata */}
            <div className="flex items-center justify-between relative z-10">
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-red-500 bg-red-600/10 px-3 py-1 rounded border border-red-600/20">
                {category.tag}
              </span>
              <span className="text-xs font-mono text-white/40">
                [ 0{i + 1} / 0{skillCategories.length} ]
              </span>
            </div>

            {/* Middle Title & Description */}
            <div className="space-y-4 relative z-10 my-auto">
              <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight group-hover:text-red-500 transition-colors duration-300">
                {category.title}
              </h3>
              <p className="text-sm md:text-base text-white/70 font-light leading-relaxed">
                {category.desc}
              </p>
            </div>

            {/* Bottom Skill Badges */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 relative z-10">
              {category.skills.map((skill, sIdx) => (
                <span 
                  key={sIdx}
                  className="text-xs font-mono text-white/80 bg-white/5 border border-white/10 px-3 py-1 rounded group-hover:border-red-600/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Bottom Glow Accent */}
            <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-red-600 group-hover:shadow-[0_0_15px_#E50914] transition-all" />
          </div>
        ))}
      </div>

    </section>
  );
};

export default Skills;