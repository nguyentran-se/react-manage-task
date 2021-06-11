import * as actionTypes from "../actions/actionTypes";
const initialState = {
   loading: false,
   iconLoading: false,
   isUpdated: false,
   groups: {
      today: {
         isSelected: true,
         tasks: [],
      },
      tomorrow: {
         isSelected: true,
         tasks: [],
      },
   },
};

const reducer = (state = initialState, action) => {
   const {
      type,
      topic,
      value,
      deleteIndex,
      checkIndex,
      tasks,
      activeIndex,
      editIndex,
      editValue,
   } = action;
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
         let copy = state.groups.today.tasks.slice();
         const task = {
            title: value,
            tag: "Personal",
            isCompleted: false,
            isActive: false,
            prevIndex: 0,
         };
         // thêm task vào đầu mảng
         // gắn index hiện tại trong mảng để return về vị trí khi
         // uncompleted và completed
         copy.unshift(task);
         let attachIndex = copy.map((ele, index) => {
            return { ...ele, prevIndex: index };
         });

         return {
            ...state,
            isUpdated: true,
            groups: {
               ...state.groups,
               today: {
                  ...state.groups.today,
                  // tasks: state.groups.today.tasks.concat(task),
                  tasks: attachIndex,
               },
            },
         };
      case actionTypes.DELETE_TASK:
         copy = state.groups.today.tasks.slice();
         copy.splice(deleteIndex, 1);
         return {
            ...state,
            isUpdated: true,
            groups: {
               ...state.groups,
               today: {
                  ...state.groups.today,
                  tasks: copy,
               },
            },
         };
      case actionTypes.TOGGLE_CHECK:
         copy = [...state.groups.today.tasks];
         copy[checkIndex] = { ...state.groups.today.tasks[checkIndex] };
         copy[checkIndex].isActive = false;
         copy[checkIndex].isCompleted = !copy[checkIndex].isCompleted;
         // sắp xếp array theo uncompleted
         // và completed dựa vào prevIndex
         let completedFilter = copy.filter((ele) => ele.isCompleted);
         let sortUncompletedFilter = copy
            .filter((ele) => !ele.isCompleted)
            .sort((a, b) =>
               a.prevIndex > b.prevIndex
                  ? 1
                  : b.prevIndex > a.prevIndex
                  ? -1
                  : 0
            );
         copy = [...sortUncompletedFilter, ...completedFilter];
         return {
            ...state,
            isUpdated: true,
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
                  tasks: tasks || [],
               },
            },
         };
      case actionTypes.FETCH_TASKS_FAILED:
         return { ...state, loading: false };
      case actionTypes.PUSH_TASK_START:
         return { ...state, iconLoading: true, isUpdated: false };
      case actionTypes.PUSH_TASK_SUCCESS:
         return { ...state, iconLoading: false, isUpdated: false };
      case actionTypes.PUSH_TASK_FAILED:
         return { ...state, iconLoading: false, isUpdated: false };
      case actionTypes.ACTIVE_TASK:
         copy = [...state.groups.today.tasks].map((ele) => {
            return { ...ele, isActive: false };
         });
         if (copy[activeIndex] && !copy[activeIndex].isCompleted)
            copy[activeIndex].isActive = true;
         return {
            ...state,
            isUpdated: true,
            groups: {
               ...state.groups,
               today: {
                  ...state.groups.today,
                  tasks: copy,
               },
            },
         };
      case actionTypes.EDIT_TITLE_TASK:
         copy = [...state.groups.today.tasks];
         copy[editIndex] = { ...state.groups.today.tasks[editIndex] };
         copy[editIndex].title = editValue;
         return {
            ...state,
            isUpdated: true,
            groups: {
               ...state.groups,
               today: {
                  ...state.groups.today,
                  tasks: copy,
               },
            },
         };
      case actionTypes.CLEAR_COMPLETED:
         return {
            ...state,
            isUpdated: true,
            groups: {
               ...state.groups,
               today: {
                  ...state.groups.today,
                  tasks: state.groups.today.tasks.filter(
                     (task) => !task.isCompleted
                  ),
               },
            },
         };
      default:
         return state;
   }
};

export default reducer;
