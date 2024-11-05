import React, { useEffect } from "react";
import { FaClipboardList } from 'react-icons/fa'; // Importar el icono
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
    imagenes: [portada, primera, segunda, tercera, cuarta, quinta],
    liveLink: "https://sample-service-name-nn8y.onrender.com/",
    codigoLink: "https://github.com/luiscastillaPro/HooBoo",
    skills: ["React", "Node.js", "JavaScript", "API REST", "Python", "SQLAlchemy"],
    proposito: "HooBoo es una plataforma interactiva diseñada para conectar a lectores y escritores a través de una experiencia social centrada en la literatura. Los usuarios pueden explorar una amplia variedad de libros, compartir reseñas, y conectarse con otros lectores, mientras disfrutan de un diseño visualmente atractivo y adaptable. HooBoo no solo fomenta la lectura, sino que también promueve el crecimiento de nuevos lectores y escritores, ofreciendo una experiencia literaria única.",
    funcionalidad: ["Exploración de Libros: Todos los usuarios pueden navegar y buscar libros en una biblioteca visualmente atractiva.","Interacción Social: Los usuarios registrados pueden añadir libros a favoritos, comentar, y compartir reseñas.","Personalización: Opción de cambiar entre modo claro y oscuro.","Gestión de Perfil: Los usuarios pueden personalizar su avatar, nombre de usuario y configuración de privacidad.","Calificación y Opinión del Usuario: Sistema de calificación visible para todos los visitantes, que recopila y muestra una media basada en los votos de los usuarios."],
    tecnologias: ["Google Books API: Permite acceder a una biblioteca extensa de libros, con detalles como descripción, imágenes y autores.","Commento: Gestiona el sistema de comentarios para fomentar la interacción de los usuarios.","CHATRA: Integración de un chat en vivo para mejorar la experiencia de usuario.","Base de Datos de Usuarios: Almacena credenciales, preferencias de usuario, y tokens de autenticación.","Base de Datos de Libros de Respaldo: Incluye información relevante de los libros para garantizar disponibilidad aún sin conexión a Google Books.","Base de Datos de Calificaciones: Recopila y promedia calificaciones de usuarios, proporcionando feedback valioso."]
  },
  {
    titulo: "HooBoo",
    imagenes: [portada, primera, segunda, tercera, cuarta, quinta],
    liveLink: "https://sample-service-name-nn8y.onrender.com/",
    codigoLink: "https://github.com/luiscastillaPro/HooBoo",
    skills: ["React", "Bootstrap", "API REST"],
    proposito: "HooBoo es una plataforma interactiva diseñada para conectar a lectores y escritores a través de una experiencia social centrada en la literatura. Los usuarios pueden explorar una amplia variedad de libros, compartir reseñas, y conectarse con otros lectores, mientras disfrutan de un diseño visualmente atractivo y adaptable. HooBoo no solo fomenta la lectura, sino que también promueve el crecimiento de nuevos lectores y escritores, ofreciendo una experiencia literaria única.",
    funcionalidad: ["Exploración de Libros: Todos los usuarios pueden navegar y buscar libros en una biblioteca visualmente atractiva.","Interacción Social: Los usuarios registrados pueden añadir libros a favoritos, comentar, y compartir reseñas.","Personalización: Opción de cambiar entre modo claro y oscuro.","Gestión de Perfil: Los usuarios pueden personalizar su avatar, nombre de usuario y configuración de privacidad.","Calificación y Opinión del Usuario: Sistema de calificación visible para todos los visitantes, que recopila y muestra una media basada en los votos de los usuarios."],
    tecnologias: ["Google Books API: Permite acceder a una biblioteca extensa de libros, con detalles como descripción, imágenes y autores.","Commento: Gestiona el sistema de comentarios para fomentar la interacción de los usuarios.","CHATRA: Integración de un chat en vivo para mejorar la experiencia de usuario.","Base de Datos de Usuarios: Almacena credenciales, preferencias de usuario, y tokens de autenticación.","Base de Datos de Libros de Respaldo: Incluye información relevante de los libros para garantizar disponibilidad aún sin conexión a Google Books.","Base de Datos de Calificaciones: Recopila y promedia calificaciones de usuarios, proporcionando feedback valioso."]
  },
  {
    titulo: "HooBoo",
    imagenes: [portada, primera, segunda, tercera, cuarta, quinta],
    liveLink: "https://sample-service-name-nn8y.onrender.com/",
    codigoLink: "https://github.com/luiscastillaPro/HooBoo",
    skills: ["JavaScript", "HTML", "CSS"],
    proposito: "HooBoo es una plataforma interactiva diseñada para conectar a lectores y escritores a través de una experiencia social centrada en la literatura. Los usuarios pueden explorar una amplia variedad de libros, compartir reseñas, y conectarse con otros lectores, mientras disfrutan de un diseño visualmente atractivo y adaptable. HooBoo no solo fomenta la lectura, sino que también promueve el crecimiento de nuevos lectores y escritores, ofreciendo una experiencia literaria única.",
    funcionalidad: ["Exploración de Libros: Todos los usuarios pueden navegar y buscar libros en una biblioteca visualmente atractiva.","Interacción Social: Los usuarios registrados pueden añadir libros a favoritos, comentar, y compartir reseñas.","Personalización: Opción de cambiar entre modo claro y oscuro.","Gestión de Perfil: Los usuarios pueden personalizar su avatar, nombre de usuario y configuración de privacidad.","Calificación y Opinión del Usuario: Sistema de calificación visible para todos los visitantes, que recopila y muestra una media basada en los votos de los usuarios."],
    tecnologias: ["Google Books API: Permite acceder a una biblioteca extensa de libros, con detalles como descripción, imágenes y autores.","Commento: Gestiona el sistema de comentarios para fomentar la interacción de los usuarios.","CHATRA: Integración de un chat en vivo para mejorar la experiencia de usuario.","Base de Datos de Usuarios: Almacena credenciales, preferencias de usuario, y tokens de autenticación.","Base de Datos de Libros de Respaldo: Incluye información relevante de los libros para garantizar disponibilidad aún sin conexión a Google Books.","Base de Datos de Calificaciones: Recopila y promedia calificaciones de usuarios, proporcionando feedback valioso."]
  },
  {
    titulo: "HooBoo",
    imagenes: [portada, primera, segunda, tercera, cuarta, quinta],
    liveLink: "https://sample-service-name-nn8y.onrender.com/",
    codigoLink: "https://github.com/luiscastillaPro/HooBoo",
    skills: ["Python", "SQLAlchemy"],
    proposito: "HooBoo es una plataforma interactiva diseñada para conectar a lectores y escritores a través de una experiencia social centrada en la literatura. Los usuarios pueden explorar una amplia variedad de libros, compartir reseñas, y conectarse con otros lectores, mientras disfrutan de un diseño visualmente atractivo y adaptable. HooBoo no solo fomenta la lectura, sino que también promueve el crecimiento de nuevos lectores y escritores, ofreciendo una experiencia literaria única.",
    funcionalidad: ["Exploración de Libros: Todos los usuarios pueden navegar y buscar libros en una biblioteca visualmente atractiva.","Interacción Social: Los usuarios registrados pueden añadir libros a favoritos, comentar, y compartir reseñas.","Personalización: Opción de cambiar entre modo claro y oscuro.","Gestión de Perfil: Los usuarios pueden personalizar su avatar, nombre de usuario y configuración de privacidad.","Calificación y Opinión del Usuario: Sistema de calificación visible para todos los visitantes, que recopila y muestra una media basada en los votos de los usuarios."],
    tecnologias: ["Google Books API: Permite acceder a una biblioteca extensa de libros, con detalles como descripción, imágenes y autores.","Commento: Gestiona el sistema de comentarios para fomentar la interacción de los usuarios.","CHATRA: Integración de un chat en vivo para mejorar la experiencia de usuario.","Base de Datos de Usuarios: Almacena credenciales, preferencias de usuario, y tokens de autenticación.","Base de Datos de Libros de Respaldo: Incluye información relevante de los libros para garantizar disponibilidad aún sin conexión a Google Books.","Base de Datos de Calificaciones: Recopila y promedia calificaciones de usuarios, proporcionando feedback valioso."]
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
       <h1 className="proyectos-title fade-in">
        <FaClipboardList className="projects-icon" /> Proyectos
      </h1>
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
