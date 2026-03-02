import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./Navbar";
import Hero from "./Hero";
import OurStory from "./About";
import Menu from "./Menu";

gsap.registerPlugin(ScrollTrigger);

const DISH_URL =
  "https://tse1.mm.bing.net/th/id/OIP.ZCqst1yyRXOq8G3FODT11wHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain&o=7&rm=3";

const isMobile = () => window.innerWidth < 768;

export default function LandingPage() {
  const pageRef = useRef(null);
  const dishWrapRef = useRef(null);

  useGSAP(
    () => {
      const dish = dishWrapRef.current;
      const mobile = isMobile();

      const DISH_SIZE = mobile ? 240 : 380;

      // ── Set size + initial position ──────────────────────────────────────
      gsap.set(dish, {
        width: DISH_SIZE,
        height: DISH_SIZE,
        position: "fixed",
        zIndex: 30,
        top: "50%",
        left: "65%",
        xPercent: -30,
        yPercent: -40,
        scale: mobile ? 0.85 : 1,
        rotation: 0,
        opacity: 0,
        x: 0,
        y: 0,
      });

      // Fade in on load
      gsap.to(dish, {
        opacity: 1,
        duration: 1.4,
        delay: 1,
        ease: "power2.out",
      });
      // ── COMBINED PHASES: Timeline for seamless transition ─────────────────
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#story",
          start: "top bottom", // Start when story enters
          endTrigger: "#menu",
          end: "top 40%", // End when menu is in position
          scrub: 1.2,
        },
      });

      tl.to(dish, {
        left: mobile ? "30%" : "14%",
        top: "50%",
        scale: mobile ? 0.55 : 0.75,
        rotation: mobile ? 0 : -5,
        ease: "none",
      }).to(
        dish,
        {
          left: "50%",
          top: "44%",
          scale: mobile ? 0.5 : 0.68,
          rotation: 0,
          ease: "none",
        },
        "+=0.5"
      ); // The delay ensures it stays in the 'Story' position for a bit before moving to 'Menu'

      // ── Mouse parallax on Hero ────────────────────────────────────────────
      const handleMouseMove = (e) => {
        if (window.scrollY > window.innerHeight * 0.25) return;
        <div
          ref={dishWrapRef}
          style={{
            position: "fixed",
            pointerEvents: "none",
            willChange: "transform, opacity",
          }}
        ></div>;
      };
      window.addEventListener("mousemove", handleMouseMove);

      // ── Idle rotation drift ───────────────────────────────────────────────
      gsap.to(dish, {
        rotation: "+=5",
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2.2,
      });

      return () => window.removeEventListener("mousemove", handleMouseMove);
    },
    { scope: pageRef }
  );

  return (
    <div ref={pageRef} className="grain-overlay">
      {/* ── FLOATING DISH ─────────────────────────────────────────────────── */}
      <div
        ref={dishWrapRef}
        style={{
          position: "fixed",
          pointerEvents: "none",
          willChange: "transform, opacity",
          width: 320,
          height: 320,
        }}
      >
        {/* Halo rings */}
        {[14, 30, 50].map((offset) => (
          <div
            key={offset}
            style={{
              position: "absolute",
              inset: -offset,
              borderRadius: "50%",
              border: `1px solid rgba(200,151,58,${0.18 - offset * 0.003})`,
              pointerEvents: "none",
            }}
          />
        ))}

        {/* Dish image */}
        <img
          src={DISH_URL}
          alt="Signature dish — Nocturne Paris"
          draggable={false}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "50%",
            display: "block",
            filter:
              "drop-shadow(0 30px 60px rgba(0,0,0,0.85)) drop-shadow(0 0 40px rgba(200,151,58,0.08))",
          }}
        />

        {/* Inner gold rim */}
        <div
          style={{
            position: "absolute",
            inset: 6,
            borderRadius: "50%",
            border: "1px solid rgba(200,151,58,0.22)",
            pointerEvents: "none",
          }}
        />
      </div>

      <Navbar />

      <main>
        <Hero />
        <OurStory />
        <Menu />
      </main>
    </div>
  );
}
