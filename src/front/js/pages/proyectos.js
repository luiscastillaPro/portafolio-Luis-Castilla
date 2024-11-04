import React, { useEffect } from "react";
import ProyectoCard from '../component/proyectoCard.jsx';
import portada from "../../img/HooBoo/portada.jpeg";
import primera from "../../img/HooBoo/primera.jpeg";
import segunda from "../../img/HooBoo/segunda.jpeg";
import tercera from "../../img/HooBoo/tercera.jpeg";
import cuarta from "../../img/HooBoo/cuarta.jpeg";
import quinta from "../../img/HooBoo/quinta.jpeg";
import "../../styles/proyectos.css";

const proyectosData = [
  {
    titulo: "HooBoo",
    descripcion: "Descripción del Proyecto 1",
    imagenes: [portada, primera, segunda, tercera, cuarta, quinta],
    liveLink: "https://sample-service-name-nn8y.onrender.com/",
    codigoLink: "https://github.com/luiscastillaPro/HooBoo"
  },
  {
    titulo: "HooBoo",
    descripcion: "Descripción del Proyecto 2",
    imagenes: [portada, primera, segunda, tercera, cuarta, quinta],
    liveLink: "https://sample-service-name-nn8y.onrender.com/",
    codigoLink: "https://github.com/luiscastillaPro/HooBoo"
  },
  {
    titulo: "HooBoo",
    descripcion: "Descripción del Proyecto 3",
    imagenes: [portada, primera, segunda, tercera, cuarta, quinta],
    liveLink: "https://sample-service-name-nn8y.onrender.com/",
    codigoLink: "https://github.com/luiscastillaPro/HooBoo"
  },
  {
    titulo: "HooBoo",
    descripcion: "Descripción del Proyecto 4",
    imagenes: [portada, primera, segunda, tercera, cuarta, quinta],
    liveLink: "https://sample-service-name-nn8y.onrender.com/",
    codigoLink: "https://github.com/luiscastillaPro/HooBoo"
  },
];

const Proyectos = () => {
  useEffect(() => {
    const handleScroll = () => {
      const fadeElements = document.querySelectorAll(".fade-in");
      fadeElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 150) {
          element.classList.add("visible");
        } else {
          element.classList.remove("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="proyectos" className="proyectos-contain">
      <h1 className="proyectos-title fade-in">Proyectos</h1>
      <div className="proyectos-container">
        {proyectosData.map((proyecto, index) => (
          <ProyectoCard
            key={index}
            proyecto={proyecto}
            extraClass={index === 1 || index === 3 ? 'slide-right' : ''}
          />
        ))}
      </div>
    </div>
  );
};

export default Proyectos;
