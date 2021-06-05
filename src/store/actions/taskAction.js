import * as actionTypes from "./actionTypes";
import axios from "../../axios-tasks";

export const toggleTaskList = (topic) => {
   return { type: actionTypes.TOGGLE_TASKLIST, topic };
};

export const addTask = (value) => {
   return { type: actionTypes.ADD_TASK, value };
};

export const deleteTask = (deleteIndex) => {
   return { type: actionTypes.DELETE_TASK, deleteIndex };
};

export const toggleCheck = (checkIndex) => {
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

export const fetchTasks = () => {
   return (dispatch) => {
      dispatch(fetchTasksStart());
      axios
         .get("today/tasks.json")
         .then((response) => {
            console.log(response.data);
            dispatch(fetchTasksSuccess(response.data));
         })
         .catch((err) => {
            dispatch(fetchTasksFailed(err));
         });
   };
};
