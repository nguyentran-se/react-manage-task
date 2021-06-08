import React from "react";
import classes from "./TaskItems.css";
import { TrashIcon } from "@heroicons/react/outline";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions/index";

const TaskItems = (props) => {
   const { tasks, isSelected, deleteTask, toggleCheck, activeItem } = props;
   let transformedTasks = tasks.map((task, index) => {
      const itemClasses = [classes.ItemWrapper];
      if (task.isCompleted) itemClasses.push(classes.Completed);
      if (task.isActive) itemClasses.push(classes.Active);
      return (
         <div
            key={index}
            className={itemClasses.join(" ")}
            onClick={() => activeItem(index)}>
            <div className={classes.Item}>
               <div className={classes.Content}>
                  <CheckCircleIcon
                     className={classes.Icon}
                     onClick={(event) => toggleCheck(event, index)}
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
      );
   });
   return (
      <div
         style={
            isSelected
               ? {
                    height: `${56 * tasks.length}px`,
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
// const mapStateToProps = (state) => {
//    return {};
// };

const mapDispatchToProps = (dispatch) => {
   return {
      deleteTask: (index) => dispatch(actionCreators.deleteTask(index)),
      toggleCheck: (event, index) =>
         dispatch(actionCreators.toggleCheck(event, index)),
      activeItem: (index) => dispatch(actionCreators.activeTask(index)),
   };
};

export default connect(null, mapDispatchToProps)(TaskItems);
