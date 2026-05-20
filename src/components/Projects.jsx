import React, { useEffect, useRef } from 'react';

const projects = [
  {
    title: 'Employee Pay-Roll Management',
    desc: 'Built a secure employee payroll system with role-based authentication. Developed responsive dashboards for Employees, HR, and Admin with features like attendance tracking, leave management, payroll viewing, and payslip downloads using React.',
    tags: ['React.js','Spring Boot','MySQL','MangoDB','Tailwind-CSS'],
  },
  {
    title: 'IntelQuiz Website',
    desc: 'Built an interactive quiz game using React.js and CSS with category-based questions, scoring system, and timer functionality. Integrated real-time feedback to enhance user engagement and learning experience.',
    tags: ['React.js','CSS'],
  },
  {
    title: 'Knock pattern based door lock system',
    desc: 'Developed a smart door lock system using Arduino UNO that enables secure access through custom knock patterns. Used a piezo sensor to detect knock sequences in real time for keyless locking and unlocking, improving security without traditional keys or passwords.',
    tags: ['Embedded C'],
  },
  {
    title: 'Guess-The-Random-Number-Webpage',
    desc: 'Developed an interactive “Guess the Random Number” game using JavaScript where users attempt to guess a randomly generated number within a limited range. Implemented logic for score tracking.',
    tags: ['HTML','CSS','JavaScript'],
  },
];

export default function Projects() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 relative z-10">
      <div
        ref={ref}
        className="max-w-[1300px] mx-auto w-full opacity-0 translate-y-[28px] transition-all duration-[650ms] ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0"
      >
        <div className="text-[clamp(1.8rem,4vw,2.4rem)] font-extrabold tracking-[-0.02em] mb-[0.8rem]">
          Projects
        </div>

        <div className="h-[3px] bg-accent rounded-[2px] mb-12 w-[250px] max-md:w-[200px] max-lg:w-[220px]" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-bg3 border border-border rounded-[14px] p-7 relative transition-all duration-[250ms] flex flex-col gap-[0.8rem] hover:border-accent hover:-translate-y-1"
            >
              <h3 className="text-[1.1rem] font-bold text-text leading-[1.3]">
                {p.title}
              </h3>

              <p className="text-muted text-[0.9rem] leading-[1.7]">
                {p.desc}
              </p>
              <div className="flex gap-[6px] flex-wrap">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[0.7rem] bg-[#7c6aff]/10 text-accent2 border border-[#7c6aff]/25 rounded py-[3px] px-[9px]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}