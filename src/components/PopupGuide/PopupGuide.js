import React from "react";
import { useState } from "react";
import classes from "./PopupGuide.css";
import Button from "../UI/Button/Button";
const PopupGuide = () => {
   const [id, setId] = useState(0);
   const popupList = [
      {
         id: 0,
         content: "Add and delete your task here",
         style: {
            top: "200px",
            left: "320px",
            width: "430px",
            height: "450px",
            borderRadius: "10px",
         },
         popupStyle: {
            top: "140px",
            right: "-240px",
         },
      },
      {
         id: 1,
         content: "Edit your content of task here.",
         note: "NOTE: remember to select tag to edit",
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
      },
      {
         id: 2,
         content: "Delete all completed tasks and saving your work",
         note: "NOTE: remember to save your work before leaving page",
         style: {
            top: "138px",
            left: "593px",
            width: "138px",
            height: "39px",
            borderRadius: "0 20px 20px 0",
         },
         popupStyle: {
            top: "62px",
            left: "-33px",
         },
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
      },
   ];
   const btnClickHandler = () => {
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
                  <p className={popup.Content}>
                     {popup.content}
                     <br />
                     <br />
                     <span>{popup.note}</span>
                  </p>
                  <Button clicked={btnClickHandler} btnType={["ButtonPopup"]}>
                     OK, I got it!
                  </Button>
               </div>
            </div>
         )
   );
   return transformedPopup;
};

export default PopupGuide;
