import './css/Skills.css';
import React from "react";


const skills = {
    title: "Skills",
    mySkills: [
        {
            title: "Languages & Frameworks",
            skills: [
                "JavaScript",
                "TypeScript",
                "React.js",
                "Node.js",
                "Express.js",
                "Mongoose",
                "JWT",
                "CSS",
                "HTML",
            ],
        },
        {
            title: "Databases",
            skills: ["MongoDB", "PostgreSQL", "SQLite", "Supabase"],
        },
        {
            title: "Deployment & Hosting",
            skills: ["Railway", "Heroku", "Vercel"],
        },
        {
            title: "Tools & Others",
            skills: ["Git", "GitHub"],
        },
    ],
};

const Skills = () => {
    return (
        <section className="skills-section">
            <div className="skills-container">
                <h1 className="skills-title">{skills.title}</h1>
                {skills.mySkills.map((category, idx) => (
                    <div key={idx} className="skill-category">
                        <h2 className="category-title">{category.title}</h2>
                        <ul className="skill-list">
                            {category.skills.map((skill, i) => (
                                <li key={i} className="skill-item">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
