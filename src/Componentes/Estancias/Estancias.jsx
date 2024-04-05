import "./Estancias.css";

function Estancias() {
  // Función para manejar el hover en la imagen
  const handleHover = (event) => {
    const imageElement = event.target.closest(".imagen-estancia");
    if (imageElement) {
      imageElement.classList.toggle("hover-text-visible");
    }
  };

  return (
    <div id="estancias" className="Estancias">
      <h1 className="tituloEstancias">Estancias</h1>
      <p className="subtituloEstancias">
        Contamos con tres modalidades de estancias, cada una diseñada para
        adaptarse a tus necesidades y proporcionar el máximo bienestar a
        nuestros residentes.
      </p>
      <div className="estanciasFotos">
        <div className="imagenes-row">
          <div
            className="imagen-estancia"
            id="imagen-estancia1"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          >
            <img src="public/estancia1 1.png" alt="Logo" />
            <div className="original-text">Temporal</div>
            <div className="hola123">
              Tu decides los dias de estancia, sin dejar de disfrutar los
              servicios.
            </div>
            <div className="texto-imagen-contenedor">
              Servicios que incluye:
              <ul style={{ padding: 0 }}>
                <li>- Habitaciones con baño privado y televisión con cable.</li>
                <li>- Servicio de lavandería</li>
                <li>- Servicio de limpieza</li>
                <li>
                  - Cámaras de vigilancia las 24 horas, con acceso de los
                  familiares a través de una app
                </li>
                <li>- Enfermería 24 horas</li>
                <li>- Alimentación</li>
                <li>- Valoración médica</li>
                <li>- Terapias físicas, cognitiva y ocupacional</li>
              </ul>
            </div>
          </div>
          <div
            className="imagen-estancia"
            id="imagen-estancia1"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          >
            <img src="public/estancia2 1.png" alt="Logo" />
            <div className="original-text">Casa de Dia</div>
            <div className="hola123">
              Estancia de 4 a 12 horas con horario abierto de entrada y salida.
            </div>
            <div className="texto-imagen-contenedor">
              Servicios que incluye:
              <ul style={{ padding: 0 }}>
                <li>- Servicio de vigilancia de enfermeria las 24 hrs</li>
                <li>
                  - Cámaras de vigilancia las 24 horas, con acceso de los
                  familiares a través de una app
                </li>
                <li>- Alimentación</li>
                <li>- Terapias físicas (grupales o personalizadas)</li>
              </ul>
            </div>
          </div>
          <div
            className="imagen-estancia"
            id="imagen-estancia1"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          >
            <img src="public/estancia3 1.png" alt="Logo" />
            <div className="original-text">Permanente</div>
            <div className="hola123">
              Descubre la calidad de vida plena para adultos mayores con cuidado
              integral.
            </div>
            <div className="texto-imagen-contenedor">
              Servicios que incluye:
              <ul style={{ padding: 0 }}>
                <li>- Habitaciones con baño privado y televisión con cable.</li>
                <li>- Servicio de lavandería</li>
                <li>- Servicio de limpieza</li>
                <li>
                  - Cámaras de vigilancia las 24 horas, con acceso de los
                  familiares a través de una app
                </li>
                <li>- Enfermería 24 horas</li>
                <li>- Alimentación</li>
                <li>- Valoración médica</li>
                <li>- Sabado de Buffet desayuno familiar</li>
                <li>- Terapias físicas (grupales o personalizadas)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1710877318">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Estancias;
