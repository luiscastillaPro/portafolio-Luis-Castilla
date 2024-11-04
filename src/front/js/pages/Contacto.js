import React, { useEffect } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUser, FaPen } from 'react-icons/fa';
import "../../styles/contacto.css";

const Contacto = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                entry.target.classList.toggle("visible", entry.isIntersecting);
            });
        }, { threshold: 0.5 });

        document.querySelectorAll(".input-icon-container").forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div id="contacto" className="contacto-container fade-in">
            <h2 className="contact-title">Contacto</h2>
            <div className="contacto-contin fade-in">
                <div className="contact-info fade-in">
                    <h3>Hablemos</h3>
                    {[
                        { icon: <FaPhone />, text: "+34 641992406" },
                        { icon: <FaEnvelope />, text: "luis.castillav30@gmail.com" },
                        { icon: <FaMapMarkerAlt />, text: "Sineu, Palmas de Mallorca" }
                    ].map(({ icon, text }, index) => (
                        <div key={index} className="contact-detail">
                            <span className="contacto-ico">{icon}</span>
                            <p>{text}</p>
                        </div>
                    ))}
                </div>
                <div className="contact-form fade-in">
                    <form>
                        {[
                            { placeholder: "Tu nombre", type: "text", icon: <FaUser />, error: "El nombre es requerido" },
                            { placeholder: "Tu email", type: "email", icon: <FaEnvelope />, error: "El email es requerido" },
                            { placeholder: "Asunto", type: "text", icon: <FaPen />, error: "El asunto es requerido" },
                        ].map(({ placeholder, type, icon, error }, index) => (
                            <label key={index} className={`input-icon-container ${index % 2 ? "slide-right" : "slide-left"}`}>
                                <input type={type} required placeholder={placeholder} />
                                <span className="input-icon">{icon}</span>
                                <span className="error-message">{error}</span>
                            </label>
                        ))}
                        <label className="input-icon-container slide-right">
                            <textarea required placeholder="Escriba su mensaje..."></textarea>
                            <span className="error-message">El mensaje es requerido</span>
                        </label>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contacto;
