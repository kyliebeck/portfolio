import "./css/Projects.css";

const projects = [
  {
    title: "Pixel Pet",
    featured: true,
    short: "A virtual pet game where users feed, play with, and care for animated pets.",
    description:
      "A modern Tamagotchi where a pet ages through seven life stages, decays in real time if neglected, and can be fed, cleaned, played with, and eventually mourned in a graveyard. It features pets, achievements, an item shop, friend lists, a mini-game, and leaderboards.",
    technologies: ["JavaScript", "Express", "SQLite", "Railway"],
    github: "https://github.com/kyliebeck/tamagotchi.git",
    demo: "https://tamagotchi-production-b14d.up.railway.app/",
    image: "/images/pixel-pet.webp",
  },
  {
    title: "Nightstand",
    short: "Track what you're reading, build shelves, and see what other readers keep on theirs.",
    description:
      "A social reading tracker. Log what you're currently reading, organize the books you love into shelves, and browse what other readers keep on theirs.",
    build:
      "React + TypeScript on Vite, with React Router for the five main pages. Supabase handles auth and stores collections and read-book records — Row Level Security is what keeps one user's private shelves out of another user's hands. Book data itself isn't stored: it's fetched live from Google Books, and only the volume IDs get saved to a shelf. Deployed as a static site on Railway.",
    technologies: ["React", "TypeScript", "Vite", "React Router", "Supabase", "Google Books API", "Railway"],
    // ⚠️ This repo is currently private — the link 404s for anyone but Kylie.
    // Make it public on GitHub, or clear this string to hide the Code link.
    github: "https://github.com/kyliebeck/my-book-tracker",
    demo: "https://nightstand-production.up.railway.app/",
    // TODO: drop a screenshot at public/images/nightstand.webp and set it here.
    image: "",
  },
  {
    title: "Movie Collector",
    short: "A Django web app for browsing, reviewing, and managing movies.",
    description:
      "Browse movies and reviews publicly; logged-in users can add, edit, and delete their own. Built on Django's authentication system with signup, login, and logout, and migrated from SQLite to PostgreSQL for deployment.",
    technologies: ["Django", "Python", "PostgreSQL", "HTML", "CSS"],
    github: "https://github.com/kyliebeck/django_movie_collection_app.git",
    demo: "https://moviecollector-app-73c025a9ab7e.herokuapp.com/",
    image: "/images/movie-collector.webp",
  },
  {
    title: "Bookshelf",
    short: "Organize and share your book collections with the community.",
    description:
      "Collect and store books you've read or plan to read, organize them into custom shelves, and publish those shelves to a shared community library page.",
    technologies: ["JavaScript", "Mongoose", "MongoDB", "CSS"],
    github: "https://github.com/kyliebeck/BookshelfApp.git",
    demo: "https://bookshelf-project-app-532bd2f3bcab.herokuapp.com/",
    image: "/images/bookshelf.webp",
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
  const { title, featured, short, description, technologies, github, demo, image } = project;

  return (
    <article
      className={`project ${featured ? "project--featured" : ""}`}
      data-reveal
      style={{ "--reveal-delay": `${index * 80}ms` }}
    >
      <div className="project__media">
        {image ? (
          <img src={image} alt={`${title} screenshot`} loading="lazy" />
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
            Five projects, all deployed and playable. Each one shipped end to
            end — data model, API, interface, and hosting.
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
