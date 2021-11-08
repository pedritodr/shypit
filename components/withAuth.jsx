import { useEffect } from "react";
import { useRouter } from "next/router";
import firebaseApp from "../firebase/firebase-config";
import { getAuth } from "firebase/auth";
import { login } from "../actions/auth";
import { useDispatch } from "react-redux";
import { finishLogged, startLogged } from "../actions/logged";

const withAuth = (Component) => {
  const Auth = (props) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const auth = getAuth(firebaseApp);

    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user?.uid) {
          dispatch(login(user.uid, user.displayName));
          dispatch(startLogged());
        } else {
          dispatch(finishLogged());
          return router.replace("/");
        }
      });
    }, [dispatch]);

    // If user is logged in, return original component
    return <Component {...props} />;
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;
