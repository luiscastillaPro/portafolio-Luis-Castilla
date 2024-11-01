import React, { useState, useEffect } from "react"; 
import "../../styles/navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        scroll.scrollToTop({ duration: 500, smooth: true });
    };

    return (
        <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
            <div className="navbar-logo" onClick={scrollToTop}>
                <span className="logo-white">Luis</span>
                <span className={isScrolled ? "logo-black" : "logo-orange"}>
                    coded.
                </span>
            </div>
            <div className="navbar-links">
                <Link 
                    to="home" 
                    smooth={true} 
                    duration={500} 
                    onClick={scrollToTop}
                    activeClass="active" 
                    spy={true}
                >
                    Home
                </Link>
                <Link 
                    to="servicios" 
                    smooth={true} 
                    duration={500}
                    activeClass="active" 
                    spy={true}
                >
                    Servicios
                </Link>
                <Link 
                    to="skills" 
                    smooth={true} 
                    duration={500}
                    activeClass="active" 
                    spy={true}
                >
                    Skills
                </Link>
                <Link 
                    to="proyectos" 
                    smooth={true} 
                    duration={500}
                    activeClass="active" 
                    spy={true}
                >
                    Proyectos
                </Link>
                <Link 
                    to="contacto" 
                    smooth={true} 
                    duration={500}
                    activeClass="active" 
                    spy={true}
                >
                    Contacto
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
