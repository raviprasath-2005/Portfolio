import React, { useState, useEffect } from 'react';

const links = ['About', 'Skills', 'Projects', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b ${scrolled ? 'bg-[#070710]/90 backdrop-blur-md border-border py-3 px-8' : 'bg-transparent border-transparent py-5 px-8'}`}>
      <div className="max-w-[1500px] mx-auto flex items-center justify-between">
        <a href="#hero" className="font-mono text-[0.92rem] text-text tracking-[0.04em]">
          <span className="text-accent2">RAVI PRASATH V</span>
        </a>

        <ul className={`list-none ${menuOpen ? 'flex absolute top-full left-0 right-0 flex-col bg-[#070710]/95 border-b border-border pt-6 pb-8 px-8 gap-6 items-start' : 'hidden'} md:flex md:static md:flex-row md:bg-transparent md:border-none md:p-0 md:gap-9 md:items-center`}>
          {links.map(l => (
            <li key={l}>
              <a 
                href={`#${l.toLowerCase()}`} 
                onClick={() => setMenuOpen(false)}
                className="text-muted text-[0.85rem] font-medium tracking-[0.04em] uppercase transition-colors duration-200 hover:text-accent2"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu">
          <span className={`block w-[22px] h-[2px] bg-text rounded-[2px] transition-all duration-300 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block w-[22px] h-[2px] bg-text rounded-[2px] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-[22px] h-[2px] bg-text rounded-[2px] transition-all duration-300 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>
    </nav>
  );
}
