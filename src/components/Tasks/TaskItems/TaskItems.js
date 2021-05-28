import React from "react";
import classes from "./TaskItems.css";
import { BadgeCheckIcon } from "@heroicons/react/outline";

const TaskItems = ({ tasks, isSelected }) => {
   console.log(tasks);
   let transformedTasks = tasks.map((task, index) => (
      <div key={index} className={classes.ItemWrapper}>
         <div className={classes.Item}>
            <div className={classes.Content}>
               <BadgeCheckIcon className={classes.Icon} />
               <h4>{task.title}</h4>
            </div>
            <span>{task.tag}</span>
         </div>
      </div>
   ));
   return (
      <div
         style={
            isSelected ? { height: `${54 * tasks.length}px` } : { height: "0" }
         }
         className={classes.TasksList}>
         {transformedTasks}
      </div>
   );

   // return (
   //    <div className={classes.TasksList}>
   //       <div className={classes.ItemWrapper}>
   //          <div className={classes.Item}>
   //             <div className={classes.Content}>
   //                <BadgeCheckIcon className={classes.Icon} />
   //                <h4>title: dynamic testing</h4>
   //             </div>
   //             <span>Tag: dynamic Person</span>
   //          </div>
   //       </div>
   //    </div>
   // );
};

export default TaskItems;
