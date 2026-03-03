"use client";

import Image from "next/image";
import { useEffect, useState, useRef, useCallback } from "react";
import { personal } from "@/content/personal";
import { socials } from "@/content/socials";
import { Linkedin, Send } from "lucide-react";

const SMALL_SCREEN_BREAKPOINT = 768;

export default function HeroCanvas() {
  const [loaded, setLoaded] = useState(false);
  const [fontSize, setFontSize] = useState(160);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const nameRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);

  const fitNameToWidth = useCallback(() => {
    if (!measureRef.current || !nameRef.current) return;
    const container = measureRef.current;
    const textEl = nameRef.current;
    const targetWidth = container.offsetWidth - 56; // padding 28px each side (tighter = taller text)
    if (targetWidth <= 0) return;
    // Binary search for font-size that fits — allow larger max for taller impact
    let low = 40;
    let high = 520;
    const text = textEl.textContent || "";
    const temp = document.createElement("span");
    temp.style.cssText = "visibility:hidden;position:absolute;white-space:nowrap;font-family:'Bebas Neue',sans-serif;letter-spacing:-3px;";
    temp.textContent = text;
    document.body.appendChild(temp);
    for (let i = 0; i < 22; i++) {
      const mid = (low + high) / 2;
      temp.style.fontSize = `${mid}px`;
      if (temp.offsetWidth <= targetWidth) low = mid;
      else high = mid;
    }
    document.body.removeChild(temp);
    setFontSize(Math.floor(low));
  }, []);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${SMALL_SCREEN_BREAKPOINT - 1}px)`);
    const handler = (e: MediaQueryListEvent) => setIsSmallScreen(e.matches);
    queueMicrotask(() => setIsSmallScreen(mq.matches)); // initial value (async to avoid lint)
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const run = () => fitNameToWidth();
    run();
    document.fonts?.ready?.then(run);
    const ro = new ResizeObserver(run);
    if (measureRef.current) ro.observe(measureRef.current);
    window.addEventListener("resize", run);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", run);
    };
  }, [fitNameToWidth, isSmallScreen]);

  const nameParts = personal.name.split(" ");
  const firstName = nameParts[0] ?? personal.name;
  const lastName =
    nameParts.slice(1).join(" ") || (personal.title.split(" ")[0] ?? "");

  return (
    <section
      id="home"
      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      className="relative w-full min-h-screen bg-black overflow-hidden rounded-3xl"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500&display=swap');

        .hero-name-wrapper {
          position: absolute;
          top: 4px;
          left: 0;
          right: 0;
          padding: 20px 28px 0;
          z-index: 10;
          pointer-events: none;
        }
        .hero-name {
          font-family: 'Bebas Neue', sans-serif;
          line-height: 0.9;
          letter-spacing: -3px;
          color: white;
          white-space: nowrap;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .hero-name.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .body-text {
          font-family: 'Inter', sans-serif;
          font-weight: 400;
        }
        .btn-text {
          font-family: 'Inter', sans-serif;
          font-weight: 500;
        }
        .fade-in {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .hero-photo {
          opacity: 0;
          transform: translateX(-50%) translateY(32px);
          transition: opacity 0.9s ease 0.2s, transform 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.2s;
        }
        .hero-photo.visible {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }
        .social-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #7c3aed;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
        }
        .social-btn:hover {
          background: #6d28d9;
          transform: scale(1.08);
        }
        .lets-talk-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #7c3aed;
          color: white;
          border: none;
          border-radius: 999px;
          padding: 14px 24px;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
          text-decoration: none;
        }
        .lets-talk-btn:hover {
          background: #6d28d9;
          transform: scale(1.04);
        }
        .glow-circle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
      `}</style>

      {/* Base gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at left, rgba(88,28,135,0.9) 0%, rgba(15,23,42,1) 40%, rgba(0,0,0,1) 75%)",
        }}
      />

      {/* Purple glow background circles */}
      <div
        className="glow-circle"
        style={{
          width: 760,
          height: 760,
          background:
            "radial-gradient(circle, rgba(109,40,217,0.85) 0%, transparent 72%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
        }}
      />
      <div
        className="glow-circle"
        style={{
          width: 520,
          height: 520,
          background:
            "radial-gradient(circle, rgba(148,163,184,0.7) 0%, rgba(31,41,55,0.9) 40%, transparent 72%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
        }}
      />
      {/* Visible circular ring — the solid round shape behind the head */}
      <div
        className="glow-circle"
        style={{
          width: 540,
          height: 540,
          background:
            "radial-gradient(circle, rgba(80,20,180,0.7) 0%, rgba(60,10,140,0.5) 40%, transparent 70%)",
          border: "1px solid rgba(140,80,255,0.25)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -55%)",
          zIndex: 3,
        }}
      />
      {/* Outer subtle ring */}
      <div
        className="glow-circle"
        style={{
          width: 680,
          height: 680,
          border: "1px solid rgba(124,58,237,0.18)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -55%)",
          zIndex: 2,
        }}
      />
      {/* Second outer ring */}
      <div
        className="glow-circle"
        style={{
          width: 820,
          height: 820,
          border: "1px solid rgba(124,58,237,0.08)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -55%)",
          zIndex: 2,
        }}
      />

      {/* Big Name — behind image, fits container width */}
      <div ref={measureRef} className="hero-name-wrapper">
        <div
          ref={nameRef}
          className={`hero-name ${loaded ? "visible" : ""}`}
          style={{ fontSize: `${fontSize}px` }}
        >
          {isSmallScreen ? firstName : `${firstName} ${lastName}`}
        </div>
      </div>

      {/* Photo — center, z above name. Mobile: slightly higher; desktop: bottom 0 */}
      <div
        className={`hero-photo bottom-[9em] md:bottom-0 ${loaded ? "visible" : ""}`}
        style={{
          position: "absolute",
          left: "50%",
          zIndex: 20,
          width: "clamp(620px, 60%, 1100px)",
          height: "100%",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <div
          className="w-full h-full flex items-end justify-center"
          style={{
            maskImage: "linear-gradient(to top, transparent 0%, black 8%)",
            WebkitMaskImage:
              "linear-gradient(to top, transparent 0%, black 8%)",
          }}
        >
          <Image
            src="/me-removebg-preview-2.png"
            alt={personal.name}
            width={480}
            height={640}
            className="h-full w-auto object-contain object-bottom"
          />
        </div>
      </div>

      {/* Bottom-left: description + socials — hidden on small screens */}
      <div
        className={`fade-in hidden md:block ${loaded ? "visible" : ""}`}
        style={{
          position: "absolute",
          bottom: 60,
          left: 32,
          zIndex: 30,
          maxWidth: 300,
          transitionDelay: "0.3s",
        }}
      >
        <p
          className="body-text text-violet-300 font-medium uppercase tracking-wider"
          style={{ fontSize: 12, marginBottom: 12, letterSpacing: "0.15em" }}
        >
          {personal.tagline}
        </p>
        <p
          className="body-text"
          style={{
            color: "white",
            fontSize: 14,
            lineHeight: 1.6,
            marginBottom: 20,
          }}
        >
          {personal.subheading}
        </p>
        <div style={{ display: "flex", gap: 10 }}>
          <a
            href={socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            aria-label="WhatsApp"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="white"
              aria-hidden
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            aria-label="Linkedin"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            aria-label="GitHub"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="white"
              aria-hidden
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom: tagline + CTA — mobile: socials + short description + Let's Talk centered; desktop: right-aligned with tagline */}
      <div
        className={`fade-in absolute bottom-10 left-0 right-0 z-30 flex flex-col items-center justify-center px-4 pb-[max(1rem,env(safe-area-inset-bottom))] md:bottom-16 md:pb-0 md:left-auto md:right-8 md:items-end md:max-w-[300px] md:px-0 ${loaded ? "visible" : ""}`}
        style={{ transitionDelay: "0.5s" }}
      >
        {/* Mobile-only: social buttons above tagline */}
        <div className="mb-4 flex gap-3 md:hidden">
          <a
            href={socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            aria-label="WhatsApp"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            aria-label="Linkedin"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            aria-label="GitHub"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden>
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
        <p
          className="body-text mb-2 text-center text-xs font-medium uppercase tracking-wider text-violet-300 md:hidden"
          style={{ letterSpacing: "0.12em" }}
        >
          {personal.tagline}
        </p>
        <p
          className="body-text mb-4 text-center text-sm text-white/90 max-w-[280px] md:hidden"
        >
          {personal.subheading}
        </p>
        <p
          className="body-text hidden md:block"
          style={{
            color: "rgba(255,255,255,0.85)",
            fontSize: 14,
            lineHeight: 1.7,
            marginBottom: 20,
          }}
        >
          Merging design thinking with human insight to create digital
          experiences that don&apos;t just look great — they perform
          effortlessly.
        </p>
        <a href="#contact" className="lets-talk-btn">
          <span className="btn-text" style={{ fontSize: 15 }}>
            Let&apos;s Talk
          </span>
          <span
            style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}
