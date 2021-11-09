import { types } from "../types/types";

const stateInitial = {
  height: "",
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
        height: action.payload.height,
        width: action.payload.width,
        origen: action.payload.origen,
        destino: action.payload.destino,
        weight: action.payload.weight,
        length: action.payload.length,
        resultPrice: null,
      };

    case types.formResult:
      return {
        height: action.payload.height,
        width: action.payload.width,
        origen: action.payload.origen,
        destino: action.payload.destino,
        weight: action.payload.weight,
        length: action.payload.length,
        resultPrice: action.payload.resultPrice,
      };
    case types.formReset:
      return {
        height: "",
        width: "",
        origen: null,
        destino: null,
        weight: "",
        length: "",
        resultPrice: null,
      };
    default:
      return state;
  }
};
