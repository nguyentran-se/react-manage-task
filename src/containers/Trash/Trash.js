import React from "react";
import { connect } from "react-redux";
import TaskItems from "../../components/Tasks/TaskItems/TaskItems";
import Tasks from "../../components/Tasks/Tasks";
import WhiteBlock from "../../components/UI/WhiteBlock/WhiteBlock";
import classes from "./Trash.css";
const DUMMY_TASKS = [
  {
    created: "10:59 on WED, July 7 2021",
    isActive: false,
    isCompleted: true,
    prevIndex: 2,
    tag: {
      priority: {
        bColor: "rgb(249, 210, 31)",
        pick: true,
      },
      important: {
        bColor: "#FF3D56",
        pick: false,
      },
      deadline: {
        bColor: "#FD7A4C",
        pick: true,
      },
      trackback: {
        bColor: "#2FC14A",
        pick: false,
      },
      family: {
        bColor: "#5DDB6A",
        pick: false,
      },
      personal: {
        pick: true,
      },
    },
    title: "when add dependencies ",
  },

  {
    created: "14:07 on WED, July 14 2021",
    isActive: false,
    isCompleted: true,
    prevIndex: 7,
    tag: {
      priority: {
        bColor: "rgb(249, 210, 31)",
        pick: false,
      },
      important: {
        bColor: "#FF3D56",
        pick: false,
      },
      deadline: {
        bColor: "#FD7A4C",
        pick: false,
      },
      trackback: {
        bColor: "#2FC14A",
        pick: false,
      },
      family: {
        bColor: "#5DDB6A",
        pick: false,
      },
      personal: {
        pick: true,
      },
    },
    title: "test height sidebar playlist-item",
  },
];
const Trash = ({ taskTrash }) => {
  return (
    <div className={classes.Trash}>
      <WhiteBlock>
        <div className={classes.Header}>
          <h3>Trash</h3>
        </div>
        <TaskItems tasks={taskTrash} isSelected isScrolled />
      </WhiteBlock>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    taskTrash: state.trash.taskTrash,
  };
};
export default connect(mapStateToProps)(Trash);
