// Proyectos.js
import React from "react";
import ProyectoCard from '../component/proyectoCard.jsx';
import "../../styles/proyectos.css";

const Proyectos = () => {
  return (
    <div className="proyectos-contain">
      <h1 className="proyectos-title">Proyectos</h1>
      <div className="proyectos-container">
        <ProyectoCard />
      </div>
    </div>
  );
};

export default Proyectos;
