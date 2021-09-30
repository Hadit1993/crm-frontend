import React, { ComponentType, FC } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

const isAuth = true;

const PrivateRoute: FC<RouteProps> = (props) => {
  return (
    <Route
      {...props}
      children={undefined}
      render={() => {
        return isAuth ? props.children : <Redirect to="/" />;
      }}
    />
  );
};

export default PrivateRoute;
