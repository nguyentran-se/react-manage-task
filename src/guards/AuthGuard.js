import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { PATH_NAME } from "../config/pathNames";

const AuthGuard = ({ children, isAuthenticated }) => {
  if (!isAuthenticated) return <Redirect to={PATH_NAME.HOME} />;
  return <Fragment>{children}</Fragment>;
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.token !== null,
});

export default connect(mapStateToProps)(AuthGuard);
