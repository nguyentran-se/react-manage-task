import axiosClient from "./axiosClient";

class TaskApi {
   getAllTasks = (token, userId, params) => {
      //  cách 1:
      const queryParams = `?auth=${token}`;
      const url = `${userId}.json${queryParams}`;

      // const url = `/${userId}.json`;
      return axiosClient.get(url, { params });
   };
   pushTasks = (data, ...rest) => {
      const [token, userId] = rest;
      const url = `${userId}/groups.json?auth=${token}`;
      // const url = `${userId}/groups.json`;
      return axiosClient.put(url, data);
   };
}

const taskApi = new TaskApi();
export default taskApi;
