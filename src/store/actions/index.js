//Task action
export {
  addTask,
  toggleTaskList,
  deleteTask,
  toggleCheck,
  fetchTasks,
  pushTasks,
  activeTask,
  editTitleTask,
  clearCompleted,
  addTag,
  deleteTag,
  sortTasks,
} from "./taskAction";

export { loginStart, loginSuccess, logout, logoutSuccess } from "./authAction";

export { addToTrash, getTrashTasks, deleteTrashTask } from "./trashAction";
