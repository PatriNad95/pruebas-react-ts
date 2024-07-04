import { MiContextoProvider } from "./core/contexto";
import { Rutas } from "./rutas";

export const App = () => {
  // return <GridMiembros />;
  // return <GridPersonajes />;
  return (
    <MiContextoProvider>
      <Rutas />
    </MiContextoProvider>
  );
};
