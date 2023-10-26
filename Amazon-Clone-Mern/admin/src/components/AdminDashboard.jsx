import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

function AdminDashboard() {
  async function dashboard() {
    const data = await axios.get("http://localhost:3000/api/admin/dashboard");
    console.log(data);
  }
  dashboard();

  return (
    <>
      <NavLink to="/api/admin/signin">signin</NavLink>
      <NavLink to="/api/admin/dashboard">dashboard</NavLink>
    </>
  );
}

export default AdminDashboard;
