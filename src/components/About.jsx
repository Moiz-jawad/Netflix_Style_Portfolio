import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NetflixGlowCard from './NetflixGlowCard';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      cardRefs.current,
      { y: 80, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#050505] text-white py-28 md:py-36 px-5 md:px-14 flex flex-col justify-center select-none overflow-x-hidden"
    >
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full space-y-20">
        <div className="flex flex-col items-start space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded bg-black/80 backdrop-blur-2xl border border-red-600/40 text-xs font-mono uppercase tracking-widest text-white shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
            <span className="text-red-500 font-bold">EPISODE 01</span>
            <span className="text-white/40">|</span>
            <span>ABOUT THE ENGINEER</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
            EPISODE SYNOPSIS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-600 to-red-700 drop-shadow-[0_0_30px_rgba(229,9,20,0.4)]">
              ORIGIN & VISION.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div ref={addToRefs} className="md:col-span-7">
            <NetflixGlowCard className="p-5 md:p-12 flex flex-col justify-between min-h-full">
              <div className="absolute top-0 right-0 p-8 text-white/5 font-mono text-7xl font-black pointer-events-none">
                01
              </div>

              <div className="space-y-5 relative z-10">
                <h3 className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold">
                  Cast & Background
                </h3>
                <p className="text-lg md:text-xl font-medium text-white/90 leading-relaxed break-words">
                  I am{' '}
                  <span className="text-white font-bold drop-shadow">Moiz Jawad</span>, a Flutter
                  and full-stack developer in Karachi, Sindh, Pakistan.
                </p>
                <p className="text-sm md:text-base text-white/60 font-light leading-relaxed">
                  Experienced in building scalable mobile and web applications with Flutter, React,
                  Node.js, Express.js, MongoDB, and Supabase.
                </p>
              </div>

              <div className="pt-8 flex flex-wrap gap-2 relative z-10">
                <span className="px-3.5 py-1.5 rounded bg-white/5 border border-white/10 text-xs font-mono text-white/80">
                  Flutter & Dart
                </span>
                <span className="px-3.5 py-1.5 rounded bg-white/5 border border-white/10 text-xs font-mono text-white/80">
                  React
                </span>
                <span className="px-3.5 py-1.5 rounded bg-white/5 border border-white/10 text-xs font-mono text-white/80">
                  Node.js
                </span>
              </div>
            </NetflixGlowCard>
          </div>

          <div ref={addToRefs} className="md:col-span-5">
            <NetflixGlowCard className="p-5 md:p-12 flex flex-col justify-between min-h-full">
              <div className="absolute top-0 right-0 p-8 text-white/5 font-mono text-7xl font-black pointer-events-none">
                02
              </div>

              <div className="space-y-5 relative z-10">
                <h3 className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold">
                  Milestones & Accolades
                </h3>
                <ul className="space-y-3.5 text-sm text-white/80 font-light">
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold">&#8250;</span>
                    <span>
                      Junior Flutter Developer at{' '}
                      <strong className="text-white">TeamX Pakistan</strong>, Karachi. Apr 2026 –
                      Present.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold">&#8250;</span>
                    <span>
                      Associate Software Developer at{' '}
                      <strong className="text-white">Qonkar Technologies</strong>, Nawabshah. Sep
                      2025 – Dec 2025.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold">&#8250;</span>
                    <span>
                      Android Developer (Jun 2025 – Sep 2025) and Flutter Developer (Sep 2025) at{' '}
                      <strong className="text-white">Digital Empowerment Network</strong>,
                      Islamabad.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold">&#8250;</span>
                    <span>
                      Certificates: Dart/Flutter Bootcamp, Firebase for Flutter, Google Mobile Ads,
                      JavaScript Essentials, Node.js &amp; Express.js Mastery, React JS Development.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 font-mono text-xs text-white/40 relative z-10">
                // SEASON_01 HIGHLIGHTS
              </div>
            </NetflixGlowCard>
          </div>

          <div ref={addToRefs} className="md:col-span-12">
            <NetflixGlowCard className="p-5 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2 text-left relative z-10">
                <h3 className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold">
                  Production Tech Stack
                </h3>
                <p className="text-base md:text-lg font-semibold text-white">
                  Flutter, React, and the backend tools named on the profile.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 relative z-10">
                {['Flutter', 'Dart', 'React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Supabase'].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-wider text-white shadow-inner hover:bg-red-600/20 hover:border-red-600/40 hover:scale-105 transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </NetflixGlowCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
