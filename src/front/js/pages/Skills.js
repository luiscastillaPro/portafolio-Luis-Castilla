import React from "react";
import "../../styles/skills.css";
import html from "../../img/html-logo.png";
import css from "../../img/css-logo.png";
import javascript from "../../img/javascript-logo.png";
import react from "../../img/react-logo.png";
import node from "../../img/node-logo.png"; 
import git from "../../img/git-logo.png"; 
import github from "../../img/github-logo.png";
import bootstrap from "../../img/bootstrap-logo.png";
import python from "../../img/python-logo.png";
import sql from "../../img/sql-logo.png";
import flask from "../../img/flask-logo.png"; 
import jwt from "../../img/jwt-logo.png";
import figma from "../../img/figma-logo.png";
import canva from "../../img/canva-logo.png";
import wordpress from "../../img/wordpress-logo.png";

const Skills = () => {
    return (
        <div id="skills" className="skills-container"> {/* Aquí está el ID */}
            <h2 className="skills-title">My Skills</h2>
            <div className="skill-cont-table">
                <table className="skills-table">
                    <tbody> {/* Cambié a tbody para una mejor semántica */}
                        <tr>
                            <td>
                                <div className="skill-item">
                                    <img src={html} alt="HTML" />
                                    <span className="skill-text">HTML5</span>
                                </div>
                            </td>
                            <td>
                                <div className="skill-item">
                                    <img src={css} alt="CSS" />
                                    <span className="skill-text">CSS3</span>
                                </div>
                            </td>
                            <td>
                                <div className="skill-item">
                                    <img src={javascript} alt="JavaScript" />
                                    <span className="skill-text">JavaScript</span>
                                </div>
                            </td>
                            <td>
                                <div className="skill-item">
                                    <img src={react} alt="React" />
                                    <span className="skill-text">React</span>
                                </div>
                            </td>
                            <td>
                                <div className="skill-item">
                                    <img src={figma} alt="Figma" />
                                    <span className="skill-text">Figma</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="skill-item">
                                    <img src={node} alt="Node.js" />
                                    <span className="skill-text">Node.js</span>
                                </div>
                            </td>
                            <td>
                                <div className="skill-item">
                                    <img src={git} alt="Git" />
                                    <span className="skill-text">Git</span>
                                </div>
                            </td>
                            <td>
                                <div className="skill-item">
                                    <img src={github} alt="GitHub" />
                                    <span className="skill-text">GitHub</span>
                                </div>
                            </td>
                            <td>
                                <div className="skill-item">
                                    <img src={bootstrap} alt="Bootstrap" />
                                    <span className="skill-text">Bootstrap</span>
                                </div>
                            </td>
                            <td>
                                <div className="skill-item">
                                    <img src={canva} alt="Canva" />
                                    <span className="skill-text">Canva</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="skill-item">
                                    <img src={python} alt="Python" />
                                    <span className="skill-text">Python</span>
                                </div>
                            </td>
                            <td>
                                <div className="skill-item">
                                    <img src={sql} alt="SQL" />
                                    <span className="skill-text">SQL</span>
                                </div>
                            </td>
                            <td>
                                <div className="skill-item">
                                    <img src={flask} alt="Flask" />
                                    <span className="skill-text">Flask</span>
                                </div>
                            </td>
                            <td>
                                <div className="skill-item">
                                    <img src={jwt} alt="JWT" />
                                    <span className="skill-text">JWT</span>
                                </div>
                            </td>
                            <td>
                                <div className="skill-item">
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
