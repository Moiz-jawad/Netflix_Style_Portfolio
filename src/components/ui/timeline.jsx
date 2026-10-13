/**
 * Horizontal scroll timeline — Hyperiux Vault / 21st Timeline.
 * Adapted for Vite + React (no "use client") and Netflix portfolio theme.
 */
import { useLayoutEffect, useRef, useSyncExternalStore } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function useGSAP(callback, options) {
  const deps = options?.dependencies ?? [];
  const scope = options?.scope;
  const ctxRef = useRef(null);
  const cleanupRef = useRef(undefined);

  useLayoutEffect(() => {
    const el =
      scope && typeof scope === 'object' && 'current' in scope
        ? scope.current
        : scope ?? null;
    ctxRef.current = gsap.context(() => {}, el ?? undefined);
    return () => {
      cleanupRef.current?.();
      cleanupRef.current = undefined;
      ctxRef.current?.revert();
      ctxRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    if (!ctxRef.current) return;
    cleanupRef.current?.();
    const ret = ctxRef.current.add(callback);
    cleanupRef.current = typeof ret === 'function' ? ret : undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

const monthOrder = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12,
};

const DEFAULT_TOP = [
  {
    id: '2025-june',
    year: '2025',
    month: 'June',
    content: 'Android Developer at Digital Empowerment Network — Flutter apps and offline-safe sync.',
  },
  {
    id: '2025-sep-qonkar',
    year: '2025',
    month: 'September',
    content: 'Associate Software Developer at Qonkar Technologies — real-world front-end shipping.',
  },
  {
    id: '2025-december-ship',
    year: '2025',
    month: 'December',
    content: 'Qonkar internship wrap — production web delivery from Sept 16 to Dec 15.',
  },
  {
    id: '2026-april',
    year: '2026',
    month: 'April',
    content: 'Junior Flutter Developer at TeamX Pakistan — cross-platform apps, APIs, and CI/CD.',
  },
];

const DEFAULT_BOTTOM = [
  {
    id: '2025-sep-flutter',
    year: '2025',
    month: 'September',
    content: 'Flutter track at DEN — modular UI that cut frontend build time by ~40%.',
  },
  {
    id: '2026-may',
    year: '2026',
    month: 'May',
    content: 'Karachi base — TeamX, portfolio originals, and full-stack delivery worldwide.',
  },
  {
    id: '2026-june',
    year: '2026',
    month: 'June',
    content: 'Shipping Flutter + React products with Node.js, Express, MongoDB, and Supabase.',
  },
];

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

function subscribeToReducedMotion(callback) {
  if (typeof window === 'undefined') return () => {};
  const mediaQueryList = window.matchMedia(REDUCED_MOTION_QUERY);
  mediaQueryList.addEventListener('change', callback);
  return () => mediaQueryList.removeEventListener('change', callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia?.(REDUCED_MOTION_QUERY)?.matches ?? false;
}

function getServerReducedMotionSnapshot() {
  return false;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot,
  );
}

function JourneyStill({ item, placement = 'top' }) {
  if (!item?.image) return null;
  return (
    <div
      className={`overflow-hidden rounded-[0.6vw] border border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.55)] ring-1 ring-red-600/25 max-[600px]:rounded-[3vw] ${
        placement === 'top'
          ? 'mt-[1.2vw] h-[9vw] w-[78%] max-[600px]:mt-[4vw] max-[600px]:h-[36vw] max-[600px]:w-[90%]'
          : 'mb-[1.2vw] h-[8vw] w-[78%] max-[600px]:mb-[4vw] max-[600px]:h-[34vw] max-[600px]:w-[90%]'
      }`}
    >
      <img
        src={item.image}
        alt={item.imageAlt || `${item.month} ${item.year}`}
        draggable={false}
        loading="lazy"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export default function Timeline({
  id = 'journey',
  title = 'Career Storyline',
  periodLabel = '2025 — 2026',
  textColor = '#ffffff',
  mutedTextColor = 'rgba(255,255,255,0.55)',
  activeColor = '#E50914',
  backgroundColor = '#050505',
  imageUrl = 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1400&q=80',
  imageAlt = 'Developers collaborating in a modern workspace',
  duration,
  scrollDuration = 1.2,
  topJourneyData = DEFAULT_TOP,
  bottomJourneyData = DEFAULT_BOTTOM,
}) {
  const sectionRef = useRef(null);
  const wholeSliderRef = useRef(null);
  const reducedMotion = usePrefersReducedMotion();
  const animationDuration = duration ?? scrollDuration;
  const normalizedDuration = Math.max(0.2, animationDuration);

  const allJourneyItems = [...topJourneyData, ...bottomJourneyData].sort((a, b) => {
    const yearDiff = Number(a.year) - Number(b.year);
    if (yearDiff !== 0) return yearDiff;
    return monthOrder[a.month] - monthOrder[b.month];
  });

  const sectionStyle = { color: textColor, backgroundColor };
  const activeStyle = { backgroundColor: activeColor };
  const mutedTextStyle = { color: mutedTextColor };

  useGSAP(
    () => {
      const section = sectionRef.current;
      const slider = wholeSliderRef.current;
      if (!section || !slider) return;

      const isMobile = window.innerWidth < 600;
      const slidePercent = isMobile ? -57 : -65;
      const lineWidth = isMobile ? '65%' : '98%';
      const items = allJourneyItems;

      // One scrubbed timeline: progress is 0 when the section first pins
      // (fixes wide screens where %-of-section triggers were already mid-way).
      const scrollTravel = () =>
        Math.max(section.offsetHeight - window.innerHeight, window.innerHeight * 2);

      if (reducedMotion) {
        gsap.set(slider, { xPercent: 0 });
        gsap.set('.journey-line', { width: lineWidth });
        items.forEach((item) => {
          gsap.set(`.jl-${item.id}`, { scaleY: 1 });
          gsap.set(`.jd-${item.id}`, { scale: 1 });
          gsap.set(`.title-${item.id}`, { opacity: 1, clearProps: 'transform' });
          gsap.set(`.description-${item.id}`, {
            opacity: 1,
            clearProps: 'transform',
          });
        });
        return;
      }

      gsap.set(slider, { xPercent: 0 });
      gsap.set('.journey-line', { width: '0%' });

      items.forEach((item) => {
        const isTop = topJourneyData.some((topItem) => topItem.id === item.id);
        gsap.set(`.jl-${item.id}`, {
          scaleY: 0,
          transformOrigin: isTop ? 'bottom bottom' : 'top top',
        });
        gsap.set(`.jd-${item.id}`, { scale: 0 });
        // Simple fade/slide — SplitText masks were leaving copy invisible on scrub
        gsap.set(`.title-${item.id}`, { opacity: 0, y: 28 });
        gsap.set(`.description-${item.id}`, { opacity: 0, y: 20 });
      });

      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${scrollTravel()}`,
          scrub: 0.65,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      tl.fromTo(
        slider,
        { xPercent: 0 },
        { xPercent: slidePercent, duration: 1, ease: 'none' },
        0,
      );

      tl.fromTo(
        '.journey-line',
        { width: '0%' },
        { width: lineWidth, duration: 0.95, ease: 'none' },
        0.05,
      );

      items.forEach((item, index) => {
        const at = 0.1 + (index / Math.max(items.length - 1, 1)) * 0.75;

        tl.to(`.jl-${item.id}`, { scaleY: 1, duration: 0.18 }, at);
        tl.to(`.jd-${item.id}`, { scale: 1, duration: 0.18 }, at);
        tl.to(
          `.title-${item.id}`,
          { opacity: 1, y: 0, duration: 0.22, ease: 'power2.out' },
          at + 0.02,
        );
        tl.to(
          `.description-${item.id}`,
          { opacity: 1, y: 0, duration: 0.22, ease: 'power2.out' },
          at + 0.05,
        );
      });

      const handleResize = () => {
        ScrollTrigger.refresh();
      };
      window.addEventListener('resize', handleResize);
      requestAnimationFrame(() => ScrollTrigger.refresh());

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    },
    {
      dependencies: [normalizedDuration, reducedMotion, topJourneyData, bottomJourneyData],
      scope: sectionRef,
    },
  );

  return (
    <section
      ref={sectionRef}
      id={id}
      className="h-[320vh] max-[600px]:h-[380vh] w-full relative select-none"
      style={sectionStyle}
    >
      <div className="h-screen w-screen sticky top-[0%] pt-[11%] overflow-hidden max-[600px]:top-[5%] max-[600px]:pt-[8%]">
        <div
          ref={wholeSliderRef}
          className="mr-[2vw] flex h-[30vw] w-[248vw] items-center gap-[6.5vw] px-[6vw] max-[600px]:h-[80vh] max-[600px]:w-[820vw] max-[600px]:gap-[8vw] max-[600px]:px-[8vw]"
        >
          <div className="h-full w-[30vw] overflow-hidden rounded-[1vw] border border-white/10 shadow-[0_0_40px_rgba(229,9,20,0.15)] max-[600px]:h-[65vw] max-[600px]:w-[85vw] max-[600px]:rounded-[5vw]">
            <img
              src={imageUrl}
              alt={imageAlt}
              draggable={false}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="relative h-full w-full">
            <div className="w-full absolute left-0 top-[49%] -translate-y-1/2 flex items-center h-fit">
              <div
                className="h-[0.8vw] max-[600px]:h-[2vw] max-[600px]:w-[2vw] w-[0.8vw] rounded-full shadow-[0_0_12px_rgba(229,9,20,0.8)]"
                style={activeStyle}
              />
              <div className="h-px w-[0%] rounded-full journey-line" style={activeStyle} />
              <div
                className="h-[0.8vw] max-[600px]:h-[2vw] max-[600px]:w-[2vw] w-[0.8vw] rounded-full shadow-[0_0_12px_rgba(229,9,20,0.8)]"
                style={activeStyle}
              />
            </div>

            <div className="flex h-1/2 w-full items-center justify-start gap-[1.25vw]">
              <div className="h-full w-[20%] pt-[2.5vw] max-[600px]:h-fit max-[600px]:pt-[5vw]">
                <p className="mb-3 font-mono text-[0.7vw] uppercase tracking-[0.25em] text-red-500 max-[600px]:mb-2 max-[600px]:text-[2.8vw]">
                  Episode 02 // Expertise
                </p>
                <h2 className="w-[75%] font-black text-[2.6vw] leading-[1.05] tracking-tight max-[600px]:text-[8.5vw]">
                  {title}
                </h2>
              </div>

              <div className="w-full flex h-full gap-x-[17vw] max-[600px]:gap-x-[44vw]">
                {topJourneyData.map((item) => (
                  <div
                    key={`top-${item.id}`}
                    className="relative h-full w-[30vw] px-[3.5vw] max-[600px]:flex max-[600px]:w-[70vw] max-[600px]:flex-col max-[600px]:px-[8vw]"
                  >
                    <div className="w-full absolute left-0 bottom-0 top-0 h-full">
                      <div
                        className={`size-[1vw] max-[600px]:size-[2.5vw] translate-x-[-50%] relative aspect-square rounded-full jd-${item.id}`}
                        style={activeStyle}
                      />
                      <div
                        className={`h-[94%] w-px origin-bottom rounded-full jl-${item.id}`}
                        style={activeStyle}
                      />
                    </div>

                    <div className="mt-[-1vw] space-y-[1vw] max-[600px]:mt-[-2vw] max-[600px]:space-y-[3vw]">
                      <h4
                        className={`title-${item.id} font-black text-[2.2vw] leading-none max-[600px]:text-[6.4vw]`}
                      >
                        {item.year} {item.month}
                      </h4>
                      <p
                        className={`description-${item.id} w-[90%] text-[1.35vw] font-light leading-[1.35] max-[600px]:w-[90%] max-[600px]:text-[4.8vw]`}
                        style={mutedTextStyle}
                      >
                        {item.content}
                      </p>
                      <div className={`description-${item.id}`}>
                        <JourneyStill item={item} placement="top" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-1/2 flex items-center justify-start w-full">
              <div className="w-[34%] pt-[2vw] max-[600px]:pt-[5vw] max-[600px]:w-[30%] h-full">
                <p
                  className="font-mono text-[1.4vw] uppercase tracking-widest leading-none max-[600px]:text-[4.2vw]"
                  style={mutedTextStyle}
                >
                  {periodLabel}
                </p>
              </div>

              <div className="w-full flex h-full gap-x-[22vw] ml-[8vw] max-[600px]:gap-x-[44vw] max-[600px]:ml-[8vw]">
                {bottomJourneyData.map((item) => (
                  <div
                    key={`bottom-${item.id}`}
                    className="relative h-full w-[25vw] px-[3.5vw] max-[600px]:w-[70vw] max-[600px]:px-[8vw]"
                  >
                    <div className="w-full absolute left-0 bottom-[-1%] h-full">
                      <div
                        className={`h-[94%] origin-top w-px rounded-full max-[600px]:h-full jl-${item.id}`}
                        style={activeStyle}
                      />
                      <div
                        className={`size-[1vw] max-[600px]:size-[2.5vw] translate-x-[-50%] relative w-auto aspect-square rounded-full jd-${item.id}`}
                        style={activeStyle}
                      />
                    </div>

                    <div className="flex h-full w-full flex-col justify-end space-y-[1vw] max-[600px]:space-y-[3vw]">
                      <div className={`description-${item.id}`}>
                        <JourneyStill item={item} placement="bottom" />
                      </div>
                      <h4
                        className={`title-${item.id} font-black text-[2.2vw] leading-none max-[600px]:text-[6.4vw]`}
                      >
                        {item.year} {item.month}
                      </h4>
                      <p
                        className={`description-${item.id} w-[90%] text-[1.35vw] font-light leading-[1.35] max-[600px]:w-[90%] max-[600px]:text-[4.8vw]`}
                        style={mutedTextStyle}
                      >
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
