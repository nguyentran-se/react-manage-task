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
import Setting from "./Setting/Setting";
import Tips from "./Tips/Tips";
import classes from "./ToolBar.css";
const ToolBar = (props) => {
   const { token, userId } = props;
   // clickoutside
   //icon clicked
   const [isSettingClicked, setIsSettingClicked] = useState(false);
   const [isNotiClicked, setIsNotiClicked] = useState(false);
   const [isMailClicked, setIsMailClicked] = useState(false);
   const [isInfoClicked, setIsInfoClicked] = useState(false);

   const settingClickHandler = (e) => {
      setIsSettingClicked(!isSettingClicked);
   };
   const notiClickHandler = (e) => {
      setIsNotiClicked(!isNotiClicked);
   };
   const mailClickHandler = (e) => {
      setIsMailClicked(!isMailClicked);
   };
   const infoClickHandler = (e) => {
      setIsInfoClicked(!isInfoClicked);
   };
   const wrapperSettingRef = useRef(null);
   const wrapperNotiRef = useRef(null);
   const wrapperMailRef = useRef(null);
   const wrapperInfoRef = useRef(null);
   clickOutSideHandler(wrapperSettingRef, setIsSettingClicked);
   clickOutSideHandler(wrapperNotiRef, setIsNotiClicked);
   clickOutSideHandler(wrapperMailRef, setIsMailClicked);
   clickOutSideHandler(wrapperInfoRef, setIsInfoClicked);

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
         <div className={classes.ItemWrapper} ref={wrapperSettingRef}>
            <div
               className={classes.Item}
               onClick={(e) => settingClickHandler(e)}>
               <CogIcon className={classes.Icon} />
            </div>
            <Setting isClicked={isSettingClicked} />
         </div>
         <div className={classes.ItemWrapper} ref={wrapperNotiRef}>
            <div className={classes.Item} onClick={(e) => notiClickHandler(e)}>
               <BellIcon className={classes.Icon} />
            </div>
            {/* <Dialog isClicked={isNotiClicked} customNoti> */}
            <Notification isClicked={isNotiClicked} />
            {/* </Dialog> */}
            {/* <div className={classes.Count}>3</div> */}
         </div>
         <div className={classes.ItemWrapper} ref={wrapperMailRef}>
            <div className={classes.Item} onClick={(e) => mailClickHandler(e)}>
               <MailIcon className={classes.Icon} />
            </div>
            <Dialog isClicked={isMailClicked}>
               <textarea
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  placeholder="Send feedback to Peppers to make this app better! Many thanks for your contributions!"
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
