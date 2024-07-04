import React from "react";
import { Link } from "react-router-dom";
import { rutas } from "@/constantes";
import { Layout } from "@/layout";
export const Home: React.FC = () => {
  return (
    <Layout>
      <h2>Hola desde Home</h2>
      <div>
        <Link to={rutas.MIEMBROS}>Miembros</Link>
      </div>
      <div>
        <Link to={rutas.PERSONAJES}>Personajes</Link>
      </div>
    </Layout>
  );
};
