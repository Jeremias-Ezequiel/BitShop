import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null = no autenticado, objeto = autenticado

  const login = (userData) => {
    setUser(userData); // Guardar datos del usuario (simulado)
  };

  const logout = () => {
    setUser(null); // Cerrar sesión
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
