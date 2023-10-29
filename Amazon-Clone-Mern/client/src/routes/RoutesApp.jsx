import React, { useState } from "react";
import Signup from "../components/Signup";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Signin from "../components/Signin";
import Profile from "../components/Profile";
import Logout from "../components/Logout";

function RoutesApp() {
  const [login, setLogin] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        {login ? (
          <>
            <Route
              path="/api/user/profile"
              element={<Profile setAuth={setLogin} />}
            ></Route>
            <Route
              path="/api/user/logout"
              element={<Logout setAuth={setLogin} />}
            ></Route>
          </>
        ) : (
          <>
            <Route
              path="/api/user/signup"
              element={<Signup setAuth={setLogin} />}
            ></Route>
            <Route
              path="/api/user/signin"
              element={<Signin setAuth={setLogin} />}
            ></Route>
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
