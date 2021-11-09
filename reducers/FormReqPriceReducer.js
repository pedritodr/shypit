import { types } from "../types/types";

const stateInitial = {
  heigth: "",
  width: "",
  origen: null,
  destino: null,
  weight: "",
  length: "",
  resultPrice: null,
};

export const formReqPriceReducer = (state = stateInitial, action) => {
  switch (action.type) {
    case types.formRequest:
      return {
        heigth: action.payload.heigth,
        width: action.payload.width,
        origen: action.payload.origen,
        destino: action.payload.destino,
        weight: action.payload.weight,
        length: action.payload.length,
        resultPrice: null,
      };

    case types.formResult:
      return {
        heigth: action.payload.heigth,
        width: action.payload.width,
        origen: action.payload.origen,
        destino: action.payload.destino,
        weight: action.payload.weight,
        length: action.payload.length,
        resultPrice: action.payload.resultPrice,
      };
    default:
      return state;
  }
};
