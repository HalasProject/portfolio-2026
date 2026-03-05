"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { SMALL_SCREEN_BREAKPOINT } from "./constants";

export function useFitNameToWidth() {
  const [fontSize, setFontSize] = useState(160);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const nameRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);

  const fitNameToWidth = useCallback(() => {
    if (!measureRef.current || !nameRef.current) return;
    const container = measureRef.current;
    const textEl = nameRef.current;
    const targetWidth = container.offsetWidth - 56;
    if (targetWidth <= 0) return;
    let low = 40;
    let high = 520;
    const text = textEl.textContent || "";
    const temp = document.createElement("span");
    temp.style.cssText =
      "visibility:hidden;position:absolute;white-space:nowrap;font-family:'Bebas Neue',sans-serif;letter-spacing:-3px;";
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
    const mq = window.matchMedia(`(max-width: ${SMALL_SCREEN_BREAKPOINT - 1}px)`);
    const handler = (e: MediaQueryListEvent) => setIsSmallScreen(e.matches);
    queueMicrotask(() => setIsSmallScreen(mq.matches));
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

  return { fontSize, isSmallScreen, nameRef, measureRef };
}
