import React from "react";
import Signup from "../components/Signup";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Signin from "../components/Signin";

function RoutesApp() {
  return (
    <BrowserRouter>
      <NavLink to="/api/user/signup">signup</NavLink>
      <NavLink to="/api/user/signin">signin</NavLink>
      <Routes>
        <Route path="/api/user/signin" element={<Signin />} />
        <Route path="/api/user/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
