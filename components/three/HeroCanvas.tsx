"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { personal } from "@/content/personal";
import { socials } from "@/content/socials";

export default function HeroCanvas() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

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

        .hero-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(110px, 18vw, 230px);
          line-height: 0.9;
          letter-spacing: -3px;
          color: white;
          position: absolute;
          top: 4px;
          left: 0;
          right: 0;
          padding: 28px 40px 0;
          z-index: 10;
          pointer-events: none;
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

      {/* Big Name — behind image */}
      <div className={`hero-name ${loaded ? "visible" : ""}`}>
        {firstName} {lastName}
      </div>

      {/* Photo — center, z above name. Mobile: slightly higher; desktop: bottom 0 */}
      <div
        className="bottom-[9em] md:bottom-0"
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
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
            href={socials.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            aria-label="Telegram"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="white"
              aria-hidden
            >
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.611-.06-2.586-.293-.49-.115-.988-.247-1.487-.41-.485-.168-1.156-.376-1.156-.376.088-.042.112-.063.113-.064.121-.072.265-.124.265-.124.664-.293 1.092-.49 1.092-.49.92-.416 1.412-.64 1.649-.765.227-.122.374-.2.456-.248a.779.779 0 0 0 .255-.102c.082-.069.105-.125.105-.192 0-.248-.513-.73-.748-.927a.976.976 0 0 0-.719-.231c-.602.008-1.07.322-1.443.966-.411.72-.977 2.482-.977 2.482-.409.869-.815 1.958-1.237 2.485-.246.312-.494.438-.659.438-.428-.008-.757-.242-.929-.477-.326-.347-.913-.889-.913-.889-.351-.304-.669-.523-.669-.523-.119-.084-.27-.14-.27-.14s.312.073.777.213c.412.128 1.051.385 1.158.433.121.057.189.083.189.083.396.169.715.304 1.129.472.661.267 1.163.39 1.675.498.394.082.814.128 1.248.128.08 0 .159-.002.238-.005a.996.996 0 0 0 .248-.033 12.97 12.97 0 0 0 1.372-.448 6.075 6.075 0 0 0 1.6-1.036 6.35 6.35 0 0 0 1.431-1.708 6.035 6.035 0 0 0 .95-2.514 6.194 6.194 0 0 0 .004-.97 6.032 6.032 0 0 0-.249-1.631z" />
            </svg>
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

      {/* Bottom: tagline + CTA — mobile: short description + Let's Talk centered; desktop: right-aligned with tagline */}
      <div
        className={`fade-in absolute bottom-10 left-0 right-0 z-30 flex flex-col items-center justify-center px-4 md:left-auto md:right-8 md:bottom-16 md:items-end md:max-w-[300px] md:px-0 ${loaded ? "visible" : ""}`}
        style={{ transitionDelay: "0.5s" }}
      >
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
