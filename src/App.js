import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import classes from "./assets/styles/theme.css";
class App extends Component {
   render() {
      return (
         <div className={`${classes.App} ${classes.LightMode}`}>
            <Layout>
               <h1>Todo List</h1>
            </Layout>
         </div>
      );
   }
}

export default App;
