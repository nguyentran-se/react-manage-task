import React from "react";
import Aux from "../Auxilary/Auxilary";
import SideBar from "../../components/Navigation/SideBar/SideBar";
import classes from "./Layout.css";
const layout = (props) => {
   return (
      <section className={classes.Layout}>
         <SideBar />
         <div>
            <div>header</div>
            <main>{props.children}</main>
         </div>
      </section>
   );
};

export default layout;
