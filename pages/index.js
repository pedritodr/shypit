import { useEffect, useState } from "react";
import Head from "next/head";
import "antd/dist/antd.css";
import firebaseApp from "../firebase/firebase-config";
import { getAuth } from "firebase/auth";
import { login } from "../actions/auth";
import { useDispatch } from "react-redux";
import SignupForm from "../components/login/SignupForm";
import SpinLoading from "../components/spin/spinLoading";
import { finishLogged, startLogged } from "../actions/logged";

export default function Home() {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const auth = getAuth(firebaseApp);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        dispatch(startLogged());
      } else {
        dispatch(finishLogged());
      }
      setChecking(false);
    });
  }, [dispatch, setChecking]);
  if (checking) {
    return (
      <>
        <SpinLoading />
      </>
    );
  }
  return (
    <div>
      <Head>
        <title>Prueba técnica</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SignupForm />
      </main>
    </div>
  );
}
