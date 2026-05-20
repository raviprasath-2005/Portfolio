import React, { useEffect, useRef } from 'react';
import { FaDatabase } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
const skillGroups = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: ['React.js','HTML', 'CSS3','JavaScript'],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: ['Spring Boot'],
  },
  {
    title: 'Database',
    icon: <FaDatabase />,
    skills: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Tools',
    icon: <FaTools />,
    skills: ['Docker','GitHub','Postman'],
  },
];

export default function Skills() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.add('visible'); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 relative z-10">
      <div 
        className="max-w-[1300px] mx-auto w-full opacity-0 translate-y-[28px] transition-all duration-[650ms] ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0" 
        ref={ref}
      >
        <div className="text-[clamp(1.8rem,4vw,2.4rem)] font-extrabold tracking-[-0.02em] mb-[0.8rem]">Tech Stack</div>
        <div className="h-[3px] bg-accent rounded-[2px] mb-12 w-[340px] max-md:w-[260px] max-lg:w-[280px]" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillGroups.map(g => (
            <div className="bg-bg2 border border-border rounded-[14px] p-7 transition-all duration-[250ms] hover:border-accent hover:-translate-y-[3px]" key={g.title}>
              <div className="flex items-center gap-[10px] mb-[1.2rem]">
                <span className="text-[1.3rem]">{g.icon}</span>
                <span className="font-mono text-[0.8rem] text-accent2 uppercase tracking-[0.12em] font-medium">{g.title}</span>
              </div>
              <div className="flex flex-wrap gap-[6px]">
                {g.skills.map(s => (
                  <span className="bg-bg3 border border-border text-text text-[0.8rem] py-[5px] px-[12px] rounded-md font-mono transition-colors duration-200 cursor-default hover:border-accent hover:text-accent2" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
