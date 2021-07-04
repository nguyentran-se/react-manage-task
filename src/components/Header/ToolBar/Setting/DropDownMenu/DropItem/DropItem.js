import React from "react";
import classes from "./DropItem.css";
import { ChevronRightIcon } from "@heroicons/react/outline";
const DropItem = (props) => {
   const { leftIcon, rightIcon, toMenu, goToMenuHandler } = props;
   return (
      <div
         className={classes.Wrapper}
         onClick={() => toMenu && goToMenuHandler(toMenu)}>
         <div className={classes.DropItem}>
            {leftIcon}
            {props.children}
            {rightIcon || <ChevronRightIcon className={classes.Icon} />}
         </div>
      </div>
   );
};

export default DropItem;
