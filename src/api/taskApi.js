import axiosClient from "./axiosClient";

class TaskApi {
   getAllTasks = (params) => {
      const url = "groups/today/tasks.json";
      return axiosClient.get(url, { params });
   };
   pushTasks = (data) => {
      const url = "groups.json";
      return axiosClient.put(url, data);
   };
}

const taskApi = new TaskApi();
export default taskApi;
