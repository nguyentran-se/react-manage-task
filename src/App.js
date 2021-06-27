import firebase from "firebase/app";
import "firebase/auth";
import React, { Suspense, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import classes from "./assets/styles/theme.css";
import MainLayoutRoute from "./hoc/Layout/MainLayoutRoute/MainLayoutRoute";
import * as actionCreators from "./store/actions/index";
import Preloader from "./components/UI/Preloader/Preloader";
// config firebase
const config = {
   apiKey: process.env.REACT_APP_FIREBASE_API,
   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
};
firebase.initializeApp(config);
// lazy load
// const TasksBuilderLazy = React.lazy(() =>
//    Promise.all([
//       import("./containers/TasksBuilder/TasksBuilder"),
//       new Promise((resolve) => setTimeout(resolve, 1500)),
//    ]).then(([moduleExports]) => moduleExports)
// );
const TasksBuilderLazy = React.lazy(() =>
   import("./containers/TasksBuilder/TasksBuilder")
);
const AuthLazy = React.lazy(() => import("./containers/Auth/Auth"));
// const AuthLazy = React.lazy(() =>
//    Promise.all([
//       import("./containers/Auth/Auth"),
//       new Promise((resolve) => setTimeout(resolve, 1000)),
//    ]).then(([moduleExports]) => moduleExports)
// );

const App = (props) => {
   const { onLoginStart, onLoginSuccess } = props;
   const [isSignedIn, setIsSignedIn] = useState(false);
   const [preloader, setPreloader] = useState(true);
   useEffect(() => {
      // console.log("[APP] useEffect");
      let timeout = setTimeout(() => {
         // console.log("TIMEOUT123");
         setPreloader(false);
      }, 1500);
      const unregisterAuthObserver = firebase
         .auth()
         .onAuthStateChanged((user) => {
            setIsSignedIn(!!user);
            if (!user) {
               return;
            }

            onLoginStart();
            user.getIdToken().then((response) => {
               const token = response;
               const { uid, displayName, photoURL } = user;
               onLoginSuccess(token, uid, displayName, photoURL);
            });
         });
      return () => {
         clearTimeout(timeout);
         unregisterAuthObserver();
      };
   }, []);
   // console.log("[APP] rendering");
   // console.log(props.isAuthenticated);

   let renderOnAuth = (
      <Switch>
         <Route exact path="/" component={AuthLazy} />
         <Redirect to="/" />
      </Switch>
   );
   if (isSignedIn || props.isAuthenticated) {
      // console.log("[APP] ROUTE TASK");
      renderOnAuth = (
         <Switch>
            <MainLayoutRoute
               exact
               path="/tasks/today"
               component={TasksBuilderLazy}
            />
            <Redirect to="/tasks/today" />
         </Switch>
      );
   }
   return (
      <div className={`${classes.App} ${localStorage.getItem("theme")}`}>
         {preloader && <Preloader />}
         {/* <Preloader /> */}
         <Suspense fallback={<div></div>}>{renderOnAuth}</Suspense>
      </div>
   );
};

const mapStateToProps = (state) => ({
   isAuthenticated: state.auth.token !== null,
});

const mapDispatchToProps = (dispatch) => {
   return {
      onLoginStart: () => dispatch(actionCreators.loginStart()),
      onLoginSuccess: (token, userId, displayName, photoURL) =>
         dispatch(
            actionCreators.loginSuccess(token, userId, displayName, photoURL)
         ),
      onLogout: () => dispatch(actionCreators.logoutSuccess()),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
