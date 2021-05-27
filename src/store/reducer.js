const initialState = {
   groups: {
      today: {
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

const reducer = (state = initialState, actions) => {
   switch (actions) {
      default:
         return state;
   }
};

export default reducer;
