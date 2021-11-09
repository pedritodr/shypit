import { types } from "../types/types";

const stateInitial = {
  current: 0,
};

export const navCotizadorReducer = (state = stateInitial, action) => {
  switch (action.type) {
    case types.uiNavigationCotizador:
      return {
        current: action.payload.current,
      };

    default:
      return state;
  }
};
