import {
   BellIcon,
   CogIcon,
   InformationCircleIcon,
   MailIcon,
} from "@heroicons/react/outline";
import React, { useRef, useState } from "react";
import stuffApi from "../../../api/stuffApi";
import clickOutSideHandler from "../../../helper/clickOutSideHandler";
import Button from "../../UI/Button/Button";
import Dialog from "./Dialog/Dialog";
import Notification from "./Notification/Notification";
import Tips from "./Tips/Tips";
import classes from "./ToolBar.css";

const ToolBar = (props) => {
   const { token, userId } = props;
   // clickoutside
   //icon clicked
   const [isInfoClicked, setIsInfoClicked] = useState(false);
   const [isMailClicked, setIsMailClicked] = useState(false);
   const [isNotiClicked, setIsNotiClicked] = useState(false);
   const infoClickHandler = (e) => {
      // console.log(wrapperInfoRef.current);
      // console.log(e.target);
      setIsInfoClicked(!isInfoClicked);
   };
   const mailClickHandler = (e) => {
      setIsMailClicked(!isMailClicked);
   };
   const notiClickHandler = (e) => {
      setIsNotiClicked(!isNotiClicked);
   };
   const wrapperInfoRef = useRef(null);
   const wrapperMailRef = useRef(null);
   const wrapperNotiRef = useRef(null);
   clickOutSideHandler(wrapperInfoRef, setIsInfoClicked);
   clickOutSideHandler(wrapperMailRef, setIsMailClicked);
   clickOutSideHandler(wrapperNotiRef, setIsNotiClicked);

   //send feedback
   const [msg, setMsg] = useState("");
   const sendMsg = () => {
      const data = {
         content: msg,
         date: new Date().toString(),
      };
      stuffApi
         .pushMsg(data, token, userId)
         .then((response) => {
            // console.log(response);
            setIsMailClicked(false);
            setMsg("");
         })
         .catch((e) => {});
   };
   return (
      <div className={classes.ToolBar}>
         <div className={classes.Item}>
            <CogIcon className={classes.Icon} />
         </div>
         <div className={classes.ItemWrapper} ref={wrapperNotiRef}>
            <div className={classes.Item} onClick={(e) => notiClickHandler(e)}>
               <BellIcon className={classes.Icon} />
            </div>
            <Dialog isClicked={isNotiClicked} customNoti>
               <Notification />
            </Dialog>
         </div>
         <div className={classes.ItemWrapper} ref={wrapperMailRef}>
            <div className={classes.Item} onClick={(e) => mailClickHandler(e)}>
               <MailIcon className={classes.Icon} />
            </div>
            <Dialog isClicked={isMailClicked}>
               <textarea
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  placeholder="Send feedback to Peppers to make this app better! Feel free cuz he will not know who u are."
               />
            </Dialog>
            <Button
               btnType={
                  isMailClicked ? ["ButtonMail"] : ["ButtonMail", "ButtonVisi"]
               }
               disabled={msg === "" ? true : false}
               clicked={msg === "" ? undefined : sendMsg}>
               Send
            </Button>
         </div>
         <div className={classes.ItemWrapper} ref={wrapperInfoRef}>
            <div className={classes.Item} onClick={(e) => infoClickHandler(e)}>
               <InformationCircleIcon className={classes.Icon} />
            </div>
            <Dialog isClicked={isInfoClicked} customInfo>
               <Tips />
            </Dialog>
         </div>
      </div>
   );
};

export default ToolBar;
