import React, { useEffect } from "react";
import "../../styles/skills.css";
import html from "../../img/skills/html-logo.png";
import css from "../../img/skills/css-logo.png";
import javascript from "../../img/skills/javascript-logo.png";
import react from "../../img/skills/react-logo.png";
import node from "../../img/skills/node-logo.png"; 
import git from "../../img/skills/git-logo.png"; 
import github from "../../img/skills/github-logo.png";
import bootstrap from "../../img/skills/bootstrap-logo.png";
import python from "../../img/skills/python-logo.png";
import sql from "../../img/skills/sql-logo.png";
import flask from "../../img/skills/flask-logo.png"; 
import jwt from "../../img/skills/jwt-logo.png";
import figma from "../../img/skills/figma-logo.png";
import canva from "../../img/skills/canva-logo.png";
import wordpress from "../../img/skills/wordpress-logo.png";

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

    return (
        <div id="skills" className="skills-container"> 
            <h2 className="skills-title fade-in">My Skills</h2>
            <div className="skill-cont-table fade-in">
                <table className="skills-table">
                    <tbody>
                        <tr>
                            <td>
                                <div className="skill-item fade-in">
                                    <img src={html} alt="HTML" />
                                    <span className="skill-text">HTML5</span>
                                </div>
                            </td>
                            <td>
                                <div className="skill-item fade-in">
                                    <img src={css} alt="CSS" />
                                    <span className="skill-text">CSS3</span>
                                </div>
                            </td>
                            <td>
                                <div className="skill-item fade-in">
                                    <img src={javascript} alt="JavaScript" />
                                    <span className="skill-text">JavaScript</span>
                                </div>
                            </td>
                            <td>
                                <div className="skill-item fade-in">
                                    <img src={react} alt="React" />
                                    <span className="skill-text">React</span>
                                </div>
                            </td>
                            <td>
                                <div className="skill-item fade-in">
                                    <img src={figma} alt="Figma" />
                                    <span className="skill-text">Figma</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="skill-item fade-in">
                                    <img src={node} alt="Node.js" />
                                    <span className="skill-text">Node.js</span>
                                </div>
                            </td>
                            <td>
                                <div className="skill-item fade-in">
                                    <img src={git} alt="Git" />
                                    <span className="skill-text">Git</span>
                                </div>
                            </td>
                            <td>
                                <div className="skill-item fade-in">
                                    <img src={github} alt="GitHub" />
                                    <span className="skill-text">GitHub</span>
                                </div>
                            </td>
                            <td>
                                <div className="skill-item fade-in">
                                    <img src={bootstrap} alt="Bootstrap" />
                                    <span className="skill-text">Bootstrap</span>
                                </div>
                            </td>
                            <td>
                                <div className="skill-item fade-in">
                                    <img src={canva} alt="Canva" />
                                    <span className="skill-text">Canva</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="skill-item fade-in">
                                    <img src={python} alt="Python" />
                                    <span className="skill-text">Python</span>
                                </div>
                            </td>
                            <td>
                                <div className="skill-item fade-in">
                                    <img src={sql} alt="SQL" />
                                    <span className="skill-text">SQL</span>
                                </div>
                            </td>
                            <td>
                                <div className="skill-item fade-in">
                                    <img src={flask} alt="Flask" />
                                    <span className="skill-text">Flask</span>
                                </div>
                            </td>
                            <td>
                                <div className="skill-item fade-in">
                                    <img src={jwt} alt="JWT" />
                                    <span className="skill-text">JWT</span>
                                </div>
                            </td>
                            <td>
                                <div className="skill-item fade-in">
                                    <img src={wordpress} alt="WordPress" />
                                    <span className="skill-text">WordPress</span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Skills;
