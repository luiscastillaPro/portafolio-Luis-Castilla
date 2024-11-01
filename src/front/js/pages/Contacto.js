// Contacto.js
import React, { useEffect } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Importando iconos de react-icons
import "../../styles/contacto.css";

const Contacto = () => {
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
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="contacto-container fade-in">
            <h2 className="contact-title">Contacto</h2>
            <div className="contacto-contin fade-in">
                <div className="contact-info fade-in">
                    <div className="contact-detail">
                        <span className="contacto-ico"><FaPhone /></span>
                        <p>+34 641992406</p>
                    </div>
                    <div className="contact-detail">
                        <span className="contacto-ico"><FaEnvelope /></span>
                        <p>luis.castillav30@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <span className="contacto-ico"><FaMapMarkerAlt /></span>
                        <p>Sineu, Palmas de Mallorca</p>
                    </div>
                </div>
                <div className="contact-form fade-in">
                    <form>
                        <label>
                            <input type="text" required placeholder="Tu nombre" />
                        </label>
                        <span className="error-message">El nombre es requerido</span>

                        <label>
                            <input type="email" required placeholder="Tu email" />
                        </label>
                        <span className="error-message">El email es requerido</span>

                        <label>
                            <input type="text" required placeholder="Asunto" />
                        </label>
                        <span className="error-message">El asunto es requerido</span>

                        <label>
                            <textarea required placeholder="Escriba su mensaje..."></textarea>
                        </label>
                        <span className="error-message">El mensaje es requerido</span>

                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contacto;
