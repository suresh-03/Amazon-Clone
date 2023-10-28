import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

function AdminDashboard() {
  const [login, setLogin] = useState(false);
  useEffect(() => {
    checkAuthentication();
  }, []);

  function checkAuthentication() {
    if (localStorage.getItem("token")) {
      axios.defaults.headers.common.Authorization =
        localStorage.getItem("token");
      setLogin(true);
    }
  }
  async function dashboard() {
    const data = await axios.get("http://localhost:3000/api/admin/dashboard");
    console.log(data);
  }
  dashboard();

  return (
    <>
      {!login ? (
        <NavLink to="/api/admin/signin">signin</NavLink>
      ) : (
        <NavLink to="/api/admin/dashboard">dashboard</NavLink>
      )}
    </>
  );
}

export default AdminDashboard;
