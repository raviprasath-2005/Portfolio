import React, { useEffect, useRef } from "react";
import {
  FaGithub,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";

const links = [
  {
   icon: <MdOutlineMailOutline />, label: "Email", href: "https://mail.google.com/mail/?view=cm&fs=1&to=raviprasathveeramani1@gmail.com",
  },
  {
    icon: <IoLogoLinkedin />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ravi-prasath-v-8337b9269/",
  },
  {
    icon: <FaGithub />,
    label: "Github",
    href: "https://github.com/raviprasath-2005",
  },
  {
    icon: <SiLeetcode />,
    label: "Leetcode",
    href: "https://leetcode.com/u/Ravileetcode2024/",
  },
{
    icon: <FaTwitter />,
    label: "Twitter (X)",
    href: "https://x.com/Ravi_V_895",
  },
  {
    icon: <FaInstagram />,
    label: "Instagram",
    href: "https://www.instagram.com/mr._.neptune?igsh=cXVtNDZhaW9wdTZh",
  },
];

export default function Contact() {
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
      { threshold: 0.18 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative z-10 " >
      <div ref={ref} className="max-w-[1300px] mx-auto w-full opacity-0 translate-y-[28px] transition-all duration-[650ms] ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0" >
        {/* HEADING */}
        <div className="mb-10">
<div className="inline-block "> <div className="pb-2 font-['Plus_Jakarta_Sans'] text-[clamp(2.2rem,3vw,4rem)] font-extrabold tracking-[-0.03em] leading-none mb-3 bg-gradient-to-r bg-white bg-clip-text text-transparent">Let's Connect </div> <div className="h-[3px] w-full bg-accent rounded-full" /> </div>
          <p className="text-muted mt-4 max-w-xl">
            Open for internships, freelance projects, and collaborations.
            Feel free to reach out through any platform below.
          </p>
        </div>

        {/* LINKS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 p-5 rounded-2xl bg-bg2 border border-border hover:border-accent hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-2xl text-text group-hover:text-accent transition">
                {link.icon}
              </div>

              <div>
                <p className="font-semibold text-text group-hover:text-accent transition">
                  {link.label}
                </p>
                <p className="text-sm text-muted">
                  Click to open
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* FOOTER CTA */}
<div className="mt-14 text-center">
  <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-bg2 border border-border">
    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
    <p className="text-sm text-muted">
      Available for internships & freelance projects
    </p>
  </div>

  <h3 className="mt-5 text-xl sm:text-2xl font-semibold">
    Let’s build something great together 🚀
  </h3>

  <p className="text-muted mt-2 text-sm">
    Feel free to reach out anytime — I usually reply within 24 hours.
  </p>
</div>
      </div>
    </section>
  );
}