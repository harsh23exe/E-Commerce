import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./core/Home";
import Signup from "./user/Signup";
import PrivateRoutes from "./auth/helper/PrivateRoutes";
import UserDashboard from "./user/UserDashboard";
import Signin from "./user/Signin";
import Cart from "./core/Cart";

const Routess = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/signup"  element={<Signup/>} />
        <Route path="/signin"  element={<Signin/>} />
        <Route path="/cart" exact element={<Cart/>} />
        <Route path="/user/dashboard"  element={<PrivateRoutes><UserDashboard/></PrivateRoutes>} />
        {/* <Route path="user/dashboard" element={<UserDashboard/>} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Routess;
