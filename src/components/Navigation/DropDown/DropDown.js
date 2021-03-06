import React from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import classes from "./DropDown.css";
import DropDownItems from "./DropDownItems/DropDownItems";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
function DropDown({ dropDown, showDropDown }) {
  const dropDownArray = [];
  for (const dropItem in dropDown) {
    dropDownArray.push(dropItem);
  }

  // if (.howDrop) classDrop.push(classes.ShowDrop);

  let transformedDropDown = dropDownArray.map((dropItem) => {
    return (
      <li
        className={
          dropDown[dropItem].selected
            ? [classes.DropDown, classes.ShowDrop].join(" ")
            : classes.DropDown
        }
        key={dropItem}>
        <div className={classes.DropHeader}>
          {dropDown[dropItem].path ? (
            <Link to={dropDown[dropItem].path}>{dropItem}</Link>
          ) : (
            <h3 className={classes.Heading}>{dropItem}</h3>
          )}
          {dropDown[dropItem].list.length > 0 && (
            <ChevronDownIcon
              onClick={() => showDropDown(dropItem)}
              className={classes.Icon}
            />
          )}
        </div>
        {dropDown[dropItem].list.length > 0 && (
          <CSSTransition
            timeout={300}
            in={dropDown[dropItem].selected}
            // mountOnEnter
            unmountOnExit
            classNames={{
              enter: classes["Animation-enter"],
              enterActive: classes["Animation-enter-active"],
              exit: classes["Animation-exit"],
              exitActive: classes["Animation-exit-active"],
            }}>
            <div
              className={classes.DropBody}
              style={{
                height: `${dropDown[dropItem].list.length * 37}px`,
              }}>
              <DropDownItems items={dropDown[dropItem].list} />
            </div>
          </CSSTransition>
        )}
        <div
          style={{
            height: "22px",
          }}></div>
      </li>
    );
  });
  return transformedDropDown;
  // return null;
}
/* <div
                  className={classes.DropBody}
                  style={{
                     height: dropDown[dropItem].selected
                        ? `${dropDown[dropItem].list.length * 37}px`
                        : 0,
                  }}>
                  <DropDownItems items={dropDown[dropItem].list} />
               </div> */
export default DropDown;
