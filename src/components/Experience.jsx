import "./css/Experience.css";

const experiences = [
  {
    role: "Software Engineer",
    company: "YouFirst.Agency",
    period: "Aug 2025 — Present",
    current: true,
    description:
      "Develop full-stack web applications for client-facing projects, translating business needs into scalable, user-centered technical solutions. Collaborate with cross-functional teams to deliver high-quality software products.",
    technologies: [
      "JavaScript", "React", "Node.js", "Express", "MongoDB",
      "PostgreSQL", "JWT", "Git", "Heroku", "Vercel",
    ],
  },
  {
    role: "Software Engineer",
    company: "General Assembly",
    period: "Jan 2025 — Aug 2025",
    description:
      "Completed a full-time, intensive program focused on full-stack web development using modern frameworks and industry best practices.",
    technologies: ["JavaScript", "Python", "React", "Mongoose", "PostgreSQL", "HTML", "CSS"],
  },
  {
    role: "Elementary School Teacher",
    company: "Lashon Academy",
    period: "Sep 2022 — Oct 2023",
    description:
      "Directed a classroom focused on core academic subjects with an emphasis on personalized learning, data-driven instruction, and collaborative problem-solving. I approached teaching the way I now approach coding — with curiosity, empathy, and a focus on continuous improvement. Integrating digital learning tools into the daily curriculum sparked my transition into tech.",
  },
  {
    role: "Preschool Teacher",
    company: "Rainbow Children's Center",
    period: "Aug 2015 — Jul 2021",
    description:
      "Led a dynamic early childhood learning environment, designing and delivering lesson plans that fostered creativity, problem solving, and foundational skills through iterative, student-centered approaches.",
  },
];

export default function Experience() {
  return (
    <section className="section section--ruled" id="experience">
      <div className="section__inner">
        <header className="section-head" data-reveal>
          <p className="eyebrow">Career</p>
          <h2 className="section-title">Where I&rsquo;ve been</h2>
          <p className="section-intro">
            Eight years teaching before I wrote my first line of production
            code. Both jobs are the same job: understand the person in front of
            you, then build something that actually helps.
          </p>
        </header>

        <ol className="timeline">
          {experiences.map((item, index) => (
            <li
              key={`${item.company}-${item.role}`}
              className={`timeline__item ${item.current ? "is-current" : ""}`}
              data-reveal
              style={{ "--reveal-delay": `${index * 70}ms` }}
            >
              <span className="timeline__dot" aria-hidden="true" />

              <div className="timeline__card">
                <div className="timeline__meta">
                  <p className="timeline__period">{item.period}</p>
                  {item.current && <span className="timeline__badge">Current</span>}
                </div>

                <h3 className="timeline__role">{item.role}</h3>
                <p className="timeline__company">{item.company}</p>
                <p className="timeline__desc">{item.description}</p>

                {item.technologies && (
                  <ul className="timeline__tech">
                    {item.technologies.map((tech) => (
                      <li key={tech} className="tag">{tech}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
