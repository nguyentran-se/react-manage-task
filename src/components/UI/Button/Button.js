import React from "react";
import classes from "./Button.css";
const Button = (props) => {
   const { btnType = [], marginLeft = "0", clicked } = props;
   let buttonClasses = [classes.Button];
   btnType.forEach((type) => buttonClasses.push(classes[type]));

   return (
      <div
         style={{ marginLeft: marginLeft }}
         className={buttonClasses.join(" ")}
         onClick={clicked}>
         {props.children}
      </div>
   );
};

export default Button;
