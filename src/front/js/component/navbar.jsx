import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
                <Link to="/">
                    <span className="logo-white">Luis</span>
                    <span className="logo-orange">coded.</span>
                </Link>
            </div>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/servicios">Servicios</Link>
                <Link to="/habilidades">Skills</Link>
                <Link to="/proyectos">Proyectos</Link>
                <Link to="/contacto">Contacto</Link>
            </div>
        </nav>
    );
};

export default Navbar;
