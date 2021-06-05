import React, { Component } from "react";
import classes from "./TasksBuilder.css";
import Tasks from "../../components/Tasks/Tasks";
import { connect } from "react-redux";
import TaskAdding from "../../components/Tasks/TaskAdding/TaskAdding";
import * as actionCreators from "../../store/actions/index";
import { Route, Switch } from "react-router-dom";
import WhiteBlock from "../../components/UI/WhiteBlock/WhiteBlock";
import TaskDetail from "../../components/Tasks/TaskDetail/TaskDetail";
export class TasksBuilder extends Component {
   render() {
      console.log(this.props.groups);
      return (
         <section className={classes.TasksBuilder}>
            <WhiteBlock>
               <Tasks
                  toggleTaskList={this.props.toggleTaskList}
                  groups={this.props.groups}
                  deleteTask={this.props.deleteTask}
                  activeTask={this.props.activeTask}
               />
               <TaskAdding addTask={this.props.addTask} />
            </WhiteBlock>
            <WhiteBlock>
               <TaskDetail />
            </WhiteBlock>
         </section>
      );
   }
}
const mapStateToProps = (state) => {
   return {
      groups: state.tasks.groups,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      toggleTaskList: (topic) => dispatch(actionCreators.toggleTaskList(topic)),
      addTask: (value) => dispatch(actionCreators.addTask(value)),
      deleteTask: (deleteIndex) =>
         dispatch(actionCreators.deleteTask(deleteIndex)),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksBuilder);
