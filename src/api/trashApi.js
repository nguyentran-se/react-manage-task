import axiosClient from "./axiosClient";
const trashApi = {
  pushTrashTasks: (data, userId) => {
    const url = `${userId}/trash.json`;
    return axiosClient.put(url, data);
  },

  getTrashTasks: (userId) => {
    const url = `${userId}/trash.json`;
    return axiosClient.get(url);
  },
};

export default trashApi;
