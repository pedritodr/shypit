import { types } from "../types/types";

export const changeCotizador = (current) => ({
  type: types.uiNavigationCotizador,
  payload: {
    current,
  },
});
