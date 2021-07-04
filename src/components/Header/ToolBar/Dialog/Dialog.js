import React from "react";
import classes from "./Dialog.css";
const Dialog = (props) => {
   const { isClicked, customInfo, customNoti, customSetting } = props;
   const dialogClasses = [classes.Dialog];
   if (customInfo) dialogClasses.push(classes.CustomInfo);
   if (customNoti) dialogClasses.push(classes.CustomNoti);
   if (isClicked) dialogClasses.push(classes.ShowDialog);
   if (customSetting) dialogClasses.push(classes.CustomSetting);
   return <div className={dialogClasses.join(" ")}>{props.children}</div>;
};

export default Dialog;
