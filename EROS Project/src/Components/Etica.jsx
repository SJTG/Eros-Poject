import React from "react";

import respetoIcon from "/src/assets/Iconos/mano-sosteniendo-corazon.png";
import honestidadIcon from "/src/assets/Iconos/pensamiento-del-lado-de-la-cabeza.png";
import transparenciaIcon from "/src/assets/Iconos/compartir-la-mente.png";

export default function Etica() {
  const valores = [
    {
      id: 1,
      icon: respetoIcon,
      title: "Respeto",
      text: "Tratamos la comunicación en salud mental con sensibilidad y empatía. No hacemos promesas vacías ni jugamos con el sufrimiento de nadie.",
    },
    {
      id: 2,
      icon: honestidadIcon,
      title: "Honestidad",
      text: "Mostramos quién sos realmente. Sin exagerar resultados ni usar estrategias engañosas. Tu autenticidad es tu mejor herramienta.",
    },
    {
      id: 3,
      icon: transparenciaIcon,
      title: "Transparencia",
      text: "Cada paso de nuestra estrategia es claro y medible. No hay trucos ocultos: sabés siempre qué estamos haciendo y por qué.",
    },
  ];

  return (
    <section className="etica-section py-5">
      <div className="container text-center">
        <p className="text-info fw-semibold mb-2">Lo que nos guía</p>
        <h2 className="fw-bold mb-4">
          Nuestra <span className="text-highlight">ética profesional</span>
        </h2>
        <p className="text-secondary mb-5">
          Creemos que la verdadera conexión con los pacientes nace de la honestidad, 
          el respeto y la transparencia. Así construimos estrategias que reflejan 
          tus valores y no manipulan al público.
        </p>

        <div className="row g-4 justify-content-center">
          {valores.map((valor) => (
            <div key={valor.id} className="col-md-4 col-sm-6">
              <div className="etica-card">
                <img src={valor.icon} alt={valor.title} className="etica-icon mb-3" />
                <h5 className="fw-bold">{valor.title}</h5>
                <div className="etica-overlay">
                  <p>{valor.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
