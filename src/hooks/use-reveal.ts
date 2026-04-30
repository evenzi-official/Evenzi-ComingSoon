import { useEffect, useRef, useState } from "react";

/**
 * Reveal-on-scroll hook. Adds an `is-visible` flag once the element enters
 * the viewport. Honors prefers-reduced-motion.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = { threshold: 0.15 },
) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.unobserve(e.target);
        }
      });
    }, options);

    obs.observe(node);
    return () => obs.disconnect();
  }, [options]);

  return { ref, visible };
}
