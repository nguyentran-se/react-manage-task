import { ArrowSmLeftIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import classes from "./DropDownMenu.css";
import DropItem from "./DropItem/DropItem";
const titleMenu = {
   main: "Settings",
   myProfile: "My Profile",
   background: "Background",
   language: "Language",
   aboutMe: "About",
};
const DropDownMenu = (props) => {
   const [activeMenu, setActiveMenu] = useState("main");
   const [menuHeight, setMenuHeight] = useState(164);

   const goToMenuHandler = (toMenu) => {
      setActiveMenu(toMenu);
   };
   const parseClassNames = (name) => {
      return {
         enter: classes[name + "Enter"],
         enterActive: classes[name + "EnterActive"],
         exit: classes[name + "Exit"],
         exitActive: classes[name + "ExitActive"],
      };
   };
   const calcHeight = (el) => {
      const height = el.offsetHeight;
      // console.log(height);
      setMenuHeight(height);
   };
   return (
      <React.Fragment>
         <div className={classes.Header}>
            {activeMenu !== "main" && (
               <ArrowSmLeftIcon
                  className={classes.Icon}
                  onClick={() => setActiveMenu("main")}
               />
            )}
            <h3>{titleMenu[activeMenu]}</h3>
         </div>
         <div className={classes.DropDownMenu} style={{ height: menuHeight }}>
            <CSSTransition
               in={activeMenu === "main"}
               timeout={300}
               unmountOnExit
               classNames={parseClassNames("MainMenu")}
               onEnter={calcHeight}>
               <div className={classes.Menu}>
                  <DropItem
                     toMenu="myProfile"
                     goToMenuHandler={goToMenuHandler}>
                     My Profile
                  </DropItem>
                  <DropItem
                     toMenu="background"
                     goToMenuHandler={goToMenuHandler}>
                     Background
                  </DropItem>
                  <DropItem toMenu="language" goToMenuHandler={goToMenuHandler}>
                     Language
                  </DropItem>
                  <DropItem toMenu="aboutMe" goToMenuHandler={goToMenuHandler}>
                     About
                  </DropItem>
               </div>
            </CSSTransition>
            <CSSTransition
               in={activeMenu === "myProfile"}
               timeout={300}
               unmountOnExit
               classNames={parseClassNames("SubMenu")}
               onEnter={calcHeight}>
               <div className={classes.Menu}>
                  <DropItem rightIcon>Your name: HongNhung</DropItem>
                  <DropItem rightIcon>
                     Your email: HongNhung@HonRon.Erin
                  </DropItem>
               </div>
            </CSSTransition>
            <CSSTransition
               in={activeMenu === "background"}
               timeout={300}
               unmountOnExit
               classNames={parseClassNames("SubMenu")}
               onEnter={calcHeight}>
               <div className={classes.Menu}>
                  <DropItem rightIcon>Some backgrounds will be here</DropItem>
               </div>
            </CSSTransition>
            <CSSTransition
               in={activeMenu === "language"}
               timeout={300}
               unmountOnExit
               classNames={parseClassNames("SubMenu")}
               onEnter={calcHeight}>
               <div className={classes.Menu}>
                  <DropItem rightIcon>Language here</DropItem>
               </div>
            </CSSTransition>
            <CSSTransition
               in={activeMenu === "aboutMe"}
               timeout={300}
               unmountOnExit
               classNames={parseClassNames("SubMenu")}
               onEnter={calcHeight}>
               <div className={classes.Menu}>
                  <DropItem rightIcon>Hi I'm Peppers</DropItem>
               </div>
            </CSSTransition>
         </div>
      </React.Fragment>
   );
};

export default DropDownMenu;
