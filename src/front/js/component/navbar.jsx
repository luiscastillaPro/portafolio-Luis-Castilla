import React, { useState, useEffect } from "react";
import "../../styles/navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"; // Ícono para el menú hamburguesa
import { faTimes } from "@fortawesome/free-solid-svg-icons"; // Ícono para cerrar el menú

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar el menú desplegable

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        scroll.scrollToTop({ duration: 500, smooth: true });
    };

    // Función para alternar el estado del menú
    const toggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState); // Cambia el estado cuando se hace clic
    };

    return (
        <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
            <div className="navbar-logo" onClick={scrollToTop}>
                <span className="logo-white">Luis</span>
                <span className={isScrolled ? "logo-black" : "logo-orange"}>
                    coded.
                </span>
            </div>
            <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
                <Link to="home" smooth={true} duration={500} onClick={scrollToTop} activeClass="active" spy={true}>
                    Inicio
                </Link>
                <Link to="skills" smooth={true} duration={500} activeClass="active" spy={true}>
                    Habilidades
                </Link>
                <Link to="proyectos" smooth={true} duration={500} activeClass="active" spy={true}>
                    Proyectos
                </Link>
                <Link to="educacion" smooth={true} duration={500} offset={-100} activeClass="active" spy={true}>
                    Educación
                </Link>
                <Link to="contacto" smooth={true} duration={500} activeClass="active" spy={true}>
                    Contacto
                </Link>
            </div>
            <button className="navbar-toggle" onClick={toggleMenu}>
                <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
            </button>
        </nav>
    );
};

export default Navbar;
