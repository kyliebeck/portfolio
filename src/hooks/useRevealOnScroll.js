import { useEffect } from "react";

/**
 * Reveals every [data-reveal] element as it scrolls into view.
 *
 * Called once from App. A single observer covers the whole page, which is
 * cheap and avoids threading refs through every component. Elements are only
 * observed until they've been revealed — the reveal is one-way, so content
 * never flickers back out when the user scrolls up.
 */
export default function useRevealOnScroll() {
  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");

    // No IntersectionObserver, or the user prefers reduced motion: show
    // everything immediately rather than leaving the page blank.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      // Fire slightly before the element is fully on screen so the motion
      // finishes about when the reader's eye arrives.
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}
