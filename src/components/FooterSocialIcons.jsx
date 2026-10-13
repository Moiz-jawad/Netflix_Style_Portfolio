import { useState } from 'react';

/**
 * Premium animated social dock — adapted from 21st.dev Social Icons
 * (jatin-yadav05) and restyled for Netflix-dark portfolio (red accents, mono).
 */
const socials = [
  {
    name: 'Email',
    href: 'mailto:moizjawaad@gmail.com',
    external: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-[18px]">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 7 9-7" />
      </svg>
    ),
  },
  {
    name: 'Phone',
    href: 'tel:+923035414205',
    external: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-[18px]">
        <path d="M6.5 3.5h3l1.5 4.5-2 1.5a12 12 0 006 6l1.5-2 4.5 1.5v3a2 2 0 01-2.2 2A17 17 0 014.5 5.7 2 2 0 016.5 3.5z" />
      </svg>
    ),
  },
  {
    name: 'Site',
    href: 'https://moizjawad.dev',
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-[18px]">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/Moiz-jawad',
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-[18px]">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://pk.linkedin.com/in/moiz-jawad',
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-[18px]">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 11v6M8 8v.01M12 17v-3.5a2.5 2.5 0 015 0V17" />
      </svg>
    ),
  },
];

const FooterSocialIcons = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="relative flex items-center gap-0.5 px-1.5 py-1.5 rounded-2xl bg-[#0b0b0b] border border-white/10 shadow-[0_0_30px_rgba(229,9,20,0.08)]">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-red-600/[0.06] to-transparent pointer-events-none" />

      {socials.map((social, index) => (
        <a
          key={social.name}
          href={social.href}
          {...(social.external
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : {})}
          className="group relative flex items-center justify-center size-10 rounded-xl transition-colors duration-200"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          aria-label={social.name}
        >
          <span
            className={`absolute inset-1 rounded-lg bg-red-600/20 transition-all duration-300 ease-out ${
              hoveredIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          />

          <span
            className={`relative z-10 transition-all duration-300 ease-out ${
              hoveredIndex === index ? 'text-red-500 scale-110' : 'text-white/55'
            }`}
          >
            {social.icon}
          </span>

          <span
            className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-red-600 transition-all duration-300 ease-out ${
              hoveredIndex === index ? 'w-3 opacity-100' : 'w-0 opacity-0'
            }`}
          />

          <span
            className={`absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-[#141414] border border-red-600/40 text-white text-[10px] font-mono uppercase tracking-widest whitespace-nowrap shadow-[0_8px_24px_rgba(0,0,0,0.8)] transition-all duration-300 ease-out ${
              hoveredIndex === index
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-1 pointer-events-none'
            }`}
          >
            {social.name} //
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 size-2 rotate-45 bg-[#141414] border-r border-b border-red-600/40" />
          </span>
        </a>
      ))}
    </div>
  );
};

export default FooterSocialIcons;
