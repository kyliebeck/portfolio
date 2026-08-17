import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import "./css/Navbar.css";

const links = [
  { id: "projects", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ isDark, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  // Solidify the bar once the page has moved off the hero.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight whichever section is crossing the middle of the viewport. The
  // asymmetric rootMargin collapses the observer's viewport to a thin band at
  // roughly 45% height, so exactly one section is intersecting at a time.
  useEffect(() => {
    const sections = links
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // While the mobile drawer is open, freeze the page behind it and let Escape close it.
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="navbar__inner" aria-label="Primary">
        <a href="#top" className="navbar__brand" onClick={close}>
          <span className="navbar__mark" aria-hidden="true">KB</span>
          <span className="navbar__name">Kylie Beck</span>
        </a>

        <ul className="navbar__links">
          {links.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`navbar__link ${active === id ? "is-active" : ""}`}
                aria-current={active === id ? "true" : undefined}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
          <a
            className="btn btn--primary navbar__cta"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>

          <button
            type="button"
            className={`navbar__burger ${isOpen ? "is-open" : ""}`}
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`navbar__scrim ${isOpen ? "is-open" : ""}`}
        onClick={close}
        aria-hidden="true"
      />
      <div id="mobile-menu" className={`navbar__drawer ${isOpen ? "is-open" : ""}`}>
        <ul>
          {links.map(({ id, label }, index) => (
            <li key={id} style={{ "--i": index }}>
              <a href={`#${id}`} onClick={close}>
                <span className="navbar__drawer-num">0{index + 1}</span>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          className="btn btn--primary navbar__drawer-cta"
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
        >
          Download resume
        </a>
      </div>
    </header>
  );
}
