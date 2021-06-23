import React from "react";
import classes from "./Preloader.css";
import Backdrop from "../BackDrop/Backdrop";
import Aux from "../../../hoc/Auxilary/Auxilary";
const Preloader = () => {
   return (
      <Aux>
         <Backdrop showModal={true} customPreloader={true} />
         <div className={classes.Container}>
            <div className={classes.Text}>
               <div className={classes.Part1}>PEPPERS</div>
            </div>
            <div className={classes.Loader}>
               <div className={classes.Loading}></div>
            </div>
         </div>
      </Aux>
   );
};

export default Preloader;
