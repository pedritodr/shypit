import { types } from "../types/types";

const stateInitial = {
  loading: false,
};

export const uiReducer = (state = stateInitial, action) => {
  switch (action.type) {
    case types.uiStartLoading:
      return {
        loading: true,
      };
    case types.uiFinishLoading:
      return {
        loading: false,
      };
    default:
      return state;
  }
};
