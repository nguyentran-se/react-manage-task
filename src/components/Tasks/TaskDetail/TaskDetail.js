import { SunIcon } from "@heroicons/react/outline";
import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions/index";
import classes from "./TaskDetail.css";
const TaskDetail = (props) => {
   const { tasks, editTitleTask } = props;
   let editIndex;
   let activeItem;
   tasks.forEach((task, index) => {
      if (task.isActive) {
         editIndex = index;
         activeItem = task;
      }
   });
   //get value of activeItem
   let value = "";
   if (activeItem) value = activeItem.title;
   console.log("[TESTING]");
   return (
      <div className={classes.TaskDetail}>
         <div className={classes.Header}>
            <h3>Task Details</h3>
         </div>
         <div className={classes.Container}>
            <div className={classes.Input}>
               <input
                  type="text"
                  key={value} //bad practice should use controlled
                  defaultValue={value}
                  onBlur={(event) =>
                     editTitleTask(editIndex, event.target.value)
                  }
               />
            </div>
            <div className={classes.AddTag}>
               <div>Add Tag</div>
            </div>
            <div className={classes.RemindMe}>
               <h4>remind me</h4>
               <div className={classes.Option}>
                  <div className={classes.Item}>
                     <SunIcon className={classes.Icon} />
                     <span>Set time</span>
                  </div>
                  <div className={classes.Item}>
                     <SunIcon className={classes.Icon} />
                     <span>Tomorrow</span>
                  </div>
                  <div className={classes.Item}>
                     <SunIcon className={classes.Icon} />
                     <span>Next week</span>
                  </div>
                  <div className={classes.Item}>
                     <SunIcon className={classes.Icon} />
                     <span>Daily</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
const mapStateToProps = (state) => {
   return {
      tasks: state.tsk.groups.today.tasks,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      editTitleTask: (editIndex, editValue) =>
         dispatch(actionCreators.editTitleTask(editIndex, editValue)),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetail);
