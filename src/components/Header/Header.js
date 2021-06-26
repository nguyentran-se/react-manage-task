import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import themeClasses from "../../assets/styles/theme.css";
import Sun from "../UI/ToggleTheme/Sun/Sun";
import classes from "./Header.css";
import TimeBar from "./TimeBar/TimeBar";
import ToolBar from "./ToolBar/ToolBar";

const Header = (props) => {
   const { token, userId } = props;
   // toggle theme
   const [toggleTheme, setToggleTheme] = useState(
      localStorage.getItem("theme") === themeClasses.DarkMode ? true : false
   );

   useEffect(() => {
      const app = document.body.querySelector("#root div");
      if (toggleTheme) {
         app.classList.remove(themeClasses.LightMode);
         app.classList.add(themeClasses.DarkMode);
         localStorage.setItem("theme", themeClasses.DarkMode);
      } else {
         app.classList.remove(themeClasses.DarkMode);
         app.classList.add(themeClasses.LightMode);
         localStorage.setItem("theme", themeClasses.LightMode);
      }
   }, [toggleTheme]);

   return (
      <section className={classes.Header}>
         <TimeBar />
         <ToolBar token={token} userId={userId} />
         <div
            style={{ cursor: "pointer" }}
            onClick={() => {
               setToggleTheme(!toggleTheme);
            }}>
            <Sun toggle={toggleTheme} />
         </div>
      </section>
   );
};
const mapStateToProps = (state) => ({
   token: state.auth.token,
   userId: state.auth.userInfo.userId,
});

export default connect(mapStateToProps)(Header);
