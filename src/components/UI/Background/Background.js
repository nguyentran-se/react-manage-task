import React from "react";
import classes from "./Background.css";
const Background = ({ src }) => {
  return (
    <div>
      <img className={classes.Background} src={src} alt="peppers" />
    </div>
  );
};

export default Background;
