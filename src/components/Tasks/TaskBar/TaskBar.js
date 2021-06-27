import React from "react";
import classes from "./TaskBar.css";
import {
   XCircleIcon,
   SwitchVerticalIcon,
   // DotsCircleHorizontalIcon,
   RefreshIcon,
} from "@heroicons/react/outline";
import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions/index";

const TasksBar = (props) => {
   const {
      pushTasks,
      groups,
      iconLoading,
      isUpdated,
      clearCompleted,
      userInfo,
      token,
   } = props;
   const iconClasses = [classes.Icon];
   if (iconLoading) iconClasses.push(classes.IconLoading);
   if (!isUpdated) iconClasses.push(classes.Disabled);
   let name;
   let userId;
   if (userInfo.displayName) {
      name = userInfo.displayName.split(" ")[0];
      userId = userInfo.userId;
   }
   // if (!isUpdated) {
   //    setTimeout(() => {
   //       iconClasses.push(classes.Disabled);
   //    }, 3000);
   // }
   const hasCompleted = groups.today.tasks.some((task) => task.isCompleted);

   return (
      <section className={classes.TasksBar}>
         <div className={classes.TasksBarItems}>
            <h3>
               Have a nice day, {name}
               {/* <span role="img" aria-label="emote">
                  &#128582;
               </span> */}
            </h3>
            <div className={classes.Separate}></div>
            <div
               title="Clear"
               className={classes.Item}
               onClick={() => clearCompleted()}
               style={{ cursor: !hasCompleted && "not-allowed" }}>
               <XCircleIcon
                  className={
                     hasCompleted
                        ? classes.Icon
                        : `${classes.Icon} ${classes.Disabled}`
                  }
               />
            </div>
            <div className={classes.Item} title="Sort">
               <SwitchVerticalIcon className={classes.Icon} />
            </div>
            <div
               title="Save tasks"
               className={classes.Item}
               onClick={() => isUpdated && pushTasks(groups, token, userId)}
               style={{ cursor: !isUpdated && "not-allowed" }}>
               <RefreshIcon className={iconClasses.join(" ")} />
            </div>
            {/* <div className={classes.Item}>
               <DotsCircleHorizontalIcon className={classes.Icon} />
            </div> */}
         </div>
      </section>
   );
};
const mapStateToProps = (state) => {
   return {
      groups: state.tsk.groups,
      iconLoading: state.tsk.iconLoading,
      isUpdated: state.tsk.isUpdated,
      token: state.auth.token,
      userInfo: state.auth.userInfo,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      pushTasks: (groups, token, userId) =>
         dispatch(actionCreators.pushTasks(groups, token, userId)),
      clearCompleted: () => dispatch(actionCreators.clearCompleted()),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksBar);
