import React from "react";
import Aux from "../Auxilary/Auxilary";
import SideBar from "../../components/Navigation/SideBar/SideBar";
import classes from "./Layout.css";
import Header from "../../components/UI/Header/Header";

const layout = (props) => {
   return (
      <section className={classes.Layout}>
         <SideBar />
         <div className={classes.Main}>
            <div>header</div>
            <main>{props.children}</main>
         </div>
      </section>
   );
};

export default layout;
