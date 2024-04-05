import { Box, Grid, ThemeProvider, createTheme } from "@mui/material";
import "./Contacto.css";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import axios from "axios";

function Contacto() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const postData = {
      destino: "Casaotono",
      email: data.input2,
      message: data.input4,
      name: data.input1,
      phone: data.input3,
    };
    const url =
      "https://us-central1-tvn-api.cloudfunctions.net/app/send-email-casaotono";

    axios
      .post(url, postData)
      .then((response) => {
        console.log("Respuesta exitosa:", response);
      })
      .catch((error) => {
        console.error("Error en la petición:", error);
      });
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#582114",
      },
    },
    components: {
      // Estilo para todos los componentes TextField
      MuiTextField: {
        defaultProps: {
          // Puedes definir propiedades por defecto para todos los TextField aquí
        },
        styleOverrides: {
          root: {
            // Se aplican estilos a la raíz del TextField
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#582114", // Cambia el color de borde cuando está enfocado
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#D45F35", // Cambia esto al color deseado para el borde no enfocado
            },
          },
          notchedOutline: {
            borderWidth: "1px", // Ajusta el ancho del borde si es necesario
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            // Estilo para la etiqueta del TextField
            "&.Mui-focused": {
              color: "#582114", // Cambia el color de la etiqueta cuando está enfocado
            },
          },
        },
      },
    },
  });

  return (
    <div id="contacto" className="Contacto">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Box>
            <div style={{ marginBottom: "30px" }} className="nuestroObjetivo">
              Contacto
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",

                width: "100%",
              }}
            >
              {" "}
              <div
                id="obCont"
                className="descObjetivo"
                style={{
                  width: "auto",
                  display: "flex",
                  gap: "4%",
                  marginBottom: "30px",
                }}
              >
                En Casa Otoño, nos encantaría resolver todas tus preguntas. No
                dudes en ponerte en contacto con nosotros.
              </div>
              <div
                className="textoIcono"
                style={{
                  width: "100%",
                  display: "flex",
                  gap: "2.92%",
                  marginLeft: "80px",
                  marginBottom: "34px",
                }}
              >
                <img
                  className="iconoCon"
                  src="public\Contacto\Capa_1.png"
                  alt=""
                />
                <div>servicios.casaotono@hotmail.com</div>
              </div>
              <div
                className="textoIcono"
                style={{
                  width: "100%",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "80px",
                  marginBottom: "34px",
                  gap: "2.92%",
                }}
              >
                <img
                  className="iconoCon"
                  src="public\Contacto\Vector.png"
                  alt=""
                />
                <div>
                  {" "}
                  667-721-52-03 <br /> 667-721-52-28
                </div>
              </div>
              <div
                className="textoIcono"
                style={{
                  width: "auto",
                  display: "flex",
                  gap: "4%",
                  marginBottom: "34px",
                  marginLeft: "80px",
                }}
              >
                <img
                  className="iconoCon"
                  src="public\Contacto\Vector (2).png"
                  alt=""
                />
                <div>
                  Blvd. Pedro Infante 3002, Gasolinera del Valle, Las Flores,
                  80104 Culiacán Rosales, Sin.
                </div>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/8Ur6vmqnfXkhAJk97"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <button
                style={{ marginLeft: "80px", marginTop: "30px" }}
                className="formuButton"
              >
                {" "}
                Como llegar a casa Otoño
              </button>
            </a>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box style={{ padding: 20, textAlign: "center" }}>
            <ThemeProvider theme={theme}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box
                  sx={{ paddingTop: "30px", display: "flex" }}
                  display="flex"
                  flexDirection="column"
                  gap={2}
                  maxWidth={740}
                  maxheight={400}
                >
                  <TextField
                    label="Nombre"
                    {...register("input1", { required: true, maxLength: 30 })}
                    error={!!errors.input1}
                    helperText={
                      errors.input1?.type === "maxLength"
                        ? "Máximo 30 caracteres"
                        : "Introduzca su nombre completo"
                    }
                  />
                  <TextField
                    label="Correo electrónico"
                    {...register("input2", { required: true, maxLength: 45 })}
                    error={!!errors.input2}
                    helperText={
                      errors.input2?.type === "maxLength"
                        ? "Máximo 45 caracteres"
                        : "Ingrese su correo electronico"
                    }
                  />
                  <TextField
                    label="Teléfono"
                    {...register("input3", { required: true, maxLength: 10 })}
                    error={!!errors.input3}
                    helperText={
                      errors.input3?.type === "maxLength"
                        ? "Máximo 10 caracteres"
                        : "Ingrese su numero de contacto"
                    }
                  />
                  <TextField
                    sx={{ height: "fit-content" }}
                    label="Mensaje"
                    {...register("input4", { required: true, maxLength: 350 })}
                    error={!!errors.input4}
                    helperText={
                      errors.input4?.type === "maxLength"
                        ? "Máximo 350 caracteres"
                        : "Dejenos un mensaje con sus comentarios"
                    }
                  />
                  <button
                    style={{ marginTop: "14px" }}
                    className="formuButton"
                    type="submit"
                  >
                    Enviar
                  </button>
                </Box>
              </form>
            </ThemeProvider>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Contacto;
