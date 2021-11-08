import { types } from "../types/types";

export const startLogged = () => ({
  type: types.isLoggedIn,
});

export const finishLogged = () => ({
  type: types.isLoggedOut,
});
