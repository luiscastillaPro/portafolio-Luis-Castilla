import React, { useState } from 'react';
import '../../styles/proyectoCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact } from '@fortawesome/free-brands-svg-icons'; // Importa íconos de habilidades
import { faInfoCircle, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import Modal from "../component/modal.jsx";

const ProyectoCard = ({ proyecto, extraClass }) => {
    const [imagenActual, setImagenActual] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const [hover, setHover] = useState(false);

    const siguienteImagen = () => {
        const imagenes = proyecto.imagenes;
        if (imagenes) {
            setImagenActual((imagenActual + 1) % imagenes.length);
        }
    };

    const anteriorImagen = () => {
        const imagenes = proyecto.imagenes;
        if (imagenes) {
            setImagenActual((imagenActual - 1 + imagenes.length) % imagenes.length);
        }
    };

    const { titulo, descripcion, imagenes = [], liveLink, codigoLink } = proyecto;

    return (
        <div className={`proyecto-card fade-in ${extraClass}`}>
            {titulo && (
                <>
                    <div className='proyecto-informativo'>
                        <h2 className='proyecto-titul'>{titulo}</h2>
                        <button onClick={() => setModalVisible(true)} className="info-button">
                            <p className='proyecto-textico'>saber mas</p>
                            <FontAwesomeIcon className='iconito' icon={faInfoCircle} />
                        </button>
                    </div>
                    <div
                        className="proyecto-carrusel"
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                    >
                        <button className="proyecto-boton1" onClick={anteriorImagen}>{"<"}</button>
                        <img className='proyecto-imagen' src={imagenes[imagenActual]} alt={`${titulo} imagen`} />
                        
                        {/* Contenedor de habilidades con íconos y texto */}
                        <div className={`proyecto-skills-overlay ${hover ? 'show' : ''}`}>
                            <div className="proyecto-skill-item">
                                <FontAwesomeIcon icon={faHtml5} className="proyecto-skill-icon" />
                                <span>HTML</span>
                            </div>
                            <div className="proyecto-skill-item">
                                <FontAwesomeIcon icon={faCss3Alt} className="proyecto-skill-icon" />
                                <span>CSS</span>
                            </div>
                            <div className="proyecto-skill-item">
                                <FontAwesomeIcon icon={faJs} className="proyecto-skill-icon" />
                                <span>JavaScript</span>
                            </div>
                            <div className="proyecto-skill-item">
                                <FontAwesomeIcon icon={faReact} className="proyecto-skill-icon" />
                                <span>React</span>
                            </div>
                        </div>

                        <button className='proyecto-boton2' onClick={siguienteImagen}>{">"}</button>
                    </div>
                    <div className="proyecto-botones">
                        <a href={liveLink} target="_blank" rel="noopener noreferrer" className="proyecto-boton3">
                            <FontAwesomeIcon className='proyecto-icona' icon={faExternalLinkAlt} />
                            Ver sitio en live!
                        </a>
                        <div className="circulos">
                            {imagenes.map((_, index) => (
                                <div
                                    key={index}
                                    className={`circulo ${index === imagenActual ? 'activo' : ''}`}
                                ></div>
                            ))}
                        </div>
                        <a href={codigoLink} target="_blank" rel="noopener noreferrer" className="proyecto-boton4">
                            {"</>"} Ver código
                        </a>
                    </div>
                    <Modal visible={modalVisible} onClose={() => setModalVisible(false)} title={titulo} description={descripcion} />
                </>
            )}
        </div>
    );
};

export default ProyectoCard;
