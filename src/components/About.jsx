import React, { useEffect, useRef, useState } from "react";
import { MdLocationPin } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const stats = [
  { num: "5+", label: "Projects Built" },
  { num: "10+", label: "Technologies Learned" },
  { num: "500+", label: "DSA Problems Solved" },
  { num: "100%", label: "Passion for Development" },
];

export default function About() {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

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
      id="about"
      className="relative z-10 py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* IMAGE MODAL */}
      {open && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="relative flex items-center justify-center">
            <img
              src="/me.jpeg"
              alt="Me"
              className="w-[90vw] max-w-[420px] h-auto max-h-[85vh] rounded-2xl object-cover"
            />

            <button
              onClick={() => setOpen(false)}
              className="absolute -top-12 right-0 text-white text-3xl hover:scale-110 transition"
            >
              <RxCross2 />
            </button>
          </div>
        </div>
      )}

      <div
        ref={ref}
        className="max-w-[1300px] mx-auto w-full opacity-0 translate-y-[28px] transition-all duration-[650ms] ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0"
      >
        {/* HEADING */}
       <div className="inline-block pb-8">
  <div className="pb-2 font-['Plus_Jakarta_Sans'] text-[clamp(2.2rem,3vw,4rem)] font-extrabold tracking-[-0.03em] leading-none mb-3 bg-gradient-to-r bg-white bg-clip-text text-transparent">
    About Me
  </div>

  <div className="h-[3px] w-full bg-accent rounded-full" />
</div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-16 items-start">
          {/* LEFT SIDE */}
          <div>
            <p className="text-muted text-[0.98rem] sm:text-lg leading-[1.9] mb-6">
              I’m a passionate Full-Stack Developer based in Coimbatore, Tamil Nadu, specializing in building modern, scalable, and user-focused web applications. I enjoy developing seamless digital experiences across the entire stack — from designing efficient backend architectures and databases to crafting responsive and polished React interfaces.
            </p>

            <p className="text-muted text-[0.98rem] sm:text-lg leading-[1.9] mb-10">
              Beyond development, I actively explore emerging technologies and continuously expand my technical knowledge by working with modern tools and frameworks. I believe great software is built through consistency, problem-solving, collaboration, and a strong focus on delivering meaningful user experiences.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-bg3 border border-border rounded-xl p-6 sm:p-7 text-center transition-all duration-300 hover:border-accent hover:-translate-y-1"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-accent2 leading-none">
                    {s.num}
                  </div>

                  <div className="text-[0.75rem] sm:text-[0.82rem] text-muted mt-2 font-mono">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-bg3 border border-border rounded-2xl p-6 sm:p-8 flex flex-col items-center gap-6 w-full max-w-[420px] mx-auto">
            {/* PROFILE IMAGE */}
            <div
              onClick={() => setOpen(true)}
              className="w-[100px] h-[100px] sm:w-[110px] sm:h-[110px] rounded-full bg-gradient-to-br from-accent to-accent2 flex items-center justify-center border-[3px] border-[#7c6aff]/30 hover:shadow-[0_0_30px_#1A223E] cursor-pointer transition-all duration-300 overflow-hidden"
            >
              <img
                src="/me.jpeg"
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* DETAILS */}
            <div className="w-full flex flex-col gap-1">
              <div className="flex justify-between items-center py-3 border-b border-border gap-3">
                <span className="text-muted font-mono text-xs sm:text-sm">
                  Name
                </span>

                <span className="text-text font-medium text-sm sm:text-base text-right">
                  RAVI PRASATH V
                </span>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-border gap-3">
                <span className="text-muted font-mono text-xs sm:text-sm">
                  Role
                </span>

                <span className="text-text font-medium text-sm sm:text-base text-right">
                  Full Stack Developer
                </span>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-border gap-3">
                <span className="text-muted font-mono text-xs sm:text-sm">
                  Location
                </span>

                <span className="flex items-center gap-1 text-text font-medium text-sm sm:text-base text-right">
                  <MdLocationPin />
                  Coimbatore, TN
                </span>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-border gap-3">
                <span className="text-muted font-mono text-xs sm:text-sm">
                  Status
                </span>

                <div className="flex items-center gap-2">
                  <span className="w-[8px] h-[8px] bg-[#4ade80] rounded-full animate-pulse" />

                  <span className="text-[#4ade80] font-medium text-sm sm:text-base">
                    Open to work
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-border gap-2">
                <span className="text-muted font-mono text-xs sm:text-sm">
                  Email
                </span>

                <span className="text-text font-medium text-xs sm:text-sm break-all text-left sm:text-right">
                  raviprasathveeramani1@gmail.com
                </span>
              </div>
            </div>

            {/* BUTTON */}
            <a
              href="/resume.pdf"
              download="RAVI_PRASATH_Resume.pdf"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 bg-accent text-white hover:bg-accent2 hover:-translate-y-[2px]"
            >
              Download CV →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}