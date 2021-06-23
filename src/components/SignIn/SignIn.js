import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import classes from "./SignIn.css";
// eslint-disable-next-line import/no-webpack-loader-syntax
import "!style-loader!css-loader!./Firebase.css";
const uiConfig = {
   signInFlow: "popup",
   signInSuccessUrl: "/tasks/today",
   signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
   ],
};
const SignIn = () => {
   return (
      <section className={classes.Container}>
         <div className={classes.Wrapper}>
            <div className={classes.SignIn}>
               <h1 style={{ fontSize: "24px" }}>Sign in</h1>
               <StyledFirebaseAuth
                  uiConfig={uiConfig}
                  firebaseAuth={firebase.auth()}
               />
            </div>
            <p className={classes.Term}>Peppers © 2021 | TASK MANAGEMENT</p>
            <p className={classes.Term}>
               This app get ideas UI from <strong>any.do</strong> site{" "}
            </p>
         </div>
      </section>
   );
};

export default SignIn;
