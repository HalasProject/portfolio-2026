export const SMALL_SCREEN_BREAKPOINT = 768;
export const SWIPE_THRESHOLD_PX = 50;
export const AUTO_SWIPE_INTERVAL_MS = 3500;

export const EXPRESSIONS = [
  { src: "/normal.png", label: "Normal" },
  { src: "/angry.png", label: "Angry" },
  { src: "/confident.png", label: "Confident" },
  { src: "/geeky.png", label: "Geeky" },
  { src: "/surprise.png", label: "Surprise" },
  { src: "/tongue.png", label: "Tongue" },
  { src: "/wink.png", label: "Wink" },
] as const;

export const INFINITE_SLIDES = [
  EXPRESSIONS[EXPRESSIONS.length - 1],
  ...EXPRESSIONS,
  EXPRESSIONS[0],
];
export const REAL_START_INDEX = 1;
export const REAL_END_INDEX = EXPRESSIONS.length;
