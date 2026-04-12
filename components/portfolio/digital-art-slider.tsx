"use client";

import Image from "next/image";
import { startTransition, useEffect, useRef, useState } from "react";

type ArtItem = {
  title: string;
  src: string;
};

function mod(index: number, length: number) {
  return (index + length) % length;
}

export default function DigitalArtSlider({ art }: { art: ArtItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const prevIndex = mod(activeIndex - 1, art.length);
  const nextIndex = mod(activeIndex + 1, art.length);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  function goToIndex(index: number) {
    if (index === activeIndex || isTransitioning) {
      return;
    }

    setIsTransitioning(true);

    timeoutRef.current = setTimeout(() => {
      startTransition(() => {
        setActiveIndex(index);
      });

      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
      }, 220);
    }, 140);
  }

  return (
    <div className="border border-[var(--border)] bg-[var(--panel)] px-4 py-6 transition-colors duration-300 md:px-6">
      <div className="relative mx-auto flex min-h-[34rem] items-center justify-center overflow-visible">
        <button
          type="button"
          onClick={() => goToIndex(prevIndex)}
          aria-label="Previous artwork"
          className="absolute left-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--panel)]/88 text-[var(--foreground)] backdrop-blur-sm transition duration-300 hover:-translate-y-1/2 hover:scale-105 hover:border-[var(--accent)] hover:text-[var(--accent)] disabled:opacity-50"
          disabled={isTransitioning}
        >
          ‹
        </button>

        <div className="hidden md:block">
          <button
            type="button"
            onClick={() => goToIndex(prevIndex)}
            aria-label={`Show ${art[prevIndex].title}`}
            className="absolute left-[6%] top-1/2 z-10 w-[24%] -translate-y-1/2 opacity-60 transition duration-500 hover:opacity-85"
          >
            <div className="relative aspect-[3/4] overflow-hidden border border-[var(--border)] bg-[var(--chip-bg)] blur-[1px] transition duration-500 hover:scale-[1.02]">
              <Image
                src={art[prevIndex].src}
                alt={art[prevIndex].title}
                fill
                sizes="24vw"
                className="object-contain"
              />
              <div className="absolute inset-0 bg-black/18" />
            </div>
          </button>
        </div>

        <div className="relative z-10 w-full max-w-[22rem] md:max-w-[28rem]">
          <div
            className={`relative aspect-[3/4] overflow-hidden border border-[var(--border)] bg-[var(--chip-bg)] shadow-[0_24px_60px_rgba(0,0,0,0.2)] transition-all duration-300 ${
              isTransitioning
                ? "scale-[0.985] opacity-70"
                : "scale-100 opacity-100"
            }`}
          >
            <Image
              src={art[activeIndex].src}
              alt={art[activeIndex].title}
              fill
              priority
              sizes="(max-width: 768px) 80vw, 30vw"
              className="object-contain"
            />
          </div>
          <div
            className={`mt-4 flex items-center justify-between gap-4 transition-opacity duration-300 ${
              isTransitioning ? "opacity-60" : "opacity-100"
            }`}
          >
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted-2)]">
              {art[activeIndex].title}
            </p>
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
              {String(activeIndex + 1).padStart(2, "0")} / {String(art.length).padStart(2, "0")}
            </p>
          </div>
        </div>

        <div className="hidden md:block">
          <button
            type="button"
            onClick={() => goToIndex(nextIndex)}
            aria-label={`Show ${art[nextIndex].title}`}
            className="absolute right-[6%] top-1/2 z-10 w-[24%] -translate-y-1/2 opacity-60 transition duration-500 hover:opacity-85"
          >
            <div className="relative aspect-[3/4] overflow-hidden border border-[var(--border)] bg-[var(--chip-bg)] blur-[1px] transition duration-500 hover:scale-[1.02]">
              <Image
                src={art[nextIndex].src}
                alt={art[nextIndex].title}
                fill
                sizes="24vw"
                className="object-contain"
              />
              <div className="absolute inset-0 bg-black/18" />
            </div>
          </button>
        </div>

        <button
          type="button"
          onClick={() => goToIndex(nextIndex)}
          aria-label="Next artwork"
          className="absolute right-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--panel)]/88 text-[var(--foreground)] backdrop-blur-sm transition duration-300 hover:-translate-y-1/2 hover:scale-105 hover:border-[var(--accent)] hover:text-[var(--accent)] disabled:opacity-50"
          disabled={isTransitioning}
        >
          ›
        </button>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {art.map((item, index) => (
          <button
            key={item.title}
            type="button"
            onClick={() => goToIndex(index)}
            aria-label={`Go to ${item.title}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "w-8 bg-[var(--accent)]"
                : "w-2.5 bg-[var(--border-strong)]"
            }`}
            disabled={isTransitioning}
          />
        ))}
      </div>
    </div>
  );
}
