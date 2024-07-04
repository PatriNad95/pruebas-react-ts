import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  DetallePersonaje,
  GridMiembros,
  GridPersonajes,
  Home,
  Login,
  MiembroDetalle,
} from "./paginas";
import { rutas } from "./constantes";
export const Rutas: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={rutas.HOME} element={<Login />} />
        <Route path={rutas.OPCIONES} element={<Home />} />
        <Route path={rutas.MIEMBROS} element={<GridMiembros />} />
        <Route path={rutas.PERSONAJES} element={<GridPersonajes />} />
        <Route path={rutas.DETALLE_MIEMBRO} element={<MiembroDetalle />} />
        <Route path={rutas.DETALLE_PERSONAJE} element={<DetallePersonaje />} />
      </Routes>
    </Router>
  );
};
