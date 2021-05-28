import React, { Component } from "react";
import classes from "./TasksBuilder.css";
import Tasks from "../../components/Tasks/Tasks";
import { connect } from "react-redux";
import TaskAdding from "../../components/Tasks/TaskAdding/TaskAdding";
import * as actionTypes from "../../store/actions";
import { Route, Switch } from "react-router-dom";
import WhiteBlock from "../../components/UI/WhiteBlock/WhiteBlock";
import Calendar from "../../components/Calendar/Calendar";
export class TasksBuilder extends Component {
   render() {
      console.log(this.props.match.path);
      // const { today, tomorrow } = this.props.groups;
      // console.log(today);
      console.log(this.props.groups);
      return (
         <section className={classes.TasksBuilder}>
            <Switch>
               <Route
                  path={this.props.match.path + "/trash"}
                  component={() => (
                     <WhiteBlock>
                        <p>TRASH</p>
                     </WhiteBlock>
                  )}
               />
               <Route
                  path={this.props.match.path}
                  component={() => (
                     <WhiteBlock>
                        <Tasks
                           toggleTaskList={this.props.toggleTaskList}
                           groups={this.props.groups}
                           deleteTask={this.props.deleteTask}
                           activeTask={this.props.activeTask}
                        />
                        <TaskAdding addTask={this.props.addTask} />
                     </WhiteBlock>
                  )}
               />
            </Switch>
            <Route
               path={this.props.match.path + "/calendar"}
               component={() => (
                  <WhiteBlock>
                     <Calendar />
                  </WhiteBlock>
               )}
            />
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
      toggleTaskList: (topic) =>
         dispatch({ type: actionTypes.TOGGLE_TASKLIST, topic }),
      addTask: (value) => dispatch({ type: actionTypes.ADD_TASK, value }),
      deleteTask: (deleteIndex) =>
         dispatch({ type: actionTypes.DELETE_TASK, deleteIndex }),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksBuilder);
