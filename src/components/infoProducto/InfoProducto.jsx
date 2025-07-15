import "./InfoProducto.css";

function InfoProducto() {
  return (
    <div className="d-flex flex-column-reverse flex-xl-row w-100">
      <img
        src="./infoProducto/samsungs23.jpg"
        alt="Samsung S23 Ultra"
        className="img-fluid col-xl-6 info-img"
      />
      <div className="col-xl-6 d-flex justify-content-center align-items-center flex-column info-text my-5">
        <h2>Samsung S23 Ultra</h2>
        <p className="m-4">
          El <b>Samsung Galaxy S23 Ultra</b> combina potencia y elegancia con un
          diseño premium y una cámara de 200 MP que captura hasta el más mínimo
          detalle. Equipado con un procesador Snapdragno 8 Gen 2 y una pantlla
          Dynamic AMOLED 2X de 6.8", ofrece un rendimiento excepcional y una
          experiencia visual inigualable. Perfecto para quienes buscan lo mejor
          en fotografía, rendimiento y estilo.
        </p>
      </div>
    </div>
  );
}

export default InfoProducto;
