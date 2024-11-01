import React from "react";
import "../../styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div className="footer-container">
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
