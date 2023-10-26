import React, { useState } from "react";
import Signup from "../components/Signup";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Signin from "../components/Signin";

function RoutesApp() {
  const [user, setUser] = useState("");
  console.log(user);
  return (
    <BrowserRouter>
      <NavLink to="/">home</NavLink>
      {!user && (
        <>
          <NavLink to="/api/user/signup">signup</NavLink>
          <NavLink to="/api/user/signin">signin</NavLink>
        </>
      )}

      <Routes>
        <Route path="/"></Route>
        {!user && (
          <>
            <Route
              path="/api/user/signin"
              element={<Signin setUser={setUser} />}
            />
            <Route path="/api/user/signup" element={<Signup />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
