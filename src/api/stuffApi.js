import axiosClient from "./axiosClient";

class StuffApi {
   pushMsg = (data) => {
      const url = "message.json";
      return axiosClient.post(url, data);
   };
}

const stuffApi = new StuffApi();
export default stuffApi;
