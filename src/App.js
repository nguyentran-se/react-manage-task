import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import classes from "./assets/styles/theme.css";
import TasksBuilder from "./containers/TasksBuilder/TasksBuilder";
import { Redirect, Route, Switch } from "react-router-dom";
class App extends Component {
   render() {
      return (
         <div className={`${classes.App}`}>
            <Layout>
               <Switch>
                  <Route path="/tasks" component={TasksBuilder} />
                  <Redirect exact from="/" to="/tasks/" />
               </Switch>
            </Layout>
         </div>
      );
   }
}

export default App;
