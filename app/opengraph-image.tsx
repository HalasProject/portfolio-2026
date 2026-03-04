import { ImageResponse } from "next/og";

export const alt = "Salah | Software Engineer — Full-stack developer portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #6366f1 50%, #8b5cf6 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            borderRadius: 28,
            background: "rgba(255,255,255,0.12)",
            marginBottom: 32,
          }}
        >
          <span
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: "white",
              letterSpacing: "-2px",
            }}
          >
            S
          </span>
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "white",
            letterSpacing: "-1px",
            marginBottom: 12,
          }}
        >
          Salah | Software Engineer
        </div>
        <div
          style={{
            fontSize: 24,
            color: "rgba(255,255,255,0.85)",
            maxWidth: 560,
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          Full-stack developer — React, Next.js & TypeScript. Projects, experience & contact.
        </div>
      </div>
    ),
    { ...size }
  );
}
