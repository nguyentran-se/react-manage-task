import React from "react";
import classes from "./Counter.css";
const Counter = ({ length }) => {
  return <div className={classes.Counter}>{length}</div>;
};

export default Counter;
