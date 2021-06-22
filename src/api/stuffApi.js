import axiosClient from "./axiosClient";

class StuffApi {
   pushMsg = (data, ...rest) => {
      const [token, userId] = rest;
      const url = `${userId}/message.json?auth=${token}`;
      return axiosClient.post(url, data);
   };
}

const stuffApi = new StuffApi();
export default stuffApi;
