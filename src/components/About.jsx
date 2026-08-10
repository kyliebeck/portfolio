import React from "react";
import "./css/About.css";

const About = () => {
    return (
        <section className="about-section">
            <div className="about-container">
                <h1 className="about-title">Hi, I'm Kylie Beck</h1>
                <p className="about-description">
                    I am a full stack developer with experience in building scalable
                    web applications and creating intuitive user interfaces. I am
                    passionate about crafting efficient code and learning new
                    technologies to solve real-world problems.
                </p>
                <div className="about-links">
                    <a
                        href="https://github.com/kyliebeck"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="about-link"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/kylie-beck-b14064197/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="about-link"
                    >
                        LinkedIn
                    </a>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="about-link">
                        Resume
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;

