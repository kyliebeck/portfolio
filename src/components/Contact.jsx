import "./css/Contact.css";

const EMAIL = "kylie.beck12@gmail.com";

const details = [
  {
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    path: "M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm.9 2.2L12 13l8.1-5.8V7H3.9v.2Zm16.2 2.3-7.5 5.4a1 1 0 0 1-1.2 0L3.9 9.5V17h16.2V9.5Z",
  },
  {
    label: "Location",
    value: "Los Angeles, California",
    path: "M12 2a7 7 0 0 0-7 7c0 5.05 6.24 12.31 6.5 12.62a.66.66 0 0 0 1 0C12.76 21.31 19 14.05 19 9a7 7 0 0 0-7-7Zm0 9.75A2.75 2.75 0 1 1 14.75 9 2.75 2.75 0 0 1 12 11.75Z",
  },
  {
    label: "GitHub",
    value: "github.com/kyliebeck",
    href: "https://github.com/kyliebeck",
    path: "M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49l-.01-1.9c-2.78.62-3.37-1.22-3.37-1.22-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9l-.01 2.82c0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z",
  },
  {
    label: "LinkedIn",
    value: "in/kylie-beck",
    href: "https://www.linkedin.com/in/kylie-beck-b14064197/",
    path: "M6.94 5.5a2.06 2.06 0 1 1-4.12 0 2.06 2.06 0 0 1 4.12 0ZM3.14 8.9h3.5V21h-3.5V8.9Zm5.7 0h3.35v1.66h.05c.47-.85 1.6-1.75 3.3-1.75 3.53 0 4.18 2.24 4.18 5.15V21h-3.5v-5.36c0-1.28-.02-2.92-1.83-2.92-1.83 0-2.11 1.39-2.11 2.83V21h-3.5V8.9Z",
  },
];

export default function Contact() {
  return (
    <section className="section section--ruled" id="contact">
      <div className="section__inner">
        <div className="contact" data-reveal>
          <div className="contact__glow" aria-hidden="true" />

          <div className="contact__copy">
            <p className="eyebrow">Get in touch</p>
            <h2 className="contact__title">
              Looking for my next
              <br />
              full-stack role.
            </h2>
            <p className="contact__lead">
              If you&rsquo;re hiring and something here looks like a fit, email
              me. I read everything and I answer quickly.
            </p>

            <div className="contact__actions">
              <a className="btn btn--primary" href={`mailto:${EMAIL}`}>
                Email me
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor"
                  strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h13M12 5l7 7-7 7" />
                </svg>
              </a>
              <a className="btn btn--ghost btn--up" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Download resume
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor"
                  strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 17 17 7M8 7h9v9" />
                </svg>
              </a>
            </div>
          </div>

          <ul className="contact__details">
            {details.map(({ label, value, href, path }) => {
              const Row = (
                <>
                  <span className="contact__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
                      <path d={path} />
                    </svg>
                  </span>
                  <span className="contact__text">
                    <span className="contact__label">{label}</span>
                    <span className="contact__value">{value}</span>
                  </span>
                </>
              );

              return (
                <li key={label}>
                  {href ? (
                    <a
                      className="contact__row contact__row--link"
                      href={href}
                      {...(href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {Row}
                    </a>
                  ) : (
                    <div className="contact__row">{Row}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
