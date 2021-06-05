import React from "react";
import classes from "./TaskItems.css";
import { BadgeCheckIcon, TrashIcon } from "@heroicons/react/outline";

const TaskItems = ({ tasks, isSelected, deleteTask }) => {
   console.log(tasks);

   let transformedTasks = tasks.map((task, index) => (
      <div key={index} className={classes.ItemWrapper}>
         <div className={classes.Item}>
            <div className={classes.Content}>
               <BadgeCheckIcon className={classes.Icon} />
               <h4>{task.title}</h4>
            </div>
            <span>{task.tag}</span>
            <TrashIcon
               onClick={() => deleteTask(index)}
               className={classes.Trash}
            />
         </div>
      </div>
   ));
   return (
      <div
         style={
            isSelected
               ? {
                    height: `${54 * tasks.length}px`,
                    visibility: "visible",
                 }
               : {
                    height: "0",
                    visibility: "hidden",
                 }
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
