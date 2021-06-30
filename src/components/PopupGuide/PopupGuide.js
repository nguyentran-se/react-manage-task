import React from "react";
import { useState } from "react";
import classes from "./PopupGuide.css";
import Button from "../UI/Button/Button";
const PopupGuide = () => {
   const [id, setId] = useState(0);
   const popupList = [
      {
         id: 0,
         content: "Manage your tasks such as: ADD or DELETE here",
         style: {
            top: "200px",
            left: "320px",
            width: "430px",
            height: "450px",
            borderRadius: "10px",
         },
         popupStyle: {
            top: "140px",
            right: "-259px",
            width: "218px",
         },
         btnText: "OK, I got it!",
      },
      {
         id: 1,
         content:
            "Edit your content of task and add some tags to highlight your task",
         note: "Remember to select task to edit",
         style: {
            top: "200px",
            left: "790px",
            width: "430px",
            height: "450px",
            borderRadius: "10px",
         },
         popupStyle: {
            top: "140px",
            left: "-240px",
         },
         btnText: "Yah, next guide",
      },
      {
         id: 2,
         content: "Delete all completed tasks and save your work",
         note: "Remember to save your work before leaving page",
         style: {
            top: "138px",
            left: "593px",
            width: "138px",
            height: "39px",
            borderRadius: "0 20px 20px 0",
         },
         popupStyle: {
            top: "62px",
            left: "-46px",
            width: "222px",
         },
         btnText: "OK, I got it!",
      },
      {
         id: 3,
         content:
            "Set time to work with these tasks, then let's rest for a while",
         style: {
            top: "48px",
            left: "372px",
            width: "506px",
            height: "39px",
            borderRadius: "20px",
         },
         popupStyle: {
            top: "90px",
            left: "220px",
         },
         btnText: "Next for me",
      },
      {
         id: 4,
         content: "Send feedback, some tips and more features here",
         style: {
            top: "48px",
            left: "910px",
            width: "224px",
            height: "39px",
            borderRadius: "20px",
         },
         popupStyle: {
            top: "90px",
            left: "12px",
         },
         btnText: "OK, I got it!",
      },
   ];
   const btnClickHandler = () => {
      if (id === 4) localStorage.setItem("first-visit", false);
      setId((prevId) => prevId + 1);
   };
   // console.log(id);
   let transformedPopup = popupList.map(
      (popup) =>
         popup.id === id && (
            <div
               key={popup.id}
               className={classes.Container}
               style={popup.style}>
               <div className={classes.PopupGuide}></div>
               <div className={classes.Popup} style={popup.popupStyle}>
                  <p className={classes.Content}>
                     <span
                        style={{
                           color: "rgb(249, 210, 31)",
                           fontWeight: "600",
                        }}>
                        GUIDE:{" "}
                     </span>
                     {popup.content}
                     <br />
                     {popup.note && (
                        <span>
                           <span
                              style={{ color: "#FF3D56", fontWeight: "600" }}>
                              NOTE:{" "}
                           </span>
                           {popup.note}
                        </span>
                     )}
                  </p>
                  <Button clicked={btnClickHandler} btnType={["ButtonPopup"]}>
                     {popup.btnText}
                  </Button>
               </div>
            </div>
         )
   );
   return transformedPopup;
};

export default PopupGuide;
