import "./Categorias.css";

const Categorias = () => {
  return (
    <div className="m-5">
      <h2 className="text-center m-4">Categorias</h2>
      <ul className="d-flex flex-column flex-md-row flex-wrap justify-content-around m-5 lista-categoria fw-bold fs-5 gap-4 text-center">
        <li className="categoria-item">
          <a href="#">
            Auriculares <img src="./iconos/headphones.svg" alt="Auriculares" />
          </a>
        </li>
        <li className="categoria-item">
          <a href="#">
            Celulares <img src="./iconos/smartphone.svg" alt="" />
          </a>
        </li>
        <li className="categoria-item">
          <a href="#">
            Computadoras <img src="./iconos/computer.svg" alt="" />
          </a>
        </li>
        <li className="categoria-item">
          <a href="#">
            Relojes <img src="./iconos/smartwatch.svg" alt="" />
          </a>
        </li>
        <li className="categoria-item">
          <a href="#">
            Tablets <img src="./iconos/tablet.svg" alt="" />
          </a>
        </li>
        <li className="categoria-item">
          <a href="#">
            Camaras <img src="./iconos/camera.svg" alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Categorias;
