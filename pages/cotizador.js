import { useSelector } from "react-redux";

import LayoutApp from "../layouts/LayoutApp";
import SpinLoading from "../components/spin/SpinLoading";
import withAuth from "../components/withAuth";
import ContentCotizador from "../components/cotizador/ContentCotizador";

const Cotizador = () => {
  const { loggedIn } = useSelector((state) => state.logged);
  if (!loggedIn) {
    return (
      <>
        <SpinLoading />
        <div>This is a Dashboard page which is private.</div>
      </>
    );
  } else {
    return (
      <>
        <LayoutApp>
          <ContentCotizador />
        </LayoutApp>
      </>
    );
  }
};

export default withAuth(Cotizador);
