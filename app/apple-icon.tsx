import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #0f172a 0%, #6366f1 50%, #8b5cf6 100%)",
        borderRadius: 36,
        fontFamily: "system-ui, sans-serif",
        fontSize: 72,
        fontWeight: 700,
        color: "white",
      }}
    >
      S
    </div>,
    { ...size }
  );
}
