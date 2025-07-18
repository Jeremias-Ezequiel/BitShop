import React from "react";
import { Link } from "react-router-dom";

function SobreNosotros() {
  return (
    <section id="about" class="container my-5">
      <h2 class="text-center m-5">Sobre Nosotros</h2>
      <div class="row align-items-center">
        <div class="col-md-6">
          <h3>BitShop: Tu Puerta a la Tecnología</h3>
          <p>
            En BitShop, creemos que la tecnología debe estar al alcance de
            todos. Desde nuestra fundación, hemos trabajado para ofrecer los
            mejores dispositivos electrónicos con precios competitivos y un
            servicio al cliente que te hará sentir en casa.
          </p>
          <p>
            Nuestros valores son la innovación, la calidad y la confianza. Cada
            producto que encuentras en nuestra tienda ha sido seleccionado
            cuidadosamente para garantizar que tengas lo último en tecnología.
          </p>
          <a class="btn btn-primary mt-3">
            <Link to="/productos">Explora Nuestra Tienda</Link>
          </a>
        </div>
        <div class="col-md-6">
          <img
            src="/nosotros/sobreNosotros.jpg"
            alt="Tecnología BitShop"
            class="img-fluid rounded shadow"
          />
        </div>
      </div>
    </section>
  );
}

export default SobreNosotros;
