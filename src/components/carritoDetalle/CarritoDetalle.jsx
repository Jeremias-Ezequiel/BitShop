import React, { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";

function CarritoDetalle() {
  const { cart, removeFromCart } = useContext(CarritoContext);

  if (cart.length === 0) {
    return (
      <section className="container my-5">
        <h2 className="text-center mb-4">Carrito de Compras</h2>
        <p className="text-center">Tu carrito está vacío.</p>
      </section>
    );
  }

  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Carrito de Compras</h2>
      <div className="row">
        {cart.map((item) => (
          <div key={item.id} className="col-md-6 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{item.nombre}</h5>
                <p className="card-text">Precio: ${item.precio}</p>
                <p className="card-text">Cantidad: {item.quantity}</p>
                <p className="card-text">
                  Total: ${item.precio * item.quantity}
                </p>
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(item.id)}
                  aria-label={`Eliminar ${item.nombre} del carrito`}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CarritoDetalle;
