import React, { useState, useEffect } from "react";
import "../../styles/navbar.css";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Esto proporciona un desplazamiento suave
        });
    };

    return (
        <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
            <div className="navbar-logo">
                <span className="logo-white">Luis</span>
                <span className={isScrolled ? "logo-black" : "logo-orange"}>
                    coded.
                </span>
            </div>
            <div className="navbar-links">
                <a href="#home" onClick={scrollToTop}>Home</a> {/* Llama a scrollToTop al hacer clic */}
                <a href="#servicios">Servicios</a>
                <a href="#skills">Skills</a>
                <a href="#proyectos">Proyectos</a>
                <a href="#contacto">Contacto</a>
            </div>
        </nav>
    );
};

export default Navbar;
