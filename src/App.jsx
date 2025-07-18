import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Inicio from "./pages/Inicio";
import Productos from "./pages/Productos";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Footer from "./components/footer/Footer";
import Login from "./pages/Login";
import ProtectedRoute from "./components/protectedRoute.jsx/ProtectedRoute";
import Carrito from "./pages/Carrito";
import { AuthProvider } from "./context/AuthContext";
import SignUp from "./pages/SignUp";
import { CarritoProvider } from "./context/CarritoContext";
import DetalleProducto from "./components/detalleProducto/DetalleProducto";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <CarritoProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Inicio />}></Route>
              <Route path="/productos" element={<Productos />}></Route>
              <Route
                path="/productos/:id"
                element={<DetalleProducto />}
              ></Route>
              <Route path="/nosotros" element={<Nosotros />}></Route>
              <Route path="/contacto" element={<Contacto />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/registro" element={<SignUp />}></Route>
              <Route
                path="/carrito"
                element={
                  <ProtectedRoute>
                    <Carrito></Carrito>
                  </ProtectedRoute>
                }
              ></Route>
            </Routes>
            <Footer />
          </CarritoProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
