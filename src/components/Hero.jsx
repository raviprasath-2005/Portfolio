import React from "react";
import Cube3D from "./Cube3D";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden z-10 px-4 sm:px-6 lg:px-12"
    >
      <div className="relative z-30 w-full max-w-[1300px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">

        {/* ---------------- LEFT CONTENT ---------------- */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">

          <h1 className="flex flex-col text-[clamp(2.2rem,6vw,5rem)] mb-6 font-extrabold leading-[1.05] tracking-[-0.03em]">
            <span>Hi, I'm</span>

            <span className="text-accent2 pt-3 pb-4 sm:pb-6">
              RAVI PRASATH
            </span>

            <span className="block font-mono text-[clamp(1rem,2.5vw,1.8rem)] font-normal text-muted tracking-[0.06em] mt-2">
              Full Stack Developer
            </span>
          </h1>

          <p className="max-w-[600px] mx-auto lg:mx-0 text-muted text-[1rem] sm:text-[1.05rem] leading-[1.7] sm:leading-[1.8] mb-8">
            I design and build scalable web applications — from database
            architecture to pixel-perfect UIs. Clean code, great UX, always.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 py-3 px-7 rounded-lg font-semibold text-sm sm:text-[0.9rem] transition-all duration-200 bg-accent text-white hover:bg-accent2 hover:-translate-y-[2px]"
            >
              View My Work →
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 py-3 px-7 rounded-lg font-semibold text-sm sm:text-[0.9rem] transition-all duration-200 bg-transparent text-text border border-border hover:border-accent hover:text-accent2 hover:-translate-y-[2px]"
            >
              Let's Connect
            </a>
          </div>
        </div>

        {/* ---------------- RIGHT 3D CUBE ---------------- */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="
            w-[240px] h-[240px]
            sm:w-[320px] sm:h-[320px]
            md:w-[400px] md:h-[400px]
            lg:w-[450px] lg:h-[450px]
            drop-shadow-[0_0_60px_#7c3aed]
          ">
            <Cube3D />
          </div>
        </div>

      </div>
    </section>
  );
}