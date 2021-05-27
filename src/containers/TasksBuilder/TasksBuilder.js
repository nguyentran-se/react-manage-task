import React, { Component } from "react";
import classes from "./TasksBuilder.css";
import Tasks from "../../components/Tasks/Tasks";
import Calendar from "../../components/Calendar/Calendar";
import { connect } from "react-redux";
export class TasksBuilder extends Component {
   render() {
      const { today, tomorrow } = this.props.groups;
      console.log(today);
      return (
         <section className={classes.TasksBuilder}>
            <div className={classes.TasksWrapper}>
               <Tasks groups={this.props.groups} />
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
   return null;
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksBuilder);
