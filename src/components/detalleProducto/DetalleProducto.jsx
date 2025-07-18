import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CarritoContext } from "../../context/CarritoContext";

function DetalleProducto() {
  const { id } = useParams(); // Funcion para obtener el id del producto mediante la URL
  const { user } = useContext(AuthContext); // Verifcamos si el usuario inicio sesion
  const { addToCart } = useContext(CarritoContext);
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://68798eb663f24f1fdca2463f.mockapi.io/productos/Productos/${id}`
        );
        if (!response.ok) {
          throw new Error("Producto no encontrado");
        }
        const data = await response.json();

        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError("Error al cargar el producto. Intenta de nuevo.");
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleIncrease = () => {
    if (product && quantity < product.stock) {
      setQuantity(quantity + 1);
      setError("");
    } else {
      setError(`No puedes agregar más de ${product?.stock} unidades.`);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setError("");
    } else {
      setError("La cantidad mínima es 1.");
    }
  };

  const handleAddToCart = () => {
    if (!user) {
      setError("Por favor, inicia sesión para agregar productos al carrito.");
      setTimeout(() => navigate("/login"), 2000);
      return;
    }
    if (product) {
      addToCart(product, quantity);
      alert(`${quantity} ${product.name}(s) agregado(s) al carrito.`);
      setQuantity(1);
    }
  };

  if (loading) {
    return (
      <section className="container my-5">
        <h2 className="text-center mb-4">Cargando...</h2>
      </section>
    );
  }

  if (error && !product) {
    return (
      <section className="container my-5">
        <h2 className="text-center mb-4">Error</h2>
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </section>
    );
  }

  return (
    <section id="product-detail" className="container my-5">
      <h2 className="text-center mb-4">{product.nombre}</h2>
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.imagen}
            alt={product.nombre}
            className="img-fluid rounded shadow"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>
        <div className="col-md-6">
          <h3>Precio: ${product.precio}</h3>
          <p>{product.descripcion}</p>
          <p>
            <strong>Stock disponible:</strong> {product.stock}
          </p>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <div className="d-flex align-items-center mb-3">
            <button
              className="btn btn-outline-secondary me-2"
              onClick={handleDecrease}
              disabled={quantity <= 1}
            >
              -
            </button>
            <span className="mx-3">{quantity}</span>
            <button
              className="btn btn-outline-secondary me-2"
              onClick={handleIncrease}
              disabled={quantity >= product.stock}
            >
              +
            </button>
          </div>
          <button
            className="btn btn-primary w-100"
            onClick={handleAddToCart}
            aria-label="Agregar al carrito"
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </section>
  );
}

export default DetalleProducto;
