import React from "react";
import { connect } from "react-redux";
import UserImage from "./UserImage/UserImage";
import classes from "./UserInfo.css";
import * as actionCreators from "../../../store/actions/index";

function UserInfo(props) {
   const { userInfo, onLogout } = props;
   return (
      <div className={classes.UserInfo}>
         <UserImage photoURL={userInfo.photoURL} />
         <div className={classes.UserName}>
            <h3>{userInfo.displayName}</h3>
            <span onClick={onLogout}>Sign out</span>
         </div>
      </div>
   );
}
const mapStateToProps = (state) => ({
   userInfo: state.auth.userInfo,
});

const mapDispatchToProps = (dispatch) => {
   return {
      onLogout: () => dispatch(actionCreators.logout()),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
