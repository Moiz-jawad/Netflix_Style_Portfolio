import React from 'react';
import FooterSocialIcons from './FooterSocialIcons';

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-white py-16 px-6 md:px-12 border-t border-white/10 select-none relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        
        {/* Top Section: Brand & Quick Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12 border-b border-white/10">
          <div className="space-y-2">
            <div className="text-2xl font-black text-red-600 tracking-tighter flex items-center gap-2 drop-shadow-[0_2px_15px_rgba(220,38,38,0.9)]">
              MOIZ<span className="w-1.5 h-1.5 rounded-full bg-white inline-block"></span>
            </div>
            <p className="text-xs font-mono text-white/50 tracking-widest uppercase">
              // NETFLIX DEVELOPER SERIES &bull; SEASON 2026
            </p>
          </div>

          {/* Quick Navigation Links */}
          <nav className="flex flex-wrap gap-x-4 gap-y-1 md:gap-8 text-xs font-mono uppercase tracking-widest text-white/70">
            <a href="#home" className="min-h-11 inline-flex items-center hover:text-red-500 transition-colors">Home</a>
            <a href="#about" className="min-h-11 inline-flex items-center hover:text-red-500 transition-colors">About</a>
            <a href="#expertise" className="min-h-11 inline-flex items-center hover:text-red-500 transition-colors">Expertise</a>
            <a href="#skills" className="min-h-11 inline-flex items-center hover:text-red-500 transition-colors">Skills</a>
            <a href="#projects" className="min-h-11 inline-flex items-center hover:text-red-500 transition-colors">Projects</a>
            <a href="#contact" className="min-h-11 inline-flex items-center hover:text-red-500 transition-colors">Contact</a>
          </nav>
        </div>

        {/* Middle Section: premium animated social dock (21st Social Icons, Netflix-themed) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-xs font-mono text-white/60">
          <FooterSocialIcons />

          <div className="text-white/40 tracking-widest uppercase">
            LOCATION: KARACHI, SINDH, PK
          </div>
        </div>

        {/* Bottom Copyright & Cinematic Tagline */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-6 border-t border-white/5 text-[11px] font-mono text-white/40 uppercase tracking-widest break-words">
          <p>&copy; {new Date().getFullYear()} Moiz Jawad. All Rights Reserved.</p>
          <p className="text-red-500/80">STREAMING WORLDWIDE &bull; BUILT WITH REACT & GSAP</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
