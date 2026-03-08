"use client";

import { useEffect, useState } from "react";
import { personal } from "@/content/personal";
import { socials } from "@/content/socials";
import {
  useFitNameToWidth,
  HeroGlowBackground,
  HeroName,
  ExpressionSlider,
  HeroBottomLeft,
  HeroBottom,
  ScrollHint,
} from "./hero";

export default function HeroCanvas() {
  const [loaded, setLoaded] = useState(false);
  const { fontSize, isSmallScreen, nameRef, measureRef } = useFitNameToWidth();

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const nameParts = personal.name.split(" ");
  const firstName = nameParts[0] ?? personal.name;
  const lastName =
    nameParts.slice(1).join(" ") || (personal.title.split(" ")[0] ?? "");

  return (
    <section
      id="home"
      data-section
      style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
      className="relative w-full min-h-screen bg-black overflow-hidden rounded-3xl"
    >
      <HeroGlowBackground />

      <HeroName
        firstName={firstName}
        lastName={lastName}
        isSmallScreen={isSmallScreen}
        fontSize={fontSize}
        loaded={loaded}
        measureRef={measureRef}
        nameRef={nameRef}
      />

      <ExpressionSlider altName={personal.name} loaded={loaded} />

      <HeroBottomLeft
        tagline={personal.tagline}
        subheading={personal.subheading}
        socials={socials}
        loaded={loaded}
      />

      <HeroBottom
        tagline={personal.tagline}
        subheading={personal.subheading}
        socials={socials}
        loaded={loaded}
      />

      <ScrollHint />
    </section>
  );
}
