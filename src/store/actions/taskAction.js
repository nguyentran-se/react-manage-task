import * as actionTypes from "./actionTypes";

export const toggleTaskList = (topic) => {
   return { type: actionTypes.TOGGLE_TASKLIST, topic };
};

export const addTask = (value) => {
   return { type: actionTypes.ADD_TASK, value };
};

export const deleteTask = (deleteIndex) => {
   return { type: actionTypes.DELETE_TASK, deleteIndex };
};
