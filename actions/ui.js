import { types } from "../types/types";

export const startLoading = () => ({
  type: types.uiStartLoading,
});

export const finishLoading = (error = null) => ({
  type: types.uiFinishLoading,
  payload: {
    error,
  },
});
