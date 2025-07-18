import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-3 fs-5 fw-medium">
        <div className="container-fluid">
          <a className="navbar-brand fs-2">
            <Link to="/">BitShop</Link>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">
                  <Link to="/">Inicio</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <Link to="/productos">Productos</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <Link to="/nosotros">Sobre Nosotros</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <Link to="/contacto">Contacto</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <Link to="/login">Iniciar sesion</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <Link to="/registro">Registrarse</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <Link to="/carrito">Carrito</Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
