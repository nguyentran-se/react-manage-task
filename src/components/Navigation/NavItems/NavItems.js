import React, { Component } from "react";
import DropDown from "../DropDown/DropDown";
import classes from "./NavItems.css";
class NavItems extends Component {
  state = {
    calendar: {
      selected: false,
      list: [],
      path: "calendar",
    },
    shortcuts: {
      selected: true,
      list: ["today", "trash"],
    },
    // lists: {
    //    selected: true,
    //    list: ["personal", "work"],
    // },
    // tags: {
    //    selected: true,
    //    list: ["priority"],
    // },
  };

  showDropDown = (dropType) => {
    const state = { ...this.state };
    state[dropType] = { ...this.state[dropType] };
    state[dropType].selected = !this.state[dropType].selected;
    this.setState(state);
  };

  render() {
    return (
      <nav className={classes.Nav}>
        <ul>
          <DropDown dropDown={this.state} showDropDown={this.showDropDown} />
        </ul>
      </nav>
    );
  }
}

export default NavItems;
