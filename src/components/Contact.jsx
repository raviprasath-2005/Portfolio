import React, { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const links = [
  {
    icon: <MdOutlineMailOutline />,
    label: "raviprasathveeramani1@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=raviprasathveeramani1@gmail.com",
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
];

export default function Contact() {
  const ref = useRef(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  /* INTERSECTION ANIMATION */
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

  /* TOAST */
  useEffect(() => {
    if (status) {
      setShowToast(true);

      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [status]);

  /* SUBMIT */
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    const payload = {
      name,
      email,
      subject,
      message,
    };

    try {
      const response = await fetch(
        "http://localhost:8001/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        setStatus("success");

        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("server");
    } finally {
      setLoading(false);

      setTimeout(() => {
        setStatus("");
      }, 4000);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative z-10 "
    >
      <div
        ref={ref}
        className="max-w-[1300px] mx-auto w-full opacity-0 translate-y-[28px] transition-all duration-[650ms] ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0"
      >
        {/* HEADING */}
        <div className="inline-block pb-8">
  <div className="pb-2 font-['Plus_Jakarta_Sans'] text-[clamp(2.2rem,3vw,4rem)] font-extrabold tracking-[-0.03em] leading-none mb-3 bg-gradient-to-r bg-white bg-clip-text text-transparent">
    Contact
  </div>

  <div className="h-[3px] w-full bg-accent rounded-full" />
</div>
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.2fr] gap-10 lg:gap-16 items-start">
          {/* LEFT SIDE */}
          <div>
            <p className="text-muted text-[0.96rem] sm:text-base leading-[1.9] mb-8">
              Have a project in mind, a job opportunity, or just want to say
              hello? My inbox is always open — I’ll get back to you within 24
              hours.
            </p>

            {/* LINKS */}
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={
                    link.href.startsWith("mailto:")
                      ? "_self"
                      : "_blank"
                  }
                  rel="noreferrer"
                  className="flex items-center gap-3 py-3 px-4 bg-bg2 border border-border rounded-xl text-text no-underline text-[0.88rem] sm:text-[0.92rem] font-mono transition-all duration-300 hover:border-accent hover:text-accent2 hover:translate-x-1 overflow-hidden"
                >
                  <span className="w-10 h-10 bg-bg3 rounded-lg flex items-center justify-center text-base shrink-0">
                    {link.icon}
                  </span>

                  <span className="truncate">{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <form
            className="flex flex-col gap-5 relative"
            onSubmit={handleSubmit}
          >
            {/* TOAST */}
            <div
              className={`fixed bottom-5 right-4 sm:right-6 z-[999] transition-all duration-500 ${
                showToast
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5 pointer-events-none"
              }`}
            >
              {status === "success" && (
                <div className="bg-[#052e16] border border-green-600 text-green-400 px-5 py-3 rounded-xl shadow-xl backdrop-blur-md max-w-[320px]">
                  <p className="text-sm sm:text-[15px]">
                    Thanks for contacting me. I’ll reply soon.
                  </p>
                </div>
              )}

              {status === "error" && (
                <div className="bg-[#422006] border border-yellow-600 text-yellow-400 px-5 py-3 rounded-xl shadow-xl backdrop-blur-md max-w-[320px]">
                  <p className="text-sm sm:text-[15px]">
                    An error occurred. Sorry for the inconvenience!
                  </p>
                </div>
              )}

              {status === "server" && (
                <div className="bg-[#450a0a] border border-red-600 text-red-400 px-5 py-3 rounded-xl shadow-xl backdrop-blur-md max-w-[320px]">
                  <p className="text-sm sm:text-[15px]">
                    Server is not reachable!
                  </p>
                </div>
              )}
            </div>

            {/* NAME + EMAIL */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* NAME */}
              <div className="flex flex-col gap-2">
                <label className="text-xs sm:text-[0.78rem] text-muted font-mono uppercase tracking-[0.08em]">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-bg2 border border-border rounded-xl py-3 px-4 text-text text-sm sm:text-[0.92rem] outline-none transition-all duration-300 w-full focus:border-accent focus:shadow-[0_0_0_4px_rgba(99,102,241,0.12)] placeholder:text-muted"
                />
              </div>

              {/* EMAIL */}
              <div className="flex flex-col gap-2">
                <label className="text-xs sm:text-[0.78rem] text-muted font-mono uppercase tracking-[0.08em]">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-bg2 border border-border rounded-xl py-3 px-4 text-text text-sm sm:text-[0.92rem] outline-none transition-all duration-300 w-full focus:border-accent focus:shadow-[0_0_0_4px_rgba(99,102,241,0.12)] placeholder:text-muted"
                />
              </div>
            </div>

            {/* SUBJECT */}
            <div className="flex flex-col gap-2">
              <label className="text-xs sm:text-[0.78rem] text-muted font-mono uppercase tracking-[0.08em]">
                Subject
              </label>

              <input
                type="text"
                placeholder="What's this about?"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="bg-bg2 border border-border rounded-xl py-3 px-4 text-text text-sm sm:text-[0.92rem] outline-none transition-all duration-300 w-full focus:border-accent focus:shadow-[0_0_0_4px_rgba(99,102,241,0.12)] placeholder:text-muted"
              />
            </div>

            {/* MESSAGE */}
            <div className="flex flex-col gap-2">
              <label className="text-xs sm:text-[0.78rem] text-muted font-mono uppercase tracking-[0.08em]">
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Tell me about your project..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="bg-bg2 border border-border rounded-xl py-3 px-4 text-text text-sm sm:text-[0.92rem] outline-none resize-none transition-all duration-300 w-full focus:border-accent focus:shadow-[0_0_0_4px_rgba(99,102,241,0.12)] placeholder:text-muted"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-fit inline-flex items-center justify-center gap-2 py-3 px-7 rounded-xl font-semibold text-sm sm:text-[0.92rem] cursor-pointer transition-all duration-300 border-none bg-accent text-white hover:bg-accent2 hover:-translate-y-[2px] hover:shadow-[0_10px_25px_rgba(99,102,241,0.35)] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message <FiSend />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}