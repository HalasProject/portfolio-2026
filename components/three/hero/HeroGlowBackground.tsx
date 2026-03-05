export function HeroGlowBackground() {
  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at left, rgba(88,28,135,0.9) 0%, rgba(15,23,42,1) 40%, rgba(0,0,0,1) 75%)",
        }}
      />
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
    </>
  );
}
