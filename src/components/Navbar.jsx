import { useRef, useEffect } from "react";
import gsap from "gsap";

const NAV_LINKS = ["Menu", "Our Story", "Reserve"];

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.3 }
    );
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-14 py-7"
      style={{
        background:
          "linear-gradient(to bottom, rgba(14,12,10,0.95) 0%, transparent 100%)",
      }}
    >
      {/* Left links */}
      <ul className="hidden md:flex items-center gap-10">
        {NAV_LINKS.slice(0, 2).map((link) => (
          <li key={link}>
            <a
              href="#"
              className="section-label hover:text-gold transition-colors duration-300"
              style={{ color: "rgba(242,234,216,0.45)" }}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Center wordmark */}
      <div className="flex flex-col items-center">
        <span
          className="section-label mb-1"
          style={{ fontSize: "8px", letterSpacing: "0.5em" }}
        >
          Est. 1923
        </span>
        <h1 className="font-display text-cream text-2xl md:text-3xl font-normal tracking-[0.12em]">
          NOCTURNE
        </h1>
        <div className="gold-divider w-full mt-1" style={{ "--max": "40px" }}>
          <span
            className="section-label"
            style={{ fontSize: "7px", letterSpacing: "0.3em" }}
          >
            ✦ Paris ✦
          </span>
        </div>
      </div>

      {/* Right links */}
      <ul className="hidden md:flex items-center gap-10">
        {NAV_LINKS.slice(2).map((link) => (
          <li key={link}>
            <a
              href="#"
              className="section-label hover:text-gold transition-colors duration-300"
              style={{ color: "rgba(242,234,216,0.45)" }}
            >
              {link}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#"
            className="btn-gold"
            style={{ padding: "9px 22px", fontSize: "8px" }}
          >
            Book
          </a>
        </li>
      </ul>

      {/* Mobile hamburger placeholder */}
      <button className="md:hidden flex flex-col gap-1.5 p-2">
        <span className="block w-6 h-px bg-gold" />
        <span className="block w-4 h-px bg-gold ml-auto" />
        <span className="block w-6 h-px bg-gold" />
      </button>
    </nav>
  );
}
