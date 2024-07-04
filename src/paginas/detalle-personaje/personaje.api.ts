import { Personaje } from "./modelo";

export const getPersonajeById = (id: string): Promise<Personaje> =>
  fetch(`http://localhost:3000/personajes/${id}`).then((response) =>
    response.json()
  );
