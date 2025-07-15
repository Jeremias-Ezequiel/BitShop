import "./Producto.css";

function Producto({ nombre, imagen, descripcion, precio }) {
  return (
    <div className="card producto-card" style={{ width: "18rem" }}>
      <img src={imagen} className="card-img-top img-fluid" alt="..." />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text flex-grow-1">{descripcion}</p>
        <p>${precio}</p>
        <a href="#" className="btn btn-primary d-block">
          Ver más
        </a>
      </div>
    </div>
  );
}

export default Producto;
