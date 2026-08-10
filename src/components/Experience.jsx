import "./css/shared.css";
import "./css/Experiences.css";


const experiences = [

    {
        role: "Software Engineer",
        company: "YouFirst.Agency",
        period: "August 2025 - Present",
        description: "Develop full-stack web applications for client-facing projects, translating business needs into scalable, user-centered tehnical solutions. Collaborate with cross-functional teams to deliver high-quality software products.",
        technologies: ["Javascript", "React", "Node.js", "Express", "MongoDB", "PostgreSQL", "JWT", "GitHub", "Git", "Heroku", "Vercel"]
    },

    {
        role: "Software Engineer",
        company: "General Assembly",
        period: "January 2025 - August 2025",
        description: "Completed a full-time, intensive program focused on full-stack web development using modern frameworks and industry best practices.",
        technologies: ["Javascript", "Python", "React", "Mongoose", "PostgreSQL", "HTML", "CSS",]
    },
    {
        role: "Elementary School Teacher",
        company: "Lashon Academy",
        period: "September 2022 - October 2023",
        description: "Directed a classroom focused on core academic subjects with an emphasis on personalized learning, data-driven instruction, and collaborative problem-solving. I approached teaching the way I now approach coding; with curiosity, empathy, and a focus on continuous improvement. I integrated digital learning tools into daily curriculum, sparking a transition into tech.",
    },
    {
        role: "Preschool Teacher",
        company: "Rainbow Children's Center",
        period: "August 2015 - July 2021",
        description: "Led a dynamic early childhood learning environment, designing and delivering lesson plans that fostered creativity, problem solving, and foundational skills through iterative, student centered approaches.",
    }

]


const Experience = () => {
    return (
        <section className="experiences-section">
            <div className="experiences-container">
                <h1 className="experiences-title">Experience</h1>
                <div className="experiences-list">
                    {experiences.map((experience, idx) => (
                        <div key={idx} className="experience-card">
                            {experience.logo && (
                                <img
                                    src={experience.logo}
                                    alt={`${experience.company} logo`}
                                    className="experience-logo"
                                />
                            )}
                            <div className="experience-content">
                                <h2 className="experience-role">{experience.role}</h2>
                                <h3 className="experience-company">
                                    {experience.company}
                                </h3>
                                <p className="experience-period">{experience.period}</p>
                                <p className="experience-description">
                                    {experience.description}
                                </p>
                                {experience.technologies && (
                                    <div className="experience-tech">
                                        {experience.technologies.map((tech, i) => (
                                            <span key={i} className="tech-tag">
                                                #{tech}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};




export default Experience;