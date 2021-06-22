import React from "react";
import SideBar from "../../../components/Navigation/SideBar/SideBar";
import classes from "./MainLayoutRoute.css";
import Header from "../../../components/Header/Header";
import TaskBar from "../../../components/Tasks/TaskBar/TaskBar";
import { Route } from "react-router-dom";

const Layout = (props) => {
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

const MainLayoutRoute = ({ component: Component, ...rest }) => {
   return (
      <Route
         {...rest}
         render={(props) => (
            <Layout>
               <Component {...props} />
            </Layout>
         )}
      />
   );
};
export default MainLayoutRoute;
