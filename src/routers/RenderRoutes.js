import React, { Fragment, Suspense } from "react";
import { Route, Switch } from "react-router";
import { Layout } from "../hoc/Layout/MainLayoutRoute/MainLayoutRoute";
import routers from "./routers";

const RenderRoutes = () => {
  return (
    <Fragment>
      <Suspense fallback={<div></div>}>
        <Switch>
          {routers
            .filter((route) => route.layout !== "MainLayout")
            .map((route) => {
              const Component = route.component;
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  exact={route.exact}
                  component={Component}
                />
              );
            })}
          <Layout>
            <Suspense fallback={<div></div>}>
              <Switch>
                {routers
                  .filter((route) => route.layout === "MainLayout")
                  .map((route) => {
                    const AuthGuard = route.guard || Fragment;
                    const Component = route.component;
                    return (
                      <Route
                        key={route.path}
                        path={route.path}
                        exact={route.exact}
                        render={() => (
                          <AuthGuard>
                            <Component />
                          </AuthGuard>
                        )}
                      />
                    );
                  })}
              </Switch>
            </Suspense>
          </Layout>
        </Switch>
      </Suspense>
    </Fragment>
  );
};

export default RenderRoutes;
