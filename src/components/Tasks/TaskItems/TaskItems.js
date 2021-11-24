import React, { useState } from "react";
import classes from "./TaskItems.css";
import { DotsCircleHorizontalIcon, TrashIcon } from "@heroicons/react/outline";
import { CheckCircleIcon, ReplyIcon } from "@heroicons/react/solid";
import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions/index";
import { useLocation } from "react-router";
import { PATH_NAME } from "../../../config/pathNames";
import Modal from "../../UI/Modal/Modal";

const TaskItems = ({
  tasks,
  isSelected,
  deleteTask,
  toggleCheck,
  activeItem,
  addToTrash,
  isScrolled,
  addTask,
  deleteTrashTask,
}) => {
  const location = useLocation().pathname;
  //   console.log(location);
  const [showModal, setShowModal] = useState(false);
  const trashHandler = (index) => {
    addToTrash(tasks[index]);
    deleteTask(index);
  };

  const undoHandler = (index) => {
    // console.log(tasks[index].title);
    addTask(tasks[index].title);
    deleteTrashTask(index);
  };

  let transformedTasks = tasks.map((task, index) => {
    const itemClasses = [classes.ItemWrapper];
    if (task.isCompleted) itemClasses.push(classes.Completed);
    if (task.isActive) itemClasses.push(classes.Active);
    //get tag title === true of obj tag
    const tagKey = [];
    for (const key in task.tag) {
      if (task.tag[key].pick) tagKey.push(key);
    }
    return (
      <div
        key={index}
        className={itemClasses.join(" ")}
        onClick={() => activeItem(index)}>
        <div className={classes.Item}>
          <div className={classes.Content}>
            <CheckCircleIcon
              className={classes.Icon}
              onClick={(event) => toggleCheck(event, index)}
            />
            <h4>{task.title}</h4>
          </div>
          {tagKey.map((key) => (
            <span key={key} style={{ color: task.tag[key].bColor }}>
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </span>
          ))}
          {location !== PATH_NAME.TRASH ? (
            <TrashIcon
              onClick={() => trashHandler(index)}
              className={classes.Trash}
            />
          ) : (
            // <ReplyIcon
            //   className={classes.UndoIcon}
            //   onClick={() => undoHandler(index)}
            // />
            <React.Fragment>
              <DotsCircleHorizontalIcon
                className={classes.UndoIcon}
                onClick={() => setShowModal(true)}
              />
              <Modal
                showModal={showModal}
                modalClosed={() => setShowModal(false)}>
                <div className={classes.Option}>
                  <h3>Options</h3>
                  <div className={classes.OptionButtons}>
                    <button onClick={() => undoHandler(index)}>
                      Undo To Your Task
                    </button>
                    <button onClick={() => deleteTrashTask(index)}>
                      Permanently Delete
                    </button>
                  </div>
                </div>
                <div
                  className={classes.Btn}
                  onClick={() => setShowModal(false)}>
                  Close
                </div>
              </Modal>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  });
  return (
    <div
      style={
        isSelected
          ? {
              height: `${57 * tasks.length}px`,
              visibility: "visible",
            }
          : {
              height: "0",
              visibility: "hidden",
            }
      }
      className={`${classes.TasksList} ${
        isScrolled ? classes.TasksListScroll : ""
      }`}>
      {transformedTasks}
    </div>
  );
};
// const mapStateToProps = (state) => {
//    return {};
// };

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTask: (index) => dispatch(actionCreators.deleteTask(index)),
    toggleCheck: (event, index) =>
      dispatch(actionCreators.toggleCheck(event, index)),
    activeItem: (index) => dispatch(actionCreators.activeTask(index)),
    addToTrash: (task) => dispatch(actionCreators.addToTrash(task)),
    addTask: (value) => dispatch(actionCreators.addTask(value)),
    deleteTrashTask: (index) => dispatch(actionCreators.deleteTrashTask(index)),
  };
};

export default connect(null, mapDispatchToProps)(TaskItems);
