import React, { useEffect, useState } from "react";
import Banner from "../../components/SignIn/Banner/Banner";
import SignIn from "../../components/SignIn/SignIn";
import classes from "./Auth.css";
import Preloader from "../../components/UI/Preloader/Preloader";
import { connect } from "react-redux";
const Auth = (props) => {
   const [preloader, setPreloader] = useState(true);
   useEffect(() => {
      console.log("AUTH");
      let timeout;
      if (props.isLogout) {
         console.log("AUTH-IF");
         timeout = setTimeout(() => setPreloader(false), 1500);
      }
      return () => {
         clearTimeout(timeout);
      };
   }, []);

   return (
      <div className={classes.Auth}>
         {preloader && props.isLogout && <Preloader />}
         <div className={classes.Container}>
            <div className={classes.Wrapper}>
               <Banner />
               <SignIn />
            </div>
         </div>
      </div>
   );
};
const mapStateToProps = (state) => ({
   isLogout: state.auth.isLogout,
});

export default connect(mapStateToProps)(Auth);
