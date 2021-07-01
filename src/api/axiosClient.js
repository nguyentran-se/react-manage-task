import axios from "axios";
import queryString from "query-string";
import firebase from "firebase/app";
import "firebase/auth";

const axiosClient = axios.create({
   baseURL: process.env.REACT_APP_TASK_API,
   headers: {
      "content-type": "application/json",
   },
   paramsSerializer: (params) => queryString.stringify(params),
});

const getFirebaseToken = async () => {
   const currentUser = firebase.auth().currentUser;
   if (currentUser) return currentUser.getIdToken();

   const tokenStorage = localStorage.getItem("token");
   if (!tokenStorage) return null;
   return new Promise((resolve, reject) => {
      const unregisterAuthObserver = firebase
         .auth()
         .onAuthStateChanged((user) => {
            if (!user) {
               reject(null);
            }

            user.getIdToken().then((token) => {
               resolve(token);
               unregisterAuthObserver();
            });
         });
   });
};

axiosClient.interceptors.request.use(async (config) => {
   const token = await getFirebaseToken();
   //cách 2:
   if (token) {
      config.headers.Authorization = `Bearer ${token}`;
   }
   return config;
});

axiosClient.interceptors.response.use(
   (response) => {
      // console.log("RESPONSE");
      // console.log(response);
      if (response && response.data) return response.data;
      return response;
   },
   (error) => {
      // console.log(error);
      throw error;
   }
);

export default axiosClient;
