"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const goPrev = useCallback(() => {
    setOpenIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  }, [images.length]);

  const goNext = useCallback(() => {
    setOpenIndex((i) => (i === null ? null : (i + 1) % images.length));
  }, [images.length]);

  const close = useCallback(() => {
    setOpenIndex(null);
    previousFocusRef.current?.focus();
  }, []);

  useEffect(() => {
    if (openIndex === null) return;
    previousFocusRef.current = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();
  }, [openIndex]);

  useEffect(() => {
    if (openIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, goPrev, goNext]);

  if (images.length === 0) return null;

  return (
    <>
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Screenshots</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setOpenIndex(i)}
              className="relative aspect-video rounded-xl overflow-hidden bg-muted shadow-md cursor-pointer hover:ring-2 hover:ring-accent/50 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
              aria-label={`View ${title} screenshot ${i + 1} of ${images.length}`}
            >
              <Image
                src={src}
                alt={`${title} screenshot ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </button>
          ))}
        </div>
      </section>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery"
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={close}
            className="absolute top-4 right-4 z-10 rounded-full p-2 text-white/90 hover:bg-white/10 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close gallery"
          >
            <X size={24} aria-hidden />
          </button>

          <button
            type="button"
            onClick={goPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 text-white/90 hover:bg-white/10 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} aria-hidden />
          </button>

          <button
            type="button"
            onClick={goNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 text-white/90 hover:bg-white/10 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Next image"
          >
            <ChevronRight size={32} aria-hidden />
          </button>

          <div
            className="absolute inset-0 cursor-pointer"
            onClick={close}
            aria-hidden
          />

          <div
            className="relative w-full max-w-5xl mx-4 max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[openIndex]}
              alt={`${title} screenshot ${openIndex + 1}`}
              width={1200}
              height={800}
              className="max-h-[90vh] w-auto object-contain rounded-lg"
              sizes="100vw"
              priority
            />
          </div>

          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {openIndex + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}
