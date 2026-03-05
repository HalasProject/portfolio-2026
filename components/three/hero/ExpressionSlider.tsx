"use client";

import Image from "next/image";
import { useState, useRef, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  INFINITE_SLIDES,
  REAL_START_INDEX,
  REAL_END_INDEX,
  SWIPE_THRESHOLD_PX,
  AUTO_SWIPE_INTERVAL_MS,
} from "./constants";

const MASK_STYLE = {
  maskImage: "linear-gradient(to top, transparent 0%, black 8%)",
  WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 8%)",
} as const;

export function ExpressionSlider({
  altName,
  loaded,
}: {
  altName: string;
  loaded: boolean;
}) {
  const [expressionIndex, setExpressionIndex] = useState(REAL_START_INDEX);
  const trackRef = useRef<HTMLDivElement>(null);
  const isAnimatingRef = useRef(false);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const handleTrackTransitionEnd = useCallback(() => {
    setExpressionIndex((current) => {
      const track = trackRef.current;
      if (!track) return current;

      if (current === INFINITE_SLIDES.length - 1) {
        track.style.transition = "none";
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (trackRef.current) trackRef.current.style.transition = "";
            isAnimatingRef.current = false;
          });
        });
        return REAL_START_INDEX;
      }
      if (current === 0) {
        track.style.transition = "none";
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (trackRef.current) trackRef.current.style.transition = "";
            isAnimatingRef.current = false;
          });
        });
        return REAL_END_INDEX;
      }
      isAnimatingRef.current = false;
      return current;
    });
  }, []);

  const goPrev = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setExpressionIndex((i) => Math.max(0, i - 1));
  }, []);

  const goNext = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setExpressionIndex((i) => Math.min(INFINITE_SLIDES.length - 1, i + 1));
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const start = touchStartRef.current;
      touchStartRef.current = null;
      if (!start || isAnimatingRef.current) return;
      const end = e.changedTouches[0];
      const deltaX = end.clientX - start.x;
      const deltaY = end.clientY - start.y;
      if (Math.abs(deltaX) < SWIPE_THRESHOLD_PX) return;
      if (Math.abs(deltaX) < Math.abs(deltaY)) return;
      if (deltaX > 0) goPrev();
      else goNext();
    },
    [goPrev, goNext]
  );

  useEffect(() => {
    const interval = setInterval(goNext, AUTO_SWIPE_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [goNext]);

  return (
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
      <button
        type="button"
        className="expression-btn left"
        onClick={goPrev}
        aria-label="Previous expression"
      >
        <ChevronLeft size={24} strokeWidth={2.5} />
      </button>

      <div
        className="flex-1 h-full overflow-hidden touch-pan-y"
        style={{ minWidth: 0, ...MASK_STYLE, touchAction: "pan-y" }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          ref={trackRef}
          className="expression-track h-full"
          style={{
            transform: `translateX(-${expressionIndex * (100 / INFINITE_SLIDES.length)}%)`,
          }}
          onTransitionEnd={handleTrackTransitionEnd}
        >
          {INFINITE_SLIDES.map(({ src, label }, i) => (
            <div key={`${src}-${i}`} className="expression-slide h-full">
              <div
                className="w-full h-full flex items-end justify-center"
                style={MASK_STYLE}
              >
                <Image
                  src={src}
                  alt={`${altName} - ${label}`}
                  width={480}
                  height={640}
                  className="h-full w-auto object-contain object-bottom"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="expression-btn right"
        onClick={goNext}
        aria-label="Next expression"
      >
        <ChevronRight size={24} strokeWidth={2.5} />
      </button>
    </div>
  );
}
