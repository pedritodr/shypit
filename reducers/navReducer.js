import { types } from "../types/types";

const stateInitial = {
  menu: "inicio",
};

export const navReducer = (state = stateInitial, action) => {
  switch (action.type) {
    case types.uiNavigation:
      return {
        menu: action.payload.menu,
      };

    default:
      return state;
  }
};
