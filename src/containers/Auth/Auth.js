import React from "react";
import Banner from "../../components/SignIn/Banner/Banner";
import SignIn from "../../components/SignIn/SignIn";
import classes from "./Auth.css";
const Auth = (props) => {
   return (
      <div className={classes.Auth}>
         <div className={classes.Container}>
            <div className={classes.Wrapper}>
               <Banner />
               <SignIn />
            </div>
         </div>
      </div>
   );
};

export default Auth;
