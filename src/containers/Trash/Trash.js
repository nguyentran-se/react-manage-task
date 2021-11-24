import React from "react";
import { connect } from "react-redux";
import Counter from "../../components/Counter/Counter";
import TaskItems from "../../components/Tasks/TaskItems/TaskItems";
import Spinner from "../../components/UI/Spinner/Spinner";
import WhiteBlock from "../../components/UI/WhiteBlock/WhiteBlock";
import classes from "./Trash.css";
// const DUMMY_TASKS = [
//   {
//     created: "10:59 on WED, July 7 2021",
//     isActive: false,
//     isCompleted: true,
//     prevIndex: 2,
//     tag: {
//       priority: {
//         bColor: "rgb(249, 210, 31)",
//         pick: true,
//       },
//       important: {
//         bColor: "#FF3D56",
//         pick: false,
//       },
//       deadline: {
//         bColor: "#FD7A4C",
//         pick: true,
//       },
//       trackback: {
//         bColor: "#2FC14A",
//         pick: false,
//       },
//       family: {
//         bColor: "#5DDB6A",
//         pick: false,
//       },
//       personal: {
//         pick: true,
//       },
//     },
//     title: "when add dependencies ",
//   },

//   {
//     created: "14:07 on WED, July 14 2021",
//     isActive: false,
//     isCompleted: true,
//     prevIndex: 7,
//     tag: {
//       priority: {
//         bColor: "rgb(249, 210, 31)",
//         pick: false,
//       },
//       important: {
//         bColor: "#FF3D56",
//         pick: false,
//       },
//       deadline: {
//         bColor: "#FD7A4C",
//         pick: false,
//       },
//       trackback: {
//         bColor: "#2FC14A",
//         pick: false,
//       },
//       family: {
//         bColor: "#5DDB6A",
//         pick: false,
//       },
//       personal: {
//         pick: true,
//       },
//     },
//     title: "test height sidebar playlist-item",
//   },
// ];
const Trash = ({ trashTask, loading }) => {
  return (
    <div className={classes.Trash}>
      <WhiteBlock>
        {loading && <Spinner />}
        <div className={classes.Header}>
          <h3>Trash</h3>
          <Counter length={trashTask.length} />
        </div>
        <TaskItems tasks={trashTask} isSelected isScrolled />
      </WhiteBlock>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    trashTask: state.trash.trashTask,
    loading: state.trash.loading,
  };
};

export default connect(mapStateToProps)(Trash);
