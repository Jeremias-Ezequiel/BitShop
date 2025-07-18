import React, { useState } from "react";

function FormContacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = [];

    const nameRegex = /^[A-Za-z\s]{2,}$/;
    if (!nameRegex.test(formData.name)) {
      newErrors.push(
        "El nombre debe contener solo letras y espacios, y tener al menos 2 caracteres."
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.push("Por favor, ingresa un correo electrónico válido.");
    }

    if (formData.message.length < 5) {
      newErrors.push("El mensaje debe tener al menos 5 caracteres.");
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Formulario enviado. ¡Gracias por contactarnos!");
      setFormData({ name: "", email: "", message: "" });
      setErrors([]);
    }
  };

  return (
    <section id="contact" className="container my-5">
      <h2 className="text-center mb-4">Contáctanos</h2>
      <p className="text-center mb-5">
        ¿Tienes alguna pregunta o necesitas ayuda? ¡Envíanos un mensaje y te
        responderemos lo antes posible!
      </p>
      <div className="row justify-content-center">
        <div className="col-md-8">
          {errors.length > 0 && (
            <div className="alert alert-danger" role="alert">
              {errors.map((error, index) => (
                <div key={index}>{error}</div>
              ))}
            </div>
          )}
          <form id="contactForm" onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className={`form-control ${
                  errors.some((err) => err.includes("nombre"))
                    ? "is-invalid"
                    : ""
                }`}
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Ingresa tu nombre"
              />
              <div className="invalid-feedback">
                Por favor, ingresa un nombre válido.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Correo Electrónico
              </label>
              <input
                type="email"
                className={`form-control ${
                  errors.some((err) => err.includes("correo"))
                    ? "is-invalid"
                    : ""
                }`}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Ingresa tu correo"
              />
              <div className="invalid-feedback">
                Por favor, ingresa un correo electrónico válido.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Mensaje
              </label>
              <textarea
                className={`form-control ${
                  errors.some((err) => err.includes("mensaje"))
                    ? "is-invalid"
                    : ""
                }`}
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Escribe tu mensaje aquí"
              ></textarea>
              <div className="invalid-feedback">
                Por favor, ingresa un mensaje.
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100"
              aria-label="Enviar mensaje de contacto"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default FormContacto;
