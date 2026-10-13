import { useEffect, useRef } from 'react';

/**
 * Soft cinematic card — pointer spotlight + hover bloom.
 * No spinning beam (that felt cheap / sticky). Netflix-dark red only.
 */
const NetflixGlowCard = ({ children, className = '' }) => {
  const cardRef = useRef(null);
  const spotRef = useRef(null);
  const target = useRef({ x: 0.5, y: 0.5 });
  const current = useRef({ x: 0.5, y: 0.5 });
  const raf = useRef(0);
  const hovering = useRef(false);

  useEffect(() => {
    const tick = () => {
      const spot = spotRef.current;
      if (spot) {
        current.current.x += (target.current.x - current.current.x) * 0.12;
        current.current.y += (target.current.y - current.current.y) * 0.12;
        const x = current.current.x * 100;
        const y = current.current.y * 100;
        spot.style.background = `radial-gradient(480px circle at ${x}% ${y}%, rgba(229,9,20,0.22), transparent 55%)`;
        spot.style.opacity = hovering.current ? '1' : '0';
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  const onMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    target.current.x = (e.clientX - rect.left) / rect.width;
    target.current.y = (e.clientY - rect.top) / rect.height;
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseEnter={() => {
        hovering.current = true;
      }}
      onMouseLeave={() => {
        hovering.current = false;
      }}
      className={`netflix-soft-card relative h-full rounded-[2.5rem] bg-[#141414] border border-white/[0.08] overflow-hidden transition-[border-color,box-shadow,transform] duration-500 ease-out will-change-transform hover:-translate-y-1 hover:border-red-600/45 hover:shadow-[0_28px_60px_rgba(0,0,0,0.75),0_0_40px_rgba(229,9,20,0.12)] ${className}`}
    >
      <div
        ref={spotRef}
        className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-500 ease-out"
        style={{ opacity: 0 }}
        aria-hidden="true"
      />
      {/* Soft static rim light — blooms on hover via CSS */}
      <div
        className="netflix-soft-rim pointer-events-none absolute inset-0 rounded-[inherit] z-[1]"
        aria-hidden="true"
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

export default NetflixGlowCard;
