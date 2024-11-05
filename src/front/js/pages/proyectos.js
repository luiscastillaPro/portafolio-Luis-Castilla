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
    skills: ["React", "Node.js", "CSS", "JavaScript", "Bootstrap", "API REST", "HTML", "Flask", "Python", "SQLAlchemy"],
    proposito: "GUAU GUAU is a web application designed to facilitate dog dating. Created as a final project for 4Geeks Academy Spain, it allows dog owners to find matches for their pets, ensuring they can interact and form connections. The application not only offers a fun way to connect but also incorporates advanced features like real-time chat, secure authentication, and AI-driven insights to enhance user experience.",
    funcionalidad: ["User Registration: Allows owners to register and add profiles for one or more dogs.","Dog Matching: Users can interact through 'likes' and 'matches' and chat in real-time if a match is made.","Search & Filter: Users can filter dogs by breed, sex, age, and location using external APIs and geocoding.","Secure Authentication: Implements JWT for secure user authentication.","Profile & Photo Management: Users can add and store profile photos and additional photos via Cloudinary.","AI Integration: Provides care information and breed compatibility using OpenAI."],
    tecnologias: ["Front-End Development: React, Bootstrap, CSS","Back-End Development: Python, Flask, SQLAlchemy","Real-Time Communication: Socket.io for real-time chat functionality","API Integration: External API calls for breed information and geocoding","Authentication: Secure authentication using JWT","Cloud Services: Cloudinary for photo storage","AI Services: OpenAI for providing care information and breed compatibility"]
  },
  {
    titulo: "HooBoo",
    imagenes: [portada, primera, segunda, tercera, cuarta, quinta],
    liveLink: "https://sample-service-name-nn8y.onrender.com/",
    codigoLink: "https://github.com/luiscastillaPro/HooBoo",
    skills: ["React", "Bootstrap", "API REST"],
    proposito: "GUAU GUAU is a web application designed to facilitate dog dating. Created as a final project for 4Geeks Academy Spain, it allows dog owners to find matches for their pets, ensuring they can interact and form connections. The application not only offers a fun way to connect but also incorporates advanced features like real-time chat, secure authentication, and AI-driven insights to enhance user experience.",
    funcionalidad: ["User Registration: Allows owners to register and add profiles for one or more dogs.","Dog Matching: Users can interact through 'likes' and 'matches' and chat in real-time if a match is made.","Search & Filter: Users can filter dogs by breed, sex, age, and location using external APIs and geocoding.","Secure Authentication: Implements JWT for secure user authentication.","Profile & Photo Management: Users can add and store profile photos and additional photos via Cloudinary.","AI Integration: Provides care information and breed compatibility using OpenAI."],
    tecnologias: ["Front-End Development: React, Bootstrap, CSS","Back-End Development: Python, Flask, SQLAlchemy","Real-Time Communication: Socket.io for real-time chat functionality","API Integration: External API calls for breed information and geocoding","Authentication: Secure authentication using JWT","Cloud Services: Cloudinary for photo storage","AI Services: OpenAI for providing care information and breed compatibility"]
  },
  {
    titulo: "HooBoo",
    imagenes: [portada, primera, segunda, tercera, cuarta, quinta],
    liveLink: "https://sample-service-name-nn8y.onrender.com/",
    codigoLink: "https://github.com/luiscastillaPro/HooBoo",
    skills: ["JavaScript", "HTML", "CSS"],
    proposito: "GUAU GUAU is a web application designed to facilitate dog dating. Created as a final project for 4Geeks Academy Spain, it allows dog owners to find matches for their pets, ensuring they can interact and form connections. The application not only offers a fun way to connect but also incorporates advanced features like real-time chat, secure authentication, and AI-driven insights to enhance user experience.",
    funcionalidad: ["User Registration: Allows owners to register and add profiles for one or more dogs.","Dog Matching: Users can interact through 'likes' and 'matches' and chat in real-time if a match is made.","Search & Filter: Users can filter dogs by breed, sex, age, and location using external APIs and geocoding.","Secure Authentication: Implements JWT for secure user authentication.","Profile & Photo Management: Users can add and store profile photos and additional photos via Cloudinary.","AI Integration: Provides care information and breed compatibility using OpenAI."],
    tecnologias: ["Front-End Development: React, Bootstrap, CSS","Back-End Development: Python, Flask, SQLAlchemy","Real-Time Communication: Socket.io for real-time chat functionality","API Integration: External API calls for breed information and geocoding","Authentication: Secure authentication using JWT","Cloud Services: Cloudinary for photo storage","AI Services: OpenAI for providing care information and breed compatibility"]
  },
  {
    titulo: "HooBoo",
    imagenes: [portada, primera, segunda, tercera, cuarta, quinta],
    liveLink: "https://sample-service-name-nn8y.onrender.com/",
    codigoLink: "https://github.com/luiscastillaPro/HooBoo",
    skills: ["Flask", "Python", "SQLAlchemy"],
    proposito: "GUAU GUAU is a web application designed to facilitate dog dating. Created as a final project for 4Geeks Academy Spain, it allows dog owners to find matches for their pets, ensuring they can interact and form connections. The application not only offers a fun way to connect but also incorporates advanced features like real-time chat, secure authentication, and AI-driven insights to enhance user experience.",
    funcionalidad: ["User Registration: Allows owners to register and add profiles for one or more dogs.","Dog Matching: Users can interact through 'likes' and 'matches' and chat in real-time if a match is made.","Search & Filter: Users can filter dogs by breed, sex, age, and location using external APIs and geocoding.","Secure Authentication: Implements JWT for secure user authentication.","Profile & Photo Management: Users can add and store profile photos and additional photos via Cloudinary.","AI Integration: Provides care information and breed compatibility using OpenAI."],
    tecnologias: ["Front-End Development: React, Bootstrap, CSS","Back-End Development: Python, Flask, SQLAlchemy","Real-Time Communication: Socket.io for real-time chat functionality","API Integration: External API calls for breed information and geocoding","Authentication: Secure authentication using JWT","Cloud Services: Cloudinary for photo storage","AI Services: OpenAI for providing care information and breed compatibility"]
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
