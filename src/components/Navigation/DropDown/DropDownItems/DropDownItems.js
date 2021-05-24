import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./DropDownItems.css";

function DropDownItem({ items }) {
   return items.map((item, index) => (
      <NavLink
         className={classes.NavLink}
         activeClassName={classes.active}
         to={item}
         key={index}>
         {item}
      </NavLink>
   ));
}

export default DropDownItem;
