import { useEffect, useState } from "react";
import "./Header.css";

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calculateOpacity = (position) => {
    const maxScrollForEffect = 300;
    if (position > maxScrollForEffect) return 0;
    return 1 - position / maxScrollForEffect;
  };

  return (
    <div id="Header">
      <div className="header">
        <h1
          style={{ opacity: calculateOpacity(scrollPosition) }}
          className="texto1"
        >
          ¡Bienvenidos a nuestra acogedora y dedicada residencia para adultos
          mayores!
        </h1>

        <h3
          style={{ opacity: calculateOpacity(scrollPosition) }}
          className="texto2"
        >
          Ofrecemos un servicio integral y profesional, creando un modelo de
          atención que fomenta la convivencia en un ambiente familiar, ameno y
          seguro.
        </h3>
      </div>
    </div>
  );
}

export default Header;
