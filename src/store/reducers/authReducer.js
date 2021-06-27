import * as actionTypes from "../actions/actionTypes";
const initialState = {
   token: localStorage.getItem("token") || null,
   error: null,
   loading: false,
   isLogout: false,
   userInfo: {
      userId: localStorage.getItem("userId") || null,
      displayName: localStorage.getItem("displayName") || null,
      photoURL: localStorage.getItem("photoURL") || null,
   },
};

const authReducer = (state = initialState, action) => {
   const { type, token, userId, displayName, photoURL, error } = action;
   switch (type) {
      case actionTypes.LOGIN_START:
         return {
            ...state,
            loading: true,
         };
      case actionTypes.LOGIN_SUCCESS:
         return {
            ...state,
            token,
            loading: false,
            userInfo: { ...state.userInfo, userId, displayName, photoURL },
         };
      case actionTypes.LOGOUT_START:
         return {
            ...state,
            isLogout: true,
            loading: true,
         };
      case actionTypes.LOGOUT_SUCCESS:
         return {
            ...state,
            token: null,
            loading: false,
            userInfo: {
               ...state.userInfo,
               userId: null,
               displayName: null,
               photoURL: null,
            },
         };
      case actionTypes.LOGOUT_FAILED:
         return {
            ...state,
            error,
            loading: false,
         };
      default:
         return state;
   }
};
export default authReducer;
