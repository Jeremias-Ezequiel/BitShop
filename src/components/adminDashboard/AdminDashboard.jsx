import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    nombre: "",
    precio: "",
    description: "",
    image: "",
    stock: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Obtener productos desde MockAPI
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://<mockapi-url>/products");
        if (!response.ok) throw new Error("Error al cargar productos");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError("Error al cargar productos. Intenta de nuevo.");
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Crear o editar producto
  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const method = editingId ? "PUT" : "POST";
      const url = editingId
        ? `https://<mockapi-url>/products/${editingId}`
        : "https://<mockapi-url>/products";
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          precio: parseFloat(formData.precio),
          stock: parseInt(formData.stock),
        }),
      });
      if (!response.ok) throw new Error("Error al guardar producto");
      const updatedProduct = await response.json();
      setProducts(
        editingId
          ? products.map((p) => (p.id === editingId ? updatedProduct : p))
          : [...products, updatedProduct]
      );
      setFormData({
        id: "",
        nombre: "",
        precio: "",
        description: "",
        image: "",
        stock: "",
      });
      setEditingId(null);
      setError("");
    } catch (err) {
      setError("Error al guardar producto. Verifica los datos.");
    }
  };

  // Eliminar producto
  const handleDelete = async (id) => {
    if (window.confirm("¿Estás seguro de eliminar este producto?")) {
      try {
        const response = await fetch(`https://<mockapi-url>/products/${id}`, {
          method: "DELETE",
        });
        if (!response.ok) throw new Error("Error al eliminar producto");
        setProducts(products.filter((p) => p.id !== id));
        setError("");
      } catch (err) {
        setError("Error al eliminar producto.");
      }
    }
  };

  // Editar producto
  const handleEdit = (product) => {
    setFormData({
      id: product.id,
      nombre: product.nombre,
      precio: product.precio,
      description: product.description,
      image: product.image,
      stock: product.stock,
    });
    setEditingId(product.id);
  };

  if (loading) return <div className="text-center my-5">Cargando...</div>;
  if (error) return <div className="alert alert-danger my-5">{error}</div>;

  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Panel de Administración</h2>
      <div className="row">
        <div className="col-md-6">
          <h3>{editingId ? "Editar Producto" : "Crear Producto"}</h3>
          <form onSubmit={handleSave}>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="precio" className="form-label">
                Precio
              </label>
              <input
                type="number"
                className="form-control"
                id="precio"
                name="precio"
                value={formData.precio}
                onChange={handleChange}
                required
                step="0.01"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Descripción
              </label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                URL de Imagen
              </label>
              <input
                type="url"
                className="form-control"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="stock" className="form-label">
                Stock
              </label>
              <input
                type="number"
                className="form-control"
                id="stock"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              {editingId ? "Guardar Cambios" : "Crear Producto"}
            </button>
          </form>
        </div>
        <div className="col-md-6">
          <h3>Lista de Productos</h3>
          <ul className="list-group">
            {products.map((product) => (
              <li
                key={product.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <strong>{product.nombre}</strong> - $
                  {parseFloat(product.precio).toFixed(2)}
                </div>
                <div>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => handleEdit(product)}
                    aria-label={`Editar ${product.nombre}`}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(product.id)}
                    aria-label={`Eliminar ${product.nombre}`}
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AdminDashboard;
