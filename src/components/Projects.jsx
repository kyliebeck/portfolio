import React from "react";
import "./css/shared.css";
import "./css/Projects.css";

const projects = [

    {
        title: "Pixel Pet",
        short: "A virtual pet game where users can feed, play with, and care for their animated pets.",
        description: "A modern Tamagotchi where a pet ages through seven life stages, decays in real time if neglected, and can be fed, cleaned, played with, and eventually mourned in a graveyard. It features pets, achievements, an item shop, friend lists, a mini-game,and leaderboards.",
        technologies: ["Javascript", "Express", "SQLite", "Railway"],
        github: "https://github.com/kyliebeck/tamagotchi.git",
        demo: "https://tamagotchi-production-b14d.up.railway.app/",
        image: "/images/pixel-pet.png",
    },

    {
        title: "Movie Collector",
        short: "A Django web app for browsing, reviewing, and managing movies.",
        description:
            "Users can browse movies and reviews publicly. Logged-in users can add, edit, and delete their own movies and reviews. Features built-in Django authentication with signup, login, and logout. Backend: Django & Python; Database: SQLite switched to PostgreSQL; Frontend: Django templates with HTML/CSS and SVG movie covers.",
        technologies: ["Django", "Python", "PostgreSQL", "SQLite", "HTML", "CSS"],
        github: "https://github.com/kyliebeck/django_movie_collection_app.git",
        demo: "https://moviecollector-app-73c025a9ab7e.herokuapp.com/",
        image: "/images/movie-collector.png",
    },
    {
        title: "Bookshelf",
        short: "Organize and share your book collections with the community.",
        description:
            "Bookshelf allows users to collect and store books they have read or plan to read. Organize books into unique shelves and share them publicly on the library page. Built with JavaScript, Mongoose for database, CSS, and HTML.",
        technologies: ["JavaScript", "Mongoose", "CSS", "HTML"],
        github: "https://github.com/kyliebeck/BookshelfApp.git",
        demo: "https://bookshelf-project-app-532bd2f3bcab.herokuapp.com/",
        image: "/images/bookshelf.png",
    },
    {
        title: "Sudoku Game",
        short: "Classic 9x9 Sudoku puzzle game.",
        description:
            "A Sudoku puzzle where users fill a 9x9 grid with numbers 1-9 ensuring no repeats in rows, columns, and 3x3 subsquares. Alerts on winning. Built with JavaScript, CSS, and HTML.",
        technologies: ["JavaScript", "CSS", "HTML"],
        github: "https://github.com/kyliebeck/Sudoku-Project.git",
        demo: "https://kyliebeck.github.io/Sudoku-Project/",
        image: "/images/sudoku.png",
    },
];

const Projects = () => {
    return (
        <section className="projects-section">
            <div className="projects-container">
                <h1 className="projects-title">Projects</h1>
                <div className="projects-list">
                    {projects.map((project, idx) => (
                        <div key={idx} className="project-card">
                            {project.image && (
                                <img
                                    src={project.image}
                                    alt={`${project.title} preview`}
                                    className="project-image"
                                />
                            )}
                            <div className="project-content">
                                <h2 className="project-title">{project.title}</h2>
                                <p className="project-short">{project.short}</p>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tech">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="tech-tag">
                                            #{tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn"
                                        >
                                            GitHub
                                        </a>
                                    )}
                                    {project.demo && project.demo !== "#" && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-demo"
                                        >
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
