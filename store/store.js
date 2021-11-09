import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { authReducer } from "../reducers/authReducer";
import { formReqPriceReducer } from "../reducers/FormReqPriceReducer";
import { loggedReducer } from "../reducers/loggedReducer";
import { navCotizadorReducer } from "../reducers/navCotizadorReducer";
import { navReducer } from "../reducers/navReducer";
import { uiReducer } from "../reducers/uiReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  logged: loggedReducer,
  nav: navReducer,
  navCot: navCotizadorReducer,
  formReqPrice: formReqPriceReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
