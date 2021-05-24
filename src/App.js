import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";

class App extends Component {
   render() {
      return (
         <div>
            <Layout>
               <h1>Todo List</h1>
            </Layout>
         </div>
      );
   }
}

export default App;
