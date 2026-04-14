"use client";

import { useEffect, useRef } from "react";

interface SplitTextRevealProps {
  text: string;
  className?: string;
  baseDelay?: number; // ms before first word
  wordDelay?: number; // ms between each word
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export default function SplitTextReveal({
  text,
  className = "",
  baseDelay = 300,
  wordDelay = 120,
  as: Tag = "h1",
}: SplitTextRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const words = el.querySelectorAll<HTMLElement>(".word-inner");
    words.forEach((word, i) => {
      setTimeout(() => {
        word.classList.add("revealed");
      }, baseDelay + i * wordDelay);
    });
  }, [baseDelay, wordDelay]);

  const words = text.split(" ");

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="word-wrapper" aria-hidden="true">
          <span className="word-inner">{word}</span>
          {i < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </Tag>
  );
}
