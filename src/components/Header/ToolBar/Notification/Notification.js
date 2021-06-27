import React from "react";
import classes from "./Notification.css";
import banner3 from "../../../../assets/images/banner/banner-3.jpg";

const Notification = () => {
   return (
      <div className={classes.Notification}>
         <div className={classes.Header}>
            <h3>Notification</h3>
            <h4>Mark all as read</h4>
         </div>
         <div className={classes.ListWrapper}>
            <div className={classes.List}>
               <div className={classes.Item}>
                  <img className={classes.Img} src={banner3} alt="noti-img" />
                  <div className={classes.Content}>
                     <p>
                        Thiện Vũ đã nhắc tới bạn trong một bình luận.Thiện Vũ đã
                        nhắc tới bạn trong một bình luận.
                     </p>
                     <span>time</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Notification;
