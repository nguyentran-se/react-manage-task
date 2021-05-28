import React, { Component } from "react";
import classes from "./TasksBuilder.css";
import Tasks from "../../components/Tasks/Tasks";
import Calendar from "../../components/Calendar/Calendar";
import { connect } from "react-redux";
import TaskAdding from "../../components/Tasks/TaskAdding/TaskAdding";

export class TasksBuilder extends Component {
   render() {
      // const { today, tomorrow } = this.props.groups;
      // console.log(today);
      console.log(this.props.groups);
      return (
         <section className={classes.TasksBuilder}>
            <div className={classes.TasksWrapper}>
               <Tasks
                  toggleTaskList={this.props.toggleTaskList}
                  groups={this.props.groups}
               />
               <TaskAdding />
            </div>
            <div className={classes.CalendarWrapper}>
               <Calendar />
            </div>
         </section>
      );
   }
}
const mapStateToProps = (state) => {
   return {
      groups: state.groups,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      toggleTaskList: (topic) => dispatch({ type: "TOGGLE_TASKLIST", topic }),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksBuilder);
