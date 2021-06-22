import React from "react";
import Banner from "../../components/Login/Banner/Banner";
import Login from "../../components/Login/Login";
import classes from "./Auth.css";
const Auth = (props) => {
   return (
      <div className={classes.Auth}>
         <div className={classes.Container}>
            <div className={classes.Wrapper}>
               <Banner />
               <Login />
            </div>
         </div>
      </div>
   );
};

export default Auth;
