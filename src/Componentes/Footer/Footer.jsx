import "./Footer.css";

function Footer() {
  const phoneNumber = "526675021361";

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <div className="footer-container">
      <a href="#" style={{ textDecoration: "none" }}>
        <img
          src="public/logotipo_casaotono.svg"
          alt="Logo"
          className="footerLogo"
        />
      </a>
      <ul className="footerList1">
        <li>
          <a
            href="#objetivo"
            style={{ textDecoration: "none", color: "#582114" }}
          >
            Nosotros
          </a>
        </li>
        <li>
          <a
            href="#estancias"
            style={{ textDecoration: "none", color: "#582114" }}
          >
            Estancia
          </a>
        </li>
        <li className="habitaciones">
          <a
            href="#habitaciones"
            style={{ textDecoration: "none", color: "#582114" }}
          >
            Habitaciones
          </a>
        </li>
      </ul>
      <ul className="footerList2">
        <li>
          <a
            href="#instalaciones"
            style={{ textDecoration: "none", color: "#582114" }}
          >
            Instalaciones
          </a>
        </li>
        <li>
          <a
            href="#actividades"
            style={{ textDecoration: "none", color: "#582114" }}
          >
            Actividades
          </a>
        </li>
        <li>
          <a
            href="#contacto"
            style={{ textDecoration: "none", color: "#582114" }}
          >
            Contacto
          </a>
        </li>
      </ul>
      <div className="redes" style={{ marginRight: "3%" }}>
        <div>
          {" "}
          <a
            href="https://www.facebook.com/profile.php?id=100053023187509"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <img
              src="public/facebook_icon.svg"
              alt="Logo"
              className="facebook"
            />
          </a>
          <a
            href="https://maps.app.goo.gl/8Ur6vmqnfXkhAJk97"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <img src="public/googlemaps_icon.svg" alt="Logo" className="maps" />
          </a>
          <a href="" target="_blank" style={{ textDecoration: "none" }}>
            <img
              onClick={openWhatsApp}
              src="public/whats_icon.svg"
              alt="Logo"
              className="whatsapp"
            />
          </a>
          <a href="#Header" style={{ textDecoration: "none" }}>
            <button
              style={{
                fontFamily: "League Spartan",
                fontWeight: 400,
                fontSize: "22px",
              }}
              className="footerbotones"
            >
              Renta de Restaurante
            </button>
          </a>
        </div>
      </div>
      <div className="hola">
        <p>Aviso de privacidad - © 2024 CASA OTOÑO</p>
      </div>
    </div>
  );
}

export default Footer;
