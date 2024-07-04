import { Miembro } from "./modelo";

export const getMiembroById = (id: string): Promise<Miembro> => {
  return fetch(`https://api.github.com/user/${id}`).then((response) =>
    response.json()
  );
};
