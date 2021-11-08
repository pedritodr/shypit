import "../styles/globals.css";
import { Provider, useDispatch } from "react-redux";
import { store } from "../store/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div>
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;
