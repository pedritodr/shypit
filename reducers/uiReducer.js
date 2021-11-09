import { types } from "../types/types";

const stateInitial = {
  loading: false,
  error: null,
};

export const uiReducer = (state = stateInitial, action) => {
  switch (action.type) {
    case types.uiStartLoading:
      return {
        loading: true,
        error: "none",
      };
    case types.uiFinishLoading:
      return {
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
