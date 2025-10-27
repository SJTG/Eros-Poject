import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Footer() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_cdoi6wf',      // reemplaza con tu service ID de EmailJS
        'template_4133z9w',     // reemplaza con tu template ID
        form.current,
        '6-zTkT3Xtlk1N8mb6'       // reemplaza con tu public key de EmailJS
      )
      .then(
        (result) => {
          alert("¡Mensaje enviado con éxito!");
          e.target.reset();
        },
        (error) => {
          alert("Hubo un error al enviar el mensaje. Intenta nuevamente.");
        }
      );
  };

  return (
    <footer className="footer-section py-5">
      <div className="container text-white">
        <div className="row gy-4">
          {/* Columna 1 */}
          <div className="col-md-4">
            <h4 className="fw-bold mb-3">Eros Agency</h4>
            <p className="footer-desc">
              Conectamos mentes, construimos confianza. Ayudamos a psicólogos a
              potenciar su práctica profesional con herramientas digitales.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="social-icon">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Columna 2 */}
          <div className="col-md-3">
            <h5 className="fw-semibold mb-3">Servicios</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="#">Desarrollo web</a></li>
              <li><a href="#">Publicidad en Google</a></li>
              <li><a href="#">Redacción de contenido</a></li>
              <li><a href="#">Diseño gráfico</a></li>
              <li><a href="#">Gestión de redes</a></li>
            </ul>
          </div>

          {/* Columna 3 */}
          <div className="col-md-5">
            <h5 className="fw-semibold mb-3">Contáctanos</h5>
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-3">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Tu nombre"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Tu email"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  placeholder="Escribe tu mensaje..."
                  rows="3"
                  className="form-control"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-footer w-100">
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>

        <hr className="my-4 border-light" />
        <div className="text-center small">
          © {new Date().getFullYear()} Eros Agency — Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
}
