import axios from "axios";
import { types } from "../types/types";
import { finishLoading } from "./ui";
import { message } from "antd";
import { changeCotizador } from "./navCot";
import { useSelector } from "react-redux";

export const startFormReqPrice = (state, data, current) => {
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

      dispatch(resultPrice(state, response.data));
      dispatch(changeCotizador(current + 1));
    } catch (err) {
      console.log(err);
      if (err.response.status === 400) {
        dispatch(finishLoading(err.response.data));
        message.error(err.response.data.message);
        dispatch(finishLoading(err));
      }
    }
  };
};
export const resultPrice = (state, resultPrice) => ({
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
export const changeHeigth = (state, height) => ({
  type: types.formRequest,
  payload: {
    ...state,
    height,
  },
});
export const changeLength = (state, length) => ({
  type: types.formRequest,
  payload: {
    ...state,
    length,
  },
});
export const startReset = (state, length) => ({
  type: types.formReset,
});
