import { useEffect, useRef } from 'react';
import { ReactLenis } from 'lenis/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Page-wide Lenis smooth scroll, synced with GSAP ScrollTrigger.
 * Keep the tree mounted; only start/stop Lenis so sections do not remount.
 *
 * Phone notes (011-mobile-motion-parity):
 * - syncTouch stays false so native touch scrolling drives pins/scrubs predictably.
 * - Orientation / visualViewport changes refresh ScrollTrigger for phone pin sections.
 */
const SmoothScroll = ({ children, enabled = true }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    let bound = false;

    const update = (time) => {
      lenisRef.current?.lenis?.raf(time * 1000);
    };

    const bind = () => {
      const lenis = lenisRef.current?.lenis;
      if (!lenis || bound) return !!lenis;
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(update);
      gsap.ticker.lagSmoothing(0);
      bound = true;
      ScrollTrigger.refresh();
      return true;
    };

    let tries = 0;
    let timer = 0;
    const tryBind = () => {
      if (bind() || tries > 24) return;
      tries += 1;
      timer = window.setTimeout(tryBind, 40);
    };
    tryBind();

    const syncEnabled = () => {
      const lenis = lenisRef.current?.lenis;
      if (!lenis) return;
      if (!enabled || reduce.matches) lenis.stop();
      else {
        lenis.start();
        ScrollTrigger.refresh();
      }
    };
    syncEnabled();

    const onReduceChange = () => syncEnabled();
    const onViewportChange = () => {
      ScrollTrigger.refresh();
    };

    reduce.addEventListener('change', onReduceChange);
    window.addEventListener('orientationchange', onViewportChange);
    window.visualViewport?.addEventListener('resize', onViewportChange);

    return () => {
      window.clearTimeout(timer);
      reduce.removeEventListener('change', onReduceChange);
      window.removeEventListener('orientationchange', onViewportChange);
      window.visualViewport?.removeEventListener('resize', onViewportChange);
      gsap.ticker.remove(update);
      const lenis = lenisRef.current?.lenis;
      if (lenis) lenis.off('scroll', ScrollTrigger.update);
    };
  }, [enabled]);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        autoRaf: false,
        lerp: 0.075,
        smoothWheel: true,
        // Native touch scroll — better with phone ScrollTrigger pins (research.md).
        syncTouch: false,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.1,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
