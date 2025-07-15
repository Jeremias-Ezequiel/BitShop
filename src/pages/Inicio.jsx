import Carrusel from "../components/carrusel/Carrusel";
import Categorias from "../components/categorias/Categorias";
import InfoBlock from "../components/infoBlock/InfoBlock";
import InfoProducto from "../components/infoProducto/InfoProducto";

const Inicio = () => {
  return (
    <div>
      <Carrusel />
      <Categorias />
      <InfoProducto />
      <InfoBlock />
    </div>
  );
};

export default Inicio;
