import firebase from "firebase/app";
import "firebase/auth";
import React, { Suspense, useEffect, useState } from "react";
import { connect } from "react-redux";
import classes from "./assets/styles/theme.css";
import Preloader from "./components/UI/Preloader/Preloader";
import RenderRoutes from "./routers/RenderRoutes";
import * as actionCreators from "./store/actions/index";
// config firebase
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: "task-management-d625d",
  databaseURL: "https://task-management-d625d-default-rtdb.firebaseio.com/", // Realtime Database
  storageBucket: "task-management-d625d.com", // Storage
  messagingSenderId: "123456789", // Cloud Messaging
  //   measurementId: "G-12345"
};

firebase.initializeApp(config);

const App = (props) => {
  const { onLoginStart, onLoginSuccess } = props;
  const [preloader, setPreloader] = useState(true);
  useEffect(() => {
    let timeout = setTimeout(() => {
      setPreloader(false);
    }, 1500);
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        if (!user) {
          return;
        }
        // console.log(user.refreshToken);

        onLoginStart();
        user.getIdToken().then((response) => {
          // console.log("[getTOKEN]");
          const token = response;
          const { uid, displayName, photoURL } = user;
          props.fetchTasks(token, uid);

          onLoginSuccess(token, uid, displayName, photoURL);
        });
      });
    return () => {
      clearTimeout(timeout);
      unregisterAuthObserver();
    };
  }, []);

  return (
    <div className={`${classes.App} ${localStorage.getItem("theme")}`}>
      {preloader && <Preloader />}
      {/* <Preloader /> */}
      <Suspense fallback={<div></div>}>
        <RenderRoutes />
      </Suspense>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.token !== null,
  token: state.auth.token,
  userId: state.auth.userInfo.userId,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginStart: () => dispatch(actionCreators.loginStart()),
    onLoginSuccess: (token, userId, displayName, photoURL) =>
      dispatch(
        actionCreators.loginSuccess(token, userId, displayName, photoURL)
      ),
    onLogout: () => dispatch(actionCreators.logoutSuccess()),
    fetchTasks: (token, userId) =>
      dispatch(actionCreators.fetchTasks(token, userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
