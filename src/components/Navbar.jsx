import { useEffect, useState } from 'react';

const sectionLinks = [
  ['#home', 'Home'],
  ['#about', 'About'],
  ['#expertise', 'Expertise'],
  ['#skills', 'Skills'],
  ['#projects', 'Projects'],
  ['#contact', 'Contact'],
];

/** Top-of-page nav — scrolls away with the page (not fixed/sticky). */
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px)');
    const closeOnWide = () => {
      if (media.matches) setMenuOpen(false);
    };
    media.addEventListener('change', closeOnWide);
    return () => media.removeEventListener('change', closeOnWide);
  }, []);

  return (
    <header className="relative z-50 w-full border-b border-white/10 bg-[#0b0b0b]">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-4 md:py-5 flex items-center justify-between">
        <a
          href="#home"
          className="text-2xl font-black text-red-600 tracking-tighter flex items-center gap-2 drop-shadow-[0_2px_15px_rgba(229,9,20,0.9)]"
        >
          MOIZ<span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
        </a>

        <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-white/80">
          {sectionLinks.map(([href, label]) => (
            <a key={href} href={href} className="hover:text-red-500 transition-colors">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="md:hidden min-h-11 min-w-11 px-3 rounded border border-white/20 text-[11px] font-mono uppercase tracking-widest text-white"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close sections' : 'Open sections'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? 'Close' : 'Sections'}
          </button>
          <a
            href="#hire"
            className="min-h-11 inline-flex items-center px-5 rounded bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(229,9,20,0.6)] hover:scale-105 active:scale-95"
          >
            Hire Me
          </a>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden absolute top-full left-6 right-6 mt-2 flex flex-col rounded-xl border border-white/15 bg-[#141414]/95 backdrop-blur-md p-2 shadow-2xl z-50">
          {sectionLinks.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="min-h-11 flex items-center px-4 text-xs font-mono uppercase tracking-widest text-white/80 hover:text-red-500"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
