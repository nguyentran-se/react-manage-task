import React, { Component } from "react";
import DropDown from "../DropDown/DropDown";
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
         <div>
            <DropDown dropDown={this.state} showDropDown={this.showDropDown} />
         </div>
      );
   }
}

export default NavItems;
