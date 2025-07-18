import "./InfoBlock.css";

function InfoBlock() {
  return (
    <div>
      <ul className="info-list d-flex m-5 justify-content-around align-items-center text-center row">
        <li className="info-item  col-12 my-4 col-xl-3">
          <h4 className="my-4">Métodos de pago</h4>
          <p>Aceptamos tarjetas, transferencias y pagos en efectivo</p>
          <img src="./iconos/paid-method.svg" alt="" />
        </li>
        <li className="info-item  col-12 my-4 col-xl-3">
          <h4 className="my-4">Envíos gratis</h4>
          <p>Envíos sin costo en compras superiores a $40.000</p>
          <img src="./iconos/transporter.svg" alt="" />z
        </li>
        <li className="info-item  col-12 my-4 col-xl-3">
          <h4 className="my-4">Atención al cliente</h4>
          <p>Soporte personalizado 24/7 vía WhatsApp y correo</p>
          <img src="./iconos/support.svg" alt="" />
        </li>
        <li className="info-item col-12 my-4 col-xl-3">
          <h4 className="my-4">Compra 100% segura</h4>
          <p>Pregemos tus datos y transacciones</p>
          <img src="./iconos/secure.svg" alt="" />
        </li>
      </ul>
    </div>
  );
}

export default InfoBlock;
