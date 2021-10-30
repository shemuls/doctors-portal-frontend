import React from "react";
import { Redirect, Route } from "react-router";
import { useAuth } from "../contexts/AuthContext.js";

export default function PublicRoute({ children, ...rest }) {
  const { currentUser } = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !currentUser?.email ? (
          children
        ) : (
          <Redirect to={{ pathname: "/", state: { from: location } }} />
        )
      }
    />
  );
}
