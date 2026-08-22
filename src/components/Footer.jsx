import "./css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__name">
          <span className="footer__mark" aria-hidden="true">KB</span>
          Kylie Beck
        </p>

        <p className="footer__note">
          Built with React, Vite, and hand-written CSS ·{" "}
          {new Date().getFullYear()}
        </p>

        <a className="footer__top" href="#top">
          Back to top
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor"
            strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
