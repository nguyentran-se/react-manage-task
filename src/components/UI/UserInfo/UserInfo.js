import React from "react";
import UserImage from "./UserImage/UserImage";
import classes from "./UserInfo.css";

function UserInfo(props) {
   return (
      <div className={classes.UserInfo}>
         <UserImage />
         <div className={classes.UserName}>
            <h3>Nguyên Trần</h3>
            <span>Manage tasks</span>
         </div>
      </div>
   );
}

export default UserInfo;
