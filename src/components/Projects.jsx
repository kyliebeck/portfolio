import "./css/Projects.css";

const projects = [
  {
    title: "Nightstand",
    featured: true,
    short: "A personal book tracker: search, shelve, and share what you're reading.",
    description:
      "Search for books by title or author against the Google Books API, with Open Library as a secondary source. Organize what you find into named shelves, each one public or private, and open any book for its full detail (authors, cover, description, page count, publisher, ratings), then mark it read. A community page browses the shelves other readers have chosen to publish.",
    build:
      "React + TypeScript on Vite, with React Router for the five main pages. Supabase handles auth and stores collections and read-book records. Row Level Security is what keeps one user's private shelves out of another user's hands. Book data itself is never stored: only volume IDs get saved to a shelf, and everything else is fetched live. Deployed as a static site on Railway.",
    technologies: ["React", "TypeScript", "Vite", "React Router", "Supabase Auth", "Google Books API", "Open Library", "Railway"],
    github: "https://github.com/kyliebeck/my-book-tracker",
    demo: "https://nightstand-production.up.railway.app/",
    image: "/images/nightstand.webp",
    imageSize: [1209, 1159],
  },
  {
    title: "Pixby",
    // The screenshot is a full page shot; the card crops in on the pet itself.
    zoom: true,
    short: "A virtual pet web app.",
    description:
      "Adopt a pixel pet, name it, and keep it alive by feeding, playing, cleaning, putting it to sleep, and giving it medicine. Pets age through seven life stages (egg, baby, child, teen, young adult, adult, elder) with stage-up dialogue, stats that decay over time, and a graveyard for the ones that don't make it. Around that core loop sits a bubble-popping minigame with a leaderboard, daily challenges, achievements with claimable rewards, a shop trading pixel points for consumables like super food and revival tokens, and friends with requests and a global leaderboard.",
    build:
      "The front end is vanilla JavaScript with no framework and no build step: about twelve plain scripts loaded straight from index.html, one hand-written 2.3k-line stylesheet, pets drawn as inline SVG, and sound through the Web Audio API. Behind it, Node 20 and Express serve a REST API of roughly 29 routes alongside the static files. Passwords are hashed with bcryptjs and sessions run on JWT bearer tokens. Data lives in SQLite through better-sqlite3, with the schema created on boot and evolved by incremental ALTER TABLE migrations. Deployed on Railway via Nixpacks.",
    technologies: ["JavaScript", "Node.js", "Express", "SQLite", "JWT", "Web Audio API", "Railway"],
    github: "https://github.com/kyliebeck/pixby.git",
    demo: "https://pixby-production-0fc7.up.railway.app/",
    image: "/images/pixby.webp",
    imageSize: [1200, 710],
  },
  {
    title: "Marquee",
    short: "A Django movie-collection web app.",
    description:
      "Browse a shared film catalog sourced from TMDB, with popular films, title search, and genre-based discovery. Save films, write 1–5 star reviews, and organize titles into personal watchlists with per-entry watched tracking. Movies live in one shared catalog keyed by TMDB id, so everyone who saves the same film points at the same row and its reviews aggregate across users. Browsing and reading reviews is public; adding movies, reviews, and watchlists requires an account.",
    build:
      "Python 3.11 and Django 5.2, mixing class-based and function views over the Django ORM, backed by PostgreSQL through psycopg2. The front end is Django templates with hand-written CSS organized per feature, and auth is Django's built-in session system for signup, login, and logout. TMDB is wrapped in a Django-free HTTP client with model mapping isolated in a separate catalog module, and posters are served straight from TMDB's image CDN. Config comes from python-dotenv, boto3 is on hand for S3 poster uploads, and custom management commands handle genre syncing, TMDB id backfills, and catalog wipes.",
    technologies: ["Django", "Python", "PostgreSQL", "TMDB API", "Django Templates", "CSS"],
    github: "https://github.com/kyliebeck/marquee.git",
    demo: "https://marquee-production-e065.up.railway.app/",
    image: "/images/marquee.webp",
    imageSize: [1200, 867],
  },
  {
    title: "Sudoku",
    short: "Classic 9×9 Sudoku puzzle game.",
    description:
      "Fill a 9×9 grid with the numbers 1–9 so no row, column, or 3×3 subsquare repeats a value, with live validation and a win state. Built from scratch with no framework.",
    technologies: ["JavaScript", "CSS", "HTML"],
    github: "https://github.com/kyliebeck/Sudoku-Project.git",
    demo: "https://kyliebeck.github.io/Sudoku-Project/",
    image: "/images/sudoku.webp",
    imageSize: [900, 766],
  },
];

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49l-.01-1.9c-2.78.62-3.37-1.22-3.37-1.22-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9l-.01 2.82c0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor"
    strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

function ProjectCard({ project, index }) {
  const { title, featured, zoom, short, description, build, technologies, github, demo, image, imageSize } = project;

  return (
    <article
      className={`project ${featured ? "project--featured" : ""} ${zoom ? "project--zoom" : ""}`}
      data-reveal
      style={{ "--reveal-delay": `${index * 80}ms` }}
    >
      <div className="project__media">
        {image ? (
          // Intrinsic dimensions let the browser reserve the slot before the
          // file arrives, so the cards below don't jump as screenshots load.
          <img
            src={image}
            alt={`${title} screenshot`}
            loading="lazy"
            decoding="async"
            width={imageSize?.[0]}
            height={imageSize?.[1]}
          />
        ) : (
          // Placeholder until a screenshot exists — an empty <img> would render
          // as a broken-image icon and read as a bug rather than a gap.
          <div className="project__media-fallback" aria-hidden="true">
            <span>{title}</span>
          </div>
        )}
        <span className="project__index" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="project__body">
        <h3 className="project__title">{title}</h3>
        <p className="project__short">{short}</p>
        <p className="project__desc">{description}</p>

        {build && (
          <div className="project__build">
            <p className="project__build-label">How it&rsquo;s built</p>
            <p className="project__build-text">{build}</p>
          </div>
        )}

        <ul className="project__tech">
          {technologies.map((tech) => (
            <li key={tech} className="tag">{tech}</li>
          ))}
        </ul>

        <div className="project__links">
          {demo && (
            <a className="project__link" href={demo} target="_blank" rel="noopener noreferrer">
              <ArrowIcon />
              Live demo
              <span className="sr-only"> — {title}</span>
            </a>
          )}
          {github && (
            <a className="project__link project__link--muted" href={github} target="_blank" rel="noopener noreferrer">
              <GithubIcon />
              Code
              <span className="sr-only"> — {title}</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="section section--ruled" id="projects">
      <div className="section__inner">
        <header className="section-head" data-reveal>
          <p className="eyebrow">Selected work</p>
          <h2 className="section-title">Things I&rsquo;ve built</h2>
          <p className="section-intro">
            Four projects, all deployed and playable. Each one shipped end to
            end: data model, API, interface, and hosting.
          </p>
        </header>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
