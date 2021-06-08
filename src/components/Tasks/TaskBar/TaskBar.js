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
   const { pushTasks, groups, iconLoading, isUpdated } = props;
   const iconClasses = [classes.Icon];
   if (iconLoading) iconClasses.push(classes.IconLoading);
   if (!isUpdated) iconClasses.push(classes.Disabled);
   // if (!isUpdated) {
   //    setTimeout(() => {
   //       iconClasses.push(classes.Disabled);
   //    }, 3000);
   // }

   return (
      <section className={classes.TasksBar}>
         <div className={classes.TasksBarItems}>
            <h3>
               Good Morning{" "}
               <span role="img" aria-label="emote">
                  &#128582;
               </span>
            </h3>
            <div className={classes.Separate}></div>
            <div className={classes.Item} title="Clear">
               <XCircleIcon className={classes.Icon} />
            </div>
            <div className={classes.Item} title="Sort">
               <SwitchVerticalIcon className={classes.Icon} />
            </div>
            <div
               onClick={() => isUpdated && pushTasks(groups)}
               style={{ cursor: !isUpdated && "not-allowed" }}
               className={classes.Item}
               title="Save tasks">
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
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      pushTasks: (groups) => dispatch(actionCreators.pushTasks(groups)),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksBar);
