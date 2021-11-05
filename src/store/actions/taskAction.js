import * as actionTypes from "./actionTypes";
import taskApi from "../../api/taskApi";

export const toggleTaskList = (topic) => {
  return { type: actionTypes.TOGGLE_TASKLIST, topic };
};

export const addTask = (value) => {
  return { type: actionTypes.ADD_TASK, value };
};

export const deleteTask = (deleteIndex) => {
  return { type: actionTypes.DELETE_TASK, deleteIndex };
};

export const toggleCheck = (event, checkIndex) => {
  event.stopPropagation();
  return { type: actionTypes.TOGGLE_CHECK, checkIndex };
};

const fetchTasksStart = () => {
  return { type: actionTypes.FETCH_TASKS_START };
};

const fetchTasksSuccess = (tasks) => {
  return { type: actionTypes.FETCH_TASKS_SUCCESS, tasks };
};
const fetchTasksFailed = (err) => {
  return { type: actionTypes.FETCH_TASKS_FAILED, err };
};

export const fetchTasks = (token, userId) => {
  return (dispatch) => {
    dispatch(fetchTasksStart());

    // axios
    //    .get("groups/today/tasks.json")
    taskApi
      .getAllTasks(token, userId)
      .then((response) => {
        // console.log(response);
        const data = response.groups.today.tasks;
        const changedData = data.map((task) => {
          return {
            ...task,
            tag: {
              priority: task.tag.priority,
              important: task.tag.important,
              deadline: task.tag.deadline,
              trackback: task.tag.trackback,
              family: task.tag.family,
              personal: task.tag.personal,
            },
          };
        });
        dispatch(fetchTasksSuccess(changedData));
      })
      .catch((err) => {
        dispatch(fetchTasksFailed(err));
      });
  };
};

const pushTaskStart = () => {
  return { type: actionTypes.PUSH_TASK_START };
};
const pushTaskSuccess = () => {
  return { type: actionTypes.PUSH_TASK_SUCCESS };
};
const pushTaskFailed = (err) => {
  return { type: actionTypes.PUSH_TASK_FAILED, err };
};

export const pushTasks = (data, token, userId) => {
  return (dispatch) => {
    dispatch(pushTaskStart());
    taskApi
      .pushTasks(data, token, userId)
      .then((response) => {
        dispatch(pushTaskSuccess());
      })
      .catch((err) => {
        dispatch(pushTaskFailed());
      });
  };
};

export const activeTask = (activeIndex) => {
  return { type: actionTypes.ACTIVE_TASK, activeIndex };
};

export const editTitleTask = (editIndex, editValue) => {
  return { type: actionTypes.EDIT_TITLE_TASK, editIndex, editValue };
};

export const clearCompleted = () => {
  return { type: actionTypes.CLEAR_COMPLETED };
};

export const addTag = (keyTag) => {
  return { type: actionTypes.ADD_TAG, keyTag };
};

export const deleteTag = (keyTag) => {
  return { type: actionTypes.DELETE_TAG, keyTag };
};

export const sortTasks = () => {
  return { type: actionTypes.SORT_TASKS };
};
