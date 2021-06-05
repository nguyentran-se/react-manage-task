import axios from "axios";

const instance = axios.create({
   baseURL: "https://task-management-d625d-default-rtdb.firebaseio.com/groups",
});

export default instance;
