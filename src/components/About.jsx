import { useRef } from "react";

const STATS = [
  { num: "1923", label: "Founded" },
  { num: "★★★", label: "Michelin Stars" },
  { num: "11", label: "Courses" },
  { num: "42", label: "Artisan Partners" },
];

export default function OurStory() {
  const sectionRef = useRef(null);

  return (
    <section
      id="story"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0E0C0A 0%, #171410 50%, #0E0C0A 100%)",
      }}
    >
      {/* Subtle diagonal texture line */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(200,151,58,0.015) 0px, rgba(200,151,58,0.015) 1px, transparent 1px, transparent 60px)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-14 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center py-32">
        {/* LEFT: dish lands here — measured by GSAP at runtime */}
        <div
          id="story-dish-anchor"
          className="relative hidden md:flex items-center justify-center"
          style={{ minHeight: 520 }}
        >
          {/* Decorative corner brackets — pure CSS, no dish image here */}
          {/* Top-left */}
          <div
            className="absolute top-12 left-12"
            style={{
              width: 36,
              height: 36,
              borderTop: "1px solid rgba(200,151,58,0.35)",
              borderLeft: "1px solid rgba(200,151,58,0.35)",
            }}
          />
          {/* Top-right */}
          <div
            className="absolute top-12 right-12"
            style={{
              width: 36,
              height: 36,
              borderTop: "1px solid rgba(200,151,58,0.35)",
              borderRight: "1px solid rgba(200,151,58,0.35)",
            }}
          />
          {/* Bottom-left */}
          <div
            className="absolute bottom-12 left-12"
            style={{
              width: 36,
              height: 36,
              borderBottom: "1px solid rgba(200,151,58,0.35)",
              borderLeft: "1px solid rgba(200,151,58,0.35)",
            }}
          />
          {/* Bottom-right */}
          <div
            className="absolute bottom-12 right-12"
            style={{
              width: 36,
              height: 36,
              borderBottom: "1px solid rgba(200,151,58,0.35)",
              borderRight: "1px solid rgba(200,151,58,0.35)",
            }}
          />

          {/* Faint caption below the landing zone */}
          <span
            className="absolute bottom-6 left-1/2 -translate-x-1/2 section-label"
            style={{
              fontSize: "8px",
              color: "rgba(200,151,58,0.3)",
              whiteSpace: "nowrap",
            }}
          >
            Signature dish · Season IV
          </span>
        </div>

        {/* RIGHT: Story copy */}
        <div className="story-content">
          <span className="section-label block mb-6">
            ✦ &nbsp; The Nocturne Story &nbsp; ✦
          </span>

          <h2
            className="font-display text-cream mb-6 leading-tight"
            style={{ fontSize: "clamp(36px, 5vw, 68px)", fontWeight: 400 }}
          >
            A Century of{" "}
            <em className="italic" style={{ color: "var(--gold)" }}>
              Devotion
            </em>{" "}
            to the Table
          </h2>

          <div className="flex items-center gap-4 mb-8">
            <div
              style={{
                width: 48,
                height: 1,
                background: "var(--gold)",
                opacity: 0.5,
              }}
            />
            <div
              style={{
                width: 6,
                height: 6,
                background: "var(--gold)",
                transform: "rotate(45deg)",
              }}
            />
            <div
              style={{
                width: 48,
                height: 1,
                background: "var(--gold)",
                opacity: 0.5,
              }}
            />
          </div>

          <p
            className="font-sans mb-6 leading-loose"
            style={{
              fontSize: 14,
              fontWeight: 300,
              letterSpacing: "0.04em",
              color: "rgba(242,234,216,0.58)",
              maxWidth: 420,
            }}
          >
            In 1923, Chef Henri Leclair opened a small dining room on the Rue de
            Rivoli. His singular conviction: that a meal should dissolve the
            boundary between nourishment and art. One hundred years later, that
            conviction burns brighter than ever.
          </p>

          <p
            className="font-sans mb-12 leading-loose"
            style={{
              fontSize: 14,
              fontWeight: 300,
              letterSpacing: "0.04em",
              color: "rgba(242,234,216,0.45)",
              maxWidth: 420,
            }}
          >
            Our kitchen sources exclusively from artisan producers within a
            300km radius. Every ingredient arrives daily. Every dish is
            composed, deconstructed, and reimagined each season — a living
            collaboration between chef and land.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12">
            {STATS.map(({ num, label }) => (
              <div key={label} className="flex flex-col">
                <span
                  className="font-display"
                  style={{
                    fontSize: "clamp(28px, 3vw, 40px)",
                    color: "var(--gold)",
                    fontWeight: 400,
                    lineHeight: 1.1,
                  }}
                >
                  {num}
                </span>
                <span
                  className="font-sans mt-2"
                  style={{
                    fontSize: 9,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "rgba(242,234,216,0.35)",
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          <a href="#" className="btn-gold">
            Meet the Chef
            <span style={{ fontSize: 14 }}>→</span>
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: 120,
          background: "linear-gradient(to top, #0E0C0A, transparent)",
        }}
      />
    </section>
  );
}
