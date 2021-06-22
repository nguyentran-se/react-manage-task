import * as actionTypes from "./actionTypes";
import firebase from "firebase/app";
export const loginStart = () => {
   return { type: actionTypes.LOGIN_START };
};

export const loginSuccess = (token, userId, displayName, photoURL) => {
   localStorage.setItem("token", token);
   localStorage.setItem("userId", userId);
   localStorage.setItem("displayName", displayName);
   localStorage.setItem("photoURL", photoURL);
   return {
      type: actionTypes.LOGIN_SUCCESS,
      token,
      userId,
      displayName,
      photoURL,
   };
};
const logoutStart = () => {
   return { type: actionTypes.LOGOUT_START };
};
export const logoutSuccess = (params) => {
   localStorage.removeItem("token");
   localStorage.removeItem("userId");
   localStorage.removeItem("displayName");
   localStorage.removeItem("photoURL");
   return { type: actionTypes.LOGOUT_SUCCESS };
};
const logoutFailed = (params, error) => {
   return { type: actionTypes.LOGOUT_FAILED, error };
};

export const logout = () => {
   return (dispatch) => {
      dispatch(logoutStart());
      firebase
         .auth()
         .signOut()
         .then(() => {
            dispatch(logoutSuccess());
         })
         .catch((error) => dispatch(logoutFailed(error)));
   };
};
