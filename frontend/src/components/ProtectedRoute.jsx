import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = React.memo(({loggedIn, children}) => {
  return (
      loggedIn ? children : <Navigate to="/sign-in" />
  );
});

export default ProtectedRoute; 