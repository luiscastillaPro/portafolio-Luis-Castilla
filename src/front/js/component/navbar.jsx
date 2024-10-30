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

    return (
        <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
            <div className="navbar-logo">
            <a href="#home"> {/* Cambiado a un ancla */}
                    <span className="logo-white">Luis</span>
                    <span className={isScrolled ? "logo-black" : "logo-orange"}>
                        coded.
                    </span>
                </a>
            </div>
            <div className="navbar-links">
                <a href="#home">Home</a>
                <a href="#servicios">Servicios</a>
                <a href="#skills">Skills</a> {/* Cambiado a un ancla que apunta al id "skills" */}
                <a href="#proyectos">Proyectos</a>
                <a href="#contacto">Contacto</a>
            </div>
        </nav>
    );
};

export default Navbar;
