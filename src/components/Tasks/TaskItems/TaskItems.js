import React from "react";
import classes from "./TaskItems.css";
import { BadgeCheckIcon, TrashIcon } from "@heroicons/react/outline";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions/index";

const TaskItems = (props) => {
   const { tasks, isSelected, deleteTask, toggleCheck } = props;
   console.log(tasks);
   // const itemClasses = [classes.ItemWrapper];

   let transformedTasks = tasks.map((task, index) => (
      <div
         key={index}
         className={
            task.isCompleted
               ? [classes.ItemWrapper, classes.Completed].join(" ")
               : classes.ItemWrapper
         }>
         <div className={classes.Item}>
            <div className={classes.Content}>
               <CheckCircleIcon
                  className={classes.Icon}
                  onClick={() => toggleCheck(index)}
               />
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
};
const mapStateToProps = (state) => {
   return {};
};

const mapDispatchToProps = (dispatch) => {
   return {
      deleteTask: (index) => dispatch(actionCreators.deleteTask(index)),
      toggleCheck: (index) => dispatch(actionCreators.toggleCheck(index)),
   };
};

export default connect(null, mapDispatchToProps)(TaskItems);
