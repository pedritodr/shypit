import { types } from "../types/types";

const stateInitial = {
  loggedIn: false,
};

export const loggedReducer = (state = stateInitial, action) => {
  switch (action.type) {
    case types.isLoggedIn:
      return {
        loggedIn: true,
      };
    case types.isLoggedOut:
      return {
        loggedIn: false,
      };
    default:
      return state;
  }
};
