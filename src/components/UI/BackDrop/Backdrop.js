import React from "react";
import classes from "./Backdrop.css";
const Backdrop = (props) => {
   return (
      <div
         onClick={props.clicked}
         style={{
            opacity: props.showModal ? 0.4 : 0,
            visibility: props.showModal ? "visible" : "hidden",
         }}
         className={classes.Backdrop}></div>
   );
};

export default Backdrop;
