import React from "react";
import SideBar from "../../../components/Navigation/SideBar/SideBar";
import classes from "./MainLayoutRoute.css";
import Header from "../../../components/Header/Header";
import TaskBar from "../../../components/Tasks/TaskBar/TaskBar";
import { Route } from "react-router-dom";
import PopupGuide from "../../../components/PopupGuide/PopupGuide";
import { useEffect } from "react";
import { useState } from "react";
const Layout = (props) => {
   const [Guide, setGuide] = useState(true);
   useEffect(() => {
      if (localStorage.getItem("first-visit") === "false") {
         setGuide(false);
      }
   }, []);
   return (
      <section className={classes.Layout}>
         <SideBar />
         <div className={classes.Main}>
            {Guide && <PopupGuide />}
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
