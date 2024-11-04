import React from "react";
import "../../styles/educacion.css";

const Educacion = () => (
    <div id="educacion" className="educacion-container row">
        {/* Columna de Educación */}
        <div className="col educacion-conta">
            <h2 className="titulo-educacion">Educación</h2>
            {/** Sección de educación */}
            {[
                { titulo: "Desarrollador Full Stack", fecha: "2023 - 2024", institucion: "4Geeks España" },
                { titulo: "Diseño web responsivo", fecha: "2022 - 2023", institucion: "Campamento de código libre" },
                { titulo: "Licenciatura en Marketing e Investigación de Mercados", fecha: "2014 - 2018", institucion: "Universidad de Málaga" },
            ].map((edu, index) => (
                <div className="educacion-item" key={index}>
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

        {/* Columna de Experiencia */}
        <div className="col educacion-conta">
            <h2 className="titulo-experiencia">Experiencia</h2>
            {/** Sección de experiencia */}
            {[
                { titulo: "Freelance de front-end", fecha: "2022 - 2023", empresa: "Película de propaganda" },
                { titulo: "Especialista en atención al cliente", fecha: "2013 - Present", empresa: "Mas Naranja" },
                { titulo: "Ventas y servicio al cliente", fecha: "2010 - 2013", empresa: "Jazztel" },
                { titulo: "Asesor de ventas", fecha: "2008 - 2009", empresa: "Banco Kutxa" },
            ].map((exp, index) => (
                <div className="experiencia-item" key={index}>
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

export default Educacion;
