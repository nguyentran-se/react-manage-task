import { lazy } from "react";
import { PATH_NAME } from "../config/pathNames";
import AuthGuard from "../guards/AuthGuard";

const TasksBuilder = lazy(() =>
  import("../containers/TasksBuilder/TasksBuilder")
);
const Auth = lazy(() => import("../containers/Auth/Auth"));
const Trash = lazy(() => import("../containers/Trash/Trash"));

const routers = [
  {
    path: PATH_NAME.ROOT,
    exact: true,
    layout: "IntroLayout",
    component: Auth,
  },
  {
    path: PATH_NAME.TODAY,
    exact: true,
    guard: AuthGuard,
    layout: "MainLayout",
    component: TasksBuilder,
  },
  {
    path: PATH_NAME.TRASH,
    exact: true,
    guard: AuthGuard,
    layout: "MainLayout",
    component: Trash,
  },
];
export default routers;
