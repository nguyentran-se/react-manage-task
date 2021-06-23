import React from "react";
import classes from "./Sun.css";

const Sun = (props) => {
   const { toggle } = props;
   const cloudClasses = [classes.Cloud];
   const sunClasses = [classes.Sun];
   if (toggle) {
      cloudClasses.push(classes.ShowCloud);
   } else {
      sunClasses.push(classes.ShowSun);
   }

   return (
      <div className={classes.Icon}>
         <div className={classes.Cloud}></div>
         {/* <div className={cloudClasses.join(" ")}></div> */}
         <div
            className={classes.Cloud}
            style={{
               opacity: toggle && 1,
               visibility: toggle && "visible",
               animationPlayState: toggle && "running",
            }}></div>
         <div className={sunClasses.join(" ")}>
            <div className={classes.Rays}></div>
         </div>
      </div>
   );
};

export default Sun;
