import React, { useEffect, useState } from "react";
import Signup from "../components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "../components/Signin";
import Profile from "../components/Profile";
import Logout from "../components/Logout";

function RoutesApp() {
  const [login, setLogin] = useState(false);
  function checkLogin() {
    if (localStorage.getItem("token")) {
      setLogin(true);
    }
  }
  useEffect(() => {
    checkLogin();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        {login ? (
          <>
            <Route path="/api/user/profile" element={<Profile />}></Route>
            <Route path="/api/user/logout" element={<Logout />}></Route>
          </>
        ) : (
          <>
            <Route path="/api/user/profile" element={<Signin />}></Route>
            <Route path="/api/user/signup" element={<Signup />}></Route>
            <Route path="/api/user/signin" element={<Signin />}></Route>
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
