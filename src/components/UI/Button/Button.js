import React from "react";
import classes from "./Button.css";
const Button = ({ btnType = [], btnName, marginLeft = "0" }) => {
   let buttonClasses = [classes.Button];
   btnType.forEach((type) => buttonClasses.push(classes[type]));

   return (
      <div
         style={{ marginLeft: marginLeft }}
         className={buttonClasses.join(" ")}>
         {btnName}
      </div>
   );
};

export default Button;
