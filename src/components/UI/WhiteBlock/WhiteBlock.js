import React from "react";
import classes from "./WhiteBlock.css";
const WhiteBlock = (props) => {
   const { customResponsive } = props;
   return (
      <div
         className={`${classes.WhiteBlock} ${
            customResponsive ? classes.Custom : undefined
         }`}>
         {props.children}
      </div>
   );
};

export default WhiteBlock;
