import firebase from "firebase/app";
import "firebase/auth";
import React, { Suspense, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import classes from "./assets/styles/theme.css";
import Spinner from "./components/UI/Spinner/Spinner";
import MainLayoutRoute from "./hoc/Layout/MainLayoutRoute/MainLayoutRoute";
import * as actionCreators from "./store/actions/index";
// config firebase
const config = {
   apiKey: process.env.REACT_APP_FIREBASE_API,
   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
};
firebase.initializeApp(config);
// lazy load
const TasksBuilderLazy = React.lazy(() =>
   import("./containers/TasksBuilder/TasksBuilder")
);
const AuthLazy = React.lazy(() => import("./containers/Auth/Auth"));
const App = (props) => {
   const { onLoginStart, onLoginSuccess } = props;
   useEffect(() => {
      const unregisterAuthObserver = firebase
         .auth()
         .onAuthStateChanged((user) => {
            onLoginStart();

            if (!user) {
               props.onLogout();
               return;
            }

            user.getIdToken().then((response) => {
               const token = response;
               const { uid, displayName, photoURL } = user;
               onLoginSuccess(token, uid, displayName, photoURL);
            });
         });
      return () => unregisterAuthObserver();
   }, []);

   let renderOnAuth = (
      <Switch>
         <Route exact path="/" component={AuthLazy} />
         <Redirect to="/" />
      </Switch>
   );
   if (props.isAuthenticated) {
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
      <div className={classes.App}>
         <Suspense fallback={<Spinner />}>{renderOnAuth}</Suspense>
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
