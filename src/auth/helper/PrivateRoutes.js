import React from "react";
import { Route, Navigate,Outlet } from "react-router-dom";

import  {isAuthenticated}  from "./index";

const PrivateRoutes = ({ children }) => {
  const auth = isAuthenticated()
  return auth?<>{children}</>: <Navigate to= "/signin" />
};

export default PrivateRoutes;
