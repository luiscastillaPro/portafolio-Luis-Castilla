import React, { useEffect } from "react";
import "../../styles/skills.css";
import html from "../../img/skills/html.png";
import css from "../../img/skills/css.png";
import javascript from "../../img/skills/javascript.png";
import react from "../../img/skills/react.png";
import node from "../../img/skills/node.png"; 
import git from "../../img/skills/git.png"; 
import github from "../../img/skills/github.png";
import bootstrap from "../../img/skills/bootstrap.png";
import python from "../../img/skills/python.png";
import sql from "../../img/skills/sql.png";
import flask from "../../img/skills/flask.png"; 
import jwt from "../../img/skills/jwt.png";
import figma from "../../img/skills/figma.png";
import canva from "../../img/skills/canva.png";
import wordpress from "../../img/skills/wordpress.png";

const Skills = () => {
    useEffect(() => {
        const handleScroll = () => {
            const fadeElements = document.querySelectorAll(".fade-in");
            fadeElements.forEach((element) => {
                const rect = element.getBoundingClientRect();
                if (rect.top < window.innerHeight - 150) {
                    element.classList.add("visible");
                } else {
                    element.classList.remove("visible");
                }
            });
        };


        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Ejecuta al cargar para elementos ya en pantalla

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const skillsData = [
        { src: html, name: "HTML5" },
        { src: css, name: "CSS3" },
        { src: javascript, name: "JavaScript" },
        { src: react, name: "React" },
        { src: figma, name: "Figma" },
        { src: node, name: "Node.js" },
        { src: git, name: "Git" },
        { src: github, name: "GitHub" },
        { src: bootstrap, name: "Bootstrap" },
        { src: canva, name: "Canva" },
        { src: python, name: "Python" },
        { src: sql, name: "SQL" },
        { src: flask, name: "Flask" },
        { src: jwt, name: "JWT" },
        { src: wordpress, name: "WordPress" },
    ];

    return (
        <div id="skills" className="skills-container"> 
            <h2 className="skills-title fade-in">My Skills</h2>
            <div className="skill-cont-table fade-in">
            <div className="skills-table">
                    {skillsData.map((skill, index) => (
                        <div key={index} className="skill-item fade-in">
                            <img src={skill.src} alt={skill.name} />
                            <span className="skill-text">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
