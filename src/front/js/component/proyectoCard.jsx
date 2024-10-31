// ProyectoCard.js
import React, { useState } from 'react';
import '../../styles/proyectoCard.css';
import portada from "../../img/HooBoo/portada.jpeg";
import primera from "../../img/HooBoo/primera.jpeg";
import segunda from "../../img/HooBoo/segunda.jpg";
import tercera from "../../img/HooBoo/tercera.jpeg";
import cuarta from "../../img/HooBoo/cuarta.jpeg";
import quinta from "../../img/HooBoo/quinta.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons'; // Importar el ícono correcto
import Modal from "../component/modal.jsx";

const ProyectoCard = () => {
    const proyectosData = [
        {
            titulo: "HooBoo",
            descripcion: "Descripción del Proyecto 1",
            imagenes: [portada, primera, segunda, tercera, cuarta, quinta],
            liveLink: "https://sample-service-name-nn8y.onrender.com/",
            codigoLink: "https://github.com/luiscastillaPro/HooBoo"
        },
    ];

    const [imagenActual, setImagenActual] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);

    const siguienteImagen = () => {
        const imagenes = proyectosData[0]?.imagenes; // Solo hay un proyecto
        if (imagenes) {
            setImagenActual((imagenActual + 1) % imagenes.length);
        }
    };

    const anteriorImagen = () => {
        const imagenes = proyectosData[0]?.imagenes; // Solo hay un proyecto
        if (imagenes) {
            setImagenActual((imagenActual - 1 + imagenes.length) % imagenes.length);
        }
    };

    const proyectoActualData = proyectosData[0]; // Solo hay un proyecto
    const { titulo, descripcion, imagenes = [], liveLink, codigoLink } = proyectoActualData;

    return (
        <div className="proyecto-card">
            {titulo ? (
                <>
                    <div className='proyecto-informativo'>
                        <h2 className='proyecto-titul'>{titulo}</h2>
                        <button onClick={() => setModalVisible(true)} className="info-button">
                            <FontAwesomeIcon className='iconito' icon={faInfoCircle} />
                        </button>
                    </div>
                    <div className="proyecto-carrusel">
                        <button className="proyecto-boton1" onClick={anteriorImagen}>{"<"}</button>
                        <img className='proyecto-imagen' src={imagenes[imagenActual]} alt={`${titulo} imagen`} />
                        <button className='proyecto-boton2' onClick={siguienteImagen}>{">"}</button>
                    </div>

                    <div className="proyecto-botones">
                        <a href={liveLink} target="_blank" rel="noopener noreferrer" className="proyecto-boton3">
                            <FontAwesomeIcon icon={faExternalLinkAlt} />
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
            ) : (
                <p className='proyecto-sin'>No hay proyectos disponibles.</p>
            )}
        </div>
    );
};

export default ProyectoCard;
