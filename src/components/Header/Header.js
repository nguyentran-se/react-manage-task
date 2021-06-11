import React, { useEffect, useState, useRef } from "react";
import {} from "@heroicons/react/solid";
import {
   CogIcon,
   MailIcon,
   InformationCircleIcon,
   SearchIcon,
} from "@heroicons/react/outline";
import classes from "./Header.css";
// import Button from "../UI/Button/Button";
import themeClasses from "../../assets/styles/theme.css";
import Sun from "../UI/ToggleTheme/Sun/Sun";
import TimeBar from "./TimeBar/TimeBar";
import Button from "../UI/Button/Button";
import axios from "../../axios-tasks";

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
   const [clicked, setClicked] = useState(false);
   const [clicked2, setClicked2] = useState(false);

   // clickoutside
   const inputClickHandler = (e) => {
      setClicked(true);
   };
   const inputClickHandler2 = (e) => {
      setClicked2(true);
   };
   function clickOutSideHandler(ref, callback) {
      useEffect(() => {
         /**
          * Alert if clicked on outside of element
          */
         function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
               callback(false);
            }
         }
         // Bind the event listener
         document.addEventListener("mousedown", handleClickOutside);
         return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
         };
      }, [ref]);
   }

   const wrapperRef = useRef(null);
   const wrapperRef2 = useRef(null);
   clickOutSideHandler(wrapperRef, setClicked);
   clickOutSideHandler(wrapperRef2, setClicked2);

   // send msg
   const [msg, setMsg] = useState("");

   const sendMsg = () => {
      const data = {
         content: msg,
         date: new Date().toString(),
      };
      axios
         .post("/message.json", data)
         .then((response) => {
            console.log(response);
            setClicked(false);
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
               onClick={(e) => inputClickHandler(e)}
               ref={wrapperRef}>
               <MailIcon className={classes.Icon} />
               <div
                  className={
                     clicked
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
                     clicked ? ["ButtonPos"] : ["ButtonPos", "ButtonVisi"]
                  }
                  clickSend={sendMsg}>
                  Send
               </Button>
            </div>
            <div
               className={classes.Item}
               onClick={(e) => inputClickHandler2(e)}
               ref={wrapperRef2}>
               <InformationCircleIcon className={classes.Icon} />
               <div
                  className={
                     clicked2
                        ? `${classes.Dialog} ${classes.Custom} ${classes.ShowDialog}`
                        : `${classes.Dialog} ${classes.Custom}`
                  }>
                  Helloo, Đây là cách làm việc của mình các bạn có thể tham khảo
                  nha. Mình sẽ set time là 1hour 30min và rest in 15min. À nhớ
                  gạch bỏ completed task để có thêm nhiều motivation nha. Hope u
                  enjoy
                  <span role="img" aria-label="emoji">
                     &#128526;
                  </span>{" "}
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
