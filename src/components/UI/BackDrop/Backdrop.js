import React from "react";
import classes from "./Backdrop.css";
const Backdrop = (props) => {
   let backdropClasses = [classes.Backdrop];
   const { customPreloader } = props;
   if (customPreloader) backdropClasses.push(classes.CustomPreloader);
   return (
      <div
         onClick={props.clicked}
         style={{
            opacity: props.showModal ? 0.4 : 0,
            visibility: props.showModal ? "visible" : "hidden",
         }}
         className={backdropClasses.join(" ")}></div>
   );
};

export default Backdrop;
