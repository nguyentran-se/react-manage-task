import React from "react";
import { ExclamationIcon } from "@heroicons/react/outline";
import classes from "./NotSupported.css";
const NotSupported = () => {
  return (
    <div>
      <ExclamationIcon className={classes.Icon} />
      <h3 className={classes.Notice}>
        This feature will be supported in future!
      </h3>
    </div>
  );
};

export default NotSupported;
