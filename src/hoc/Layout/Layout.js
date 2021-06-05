import React from "react";
import SideBar from "../../components/Navigation/SideBar/SideBar";
import classes from "./Layout.css";
import Header from "../../components/Header/Header";
import TaskBar from "../../components/Tasks/TaskBar/TaskBar";

const layout = (props) => {
   return (
      <section className={classes.Layout}>
         <SideBar />
         <div className={classes.Main}>
            <Header />
            <TaskBar />
            <main>{props.children}</main>
         </div>
      </section>
   );
};

export default layout;
