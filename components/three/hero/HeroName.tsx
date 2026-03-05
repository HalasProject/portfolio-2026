"use client";

type HeroNameProps = {
  firstName: string;
  lastName: string;
  isSmallScreen: boolean;
  fontSize: number;
  loaded: boolean;
  measureRef: React.RefObject<HTMLDivElement | null>;
  nameRef: React.RefObject<HTMLDivElement | null>;
};

export function HeroName({
  firstName,
  lastName,
  isSmallScreen,
  fontSize,
  loaded,
  measureRef,
  nameRef,
}: HeroNameProps) {
  return (
    <div ref={measureRef} className="hero-name-wrapper">
      <div
        ref={nameRef}
        className={`hero-name ${loaded ? "visible" : ""}`}
        style={{ fontSize: `${fontSize}px` }}
      >
        {isSmallScreen ? firstName : `${firstName} ${lastName}`}
      </div>
    </div>
  );
}
