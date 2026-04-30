import type { MouseEvent } from "react";

/**
 * Smoothly scrolls to a hash target with a fluid easing curve and triggers a
 * brief click ripple on the originating element. Falls back to native anchor
 * navigation if the target isn't found.
 */
export function smoothScrollTo(e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>, hash: string) {
  const id = hash.replace(/^#/, "");
  const target = typeof document !== "undefined" ? document.getElementById(id) : null;

  // Ripple effect on the source element
  const el = e.currentTarget as HTMLElement;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--ripple-x", `${e.clientX - rect.left}px`);
  el.style.setProperty("--ripple-y", `${e.clientY - rect.top}px`);
  el.classList.remove("is-rippling");
  // Force reflow so the animation can restart on rapid clicks
  void el.offsetWidth;
  el.classList.add("is-rippling");
  window.setTimeout(() => el.classList.remove("is-rippling"), 750);

  if (!target) return;
  e.preventDefault();

  const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  if (reduce) {
    target.scrollIntoView({ behavior: "auto", block: "start" });
    history.replaceState(null, "", `#${id}`);
    return;
  }

  // Custom eased smooth scroll for a more fluid feel than native
  const startY = window.scrollY;
  const targetY = target.getBoundingClientRect().top + window.scrollY - 16;
  const distance = targetY - startY;
  const duration = Math.min(1200, Math.max(600, Math.abs(distance) * 0.6));
  const startTime = performance.now();

  // easeInOutCubic
  const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

  function step(now: number) {
    const elapsed = now - startTime;
    const t = Math.min(1, elapsed / duration);
    window.scrollTo(0, startY + distance * ease(t));
    if (t < 1) requestAnimationFrame(step);
    else history.replaceState(null, "", `#${id}`);
  }

  requestAnimationFrame(step);
}
