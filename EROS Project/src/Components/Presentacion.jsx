import React from "react";

export default function Presentacion() {
  return (
    <section className="presentacion d-flex align-items-center justify-content-center py-5">
      <div className="container text-box p-5 rounded shadow">
        <div className="row align-items-center">
          {/* Texto principal */}
          <div className="col-12">
            <p className="text-light fw-semibold">
              Tenemos que buscar ya una forma de que los subrayados queden{" "}
              <span className="text-decoration-underline">un poco mas</span> y el{" "}
              <span className="text-decoration-underline">lindos </span>
            </p>

            <h1 className="fw-bold display-5 mb-3 text-white">
              busca una nueva paleta de colores por favor<br />
              <span className="text-highlight">tambien con los highlights es terrible esto</span>
            </h1>

            <p className="text-light fs-5 mb-4">
              Muchas palabras aca para rellenar espacio y que se vea bonito el diseño de la pagina web
              de presentacion. Muchas palabras aca para rellenar espacio y que se vea bonito el
              diseño de la pagina web de presentacion.
            </p>

            <a href="#" className="btn btn-light rounded-pill px-4 py-2 fw-semibold">
              Call to action tal vez un Contactenos sirva
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
