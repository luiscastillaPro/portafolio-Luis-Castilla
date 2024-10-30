import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import foto from "../../img/foto.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import Skills from "../pages/Skills.js";

const Home = () => {
    const [displayText, setDisplayText] = useState("");
    const [cursorVisible, setCursorVisible] = useState(true);
    const fullText = "Full Stack Developer";
    const typingSpeed = 150;
    const deletingSpeed = 150;
    const pauseTime = 1000;
    const cursorBlinkSpeed = 500;

    useEffect(() => {
        let index = 0;
        let isDeleting = false;
        const typeEffect = () => {
            if (index < fullText.length && !isDeleting) {
                setDisplayText((prev) => prev + fullText.charAt(index));
                index++;
                setTimeout(typeEffect, typingSpeed);
            } else if (index === fullText.length && !isDeleting) {
                setTimeout(() => {
                    isDeleting = true;
                    typeEffect();
                }, pauseTime);
            } else if (index > 0 && isDeleting) {
                setDisplayText((prev) => prev.slice(0, -1));
                index--;
                setTimeout(typeEffect, deletingSpeed);
            } else if (index === 0 && isDeleting) {
                isDeleting = false;
                setTimeout(typeEffect, pauseTime);
            }
        };
        typeEffect();

        const cursorTimer = setInterval(() => {
            setCursorVisible((prev) => !prev);
        }, cursorBlinkSpeed);

        return () => clearInterval(cursorTimer);
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll(".fade-in-element");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    // Dejar de observar una vez que el elemento es visible
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 }); // El 10% del elemento debe ser visible

        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <div className="home-container fade-in-element">
            <div className="home-contai fade-in-element">
                <div className="home-con1 fade-in-element">
                    <h3 className="home-bienvenido fade-in-element">Bienvenido a mi Portafolio</h3>
                    <p className="home-texto fade-in-element">Hola, mi nombre es</p>
                    <h1 className="home-titulo fade-in-element">Luis Castilla</h1>
                    <p className="home-texto fade-in-element">Y soy </p>
                    <h2 className="home-full fade-in-element">
                        {displayText}
                        {cursorVisible && <span className="cursor">|</span>}
                    </h2>
                    <h6 className="home-intro fade-in-element">
                        Apasionado por la programación y desarrollo web, con experiencia en tecnologías como HTML, CSS, JavaScript, React, Node.js, Python, SQL, SQLAlchemy, Bootstrap, Git, GitHub, Flask, Authentication JWT y Jest.
                    </h6>
                    <div>
                        <a href="https://drive.google.com/uc?export=download&id=1FJXKzgC5stMr66OCcgYsFG_EoLXDuz9U" download="CV_Luis_Castilla.pdf">
                            <button className="contact-button fade-in-element">Descargar CV</button>
                        </a>
                    </div>
                </div>
                <div className="home-perfil fade-in-element">
                    <div className="home-con2">
                        <img className="foto-perfil" src={foto} alt="Luis Castilla" />
                    </div>
                    <div className="home-redes">
                        <a href="https://www.linkedin.com/in/luiscastillav30/" target="_blank" rel="noopener noreferrer">
                            <div className="icon-container fade-in-element">
                                <FontAwesomeIcon icon={faLinkedin} className="redes-icono" />
                            </div>
                        </a>
                        <a href="https://github.com/luiscastillaPro" target="_blank" rel="noopener noreferrer">
                            <div className="icon-container fade-in-element">
                                <FontAwesomeIcon icon={faGithub} className="redes-icono" />
                            </div>
                        </a>
                        <a href="https://www.instagram.com/luis.castillav30" target="_blank" rel="noopener noreferrer">
                            <div className="icon-container fade-in-element">
                                <FontAwesomeIcon icon={faInstagram} className="redes-icono" />
                            </div>
                        </a>
                        <a href="https://www.tiktok.com/@luiscastilla" target="_blank" rel="noopener noreferrer">
                            <div className="icon-container fade-in-element">
                                <FontAwesomeIcon icon={faFacebook} className="redes-icono" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
			<div className="scroll-indicator">
                <FontAwesomeIcon icon={faAngleDoubleDown} className="down-arrow" />
            </div>
            <section id="skills">
                <Skills />
            </section>
        </div>
    );
};

export default Home;
