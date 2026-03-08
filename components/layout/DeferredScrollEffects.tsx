"use client";

import dynamic from "next/dynamic";

const ScrollEffects = dynamic(
  () => import("./ScrollEffects").then((m) => m.ScrollEffects),
  { ssr: false }
);

export function DeferredScrollEffects() {
  return <ScrollEffects />;
}
