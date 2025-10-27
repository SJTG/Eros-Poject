import React from "react";

export default function SobreMi() {
  return (
    <section className="sobreMi-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Imagen principal */}
          <div className="col-lg-6 col-md-12 text-center mb-4 mb-lg-0">
            <div className="sobreMi-imagenes position-relative d-inline-block">
              <img
                src="/src/assets/Placeholder.png"
                alt="Foto principal"
                className="img-fluid sobreMi-img-principal rounded"
              />
              <img
                src="/src/assets/Placeholder.png"
                alt="Foto secundaria"
                className="img-fluid sobreMi-img-secundaria rounded shadow"
              />
            </div>
          </div>

          {/* Texto */}
          <div className="col-lg-6 col-md-12">
            <p className="sobreMi-subtitulo mb-2">
              ¿Quién hay detrás de Eros Agency?
            </p>
            <h2 className="fw-bold mb-3">¡Hola! Soy Santino</h2>
            <h5 className="fw-semibold mb-3">
              Diseñador y comunicador visual especializado en estrategias digitales.
            </h5>
            <p className="mb-3">
              Junto a mi equipo de creativos, ayudo a profesionales de la salud mental
              a construir una identidad sólida, coherente y rentable.
            </p>
            <p className="mb-3">
              Apostamos por un <strong>marketing ético y slow</strong>. Eso significa
              crear estrategias con empatía, respeto y transparencia. Evitamos la venta
              agresiva: preferimos la conexión genuina entre psicólogo y paciente.
            </p>
            <p className="mb-3">
              Sabemos que una comunicación clara y auténtica es la base de una
              relación de confianza. Por eso, ayudamos a psicólogos a mostrarse tal
              como son, tanto en sus redes como en su sitio web.
            </p>

            <button className="btn btn-sobreMi mt-3">
              Quiero saber un poco más sobre vos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
