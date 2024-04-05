import { useEffect, useRef, useState } from "react";
import { data } from "../../assets/data";
import "./CarruselActividades.css";

function CarruselActividades() {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextos, setCurrentTextos] = useState({});
  const [showMore, setShowMore] = useState(false); // Estado para mostrar el texto adicional
  const [activeButton, setActiveButton] = useState(0); // Estado para mantener el botón activo

  useEffect(() => {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("li > img")[currentIndex];

    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: "smooth",
      });
    }

    // Actualizar los textos correspondientes a la imagen actual
    setCurrentTextos(data[currentIndex].textos);
  }, [currentIndex]);

  const handleButtonClick = (idx) => {
    setActiveButton(idx); // Establecer el botón activo
    setCurrentIndex(idx); // Ir al slide correspondiente al botón
    setShowMore(false); // Reiniciar el estado para ocultar el texto adicional
  };

  const handleShowMore = () => {
    setShowMore(!showMore); // Alternar el estado para mostrar u ocultar el texto adicional
    const textosCard = document.querySelector(".textos-card");
    if (!showMore) {
      // Si se muestra más, agrega la clase de opacidad alterna
      textosCard.classList.add("opacidad-alternativa");
    } else {
      // Si se muestra menos, quita la clase de opacidad alterna
      textosCard.classList.remove("opacidad-alternativa");
    }
  };

  return (
    <div className="main-container">
      <h1 className="tituloEstancias">Actividades</h1>
      <p className="subtituloEstancias">
        Descubre cómo enriquecemos la vida de nuestros residentes a través de
        diferentes actividades diseñadas para estimular la mente, fomentar la
        socialización y promover un envejecimiento activo y pleno.
      </p>

      <div className="slider-container">
        <div className="container-images">
          <ul ref={listRef}>
            {data.map((item, index) => (
              <li key={index}>
                <img src={item.imgUrl} alt={item.imgUrl} />
              </li>
            ))}
          </ul>
        </div>
        <div className="dots-container">
          {data.map((_, idx) => (
            <div
              key={idx}
              className={`dot-container-item ${
                idx === activeButton ? "active" : ""
              }`}
              onClick={() => handleButtonClick(idx)}
            >
              <button className="boton"></button>
            </div>
          ))}
        </div>
      </div>

      <div className="textos-card">
        {/* Renderiza original-text y hola123 cuando showMore es false */}
        {!showMore && (
          <div>
            <div className="original-text">{currentTextos.originalText}</div>
          </div>
        )}
        {/* Mostrar el nuevo texto solo cuando se presione el botón */}
        {showMore && (
          <div className="nuevo-texto">
            {/* Renderizar la lista de servicios */}
            <div className={`textoImagenText${showMore ? "" : "hidden"}`}>
              {currentTextos.textoImagenText}
            </div>
          </div>
        )}
        <button className="saber-mas2" onClick={handleShowMore}>
          {showMore ? "Mostrar menos" : "Saber más"}
        </button>
      </div>
    </div>
  );
}

export default CarruselActividades;
