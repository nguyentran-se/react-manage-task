import React from "react";
import classes from "./Button.css";
const Button = (props) => {
   const { btnType = [], marginLeft = "0", clickSend } = props;
   let buttonClasses = [classes.Button];
   btnType.forEach((type) => buttonClasses.push(classes[type]));

   return (
      <div
         style={{ marginLeft: marginLeft }}
         className={buttonClasses.join(" ")}
         onClick={clickSend}>
         {props.children}
      </div>
   );
};

export default Button;
