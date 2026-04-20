import { useState, useCallback } from "react";

export function useScrollFadeIn<T extends HTMLElement = HTMLDivElement>() {
  const [visible, setVisible] = useState(false);

  const ref = useCallback((node: T | null) => {
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    observer.observe(node);
  }, []);

  return { ref, visible };
}