import axiosClient from "./axiosClient";

class TaskApi {
   getAllTasks = (token, userId, params) => {
      const queryParams = `?auth=${token}`;
      const url = `${userId}.json${queryParams}`;
      return axiosClient.get(url, { params });
   };
   pushTasks = (data, ...rest) => {
      const [token, userId] = rest;
      const url = `${userId}/groups.json?auth=${token}`;
      return axiosClient.put(url, data);
   };
}

const taskApi = new TaskApi();
export default taskApi;
