import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

function Profile({ setAuth }) {
  const [login, setLogin] = useState(false);
  function checkAuth() {
    if (localStorage.getItem("token")) {
      axios.defaults.headers.common.Authorization =
        localStorage.getItem("token");
      if (axios.defaults.headers.common.Authorization) {
        setLogin(true);
        setAuth(login);
      }
    }
  }
  useEffect(() => {
    checkAuth();
  }, []);

  async function getProfile() {
    const data = await axios.get("http://localhost:3000/api/user/profile");
    console.log(data);
  }
  if (login) {
    getProfile();
  }
  return (
    <div>
      {login ? (
        <>
          <NavLink to="/api/user/profile">profile</NavLink>
          <NavLink to="/api/user/logout">logout</NavLink>
        </>
      ) : (
        <>
          <NavLink to="/api/user/signup">signup</NavLink>
          <NavLink to="/api/user/signin">signin</NavLink>
        </>
      )}
    </div>
  );
}

export default Profile;
