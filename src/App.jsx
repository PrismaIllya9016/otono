import "./App.css";
import Actividades from "./Componentes/Actividades/Actividades";
import Contacto from "./Componentes/Contacto/Contacto";
import Estancias from "./Componentes/Estancias/Estancias";
import Eventos from "./Componentes/Eventos/Eventos";
import Footer from "./Componentes/Footer/Footer";
import Habitaciones from "./Componentes/Habitaciones/Habitaciones";
import Header from "./Componentes/Header/Header";
import Instalaciones from "./Componentes/Instalaciones/Instalaciones";
import Navbar from "./Componentes/Navbar";
import Objetivo from "./Componentes/Objetivo/Objetivo";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Objetivo />
      <Estancias />
      <Habitaciones />
      <Instalaciones />
      <Actividades />
      <Eventos />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
