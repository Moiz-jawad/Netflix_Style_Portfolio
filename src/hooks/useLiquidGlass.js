import { useEffect, useRef } from 'react';
import liquidGL from 'liquid-gl';
import { gsap } from 'gsap';

/** Shared stacking for all MVP lenses (multi-lens shared canvas). */
export const GLASS_Z_INDEX = 50;

export const defaultGlassOptions = {
  engine: 'auto',
  snapshot: 'body',
  zIndex: GLASS_Z_INDEX,
  // Dark cinematic tint — not light iOS-white glass (FR-010)
  tint: 'rgba(8, 10, 16, 0.32)',
  frost: 1.25,
  refraction: 0.012,
  bevelDepth: 0.06,
  bevelWidth: 0.14,
  shadow: true,
  specular: true,
  reveal: 'fade',
  tilt: false,
  interaction: 'none',
  draggable: false,
  magnify: 1,
};

let gsapSyncStarted = false;

function destroyLenses(lenses) {
  for (const lens of lenses) {
    try {
      lens?.destroy?.();
    } catch {
      /* ignore teardown races */
    }
  }
}

/**
 * Init liquidGL when enabled; destroy on cleanup.
 * Lifecycle: idle (enabled=false) → ready/active → destroyed.
 */
export function useLiquidGlass({
  enabled = false,
  target,
  options = {},
  registerDynamic = null,
}) {
  const optionsRef = useRef(options);
  optionsRef.current = options;

  useEffect(() => {
    if (!enabled || !target || typeof window === 'undefined') return undefined;

    const nodes = document.querySelectorAll(target);
    if (!nodes.length) return undefined;

    let lenses = [];
    let cancelled = false;

    const run = () => {
      if (cancelled) return;
      try {
        const result = liquidGL({
          ...defaultGlassOptions,
          ...optionsRef.current,
          target,
          zIndex: optionsRef.current.zIndex ?? GLASS_Z_INDEX,
        });
        lenses = Array.isArray(result) ? result : result ? [result] : [];

        if (registerDynamic) {
          liquidGL.registerDynamic(registerDynamic);
        }

        if (!gsapSyncStarted) {
          try {
            liquidGL.syncWith({ gsap });
            gsapSyncStarted = true;
          } catch {
            /* sync optional */
          }
        }
      } catch (err) {
        // FR-007: CSS frosted classes on targets remain usable
        console.warn('liquidGL init failed; CSS fallback remains.', err);
      }
    };

    // Defer one frame so layout/position (fixed/sticky) is settled
    const raf = requestAnimationFrame(run);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      destroyLenses(lenses);
      lenses = [];
    };
  }, [enabled, target, registerDynamic]);
}

export default useLiquidGlass;
