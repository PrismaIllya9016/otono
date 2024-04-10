import { useEffect, useState } from "react";
import "./Habitaciones.css";
import { Box, Container, Typography } from "@mui/material";

function Habitaciones() {
  const [imagen, setImagen] = useState("public/_DSC7821 1.png");
  const [seleccionado, setSeleccionado] = useState("Estandar");
  const [label, setLabel] = useState("Estandar");
  const [texto, setTexto] = useState(
    "Incluye: Baño privado, telefonía, internet, TV con cable, aire acondicionado, sala recibidor"
  );

  //   PARALAX EFFECT
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const parallaxSpeed = 0.6;
      const parallaxOffset = scrolled * parallaxSpeed;
      document.querySelector(
        ".Habitaciones"
      ).style.backgroundPositionY = `${parallaxOffset}px`;
    };

    // Añade el evento de desplazamiento cuando el componente se monta
    window.addEventListener("scroll", handleScroll);

    // Limpia el evento de desplazamiento cuando el componente se desmonte
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const images = [
    {
      label: "Estandar",
      imgPath: "public/_DSC7821 1.png",
      textoImagen:
        "Incluye: Baño privado, telefonía, internet, TV con cable, aire acondicionado.",
    },
    {
      label: "Mini suite",
      imgPath: "public/Habitaciones/minisuite_habitacion.jpg",
      textoImagen:
        "Incluye: Baño privado, telefonía, internet, TV con cable, aire acondicionado, sala recibidor",
    },
    {
      label: "Duplex",
      imgPath: "public/Habitaciones/duplex_habitacion.jpg",
      textoImagen:
        "Incluye: Baño privado, telefonía, internet, TV con cable, aire acondicionado, sala recibidor (compartida)",
    },
  ];
  // Función para manejar el click en un elemento
  const manejarClick = (item) => {
    setSeleccionado(item);
    // Encuentra la imagen correspondiente al item seleccionado
    const imagen = images.find((img) => img.label === item);
    if (imagen) {
      setImagen(imagen.imgPath);
      setTexto(imagen.textoImagen);
      setLabel(imagen.label);
    }
  };

  const obtenerEstiloBorderRight = (item) => {
    return {
      cursor: "pointer",
      borderRight:
        seleccionado === item
          ? "5px solid rgba(99, 48, 27, 1)"
          : "5px solid rgba(99, 48, 27, 0.19)",
      paddingRight: "20px",
      height: "135px",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      transition: "border-right 0.5s ease",
    };
  };

  const obtenerEstiloBorderTop = (item) => {
    return {
      borderTop:
        seleccionado === item
          ? "10.5px solid rgba(99, 48, 27, 1)"
          : "10.5px solid rgba(99, 48, 27, 0.19)",
      width: "92px",
      display: "flex",
      alignItems: "center",
      borderRadius: "55px",

      transition: "border-right 0.5s ease",
    };
  };

  return (
    <div
      id="habitaciones"
      className="Habitaciones"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 className="TitulosCentrados">Habitaciones</h1>

        <h2 style={{ height: "auto" }} className="descCentrada" id="desHab">
          Cada espacio refleja nuestro compromiso con la comodidad, seguridad y
          bienestar, por ellos contamos con 3 tipos de habitaciones.
        </h2>

        <h3
          style={{
            fontSize: "36px",
            color: "#D45F35",
            fontFamily: "League Spartan",
            fontStyle: "normal",
            fontWeight: "500",
            margin: "0",
            marginBottom: "28px",
            marginTop: "30px",
          }}
          className="TitulosCentradosMovile"
        >
          {label}
        </h3>

        <Box
          className="cajaCompleta"
          sx={{
            display: "flex",
            width: "100%",
            height: "600px",

            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Container className="Menu" sx={{ width: "30%", marginLeft: "10%" }}>
            {" "}
            <ul
              style={{
                marginRight: "25%",
                color: "#DD927A",
                fontSize: "5rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                height: "500px",
                alignItems: "flex-end",
              }}
            >
              <li
                style={obtenerEstiloBorderRight("Estandar")}
                onClick={() => manejarClick("Estandar")}
              >
                Estandar
              </li>
              <li
                style={obtenerEstiloBorderRight("Mini suite")}
                onClick={() => manejarClick("Mini suite")}
              >
                <a> Mini suite</a>
              </li>
              <li
                style={obtenerEstiloBorderRight("Duplex")}
                onClick={() => manejarClick("Duplex")}
              >
                <a style={{ paddingRight: "16px" }}>Duplex</a>
              </li>
            </ul>
          </Container>

          <Container
            className="ImagenContainer"
            sx={{
              zIndex: "1002",
              position: "relative",
              marginRight: "15%",

              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column",
            }}
          >
            <img
              className="ImagenHabitacion"
              style={{
                maxWidth: "815px",
                height: "464px",
                marginTop: "20px",
                borderRadius: "25px",
              }}
              src={imagen}
              alt=""
            />
            <Typography
              className="Incluye"
              sx={{ marginTop: "20px", width: "900px" }}
              variant="h6"
            >
              {texto}
            </Typography>
          </Container>
          <ul
            className="MenuMovil"
            style={{
              color: "#DD927A",
              fontSize: "5rem",
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <li
              style={obtenerEstiloBorderTop("Estandar")}
              onClick={() => manejarClick("Estandar")}
            ></li>
            <li
              style={obtenerEstiloBorderTop("Mini suite")}
              onClick={() => manejarClick("Mini suite")}
            ></li>
            <li
              style={obtenerEstiloBorderTop("Duplex")}
              onClick={() => manejarClick("Duplex")}
            ></li>
          </ul>
        </Box>
      </Box>

      <Box
        sx={{ marginTop: "24px" }}
        className="custom-shape-divider-bottom-1710877318"
      >
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill2"
          ></path>
        </svg>
      </Box>
    </div>
  );
}

export default Habitaciones;
