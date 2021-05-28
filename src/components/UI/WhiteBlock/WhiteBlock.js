import React from "react";
import classes from "./WhiteBlock.css";
const WhiteBlock = (props) => {
   return <div className={classes.WhiteBlock}>{props.children}</div>;
};

export default WhiteBlock;
