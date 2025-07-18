import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Registro() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState([]);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

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

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      newErrors.push(
        "La contraseña debe tener al menos 8 caracteres, incluyendo una letra y un número."
      );
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.push("Las contraseñas no coinciden.");
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      login({ email: formData.email });
      alert("Registro exitoso. ¡Bienvenido a BitShop!");
      setFormData({ name: "", email: "", password: "", confirmPassword: "" });
      setErrors([]);
      navigate("/"); // Redirigir al inicio
    }
  };

  return (
    <section id="register" className="container my-5">
      <h2 className="text-center mb-4">Regístrate</h2>
      <p className="text-center mb-5">
        Crea una cuenta para disfrutar de todas las ventajas de BitShop.
      </p>
      <div className="row justify-content-center">
        <div className="col-md-6">
          {errors.length > 0 && (
            <div className="alert alert-danger" role="alert">
              {errors.map((error, index) => (
                <div key={index}>{error}</div>
              ))}
            </div>
          )}
          <form onSubmit={handleSubmit} noValidate>
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
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className={`form-control ${
                  errors.some((err) => err.includes("contraseña"))
                    ? "is-invalid"
                    : ""
                }`}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Ingresa tu contraseña"
              />
              <div className="invalid-feedback">Contraseña inválida.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirmar Contraseña
              </label>
              <input
                type="password"
                className={`form-control ${
                  errors.some((err) => err.includes("coinciden"))
                    ? "is-invalid"
                    : ""
                }`}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                placeholder="Confirma tu contraseña"
              />
              <div className="invalid-feedback">
                Las contraseñas no coinciden.
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100"
              aria-label="Registrarse"
            >
              Registrarse
            </button>
          </form>
          <p className="text-center mt-3">
            ¿Ya tienes cuenta? <a href="/login">Inicia sesión aquí</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Registro;
