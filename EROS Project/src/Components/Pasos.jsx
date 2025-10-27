import React, { useState } from "react";

export default function pasos() {
  const pasos = [
    {
      titulo: "1. Auditoría, investigación y estrategia",
      descripcion: (
        <>
          <p>
            El primer paso es analizar la forma en que realizás tu práctica de
            terapia, tus competidores locales y las formas en que los pacientes
            potenciales encuentran servicios como los que vos ofrecés. Esto
            incluye:
          </p>
          <ul>
            <li>
              Estudiar tu marca personal y elaborar un análisis DAFO indicando
              debilidades, amenazas, fortalezas y oportunidades de tu negocio
              actual.
            </li>
            <li>
              Auditoría de tus redes sociales con un informe de posibles
              mejoras.
            </li>
            <li>
              Conocer los servicios que ofrecés, sus condiciones y otra
              información clave para crear una estrategia de marketing digital
              sólida.
            </li>
            <li>
              Analizar tu sitio web (si ya lo tenés) y señalar los aspectos que
              se podrían mejorar para tener una mayor conversión.
            </li>
            <li>
              Observar cómo tus principales competidores obtienen pacientes por
              Internet.
            </li>
            <li>
              Descubrir cómo los pacientes te encuentran actualmente en motores
              de búsqueda o redes sociales.
            </li>
            <li>
              Investigar oportunidades o palabras clave que tus potenciales
              clientes están buscando en Google.
            </li>
            <li>
              Desarrollar una estrategia de marketing para terapeutas que actúe
              como hoja de ruta o guía para los próximos 12 meses.
            </li>
          </ul>
          <p>
            <strong>Por qué es importante:</strong> una auditoría es un proceso
            esencial en tu estrategia para evaluar la posición actual de tu
            empresa, el lugar de tus competidores, lo que les importa a tus
            pacientes potenciales y cómo convertir todo eso en una estrategia de
            marketing tangible para hacer crecer tu consulta.
          </p>
        </>
      ),
    },
    {
      titulo: "2. Construyendo tu sitio web estratégico",
      descripcion: (
        <>
          <p>
            En este paso creamos o mejoramos tu sitio web para que no solo sea
            visualmente atractivo, sino también funcional, rápido y orientado a
            convertir visitantes en pacientes. Incluye:
          </p>
          <ul>
            <li>Diseño web profesional centrado en tu marca personal.</li>
            <li>Optimización SEO para atraer tráfico orgánico.</li>
            <li>Redacción estratégica de textos orientados a pacientes.</li>
            <li>Integración con herramientas de contacto y reserva de turnos.</li>
            <li>
              Configuración de métricas para monitorear resultados reales.
            </li>
          </ul>
          <p>
            <strong>Por qué es importante:</strong> tu sitio web es tu primera
            impresión digital. Un sitio estratégico genera confianza y guía al
            usuario hacia la acción que buscás.
          </p>
        </>
      ),
    },
    {
      titulo: "3. Consiguiendo pacientes",
      descripcion: (
        <>
          <p>
            Con la estrategia definida y tu sitio web optimizado, pasamos a la
            etapa de difusión y crecimiento. Esto incluye:
          </p>
          <ul>
            <li>Campañas publicitarias segmentadas en Google y redes sociales.</li>
            <li>Creación de contenido que fortalece tu autoridad profesional.</li>
            <li>Gestión de redes y mensajes coherentes con tu propósito.</li>
            <li>
              Análisis de rendimiento y optimización constante para aumentar
              consultas.
            </li>
          </ul>
          <p>
            <strong>Por qué es importante:</strong> el crecimiento sostenido
            llega cuando hay coherencia entre tu mensaje, tu presencia digital y
            las estrategias que implementás.
          </p>
        </>
      ),
    },
  ];

  const [activo, setActivo] = useState(0);

  return (
    <section className="pasos-section text-center">
      <div className="container">
        <p className="fw-semibold mb-2">
          Dedícate al trabajo con tus pacientes. Nosotros nos encargamos de que lleguen a ti.
        </p>
        <h2 className="fw-bold mb-4">
          Delega tu marketing en un equipo que conoce bien tu profesión
        </h2>

        <div className="pasos-tabs">
          {pasos.map((paso, index) => (
            <button
              key={index}
              className={`pasos-tab ${index === activo ? "active" : ""}`}
              onClick={() => setActivo(index)}
            >
              {paso.titulo}
            </button>
          ))}
        </div>

        <div className="pasos-contenido mt-4">
          {pasos[activo].descripcion}
        </div>
      </div>
    </section>
  );
}
