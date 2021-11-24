import trashApi from "../../api/trashApi";
import * as actionTypes from "./actionTypes";
export const addToTrash = (task) => {
  return { type: actionTypes.ADD_TO_TRASH, payload: task };
};
const getTrashStart = () => {
  return { type: actionTypes.FETCH_TRASH_START };
};
const getTrashSuccess = (trashTask) => {
  return { type: actionTypes.FETCH_TRASH_SUCCESS, payload: trashTask };
};
const getTrashFailed = (errMsg) => {
  return { type: actionTypes.FETCH_TRASH_FAILED, payload: errMsg };
};
export const getTrashTasks = (userId) => {
  return async (dispatch) => {
    dispatch(getTrashStart());
    try {
      const trashTask = await trashApi.getTrashTasks(userId);
      dispatch(getTrashSuccess(trashTask));
    } catch (error) {
      dispatch(getTrashFailed(error.message));
    }
  };
};
