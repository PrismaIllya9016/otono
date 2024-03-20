import { useState } from "react";
import "./Habitaciones.css";
import { Box, Container, Typography } from "@mui/material";

function Habitaciones() {
  const [imagen, setImagen] = useState("public/_DSC7821 1.png");
  const [seleccionado, setSeleccionado] = useState("Estandar");
  const [texto, setTexto] = useState(
    "Incluye: Baño privado,Telefonía, Internet"
  );

  const images = [
    {
      label: "Estandar",
      imgPath: "public/_DSC7821 1.png",
      textoImagen: "Incluye: Baño privado,Telefonía, Internet",
    },
    {
      label: "Mini suite",
      imgPath: "public/1d6078d8-29e6-4bdc-8d3a-9c8b5566de69.png",
      textoImagen: "Incluye: Baño privado,Telefonía, Internet, TV con cable",
    },
    {
      label: "Duplex",
      imgPath: "public/20240306_150123.jpg",
      textoImagen:
        "Incluye: Baño privado,Telefonía, Internet, TV con cable, Aire acondicionado, Ser hijo de dios",
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
    }
  };

  const obtenerEstiloBorderRight = (item) => {
    return {
      borderRight:
        seleccionado === item
          ? "4px solid rgba(99, 48, 27, 1)"
          : "4px solid rgba(99, 48, 27, 0.19)",
      paddingRight: "20px",
      height: "135px",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
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
          position: "absolute",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "league Spartan",
            color: "#582114",
            display: "flex",
          }}
        >
          Habitaciones
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontFamily: "league Spartan",
            width: "60%",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            marginTop: "5%",
          }}
        >
          Cada espacio refleja nuestro compromiso con la comodidad, seguridad y
          bienestar, por ellos contamos con 3 tipos de habitaciones.
        </Typography>

        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "600px",

            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Container>
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
            sx={{
              position: "relative",
              marginRight: "15%",
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column",
            }}
          >
            <img
              style={{
                width: "815px",
                height: "464px",
                marginTop: "20px",
              }}
              src={imagen}
              alt=""
            />
            <Typography sx={{ marginTop: "20px", width: "900px" }} variant="h6">
              {texto}
            </Typography>
          </Container>
        </Box>
      </Box>

      <div className="custom-shape-divider-bottom-1710877318">
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
      </div>
    </div>
  );
}

export default Habitaciones;
