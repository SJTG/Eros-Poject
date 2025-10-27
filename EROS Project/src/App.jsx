import React from "react";
import NavbarEros from "./Components/Navbar.jsx";
import Presentacion from "./Components/Presentacion.jsx";
import Problematica from "./Components/Problematica.jsx";
import Etica from "./Components/Etica.jsx";
import Break from "./Components/Break.jsx";
import Pasos from "./Components/Pasos.jsx"; 
import Servicios from "./Components/Servicios.jsx";
import SobreMi from "./Components/SobreMi.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <>
      <div style={{ backgroundColor: "#007c89", color: "white" }}>
        <NavbarEros />
      </div>
      <Presentacion />
      ,<Problematica />
      ,<Break />
      ,<Etica />
      ,<Pasos />
      ,<Servicios />
      , <SobreMi />
      ,<Footer />
    </>
  );
}

export default App;
