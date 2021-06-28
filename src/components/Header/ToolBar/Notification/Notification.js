import React, { useState } from "react";
import classes from "./Notification.css";
import peppersImg from "../../../../assets/images/peppers.png";
import firebase from "firebase/app";
import "firebase/database";
import { useEffect } from "react";
import { connect } from "react-redux";
import getPresentDay from "../../../../helper/getPresentDay";
import sortObjectByValue from "../../../../helper/sortObjectByValue";
import Dialog from "../Dialog/Dialog";
import Aux from "../../../../hoc/Auxilary/Auxilary";
const Notification = (props) => {
   const { userId } = props;
   const [notification, setNotification] = useState({});
   let notificationFirebase = firebase
      .database()
      .ref(userId + "/notification/");
   useEffect(() => {
      //send noti welcome when first visit page
      if (!localStorage.getItem("first-visit")) {
         let noti = notificationFirebase.push();
         noti.set({
            content:
               "Welcome to Peppers. Hope that this will increase your productivity and motivation",
            date: getPresentDay.toString(),
            order: new Date().getTime(),
            isRead: false,
         });
      }
      //1. update noti when add noti from server
      notificationFirebase.on("value", (snapshot) => {
         let data = snapshot.val();
         //2. update date to noti  if noti has no data field
         Object.keys(data).forEach((keyId) => {
            // if data not contain date
            if (!data[keyId].date) {
               const updatedData = {
                  ...data[keyId],
                  date: getPresentDay.toString(),
                  order: new Date().getTime(),
                  isRead: false,
                  // date: getPresentDay.toString(),
               };
               data[keyId] = updatedData;
               // data[keyId].date = getPresentDay.toString();
               // data[keyId].order = new Date().getTime();
               // data[keyId].isRead = false;
               // update date to noti
               const updates = {};
               updates[keyId] = updatedData;
               notificationFirebase.update(updates);
            }
         });
         // console.log(data);
         setNotification(data);
      });
   }, []);
   //click then remove read
   const itemClickHandler = (key) => {
      const updatedNotification = {
         ...notification,
         [key]: { ...notification[key], isRead: true },
      };
      const updates = {};
      updates[key] = updatedNotification[key];
      notificationFirebase.update(updates);
      // notification
      setNotification(updatedNotification);
   };
   //count read element
   const countReadNotification = () => {
      return Object.keys(notification).filter(
         (key) => !notification[key].isRead
      ).length;
   };
   const markAllHandler = () => {
      const updatedNotification = { ...notification };
      Object.keys(notification).forEach((key) => {
         updatedNotification[key] = { ...notification[key], isRead: true };
      });
      notificationFirebase.update(updatedNotification);
      setNotification(updatedNotification);
   };
   let transformedNoti;
   if (notification)
      transformedNoti = sortObjectByValue(notification).map((key, index) => (
         <div
            className={
               notification[key].isRead
                  ? [classes.Item, classes.Read].join(" ")
                  : classes.Item
            }
            key={index}
            onClick={() => itemClickHandler(key)}>
            <img
               className={classes.Img}
               src={notification[key].img || peppersImg}
               alt="noti-img"
            />
            <div className={classes.Content}>
               <p>{notification[key].content}</p>
               <span>{notification[key].date}</span>
            </div>
            <div className={classes.BlueDot}></div>
         </div>
      ));
   return (
      <Aux>
         <Dialog isClicked={props.isClicked} customNoti>
            <div className={classes.Notification}>
               <div className={classes.Header}>
                  <h3>Notification</h3>
                  <h4 onClick={markAllHandler}>Mark all as read</h4>
               </div>
               <div className={classes.ListWrapper}>
                  <div className={classes.List}>{transformedNoti}</div>
               </div>
            </div>
         </Dialog>
         <div
            className={
               countReadNotification() > 0
                  ? classes.Count
                  : `${classes.Count} ${classes.HideCount}`
            }>
            {countReadNotification() > 0 && countReadNotification()}
         </div>
      </Aux>
   );
};
const mapStateToProps = (state) => ({
   userId: state.auth.userInfo.userId,
});

export default connect(mapStateToProps)(Notification);
