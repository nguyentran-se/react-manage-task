import React from "react";
import classes from "./TaskItems.css";
import { BadgeCheckIcon } from "@heroicons/react/outline";

const TaskItems = ({ tasks }) => {
   console.log(tasks);
   let transformedTasks = tasks.map((task) => (
      <div className={classes.TasksList}>
         <div className={classes.ItemWrapper}>
            <div className={classes.Item}>
               <div className={classes.Content}>
                  <BadgeCheckIcon className={classes.Icon} />
                  <h4>{task.title}</h4>
               </div>
               <span>{task.tag}</span>
            </div>
         </div>
      </div>
   ));
   return transformedTasks;
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
