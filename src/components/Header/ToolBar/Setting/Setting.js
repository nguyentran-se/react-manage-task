import React from "react";
import Dialog from "../Dialog/Dialog";
import classes from "./Setting.css";
import DropDownMenu from "./DropDownMenu/DropDownMenu";
const Setting = (props) => {
   return (
      <Dialog isClicked={props.isClicked} customSetting>
         <DropDownMenu />
      </Dialog>
   );
};

export default Setting;
