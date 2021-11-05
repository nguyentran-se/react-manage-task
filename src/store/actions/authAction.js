import * as actionTypes from "./actionTypes";
import firebase from "firebase/app";
export const loginStart = () => {
  return { type: actionTypes.LOGIN_START };
};

export const loginSuccess = (token, userId, displayName, photoURL, email) => {
  localStorage.setItem("token", token);
  const user = { userId, displayName, photoURL, email };
  localStorage.setItem("taskUser", JSON.stringify(user));
  return {
    type: actionTypes.LOGIN_SUCCESS,
    token,
    payload: { userId, displayName, photoURL, email },
  };
};
const logoutStart = () => {
  return { type: actionTypes.LOGOUT_START };
};
export const logoutSuccess = (params) => {
  localStorage.removeItem("token");
  localStorage.removeItem("taskUser");
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
