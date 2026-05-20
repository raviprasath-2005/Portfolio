import React, { useEffect, useRef } from 'react';

export default function Background() {
  const orb1 = useRef(null);
  const orb2 = useRef(null);

  useEffect(() => {
    let rafId;
    let scrollY = window.scrollY;
    const totalH = () => document.body.scrollHeight;

    const update = () => {
      scrollY = window.scrollY;
      const pct = scrollY / (totalH() - window.innerHeight);

      if (orb1.current) {
        const x = 30 + Math.sin(pct * Math.PI * 2) * 25;
        const y = 10 + pct * 80;
        orb1.current.style.left = `${x}%`;
        orb1.current.style.top  = `${y}%`;
      }

      // Secondary orb moves opposite direction
      if (orb2.current) {
        const x = 60 + Math.cos(pct * Math.PI * 2) * 20;
        const y = 20 + pct * 60;
        orb2.current.style.left = `${x}%`;
        orb2.current.style.top  = `${y}%`;
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#070710]"
      style={{ backgroundImage: 'radial-gradient(circle, #2a2a4a 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      aria-hidden="true"
    >
      {/* Edge fade — hides dots at all 4 edges */}
      <div 
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 80% 65% at 50% 50%, transparent 20%, #070710 100%)' }}
      />

      {/* Animated glow orbs */}
      <div 
        ref={orb1}
        className="absolute rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-[600ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] will-change-[left,top] w-[700px] h-[500px] animate-orb-breath-main"
        style={{ background: 'radial-gradient(ellipse, rgba(124, 106, 255, 0.16) 0%, transparent 70%)' }}
      />
      <div 
        ref={orb2}
        className="absolute rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-[600ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] will-change-[left,top] w-[480px] h-[360px] animate-orb-breath-accent"
        style={{ background: 'radial-gradient(ellipse, rgba(56, 189, 248, 0.09) 0%, transparent 65%)' }}
      />

      {/* Subtle static noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.025]"
        style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: '180px 180px' 
        }}
      />
    </div>
  );
}
