import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import foto from "../../img/foto.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
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

	return (
		<div className="home-container">
			<div id="home" className="home-contai">
				<div className="home-con1">
					<h3 className="home-bienvenido">Bienvenido a mi Portafolio</h3>
					<p className="home-texto">Hola, mi nombre es</p>
					<h1 className="home-titulo">Luis Castilla</h1>
					<p className="home-texto">Y soy </p>
					<h2 className="home-full">
						{displayText}
						{cursorVisible && <span className="cursor">|</span>}
					</h2>
					<h6 className="home-intro">
						Apasionado por la programación y desarrollo web, con experiencia en tecnologías como HTML, CSS, JavaScript, React, Node.js, Python, SQL, SQLAlchemy, Bootstrap, Git, GitHub, Flask, Authentication JWT y Jest.
					</h6>
					<div>
						<a href="/CV_Luis_Castilla.pdf" download="CV_Luis_Castilla.pdf">
							<button className="contact-button">Descargar CV</button>
						</a>
					</div>
				</div>
				<div className="home-perfil">
					<div className="home-con2">
						<img className="foto-perfil" src={foto} alt="Luis Castilla" />
					</div>
					<div className="home-redes">
						<a href="https://www.linkedin.com/in/luiscastillav30/" target="_blank" rel="noopener noreferrer">
							<div className="icon-container">
								<FontAwesomeIcon icon={faLinkedin} className="redes-icono" />
							</div>
						</a>
						<a href="https://github.com/luiscastillaPro" target="_blank" rel="noopener noreferrer">
							<div className="icon-container">
								<FontAwesomeIcon icon={faGithub} className="redes-icono" />
							</div>
						</a>
						<a href="https://www.instagram.com/luis.castillav30" target="_blank" rel="noopener noreferrer">
							<div className="icon-container">
								<FontAwesomeIcon icon={faInstagram} className="redes-icono" />
							</div>
						</a>
						<a href="https://www.tiktok.com/@luiscastilla" target="_blank" rel="noopener noreferrer">
							<div className="icon-container">
								<FontAwesomeIcon icon={faFacebook} className="redes-icono" />
							</div>
						</a>
					</div>
				</div>
			</div>

			{/* Sección de Skills */}
			<section id="skills">
				<Skills />
			</section>

			{/* Agrega otras secciones aquí si es necesario, como "Proyectos" o "Contacto" */}
		</div>
	);
};

export default Home;
