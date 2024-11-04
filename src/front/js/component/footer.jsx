import React from "react";
import "../../styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="footer-container">
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
            <p className="footer-text">
                <FontAwesomeIcon icon={faPalette} /> Diseñado y construido por Luis Castilla
            </p>
            <p className="footer-year">
                &copy; {new Date().getFullYear()}
            </p>
            <div className="navbar-logo">
                <span className="logo-white">Luis</span>
                <span className="logo-orange">coded.</span>
            </div>
        </div>
    );
};

export default Footer;
