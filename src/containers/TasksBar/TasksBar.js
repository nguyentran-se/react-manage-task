import React from "react";
import classes from "./TasksBar.css";
import {
   XCircleIcon,
   SwitchVerticalIcon,
   DotsCircleHorizontalIcon,
} from "@heroicons/react/outline";
function TasksBar(props) {
   return (
      <section className={classes.TasksBar}>
         <div className={classes.TasksBarItems}>
            <h3>
               Good Morning, Nguyên Trần{" "}
               <span role="img" aria-label="emote">
                  &#128582;
               </span>
            </h3>
            <div className={classes.Separate}></div>
            <div className={classes.Item}>
               <XCircleIcon className={classes.Icon} />
            </div>
            <div className={classes.Item}>
               <SwitchVerticalIcon className={classes.Icon} />
            </div>
            <div className={classes.Item}>
               <DotsCircleHorizontalIcon className={classes.Icon} />
            </div>
         </div>
      </section>
   );
}

export default TasksBar;
