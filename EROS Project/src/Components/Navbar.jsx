import React from "react";

export default function NavbarEros() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-body-tertiary ">
      <div className="container-fluid px-5 d-flex align-items-center justify-content-between">
        {/* Marca izquierda */}
        <a className="navbar-brand" href="#">
          <span className="fw-bold">EROS</span> Agency
        </a>

        {/* Botón hamburguesa */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Centro del navbar */}
        <div
          className="collapse navbar-collapse justify-content-center fw-semibold"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 text-center">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Inicio
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Servicios
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Desarrollo web</a></li>
                <li><a className="dropdown-item" href="#">Publicidad en Google</a></li>
                <li><a className="dropdown-item" href="#">Redacción de publicidad</a></li>
                <li><a className="dropdown-item" href="#">Diseño grafico</a></li>
                <li><a className="dropdown-item" href="#">Gestion de redes sociales</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Equipo
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Logo a la derecha */}
        <div className="d-none d-lg-block">
          <a className="navbar-brand" href="#">
            <img
              src="src/assets/EROS-Sin-Fondo.png"
              alt="Logo"
              width="80"
              height="80"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}
