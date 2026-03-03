"use client";

import Image from "next/image";

interface ProjectImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export function ProjectImage({
  src,
  alt,
  fill = true,
  className = "",
  sizes,
  priority = false,
}: ProjectImageProps) {
  return (
    <div className="absolute inset-0">
      <Image
        src={src}
        alt={alt}
        fill={fill}
        className={className}
        sizes={sizes}
        priority={priority}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = "none";
          const parent = target.parentElement;
          if (parent) {
            const fallback = document.createElement("div");
            fallback.className =
              "absolute inset-0 flex items-center justify-center text-muted-foreground text-6xl font-bold bg-muted";
            fallback.textContent = alt.charAt(0);
            parent.appendChild(fallback);
          }
        }}
      />
    </div>
  );
}
