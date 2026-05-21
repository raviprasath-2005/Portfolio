import React, { useEffect, useRef } from "react";
import { FaDatabase, FaTools } from "react-icons/fa";

const skillGroups = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: ["React.js", "HTML", "CSS3", "JavaScript"],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: ["Spring Boot"],
  },
  {
    title: "Database",
    icon: <FaDatabase />,
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools",
    icon: <FaTools />,
    skills: ["Docker", "GitHub", "Postman"],
  },
];

export default function Skills() {
  const ref = useRef(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    },
    {
      threshold: 0.18,
    }
  );

  if (ref.current) {
    observer.observe(ref.current);
  }

  return () => observer.disconnect();
}, []);

  return (
    <section
      id="skills"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative z-10"
    >
      <div
        ref={ref}
        className="max-w-[1300px] mx-auto w-full opacity-0 translate-y-[28px] transition-all duration-[650ms] ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0"
      >
        {/* HEADING */}
        <div className="inline-block pb-8">
  <div className="pb-2 font-['Plus_Jakarta_Sans'] text-[clamp(2.2rem,3vw,4rem)] font-extrabold tracking-[-0.03em] leading-none mb-3 bg-gradient-to-r bg-white bg-clip-text text-transparent">
    Technical Skills
  </div>

  <div className="h-[3px] w-full bg-accent rounded-full" />
</div>

        {/* SKILL GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {skillGroups.map((g) => (
            <div
              key={g.title}
              className="bg-bg2 border border-border rounded-2xl p-5 sm:p-7 transition-all duration-300 hover:border-accent hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(124,106,255,0.12)]"
            >
              {/* TITLE */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[1.2rem] sm:text-[1.35rem] text-accent2">
                  {g.icon}
                </span>

                <span className="font-mono text-[0.75rem] sm:text-[0.82rem] text-accent2 uppercase tracking-[0.14em] font-medium">
                  {g.title}
                </span>
              </div>

              {/* SKILLS */}
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className="bg-bg3 border border-border text-text text-[0.72rem] sm:text-[0.8rem] py-[6px] px-[12px] rounded-md font-mono transition-all duration-200 cursor-default hover:border-accent hover:text-accent2 whitespace-nowrap"
                  >
                    {s}
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