import * as actionTypes from "../actions/actionTypes";
const initialState = {
  taskTrash: [],
};

const trashReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_TO_TRASH:
      return {
        ...state,
        taskTrash: [
          ...state.taskTrash,
          { ...payload, isCompleted: true, isActive: false },
        ],
      };

    default:
      return state;
  }
};

export default trashReducer;
