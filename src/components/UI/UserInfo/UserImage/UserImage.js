import React from "react";
import userImage from "../../../../assets/images/photo.jpg";

function UserImage(props) {
   const style = {
      borderRadius: "50%",
      objectFit: "cover",
      width: "100px",
      height: "100px",
   };
   return (
      <div>
         <img alt="user avartar" style={style} src={userImage}></img>
      </div>
   );
}

export default UserImage;
