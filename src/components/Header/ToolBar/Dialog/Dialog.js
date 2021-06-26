import React from "react";
import classes from "./Dialog.css";
const Dialog = (props) => {
   const { isClicked, customInfo, customNoti } = props;
   const dialogClasses = [classes.Dialog];
   if (customInfo) dialogClasses.push(classes.CustomInfo);
   if (customNoti) dialogClasses.push(classes.CustomNoti);
   if (isClicked) dialogClasses.push(classes.ShowDialog);

   return <div className={dialogClasses.join(" ")}>{props.children}</div>;
};

export default Dialog;
