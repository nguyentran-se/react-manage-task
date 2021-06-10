import React, { useEffect, useState } from "react";
import {} from "@heroicons/react/solid";
import {
   CogIcon,
   MailIcon,
   InformationCircleIcon,
   SearchIcon,
} from "@heroicons/react/outline";
import classes from "./Header.css";
import Button from "../UI/Button/Button";
import themeClasses from "../../assets/styles/theme.css";
import Sun from "../UI/ToggleTheme/Sun/Sun";
import TimeBar from "./TimeBar/TimeBar";
const Header = (props) => {
   const [toggleTheme, setToggleTheme] = useState(false);
   useEffect(() => {
      const app = document.body.querySelector("#root div");
      if (toggleTheme) {
         app.classList.remove(themeClasses.LightMode);
         app.classList.add(themeClasses.DarkMode);
      } else {
         app.classList.remove(themeClasses.DarkMode);
         app.classList.add(themeClasses.LightMode);
      }
   }, [toggleTheme]);

   return (
      <section className={classes.Header}>
         <TimeBar />
         <div className={classes.HeaderItems}>
            <div className={classes.Item}>
               <CogIcon className={classes.Icon} />
            </div>
            <div className={classes.Item}>
               <MailIcon className={classes.Icon} />
            </div>
            <div className={classes.Item}>
               <InformationCircleIcon className={classes.Icon} />
            </div>
            <div className={classes.Item}>
               <SearchIcon className={classes.Icon} />
            </div>
         </div>
         <div
            style={{ cursor: "pointer" }}
            onClick={() => {
               setToggleTheme(!toggleTheme);
            }}>
            {/* <Button btnName="Go Premium" marginLeft="40px" /> */}
            <Sun toggle={toggleTheme} />
         </div>
      </section>
   );
};

export default Header;
