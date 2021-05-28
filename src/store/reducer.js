const initialState = {
   groups: {
      today: {
         isSelected: true,
         tasks: [
            {
               title: "testing tasks 1",
               isCompleted: false,
               tag: "person",
            },
            {
               title: "testing tasks 2",
               isCompleted: false,
               tag: "person",
            },
         ],
      },
      tomorrow: {
         isSelected: false,
         tasks: [
            {
               title: "tomorrow tasks 1",
               isCompleted: false,
               tag: "person",
            },
            {
               title: "tomorrow tasks 2",
               isCompleted: false,
               tag: "person",
            },
         ],
      },
   },
};

const reducer = (state = initialState, action) => {
   const { type, topic } = action;
   switch (type) {
      case "TOGGLE_TASKLIST":
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
               tomorrow: {
                  ...state.groups.tomorrow,
                  isSelected: updatedState.groups.tomorrow.isSelected,
               },
            },
         };
      default:
         return state;
   }
};

export default reducer;
