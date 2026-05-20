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

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();

  }, []);

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

      const response = await fetch("http://localhost:8001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

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
  const [showToast, setShowToast] = useState(false);

useEffect(() => {
  if (status) {
    setShowToast(true);

    const timer = setTimeout(() => {
      setShowToast(false);
    }, 3500);

    return () => clearTimeout(timer);
  }
}, [status]); 

  return (
    <section id="contact" className="py-20 relative z-10">

      <div
        ref={ref}
        className="max-w-[1400px] mx-auto w-full opacity-0 translate-y-[28px] transition-all duration-[650ms] ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0"
      >

        {/* HEADING */}
        <div className="text-[clamp(1.8rem,4vw,2.4rem)] font-extrabold tracking-[-0.02em] mb-[0.8rem]">
          Contact
        </div>

        <div className="h-[3px] bg-accent rounded-[2px] mb-12 w-[250px] max-md:w-[200px] max-lg:w-[220px]" />

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-16 items-start">

          {/* LEFT SIDE */}
          <div>

            <p className="text-muted text-base leading-[1.85] mb-8">
              Have a project in mind, a job opportunity, or just want to say hello?
              My inbox is always open — I’ll get back to you within 24 hours.
            </p>

            <div className="flex flex-col gap-3">

              {links.map((link) => (
               <a
  key={link.label}
  href={link.href}
  target={link.href.startsWith("mailto:") ? "_self" : "_blank"}
  rel="noreferrer"
  className="flex items-center gap-[12px] py-[12px] px-[16px] bg-bg2 border border-border rounded-[10px] text-text no-underline text-[0.9rem] font-mono transition-all duration-200 hover:border-accent hover:text-accent2 hover:translate-x-1"
>
                  <span className="w-[36px] h-[36px] bg-bg3 rounded-lg flex items-center justify-center text-base shrink-0">
                    {link.icon}
                  </span>

                  {link.label}
                </a>
              ))}

            </div>

          </div>

          {/* RIGHT SIDE */}
          <form
            className="flex flex-col gap-4 relative"
            onSubmit={handleSubmit}
          >
<div
  className={`fixed bottom-[-30px] right-[50] z-[999] transform transition-opacity duration-700 ease-in-out ${
    showToast ? "opacity-100" : "opacity-0 pointer-events-none"
  }`}
>
  {status === "success" && (
      <div>
        <p className="text-green text-[15px] mt-[2px]">
          Thanks for contacting me. I’ll reply soon.
        </p>
      </div>
  )}

  {status === "error" && (
      <div>
        <p className="text-yellow-600 text-[15px] mt-[2px]">
An error occurred. Sorry for the inconvenience!
        </p>
      </div>
  )}

  {status === "server" && (
   <div>
        <p className="text-red-600 text-[15px] mt-[2px]">
Server is not reachable!
        </p>
      </div>
  )}

</div>

            {/* NAME + EMAIL */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {/* NAME */}
              <div className="flex flex-col gap-[6px]">

                <label className="text-[0.78rem] text-muted font-mono uppercase tracking-[0.08em]">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-bg2 border border-border rounded-lg py-[12px] px-[14px] text-text font-syne text-[0.9rem] outline-none transition-all duration-200 w-full focus:border-accent focus:shadow-[0_0_0_4px_rgba(99,102,241,0.1)] placeholder:text-muted"
                />

              </div>

              {/* EMAIL */}
              <div className="flex flex-col gap-[6px]">

                <label className="text-[0.78rem] text-muted font-mono uppercase tracking-[0.08em]">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-bg2 border border-border rounded-lg py-[12px] px-[14px] text-text font-syne text-[0.9rem] outline-none transition-all duration-200 w-full focus:border-accent focus:shadow-[0_0_0_4px_rgba(99,102,241,0.1)] placeholder:text-muted"
                />

              </div>

            </div>

            {/* SUBJECT */}
            <div className="flex flex-col gap-[6px]">

              <label className="text-[0.78rem] text-muted font-mono uppercase tracking-[0.08em]">
                Subject
              </label>

              <input
                type="text"
                placeholder="What's this about?"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="bg-bg2 border border-border rounded-lg py-[12px] px-[14px] text-text font-syne text-[0.9rem] outline-none transition-all duration-200 w-full focus:border-accent focus:shadow-[0_0_0_4px_rgba(99,102,241,0.1)] placeholder:text-muted"
              />

            </div>

            {/* MESSAGE */}
            <div className="flex flex-col gap-[6px]">

              <label className="text-[0.78rem] text-muted font-mono uppercase tracking-[0.08em]">
                Message
              </label>

              <textarea
                rows={5}
                placeholder="Tell me about your project..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="bg-bg2 border border-border rounded-lg py-[12px] px-[14px] text-text font-syne text-[0.9rem] outline-none resize-none transition-all duration-200 w-full focus:border-accent focus:shadow-[0_0_0_4px_rgba(99,102,241,0.1)] placeholder:text-muted"
              />

            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 py-3 px-7 rounded-xl font-syne font-semibold text-[0.92rem] cursor-pointer transition-all duration-300 border-none bg-accent text-white hover:bg-accent2 hover:-translate-y-[2px] hover:shadow-[0_10px_25px_rgba(99,102,241,0.35)] disabled:opacity-70 disabled:cursor-not-allowed"
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