import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import classes from "./DropDown.css";
import DropDownItems from "./DropDownItems/DropDownItems";
function DropDown({ dropDown, showDropDown }) {
   const dropDownArray = [];
   for (const dropItem in dropDown) {
      dropDownArray.push(dropItem);
   }
   console.log(dropDown);
   console.log(dropDownArray);

   // if (.howDrop) classDrop.push(classes.ShowDrop);

   let transformedDropDown = dropDownArray.map((dropItem) => {
      return (
         <div
            className={
               dropDown[dropItem].selected
                  ? [classes.DropDown, classes.ShowDrop].join(" ")
                  : classes.DropDown
            }
            key={dropItem}>
            <div className={classes.DropHeader}>
               <h3 className={classes.Heading}>{dropItem}</h3>
               {dropDown[dropItem].list.length > 0 && (
                  <ChevronDownIcon
                     onClick={() => showDropDown(dropItem)}
                     className={classes.Icon}
                  />
               )}
            </div>
            <div className={classes.DropBody}>
               <DropDownItems items={dropDown[dropItem].list} />
            </div>
         </div>
      );
   });
   return transformedDropDown;
   // return null;
}

export default DropDown;
