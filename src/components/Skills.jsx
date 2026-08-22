import "./css/Skills.css";

/* Inline icons keep the section dependency-free and theme-aware via currentColor. */
const icons = {
    sparkle: (
        <>
            <path d="M12 3.2 13.9 9l5.8 1.9-5.8 1.9L12 18.6l-1.9-5.8L4.3 10.9 10.1 9Z" />
            <path d="M18.8 3.4v3.2M20.4 5h-3.2M5.4 16.6v2.8M6.8 18H4" />
        </>
    ),
    code: (
        <path d="M8.5 16.5 4 12l4.5-4.5M15.5 7.5 20 12l-4.5 4.5M13.5 4.5l-3 15" />
    ),
    database: (
        <>
            <ellipse cx="12" cy="5.5" rx="7.5" ry="3.2" />
            <path d="M4.5 5.5v6c0 1.77 3.36 3.2 7.5 3.2s7.5-1.43 7.5-3.2v-6" />
            <path d="M4.5 11.5v6c0 1.77 3.36 3.2 7.5 3.2s7.5-1.43 7.5-3.2v-6" />
        </>
    ),
    cloud: (
        <>
            <path d="M17.5 18.5a4 4 0 0 0 .4-7.98 6 6 0 0 0-11.63-1.6A3.75 3.75 0 0 0 6.5 18.5Z" />
            <path d="M12 21v-7M9.5 16.5 12 14l2.5 2.5" />
        </>
    ),
    tools: (
        <path d="M14.7 6.3a3.6 3.6 0 0 0 4.86 4.86l-8.2 8.2a2.2 2.2 0 0 1-3.1 0l-1.62-1.62a2.2 2.2 0 0 1 0-3.1Z" />
    ),
};

const categories = [
    {
        title: "Languages & Frameworks",
        icon: "code",
        skills: [
            "JavaScript", "TypeScript", "React.js", "Node.js",
            "Express.js", "Python", "Django", "Mongoose", "JWT", "HTML", "CSS",
        ],
    },
    {
        title: "Databases",
        icon: "database",
        skills: ["PostgreSQL", "MongoDB", "SQLite", "Supabase"],
    },
    {
        title: "Deployment & Hosting",
        icon: "cloud",
        skills: ["Vercel", "Railway", "Heroku"],
    },
    {
        title: "Tools & Workflow",
        icon: "tools",
        skills: ["Git", "GitHub", "Vite", "REST APIs"],
    },
    {
        title: "AI Integration",
        icon: "sparkle",
        skills: [
            "Anthropic API", "OpenAI API", "Tool use / function calling",
            "Streaming responses", "Structured output",
        ],
    },
];

export default function Skills() {
    return (
        <section className="section section--ruled" id="skills">
            <div className="section__inner">
                <header className="section-head" data-reveal>
                    <h2 className="section-title">What I work with</h2>
                </header>

                <div className="skills__grid">
                    {categories.map((category, index) => (
                        <article
                            key={category.title}
                            className="skill-card"
                            data-reveal
                            style={{ "--reveal-delay": `${index * 80}ms` }}
                        >
                            <div className="skill-card__head">
                                <span className="skill-card__icon" aria-hidden="true">
                                    <svg viewBox="0 0 24 24" width="19" height="19" fill="none"
                                        stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"
                                        strokeLinejoin="round">
                                        {icons[category.icon]}
                                    </svg>
                                </span>
                                <h3 className="skill-card__title">{category.title}</h3>
                            </div>

                            <ul className="skill-card__list">
                                {category.skills.map((skill) => (
                                    <li key={skill} className="tag">{skill}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
