import firebaseApp from "../firebase/firebase-config";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import Swal from "sweetalert2";
import { types } from "../types/types";
import { finishLoading, startLoading } from "./ui";

const auth = getAuth(firebaseApp);

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(finishLoading());
        dispatch(login(user.uid, user.displayName));
      })
      .catch((error) => {
        console.log(error);
        Swal.fire(
          "Notificación",
          "El usuario o la contraseña no son correctos",
          "error"
        );
        dispatch(finishLoading());
      });
  };
};

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});

export const startLogout = () => {
  return async (dispatch) => {
    await signOut(auth);
    dispatch(logout());
  };
};

export const logout = () => ({
  type: types.logout,
});
