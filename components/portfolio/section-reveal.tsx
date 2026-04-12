"use client";

import { useEffect, useRef, useState } from "react";

export default function SectionReveal({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    if (typeof window.IntersectionObserver !== "function") {
      const timeoutId = setTimeout(() => {
        setIsVisible(true);
      }, 0);

      return () => clearTimeout(timeoutId);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`section-reveal ${isVisible ? "section-reveal-visible" : ""}`}
    >
      {children}
    </div>
  );
}
