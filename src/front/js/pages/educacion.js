import React, { useEffect } from "react";
import "../../styles/educacion.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faMedal } from '@fortawesome/free-solid-svg-icons';

const Educacion = () => {
    useEffect(() => {
        const handleScroll = () => {
            const educacionItems = document.querySelectorAll(".educacion-item");
            const experienciaItems = document.querySelectorAll(".experiencia-item");

            educacionItems.forEach((item) => {
                const rect = item.getBoundingClientRect();
                if (rect.top < window.innerHeight - 150 && rect.bottom >= 0) {
                    item.classList.add("visible"); // Agregar clase para animación de entrada
                    item.classList.remove("slide-out-left"); // Asegurarse de que no se aplique la clase de salida
                    item.classList.add("slide-in-left"); // Animación desde la izquierda
                } else {
                    item.classList.remove("visible");
                    item.classList.add("slide-out-left"); // Animación de salida
                    item.classList.remove("slide-in-left"); // Asegurarse de que no se aplique la clase de entrada
                }
            });

            experienciaItems.forEach((item) => {
                const rect = item.getBoundingClientRect();
                if (rect.top < window.innerHeight - 150 && rect.bottom >= 0) {
                    item.classList.add("visible"); // Agregar clase para animación de entrada
                    item.classList.remove("slide-out-right"); // Asegurarse de que no se aplique la clase de salida
                    item.classList.add("slide-in-right"); // Animación desde la derecha
                } else {
                    item.classList.remove("visible");
                    item.classList.add("slide-out-right"); // Animación de salida
                    item.classList.remove("slide-in-right"); // Asegurarse de que no se aplique la clase de entrada
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Ejecutar al cargar el componente

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div id="educacion" className="educacion-container row">
            <div className="col educacion-conta">
                <h2 className="titulo-educacion fade-in">
                    <FontAwesomeIcon icon={faGraduationCap} className="icono-educacion" />
                    Educación
                </h2>
                {[  
                    { titulo: "Desarrollador Full Stack", fecha: "2023 - 2024", institucion: "4Geeks Academy España" },
                    { titulo: "Técnico Sistemas", fecha: "2019 - 2021", institucion: "Centro Andino de Estudios Tecnicos" },
                    { titulo: "Técnico en Contabilidad y Finanzas", fecha: "2019 - 2021", institucion: "Centro Andino de Estudios Tecnicos" },
                    { titulo: "Técnico en Comercio Internacional", fecha: "2019 - 2021", institucion: "Centro Andino de Estudios Tecnicos" },
                ].map((edu, index) => (
                    <div className="educacion-item fade-in" key={index}>
                        <div className="_circleContainer_1u4ch_75">
                            <div className="_circle_1u4ch_75"></div>
                            <div className="_line_1u4ch_105"></div>
                        </div>
                        <div className="educacion-info">
                            <h3>{edu.titulo}</h3>
                            <span>{edu.fecha}</span>
                            <p>{edu.institucion}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="col educacion-conta">
                <h2 className="titulo-experiencia fade-in">
                    <FontAwesomeIcon icon={faMedal} className="icono-experiencia" />
                    Experiencia
                </h2>
                {[  
                    { titulo: "Asesor de Punto de Venta", fecha: "2023 - 2024", empresa: "Claro Colombia" },
                    { titulo: "Asesor call Center", fecha: "2020 - 2023", empresa: "Outsorcing COS" },
                    { titulo: "Ventas y servicio al cliente", fecha: "2019 - 2020", empresa: "Sicsa Claro Colombia" },
                    { titulo: "Asesor de ventas", fecha: "2017 - 2019", empresa: "Secretos del Tropico" },
                ].map((exp, index) => (
                    <div className="experiencia-item fade-in" key={index}>
                        <div className="_circleContainer_1u4ch_75">
                            <div className="_circle_1u4ch_75"></div>
                            <div className="_line_1u4ch_105"></div>
                        </div>
                        <div className="experiencia-info">
                            <h3>{exp.titulo}</h3>
                            <span>{exp.fecha}</span>
                            <p>{exp.empresa}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Educacion;
