import { types } from "../types/types";

export const changeMenu = (menu) => ({
  type: types.uiNavigation,
  payload: {
    menu,
  },
});
