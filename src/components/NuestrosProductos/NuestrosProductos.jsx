import React, { useEffect, useState } from "react";
import Producto from "../producto/Producto";
import "./NuestrosProductos.css";

function NuestrosProductos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://686bb363e559eba90873aee6.mockapi.io/productos")
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => setError("No se pudieron cargar los productos"))
      .finally(() => setCargando(false));
  }, []);

  return (
    <>
      <h2 className="text-center my-3 fw-bold text-uppercase">
        Nuestros Productos
      </h2>
      {cargando && <p className="text-center m-5 fs-5">Cargando productos..</p>}
      {error && <p>{error}</p>}
      {!cargando && !error && (
        <div className="d-flex flex-wrap gap-5 justify-content-center my-5">
          {productos.map((item) => (
            <Producto
              key={item.id}
              nombre={item.nombre}
              descripcion={item.descripcion}
              imagen={item.imagen}
              precio={item.precio}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default NuestrosProductos;
