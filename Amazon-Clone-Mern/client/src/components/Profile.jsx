import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

function Profile() {
  const [login, setLogin] = useState(false);
  const [data, setData] = useState("");
  function checkAuth() {
    if (localStorage.getItem("token")) {
      axios.defaults.headers.common.Authorization =
        localStorage.getItem("token");
      if (axios.defaults.headers.common.Authorization) {
        setLogin(true);
      }
    }
  }
  useEffect(() => {
    checkAuth();
  }, [login]);

  async function getProfile() {
    const data = await axios.get("http://localhost:3000/api/user/profile");
    setData(data.data.profile);
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
          <h1>{data}</h1>
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
