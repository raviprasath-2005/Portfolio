import React, { useEffect, useRef, useState } from 'react';
import { MdLocationPin } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
const stats = [
  { num: '5+', label: 'Projects Built'},
  { num: '10+',  label: 'Technologies Learned' },
  { num: '500+', label: 'DSA Problems Solved' },
  { num: '100%', label: 'Passion for Development' },
];


export default function About() {
  const ref = useRef(null);
const[open,setOpen]=useState(false);
useEffect(() => {
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [open]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.add('visible'); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative z-10 py-20">
   {open && (
  <div className="fixed inset-0 z-[1000] flex items-center justify-center backdrop-blur-sm px-4">
    <div className="relative flex items-center justify-center">
      <img
        src="/me.jpeg"
        alt="Me"
        className="w-[90vw] max-w-[400px] h-auto max-h-[90vh] rounded-2xl object-cover"
      />
      <RxCross2
        className="absolute top-[-40px] right-0 text-white text-2xl cursor-pointer hover:scale-110 transition"
        onClick={() => setOpen(false)}
      />
    </div>
  </div>
)}
      <div 
        className="max-w-[1300px] mx-auto w-full opacity-0 translate-y-[28px] transition-all duration-[650ms] ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0" 
        ref={ref}
      >
        <div className="text-[clamp(1.8rem,4vw,2.4rem)] font-extrabold tracking-[-0.02em] mb-[0.8rem]">About Me</div>
        <div className="h-[3px] bg-accent rounded-[2px] mb-12 w-[290px] max-md:w-[220px] max-lg:w-[240px]"/>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 items-start">
          <div>
            <p className="text-muted text-lg leading-[1.85] mb-[1.1rem]">
              I'm a full-stack developer based in Coimbatore, Tamil Nadu, with a passion
              for building products that are fast, scalable, and beautiful. I love
              working across the entire stack — from designing database schemas to
              shipping polished React UIs.
            </p>
            <p className="text-muted text-lg leading-[1.85] mb-[45px]">
              When I'm not coding, I'm exploring open-source, writing about what I
              learn, or experimenting with new tools and frameworks. I believe great
              software is built through iteration, curiosity, and solid collaboration.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map(s => (
                <div className="bg-bg3 border border-border rounded-xl p-[1.2rem] text-center transition-colors duration-200 hover:border-accent" key={s.label}>
                  <div className="text-3xl font-extrabold text-accent2 leading-none">{s.num}</div>
                  <div className="text-[0.78rem] text-muted mt-[6px] font-mono">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-bg3 border border-border rounded-2xl p-8 flex flex-col items-center gap-6 max-w-[400px] lg:max-w-none mx-auto lg:mx-0 w-full">
            <div className="w-[100px] h-[100px] rounded-full bg-gradient-to-br from-accent to-accent2 flex items-center justify-center text-3xl font-extrabold text-white border-[3px] 
            border-[#7c6aff]/30 hover:shadow-[0_0_30px_#1A223E] hover:cursor-pointer" onClick={()=>{setOpen(!open)}}>
            <img src="/me.jpeg" className='rounded-full h-[96px]' /></div>
            <div className="w-full flex flex-col gap-[0.6rem]">
              <div className="flex justify-between items-center py-[0.55rem] border-b border-border text-[0.88rem] last:border-none">
                <span className="text-muted font-mono text-[0.78rem]">Name</span>
                <span className="text-text font-medium">RAVI PRASATH V</span>
              </div>
              <div className="flex justify-between items-center py-[0.55rem] border-b border-border text-[0.88rem] last:border-none">
                <span className="text-muted font-mono text-[0.78rem]">Role</span>
                <span className="text-text font-medium">Full Stack Developer</span>
              </div>
              <div className="flex justify-between items-center py-[0.55rem] border-b border-border text-[0.88rem] last:border-none">
                <span className="text-muted font-mono text-[0.78rem]">Location</span>
                <span className="flex justify-between text-text font-medium items-center gap-2"><MdLocationPin /> <span className='pt-[3px]'>Coimbatore, TN</span></span>
              </div>
              <div className="flex justify-between items-center py-[0.55rem] border-b border-border text-[0.88rem] last:border-none">
                <span className="text-muted font-mono text-[0.78rem]">Status</span>
                <div className='flex justify-between gap-2'>
                <span className="w-[8px] h-[8px] bg-[#4ade80] rounded-full animate-blink mt-1.5 "/>
                <span className="text-[#4ade80] font-medium">Open to work</span>
                </div>
              </div>
              <div className="flex justify-between items-center py-[0.55rem] border-b border-border text-[0.88rem] last:border-none">
                <span className="text-muted font-mono text-[0.78rem]">Email</span>
                <span className="text-text font-medium">raviprasathveeramani1@gmail.com</span>
              </div>
            </div>
            <a
              href="/resume.pdf"
              download="RAVI_PRASATH_Resume.pdf"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-7 rounded-lg font-syne font-semibold text-[0.9rem] cursor-pointer no-underline transition-all duration-200 border-none bg-accent text-white hover:bg-accent2 hover:-translate-y-[2px]"
            >
              Download CV →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
