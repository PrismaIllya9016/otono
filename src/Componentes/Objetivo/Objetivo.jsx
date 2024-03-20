import { Grid } from "@mui/material";
import "./Objetivo.css";

function Objetivo() {
  const imageStyles = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const descStyles = {
    marginRight: "20px",
    width: "37px",
    height: "37px",
    paddingTop: "10px",
  };

  return (
    <Grid className="Objetivo" id="objetivo" container spacing={2}>
      <Grid item xs={7}>
        <h1 className="nuestroObjetivo">Nuestro objetivo</h1>
        <h2 className="descObjetivo">
          Es fomentar la autosuficiencia, la socialización y el desarrollo de
          las habilidades y capacidades de cada residente. Nuestro equipo
          especializado está comprometido con el bienestar individual de cada
          uno de nuestros apreciados residentes. Guiados por nuestra filosofía
          basada en valores fundamentales como:
        </h2>
        <ul className="lista">
          <li>
            {" "}
            <img
              style={descStyles}
              src="public/PNG Objetivo/poder.png"
              alt=""
            />{" "}
            Respeto
          </li>
          <li>
            {" "}
            <img
              style={descStyles}
              src="public/PNG Objetivo/manita.png"
              alt=""
            />{" "}
            Honestidad
          </li>
          <li>
            {" "}
            <img
              style={descStyles}
              src="public/PNG Objetivo/corazon.png"
              alt=""
            />{" "}
            Amor
          </li>
          <li>
            {" "}
            <img
              style={descStyles}
              src="public/PNG Objetivo/corazonMano.png"
              alt=""
            />{" "}
            Amabilidad
          </li>
          <li>
            {" "}
            <img
              style={descStyles}
              src="public/PNG Objetivo/manos.png"
              alt=""
            />{" "}
            Responsabilidad
          </li>
          <li>
            {" "}
            <img
              style={descStyles}
              src="public/PNG Objetivo/gente.png"
              alt=""
            />{" "}
            Cuidado integral
          </li>
          <li>
            {" "}
            <img
              style={descStyles}
              src="public/PNG Objetivo/escudo.png"
              alt=""
            />{" "}
            Seguridad
          </li>
          <li className="customLi">
            {" "}
            <img
              style={descStyles}
              src="public/PNG Objetivo/cama.png"
              alt=""
            />{" "}
            Tranquilidad y confort
          </li>
        </ul>
      </Grid>
      <Grid item xs={5}>
        {" "}
        <img src="public/fotoPelota.png" alt="" style={imageStyles} />
      </Grid>
    </Grid>
  );
}

export default Objetivo;
