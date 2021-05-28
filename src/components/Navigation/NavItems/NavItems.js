import React, { Component } from "react";
import DropDown from "../DropDown/DropDown";
import classes from "./NavItems.css";
class NavItems extends Component {
   state = {
      calendar: {
         selected: false,
         list: [],
      },
      shortcuts: {
         selected: true,
         list: ["today", "all tasks"],
      },
      lists: {
         selected: true,
         list: ["personal", "work"],
      },
      tags: {
         selected: true,
         list: ["priority"],
      },
      test: {
         selected: true,
         list: ["test"],
      },
      test2: {
         selected: true,
         list: ["test2", "test3"],
      },
      test3: {
         selected: true,
         list: ["test2", "test3"],
      },
      test4: {
         selected: true,
         list: ["test2", "test3"],
      },
   };

   showDropDown = (dropType) => {
      const state = { ...this.state };
      state[dropType] = { ...this.state[dropType] };
      state[dropType].selected = !this.state[dropType].selected;
      this.setState(state);
   };

   render() {
      console.log(this.state);
      console.log(this.state.calendar.list.length);
      return (
         <nav className={classes.Nav}>
            <ul>
               <DropDown
                  dropDown={this.state}
                  showDropDown={this.showDropDown}
               />
            </ul>
         </nav>
      );
   }
}

export default NavItems;
