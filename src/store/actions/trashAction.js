import * as actionTypes from "./actionTypes";
export const addToTrash = (task) => {
  return { type: actionTypes.ADD_TO_TRASH, payload: task };
};
