import picture from '../assets/Portfolio/picture.png';
import GlyphPortal from './ui/glyph-portal';

/**
 * Home entrance — Glyph Portal through "MOIZ" (Netflix-dark theme).
 * Scroll into the letter to reveal the intro stage.
 */
const Hero = () => {
  return (
    <div id="home" className="relative w-full bg-[#050505]">
      <GlyphPortal
        word="MOIZ"
        focusChar="O"
        interactive
        scrollLength={2.2}
        fontWeight={900}
        fontFamily='Impact, Haettenschweiler, "Arial Black", "Helvetica Neue", Arial, sans-serif'
        enterLabel="Enter portfolio"
        annotations={false}
        style={{
          // Letters are a clip into --gp-field on top of --gp-paper.
          // Paper must stay black; field must be bright red or MOIZ disappears.
          '--gp-paper': '#050505',
          '--gp-ink': '#ffffff',
          '--gp-field': '#E50914',
          '--gp-foreground': '#ffffff',
        }}
        background={
          <div
            className="absolute inset-0"
            style={{
              transform: 'scale(var(--gp-field-scale, 1))',
              background: `
                radial-gradient(circle at 30% 20%, #ff2a2a 0%, transparent 42%),
                radial-gradient(circle at 70% 70%, #7f0008 0%, transparent 45%),
                linear-gradient(145deg, #E50914 0%, #b20710 48%, #6b0008 100%)
              `,
            }}
          />
        }
        front={
          <>
            <div className="absolute top-8 left-6 right-6 md:left-12 md:right-12 flex items-center justify-between gap-4 pointer-events-none">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-black/80 border border-red-600/40 text-[10px] font-mono uppercase tracking-widest text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping" />
                <span className="text-red-500 font-bold">Netflix Developer Series</span>
                <span className="text-white/40">|</span>
                <span className="text-white/70">2025 – 2026</span>
              </div>
              <span className="hidden sm:inline text-[10px] font-mono uppercase tracking-widest text-white/50">
                Karachi, PK
              </span>
            </div>
            <p className="absolute left-0 right-0 text-center text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-white/60"
              style={{ top: 'calc(var(--gp-word-top, 35%) - 2.5rem)' }}
            >
              A different way into the story
            </p>
            <p className="absolute left-0 right-0 text-center text-sm text-white/50"
              style={{ top: 'calc(var(--gp-word-bottom, 55%) + 1.5rem)' }}
            >
              Scroll through the name — or pick a letter
            </p>
          </>
        }
      >
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-3">
              <span className="px-2.5 py-0.5 bg-red-600 text-white font-black text-xs rounded tracking-widest">
                NOW
              </span>
              <span className="text-white/80 text-xs font-mono tracking-widest uppercase">
                Junior Flutter Developer at TeamX Pakistan
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]">
              MOIZ{' '}
              <span className="text-white/95">JAWAD</span>
            </h2>
            <p className="text-sm md:text-base text-white/75 font-light leading-relaxed max-w-xl">
              Flutter and full-stack developer building scalable mobile and web applications, with
              React on the front end and Node.js, Express, MongoDB, and Supabase on the back end.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="min-h-11 px-8 py-3.5 bg-white text-black font-bold text-xs uppercase tracking-widest rounded hover:bg-red-600 hover:text-white transition-all duration-300 inline-flex items-center gap-2"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="min-h-11 px-8 py-3.5 bg-neutral-900 text-white border border-white/20 font-bold text-xs uppercase tracking-widest rounded hover:border-red-600/50 transition-all duration-300 inline-flex items-center"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-[240px] md:w-[280px] p-3 bg-[#141414] rounded-2xl border border-red-600/40 shadow-[0_30px_60px_rgba(0,0,0,0.9)]">
              <div className="mb-2 w-fit px-3 py-1 bg-red-600 text-white font-mono text-[10px] font-bold tracking-widest rounded">
                FEATURED DEV
              </div>
              <img
                src={picture}
                alt="Moiz Jawad"
                className="w-full h-[280px] md:h-[320px] object-cover object-top rounded-xl"
              />
            </div>
          </div>
        </div>
      </GlyphPortal>
    </div>
  );
};

export default Hero;
