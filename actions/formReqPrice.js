import axios from "axios";
import { types } from "../types/types";

export const startFormReqPrice = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${process.env.endPointApi}rates`,
        data,
        {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "*",
            Accept: "application/vnd.shipit.v4",
            "X-Shipit-Email": process.env.emailAccess,
            "X-Shipit-Access-Token": process.env.tokenApi,
          },
        }
      );

      if (response.status === 200) {
        console.log(response.data);
        dispatch(resultPrice(response.data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const resultPrice = (resultPrice) => ({
  type: types.formResult,
  payload: {
    ...state,
    resultPrice,
  },
});

export const changeWeight = (state, weight) => ({
  type: types.formRequest,
  payload: {
    ...state,
    weight,
  },
});
export const changeDestino = (state, destino) => ({
  type: types.formRequest,
  payload: {
    ...state,
    destino,
  },
});

export const changeOrigen = (state, origen) => ({
  type: types.formRequest,
  payload: {
    ...state,
    origen,
  },
});
export const changeWidth = (state, width) => ({
  type: types.formRequest,
  payload: {
    ...state,
    width,
  },
});
export const changeHeigth = (state, heigth) => ({
  type: types.formRequest,
  payload: {
    ...state,
    heigth,
  },
});
export const changeLength = (state, length) => ({
  type: types.formRequest,
  payload: {
    ...state,
    length,
  },
});
