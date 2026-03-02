import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Hero() {
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const tagRef = useRef(null);
  const ctaRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.8 });

    tl.fromTo(
      tagRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
      .fromTo(
        headlineRef.current.querySelectorAll(".line"),
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, stagger: 0.12, ease: "power3.out" },
        "-=0.3"
      )
      .fromTo(
        subRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out" },
        "-=0.2"
      );
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #0E0C0A 0%, #1A140C 60%, #0E0C0A 100%)",
      }}
    >
      {/* Radial glow behind dish */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "70vw",
          height: "70vw",
          maxWidth: 700,
          maxHeight: 700,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(200,151,58,0.07) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Horizontal rule accents */}
      <div
        className="absolute left-0 right-0 pointer-events-none"
        style={{
          top: "18%",
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(200,151,58,0.08), transparent)",
        }}
      />
      <div
        className="absolute left-0 right-0 pointer-events-none"
        style={{
          bottom: "18%",
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(200,151,58,0.08), transparent)",
        }}
      />

      {/* Main content — split into left copy + right space for dish */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-14 grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-screen pt-28 pb-20">
        {/* LEFT: Typography */}
        <div className="flex flex-col items-start">
          <span ref={tagRef} className="section-label mb-6 opacity-0">
            ✦ &nbsp; Michelin ★★★ · Paris &nbsp; ✦
          </span>

          <div ref={headlineRef} className="overflow-hidden">
            <h2
              className="line font-display text-cream leading-none opacity-0"
              style={{
                fontSize: "clamp(52px, 8vw, 112px)",
                fontWeight: 400,
                letterSpacing: "-0.01em",
              }}
            >
              Where the
            </h2>
            <h2
              className="line font-display italic leading-none opacity-0"
              style={{
                fontSize: "clamp(52px, 8vw, 112px)",
                fontWeight: 400,
                letterSpacing: "-0.01em",
                color: "var(--gold)",
              }}
            >
              Night
            </h2>
            <h2
              className="line font-display text-cream leading-none opacity-0"
              style={{
                fontSize: "clamp(52px, 8vw, 112px)",
                fontWeight: 400,
                letterSpacing: "-0.01em",
              }}
            >
              Dines.
            </h2>
          </div>

          <div ref={subRef} className="mt-8 opacity-0">
            <div className="flex items-center gap-3 mb-6">
              <div
                style={{
                  width: 40,
                  height: 1,
                  background: "var(--gold)",
                  opacity: 0.6,
                }}
              />
              <span className="section-label" style={{ fontSize: "8px" }}>
                An evening unlike any other
              </span>
            </div>
            <p
              className="font-sans text-cream-muted leading-relaxed max-w-sm"
              style={{ fontSize: 14, fontWeight: 300, letterSpacing: "0.04em" }}
            >
              Eleven courses. Forty-two artisan producers. One table set for
              you. Experience cuisine as pure meditation on season, memory, and
              place.
            </p>
          </div>

          <div ref={ctaRef} className="mt-20 opacity-0">
            <a href="#" className="btn-gold">
              Reserve Your Evening
              <span style={{ fontSize: 16, lineHeight: 1 }}>→</span>
            </a>
          </div>
        </div>

        {/* RIGHT: empty — floating dish will travel here */}
        <div className="hidden md:block" />
      </div>

      

      <style>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); opacity: 1; }
          100% { transform: translateY(200%); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
