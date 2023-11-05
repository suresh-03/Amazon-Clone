import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

function AdminDashboard() {
  const [login, setLogin] = useState(false);
  const [image, setImage] = useState("");
  useEffect(() => {
    checkAuthentication();
  }, []);

  function checkAuthentication() {
    if (localStorage.getItem("login")) {
      axios.defaults.headers.common.Authorization =
        localStorage.getItem("login");
      setLogin(true);
    }
  }
  async function dashboard() {
    const data = await axios.get("http://localhost:3000/api/admin/dashboard");
    setImage(data.data.image);
    console.log(data.data.image);
  }
  if (login) {
    dashboard();
  }

  return (
    <>
      {!login ? (
        <NavLink to="/api/admin/signin">signin</NavLink>
      ) : (
        <>
          <NavLink to="/api/admin/createProduct">create</NavLink>
          <NavLink to="/api/admin/dashboard">dashboard</NavLink>
          <NavLink to="/api/admin/logout">logout</NavLink>
          <img src={image} />
        </>
      )}
    </>
  );
}

export default AdminDashboard;
