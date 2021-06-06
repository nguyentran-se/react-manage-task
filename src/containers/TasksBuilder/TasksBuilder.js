import React, { Component } from "react";
import classes from "./TasksBuilder.css";
import Tasks from "../../components/Tasks/Tasks";
import { connect } from "react-redux";
import TaskAdding from "../../components/Tasks/TaskAdding/TaskAdding";
import * as actionCreators from "../../store/actions/index";
// import { Route, Switch } from "react-router-dom";
import WhiteBlock from "../../components/UI/WhiteBlock/WhiteBlock";
import TaskDetail from "../../components/Tasks/TaskDetail/TaskDetail";
// import axios from "../../axios-tasks";
import Spinner from "../../components/UI/Spinner/Spinner";
import Aux from "../../hoc/Auxilary/Auxilary";
export class TasksBuilder extends Component {
   componentDidMount() {
      this.props.fetchTasks();
   }

   render() {
      return (
         <section className={classes.TasksBuilder}>
            <WhiteBlock>
               {this.props.loading && <Spinner />}
               <Tasks
                  toggleTaskList={this.props.toggleTaskList}
                  groups={this.props.groups}
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
      groups: state.tsk.groups,
      loading: state.tsk.loading,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      toggleTaskList: (topic) => dispatch(actionCreators.toggleTaskList(topic)),
      addTask: (value) => dispatch(actionCreators.addTask(value)),
      fetchTasks: () => dispatch(actionCreators.fetchTasks()),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksBuilder);
