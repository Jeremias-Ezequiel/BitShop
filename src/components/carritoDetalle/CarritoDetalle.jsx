import React, { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";

function CarritoDetalle() {
  const { cart, removeFromCart, setCart } = useContext(CarritoContext);
  const [showModal, setShowModal] = useState(false);
  const [purchaseConfirmed, setPurchaseConfirmed] = useState(false);

  // Calcular el total general, asegurando que precio sea un número
  const total = cart.reduce(
    (sum, item) => sum + parseFloat(item.precio) * item.quantity,
    0
  );

  // Manejar la confirmación de la compra
  const handleConfirmPurchase = () => {
    setPurchaseConfirmed(true);
    setCart([]); // Limpiar el carrito
    localStorage.removeItem("cart"); // Limpiar localStorage
  };

  // Cerrar el modal
  const handleCloseModal = () => {
    setShowModal(false);
    setPurchaseConfirmed(false);
  };

  if (cart.length === 0 && !purchaseConfirmed) {
    return (
      <section className="container my-5">
        <h2 className="text-center mb-4">Carrito de Compras</h2>
        <p className="text-center">Tu carrito está vacío.</p>
      </section>
    );
  }

  return (
    <section id="carrito" className="container my-5">
      <h2 className="text-center mb-4">Carrito de Compras</h2>
      {!purchaseConfirmed && (
        <>
          <div className="row">
            {cart.map((item) => (
              <div key={item.id} className="col-md-6 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text">
                      Precio: ${parseFloat(item.precio).toFixed(2)}
                    </p>
                    <p className="card-text">Cantidad: {item.quantity}</p>
                    <p className="card-text">
                      Subtotal: $
                      {(parseFloat(item.precio) * item.quantity).toFixed(2)}
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
          <div className="text-end mt-4">
            <h4>Total: ${total.toFixed(2)}</h4>
            <button
              className="btn btn-primary mt-2"
              onClick={() => setShowModal(true)}
              aria-label="Confirmar compra"
            >
              Confirmar Compra
            </button>
          </div>
        </>
      )}

      {/* Modal para el resumen de la compra */}
      <div
        className={`modal fade ${showModal ? "show d-block" : ""}`}
        tabIndex="-1"
        aria-labelledby="purchaseModalLabel"
        aria-hidden={!showModal}
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="purchaseModalLabel">
                {purchaseConfirmed
                  ? "¡Compra Confirmada!"
                  : "Resumen de Compra"}
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleCloseModal}
                aria-label="Cerrar"
              ></button>
            </div>
            <div className="modal-body">
              {purchaseConfirmed ? (
                <div className="text-center">
                  <h4>¡Gracias por tu compra!</h4>
                  <p>Tu pedido ha sido procesado exitosamente.</p>
                  <p>Recibirás una confirmación pronto.</p>
                </div>
              ) : (
                <>
                  <h6>Productos:</h6>
                  <ul className="list-group mb-3">
                    {cart.map((item) => (
                      <li key={item.id} className="list-group-item">
                        <div>
                          <strong>{item.nombre}</strong>
                          <div>Cantidad: {item.quantity}</div>
                          <div>
                            Precio Unitario: $
                            {parseFloat(item.precio).toFixed(2)}
                          </div>
                          <div>
                            Subtotal: $
                            {(parseFloat(item.precio) * item.quantity).toFixed(
                              2
                            )}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <h5>Total: ${total.toFixed(2)}</h5>
                </>
              )}
            </div>
            <div className="modal-footer">
              {purchaseConfirmed ? (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleCloseModal}
                  aria-label="Volver al inicio"
                >
                  Volver al Inicio
                </button>
              ) : (
                <>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleCloseModal}
                    aria-label="Cerrar"
                  >
                    Cerrar
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleConfirmPurchase}
                    aria-label="Confirmar compra"
                  >
                    Confirmar
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CarritoDetalle;
