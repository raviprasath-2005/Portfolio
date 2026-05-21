import React, { useEffect, useRef } from "react";

const projects = [
  {
    title: "Employee Pay-Roll Management",
    desc: "Built a secure employee payroll system with role-based authentication. Developed responsive dashboards for Employees, HR, and Admin with features like attendance tracking, leave management, payroll viewing, and payslip downloads using React.",
    tags: [
      "React.js",
      "Spring Boot",
      "MySQL",
      "MongoDB",
      "Tailwind CSS",
    ],
  },
  {
    title: "IntelQuiz Website",
    desc: "Built an interactive quiz game using React.js and CSS with category-based questions, scoring system, and timer functionality. Integrated real-time feedback to enhance user engagement and learning experience.",
    tags: ["React.js", "CSS"],
  },
  {
    title: "Knock Pattern Based Door Lock System",
    desc: "Developed a smart door lock system using Arduino UNO that enables secure access through custom knock patterns. Used a piezo sensor to detect knock sequences in real time for keyless locking and unlocking.",
    tags: ["Arduino", "Embedded C"],
  },
  {
    title: "Guess The Random Number",
    desc: "Developed an interactive number guessing game using JavaScript where users attempt to guess a randomly generated number within a limited range. Implemented score tracking and dynamic feedback logic.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
  title: "Library Management System",
  desc: "Developed a console-based Library Management System using Java and Object-Oriented Programming concepts. Implemented features such as book management, member records, issue/return tracking, and data handling to improve library operations and organization.",
  tags: ["Java"],
},
{
  title: "Taxi Booking System",
  desc: "Developed a Taxi Booking System using Java and Object-Oriented Programming principles to simulate real-time cab booking operations. Implemented functionalities such as customer booking, driver allocation, ride management, and fare calculation with an efficient and structured system design.",
  tags: ["Java"],
},
];

export default function Projects() {
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
      id="projects"
      className="py-16  sm:py-20 px-4 sm:px-6 lg:px-8 relative z-10"
    >
      <div
        ref={ref}
        className="max-w-[1300px] mx-auto w-full opacity-0 translate-y-[28px] transition-all duration-[650ms] ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0"
      >
        {/* HEADING */}
        <div className="inline-block pb-8">
  <div className="pb-2 font-['Plus_Jakarta_Sans'] text-[clamp(2.2rem,3vw,4rem)] font-extrabold tracking-[-0.03em] leading-none mb-3 bg-gradient-to-r bg-white bg-clip-text text-transparent">
    Projects
  </div>

  <div className="h-[3px] w-full bg-accent rounded-full" />
</div>
        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-bg3 border border-border rounded-2xl p-5 sm:p-7 relative transition-all duration-300 flex flex-col gap-4 hover:border-accent hover:-translate-y-2 hover:shadow-[0_12px_35px_rgba(124,106,255,0.12)]"
            >
              {/* PROJECT TITLE */}
              <h3 className="text-[1rem] sm:text-[1.15rem] font-bold text-text leading-[1.4]">
                {p.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-muted text-[0.88rem] sm:text-[0.94rem] leading-[1.8]">
                {p.desc}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[0.68rem] sm:text-[0.72rem] bg-[#7c6aff]/10 text-accent2 border border-[#7c6aff]/25 rounded-md py-[4px] px-[10px] whitespace-nowrap"
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