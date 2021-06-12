import React from "react";
import classes from "./TimeInput.css";
const TimeInput = (props) => {
   const {
      placeholder,
      value,
      changed,
      inputCustom = [],
      disabledRest,
   } = props;
   let inputClasses = [classes.TimeInput];
   inputCustom.forEach((ele) => inputClasses.push(classes[ele]));
   if (disabledRest) inputClasses.push(classes.Disabled);
   return (
      <input
         className={inputClasses.join(" ")}
         placeholder={placeholder}
         value={value}
         onChange={changed}
         disabled={disabledRest}
         title={disabledRest ? "Missing time in work-in field" : undefined}
      />
   );
};

export default TimeInput;
