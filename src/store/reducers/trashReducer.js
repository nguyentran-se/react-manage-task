import * as actionTypes from "../actions/actionTypes";
const initialState = {
  trashTask: [],
  loading: false,
  error: null,
};

const trashReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_TO_TRASH:
      return {
        ...state,
        trashTask: [
          ...state.trashTask,
          { ...payload, isCompleted: true, isActive: false },
        ],
      };
    case actionTypes.FETCH_TRASH_START:
      return { ...state, loading: true };
    case actionTypes.FETCH_TRASH_SUCCESS:
      return {
        ...state,
        loading: false,
        trashTask: [...payload],
      };
    case actionTypes.FETCH_TRASH_FAILED:
      return { ...state, loading: false, error: payload };
    case actionTypes.DELETE_TRASH_TASK:
      return {
        ...state,
        trashTask: [...state.trashTask.filter((_, index) => index !== payload)],
      };
    default:
      return state;
  }
};

export default trashReducer;
