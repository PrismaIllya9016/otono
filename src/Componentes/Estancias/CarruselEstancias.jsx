import { useEffect, useRef, useState } from "react";
import { data2 } from "../../assets/data2";
import "./CarruselEstancias.css";

function CarruselEstancias() {
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
    setCurrentTextos(data2[currentIndex].textos2);
  }, [currentIndex]);

  const handleButtonClick = (idx) => {
    setActiveButton(idx); // Establecer el botón activo
    setCurrentIndex(idx); // Ir al slide correspondiente al botón
    setShowMore(false); // Reiniciar el estado para ocultar el texto adicional
  };

  const handleShowMore = () => {
    setShowMore(!showMore); // Alternar el estado para mostrar u ocultar el texto adicional
    const textosCard = document.querySelector(".textos-card2");
    if (!showMore) {
      // Si se muestra más, agrega la clase de opacidad alterna
      textosCard.classList.add("opacidad-alternativa");
    } else {
      // Si se muestra menos, quita la clase de opacidad alterna
      textosCard.classList.remove("opacidad-alternativa");
    }
  };

  return (
    <div className="main-container2">
      <h1 className="tituloEstancias2">Estancias</h1>
      <p className="subtituloEstancias2">
        Contamos con tres modalidades de estancias, cada una diseñada para
        adaptarse a tus necesidades y proporcionar el máximo bienestar a
        nuestros residentes.
      </p>

      <div className="slider-container2">
        <div className="container-images2">
          <ul ref={listRef}>
            {data2.map((item, index) => (
              <li key={index}>
                <img src={item.imgUrl2} alt={`Estancia2 ${index + 1}`} />
              </li>
            ))}
          </ul>
        </div>
        <div className="dots-container2">
          {data2.map((_, idx) => (
            <div
              key={idx}
              className={`dot-container-item2 ${
                idx === activeButton ? "active" : ""
              }`}
              onClick={() => handleButtonClick(idx)}
            >
              <button className="boton2"></button>
            </div>
          ))}
        </div>
      </div>

      <div className="textos-card2">
        {/* Renderiza original-text y hola123 cuando showMore es false */}
        {!showMore && (
          <div>
            <div className="original-text2">{currentTextos.originalText2}</div>
            <div className="hola1232">{currentTextos.hola1232Text}</div>
          </div>
        )}
        {/* Mostrar el nuevo texto solo cuando se presione el botón */}
        {showMore && (
          <div className="nuevo-texto2">
            {/* Renderizar la lista de servicios */}
            <div className={`textoImagenText2 ${showMore ? "" : "hidden"}`}>
              <ul>
                <div id="h123">Servicios que incluye:</div>
                {currentTextos.textoImagenText2 && // Verificación de que textoImagenText existe
                  currentTextos.textoImagenText2
                    .split("\n")
                    .map((servicio, index) => <li key={index}>{servicio}</li>)}
              </ul>
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
export default CarruselEstancias;
