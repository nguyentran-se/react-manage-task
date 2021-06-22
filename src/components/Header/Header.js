import React, { useEffect, useState, useRef } from "react";
import {} from "@heroicons/react/solid";
import {
   CogIcon,
   MailIcon,
   InformationCircleIcon,
   SearchIcon,
} from "@heroicons/react/outline";
import classes from "./Header.css";
import themeClasses from "../../assets/styles/theme.css";
import Sun from "../UI/ToggleTheme/Sun/Sun";
import TimeBar from "./TimeBar/TimeBar";
import Button from "../UI/Button/Button";
import clickOutSideHandler from "../../helper/clickOutSideHandler";
import stuffApi from "../../api/stuffApi";

const Header = (props) => {
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
   const [mailClicked, setMailClicked] = useState(false);
   const [infoClicked, setInfoClicked] = useState(false);

   // clickoutside
   const mailClickHandler = (e) => {
      setMailClicked(true);
   };
   const infoClickHandler = (e) => {
      setInfoClicked(true);
   };

   const wrapperRef = useRef(null);
   const wrapperRef2 = useRef(null);
   clickOutSideHandler(wrapperRef, setMailClicked);
   clickOutSideHandler(wrapperRef2, setInfoClicked);

   // send msg
   const [msg, setMsg] = useState("");

   const sendMsg = () => {
      const data = {
         content: msg,
         date: new Date().toString(),
      };
      stuffApi
         .pushMsg(data)
         .then((response) => {
            // console.log(response);
            setMailClicked(false);
            setMsg("");
         })
         .catch((e) => {});
   };

   return (
      <section className={classes.Header}>
         <TimeBar />
         <div className={classes.HeaderItems}>
            <div className={classes.Item}>
               <CogIcon className={classes.Icon} />
            </div>
            <div
               className={classes.Item}
               onClick={(e) => mailClickHandler(e)}
               ref={wrapperRef}>
               <MailIcon className={classes.Icon} />
               <div
                  className={
                     mailClicked
                        ? `${classes.Dialog} ${classes.ShowDialog}`
                        : classes.Dialog
                  }>
                  <textarea
                     value={msg}
                     onChange={(e) => setMsg(e.target.value)}
                     placeholder="Send feedback to Peppers to make this app better! Feel free cuz he will not know who u are."
                  />
               </div>
               <Button
                  btnType={
                     mailClicked ? ["ButtonPos"] : ["ButtonPos", "ButtonVisi"]
                  }
                  disabled={msg === "" ? true : false}
                  clicked={msg === "" ? undefined : sendMsg}>
                  Send
               </Button>
            </div>
            <div
               className={classes.Item}
               onClick={(e) => infoClickHandler(e)}
               ref={wrapperRef2}>
               <InformationCircleIcon className={classes.Icon} />
               <div
                  className={
                     infoClicked
                        ? `${classes.Dialog} ${classes.Custom} ${classes.ShowDialog}`
                        : `${classes.Dialog} ${classes.Custom}`
                  }>
                  <div
                     style={{
                        textAlign: "center",
                        fontWeight: "var(--fw-medium-level)",
                     }}>
                     Some tips and guides
                  </div>
                  <span>
                     1. Set time both work & rest to get the most efficient.
                     Time recommendation: work - 1h30min & rest - 15min{" "}
                     <span role="img" aria-label="emoji">
                        &#9200;
                     </span>
                  </span>
                  <br />
                  <span>
                     2. Remember to clear completed task to get more motivation{" "}
                     <span role="img" aria-label="emoji">
                        &#127891;
                     </span>
                  </span>
                  <br />
                  <span>
                     3. Try listening some chill songs to have more
                     concentrating{" "}
                     <span role="img" aria-label="emoji">
                        &#127926;
                     </span>
                  </span>
                  <br />
                  <span>
                     4. To edit task (or add tag): click task, then editting in
                     task-detail{" "}
                     <span role="img" aria-label="emoji">
                        &#128195;
                     </span>
                  </span>
                  <br />
                  <div
                     style={{
                        textAlign: "center",
                        fontWeight: "var(--fw-medium-level)",
                     }}>
                     Hope u enjoy{" "}
                     <span role="img" aria-label="emoji">
                        &#128519;
                     </span>
                  </div>
               </div>
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
            <Sun toggle={toggleTheme} />
         </div>
      </section>
   );
};

export default Header;
