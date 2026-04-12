"use client";

import { useEffect, useMemo, useState } from "react";

const WORDS = [
  "Software Engineer",
  "Full Stack Engineer",
  "UI/UX Enthusiast",
  "AI Builder",
  "Data-Curious Engineer",
  "Homo Sapien Sapien",
];
const TYPE_DELAY = 85;
const DELETE_DELAY = 42;
const HOLD_DELAY = 1100;

export default function HeroTypewriter() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentWord = useMemo(() => WORDS[wordIndex], [wordIndex]);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === currentWord) {
      timeoutId = setTimeout(() => setIsDeleting(true), HOLD_DELAY);
      return () => clearTimeout(timeoutId);
    }

    if (isDeleting && text === "") {
      timeoutId = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((index) => (index + 1) % WORDS.length);
      }, 0);
      return;
    }

    timeoutId = setTimeout(
      () => {
        setText((value) =>
          isDeleting
            ? currentWord.slice(0, value.length - 1)
            : currentWord.slice(0, value.length + 1),
        );
      },
      isDeleting ? DELETE_DELAY : TYPE_DELAY,
    );

    return () => clearTimeout(timeoutId);
  }, [currentWord, isDeleting, text]);

  return (
    <div className="mb-8 inline-flex min-h-6 items-center gap-3 text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
      <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
      <span>{text}</span>
      <span className="typewriter-caret" aria-hidden="true" />
    </div>
  );
}
