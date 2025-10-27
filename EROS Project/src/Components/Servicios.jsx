import React from "react";

export default function Servicios() {
  const servicios = [
    {
      titulo: "Desarrollo web",
      descripcion:
        "Creamos sitios web estratégicos para psicólogos, optimizados para atraer pacientes y reflejar tu marca personal.",
      features: [
        "Diseño adaptable y moderno",
        "Optimización SEO básica",
        "Integración con WhatsApp y formularios",
      ],
      boton: "Ver desarrollo web",
      icono: "/src/assets/Iconos/agregar-usuario.png",
    },
    {
      titulo: "Publicidad en Google",
      descripcion:
        "Campañas diseñadas para posicionarte en los primeros resultados de búsqueda y generar consultas constantes.",
      features: [
        "Segmentación precisa por ubicación",
        "Optimización de presupuesto",
        "Análisis de conversiones en tiempo real",
      ],
      boton: "Ver publicidad en Google",
      icono: "/src/assets/Iconos/megafono.png",
    },
    {
      titulo: "Redacción publicitaria",
      descripcion:
        "Creamos textos que conectan emocionalmente con tu público, reflejando empatía, profesionalismo y cercanía.",
      features: [
        "Copywriting para redes y web",
        "Corrección de tono y estilo",
        "Textos orientados a conversión",
      ],
      boton: "Ver redacción publicitaria",
      icono: "/src/assets/Iconos/comentar-citar.png",
    },
    {
      titulo: "Diseño gráfico",
      descripcion:
        "Diseños profesionales para redes, flyers, identidad visual y materiales promocionales coherentes con tu marca.",
      features: [
        "Diseño de identidad visual",
        "Material gráfico para redes sociales",
        "Coherencia visual con tu marca",
      ],
      boton: "Ver diseño gráfico",
      icono: "/src/assets/Iconos/diamante.png",
    },
    {
      titulo: "Gestión de redes sociales",
      descripcion:
        "Creamos estrategias y contenidos para potenciar tu presencia online y conectar con nuevos pacientes.",
      features: [
        "Plan de contenidos mensual",
        "Diseños y textos adaptados",
        "Monitoreo y seguimiento de resultados",
      ],
      boton: "Ver gestión de redes",
      icono: "/src/assets/Iconos/chat-flecha-crecer.png",
    },
  ];

  return (
    <section className="servicios-container py-5 text-center">
      <div className="container">
        <p className="servicios-subtitulo">
          Tenemos más herramientas para psicólogos
        </p>
        <h2 className="fw-bold mb-5">También podemos ayudarte con otros servicios</h2>

        <div className="row g-4 justify-content-center">
          {servicios.map((servicio, index) => (
            <div className="col-md-4" key={index}>
              <div className="servicio-card h-100 shadow-sm">
                <img
                  src={servicio.icono}
                  alt={servicio.titulo}
                  className="servicio-icono mb-3"
                />
                <h4 className="fw-bold mb-2 text-white">{servicio.titulo}</h4>
                <p className="text-light mb-3">{servicio.descripcion}</p>
                <ul className="text-start list-unstyled text-light">
                  {servicio.features.map((item, i) => (
                    <li key={i} className="mb-1">✅ {item}</li>
                  ))}
                </ul>
                <button className="btn btn-servicio mt-3">
                  {servicio.boton}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
