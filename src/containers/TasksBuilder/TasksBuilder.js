import React, { Component } from "react";
import classes from "./TasksBuilder.css";
import Tasks from "../../components/Tasks/Tasks";
import { connect } from "react-redux";
import TaskAdding from "../../components/Tasks/TaskAdding/TaskAdding";
import * as actionCreators from "../../store/actions/index";
// import { Route, Switch, Prompt } from "react-router-dom";
import WhiteBlock from "../../components/UI/WhiteBlock/WhiteBlock";
import TaskDetail from "../../components/Tasks/TaskDetail/TaskDetail";
// import axios from "../../axios-tasks";
import Spinner from "../../components/UI/Spinner/Spinner";

// import Aux from "../../hoc/Auxilary/Auxilary";
export class TasksBuilder extends Component {
   componentDidMount() {
      this.props.fetchTasks(this.props.token, this.props.userId);
      if (!localStorage.getItem("first-visit"))
         localStorage.setItem("first-visit", true);
   }
   componentDidUpdate() {
      if (this.props.isUpdated)
         window.onbeforeunload = () => "You have unsaved changes";
      else window.onbeforeunload = undefined;
   }

   render() {
      return (
         <section className={classes.TasksBuilder}>
            {/* <Prompt
                     //Block route when have unsaved changes
                     when={this.props.isUpdated}
                     message="You have not save tasks"
                  /> */}
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
      isUpdated: state.tsk.isUpdated,
      token: state.auth.token,
      userId: state.auth.userInfo.userId,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      toggleTaskList: (topic) => dispatch(actionCreators.toggleTaskList(topic)),
      addTask: (value) => dispatch(actionCreators.addTask(value)),
      fetchTasks: (token, userId) =>
         dispatch(actionCreators.fetchTasks(token, userId)),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksBuilder);
