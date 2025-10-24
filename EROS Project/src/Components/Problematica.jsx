import React from "react";
import iconPaciente from "../assets/Iconos/agregar-usuario.png";
import iconBuscar from "../assets/Iconos/megafono.png";
import iconDiferenciar from "../assets/Iconos/corona.png";


export default function Problematica() {
  const cards = [
    {
      id: 1,
      icon: iconPaciente,
      title: "Conseguir nuevos pacientes",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
    },
    {
      id: 2,
      icon: iconBuscar,
      title: "Que te encuentren",
      text: "La mayoria de gente no sabe donde buscar psicologos y buscan con el boca a boca",
    },
    {
      id: 3,
      icon: iconDiferenciar,
      title: "Diferenciarse del resto",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
    },
  ];

return (
    <section className="problematica py-5">
      <div className="container text-center">
        <p className="text-secondary fw-bold mb-2">Y aca va la siguiente parte</p>
        <h2 className="fw-bold mb-5">Las problematicas que enfrentas vos!</h2>

        <div className="row g-4 justify-content-center">
          {cards.map((card) => (
            <div key={card.id} className="col-md-4 col-sm-6">
              <div className="card-box">
                <div className="card-front">
                  <img src={card.icon} alt={card.title} className="icono-img mb-3" />
                  <h5 className="fw-bold">{card.title}</h5>
                </div>
                <div className="card-back">
                  <p>{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
