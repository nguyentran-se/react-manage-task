import React from "react";
import classes from "./SideBar.css";
import UserInfo from "../../UI/UserInfo/UserInfo";
import NavItems from "../NavItems/NavItems";
const SideBar = (props) => {
   return (
      <section className={classes.SideBar}>
         <UserInfo />
         <NavItems />
      </section>
   );
};

export default SideBar;
