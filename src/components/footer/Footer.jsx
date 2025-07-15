import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="d-flex flex-column footer p-5 text-center">
      <div className="d-flex justify-content-around">
        <div>
          <h4>Secciones</h4>
          <ul className="d-flex flex-column text-start footer-seccion gap-2">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/productos">Productos</Link>
            </li>
            <li>
              <Link to="/nosotros">Sobre Nosotros</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Nuestras redes</h4>
          <ul className="d-flex flex-column text-start footer-seccion gap-2">
            <li>Instagram</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>
      <p className="footer-creador">
        Hecho por
        <a href="#">
          <b> Omonte Jeremias</b>
        </a>
      </p>
    </footer>
  );
}

export default Footer;
