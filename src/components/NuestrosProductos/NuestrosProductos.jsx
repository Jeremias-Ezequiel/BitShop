import React, { useEffect, useState } from "react";
import Producto from "../producto/Producto";
import "./NuestrosProductos.css";

function NuestrosProductos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productosPorPag = 6;

  useEffect(() => {
    fetch("https://68798eb663f24f1fdca2463f.mockapi.io/productos/Productos")
      .then((response) => {
        if (!response.ok) throw new Error("Error en la respuesta de la API");
        return response.json();
      })
      .then((data) => setProductos(data))
      .catch((error) => setError("No se pudieron cargar los productos"))
      .finally(() => setCargando(false));
  }, []);

  const filteredProductos = productos.filter((item) =>
    item.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastProduct = currentPage * productosPorPag;
  const indexOfFirstProduct = indexOfLastProduct - productosPorPag;
  const currentProducts = filteredProductos.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProductos.length / productosPorPag);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <h2 className="text-center my-3 fw-bold text-uppercase">
        Nuestros Productos
      </h2>

      <div className="container mb-4">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {cargando && <p className="text-center m-5 fs-5">Cargando productos..</p>}
      {error && <p className="text-center text-danger">{error}</p>}
      {!cargando && !error && (
        <>
          <div className="d-flex flex-wrap gap-5 justify-content-center my-5">
            {currentProducts.map((item) => (
              <Producto
                key={item.id}
                nombre={item.nombre}
                descripcion={item.descripcion}
                imagen={item.imagen}
                precio={item.precio}
                id={item.id}
              />
            ))}
          </div>

          {/* Seccion de paginador Paginador */}
          <div className="text-center mb-5">
            <nav aria-label="Page navigation">
              <ul className="pagination justify-content-center">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (number) => (
                    <li
                      key={number}
                      className={`page-item ${
                        currentPage === number ? "active" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => paginate(number)}
                      >
                        {number}
                      </button>
                    </li>
                  )
                )}
              </ul>
            </nav>
          </div>
        </>
      )}
    </>
  );
}

export default NuestrosProductos;
