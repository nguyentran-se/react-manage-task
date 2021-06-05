import * as actionTypes from "../actions/actionTypes";
const initialState = {
   loading: false,
   groups: {
      today: {
         isSelected: true,
         tasks: [],
      },
   },
};

const reducer = (state = initialState, action) => {
   const { type, topic, value, deleteIndex, checkIndex, tasks } = action;
   switch (type) {
      case actionTypes.TOGGLE_TASKLIST:
         let updatedState = { ...state };
         updatedState.groups = { ...state.groups };
         updatedState.groups[topic] = { ...state.groups[topic] };
         updatedState.groups[topic].isSelected =
            !state.groups[topic].isSelected;
         return {
            ...state,
            groups: {
               ...state.groups,
               today: {
                  ...state.groups.today,
                  isSelected: updatedState.groups.today.isSelected,
               },
            },
         };
      case actionTypes.ADD_TASK:
         const task = {
            title: value,
            tag: "Personal",
            isCompleted: false,
            isActive: false,
         };
         return {
            ...state,
            groups: {
               ...state.groups,
               today: {
                  ...state.groups.today,
                  tasks: state.groups.today.tasks.concat(task),
               },
            },
         };
      case actionTypes.DELETE_TASK:
         let copy = state.groups.today.tasks.slice();
         copy.splice(deleteIndex, 1);
         return {
            ...state,
            groups: {
               ...state.groups,
               today: {
                  ...state.groups.today,
                  tasks: copy,
               },
            },
         };
      case actionTypes.TOGGLE_CHECK:
         console.log(checkIndex);
         copy = [...state.groups.today.tasks];
         copy[checkIndex] = { ...state.groups.today.tasks[checkIndex] };
         copy[checkIndex].isCompleted = !copy[checkIndex].isCompleted;
         return {
            ...state,
            groups: {
               ...state.groups,
               today: {
                  ...state.groups.today,
                  tasks: copy,
               },
            },
         };
      case actionTypes.FETCH_TASKS_START:
         return { ...state, loading: true };
      case actionTypes.FETCH_TASKS_SUCCESS:
         return {
            ...state,
            loading: false,
            groups: {
               ...state.groups,
               today: {
                  ...state.groups.today,
                  tasks: tasks,
               },
            },
         };
      case actionTypes.FETCH_TASKS_FAILED:
         return { ...state, loading: false };
      default:
         return state;
   }
};

export default reducer;
