import * as actionTypes from "./actions";
const initialState = {
   groups: {
      today: {
         isSelected: true,
         tasks: [
            {
               title: "testing tasks 1",
               isCompleted: false,
               tag: "person",
               isActive: false,
            },
            {
               title: "testing tasks 2",
               isCompleted: false,
               tag: "person",
               isActive: false,
            },
         ],
      },
   },
};

const reducer = (state = initialState, action) => {
   const { type, topic, value, deleteIndex } = action;
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
      default:
         return state;
   }
};

export default reducer;
