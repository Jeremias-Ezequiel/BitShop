import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState([]);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = [];

    // Excepción para el administrador
    if (formData.email === "admin" && formData.password === "admin") {
      return newErrors.length === 0;
    }

    // Validar correo electrónico (solo para usuarios no admin)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.push("Por favor, ingresa un correo electrónico válido.");
    }

    // Validar contraseña (solo para usuarios no admin)
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      newErrors.push(
        "La contraseña debe tener al menos 8 caracteres, incluyendo una letra y un número."
      );
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const userData = {
          email: formData.email,
          password: formData.password,
          name:
            formData.email === "admin"
              ? "Administrador"
              : formData.email.split("@")[0],
        };
        login(userData);
        alert("Inicio de sesión exitoso. ¡Bienvenido!");
        setFormData({ email: "", password: "" });
        setErrors([]);
        navigate(userData.email === "admin" ? "/dashboard" : "/");
      } catch (err) {
        setErrors(["Error al iniciar sesión. Verifica tus credenciales."]);
      }
    }
  };

  return (
    <section id="login" className="container my-5">
      <h2 className="text-center mb-4">Iniciar Sesión</h2>
      <p className="text-center mb-5">
        Ingresa tus datos para acceder a tu cuenta de BitShop.
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
            <button
              type="submit"
              className="btn btn-primary w-100"
              aria-label="Iniciar sesión"
            >
              Iniciar Sesión
            </button>
          </form>
          <p className="text-center mt-3">
            ¿No tienes cuenta? <a href="/registro">Regístrate aquí</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
