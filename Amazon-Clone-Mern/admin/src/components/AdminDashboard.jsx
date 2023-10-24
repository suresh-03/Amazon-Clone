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
    <div>
      <NavLink to="/api/admin/dashboard">Dashboard</NavLink>
      <NavLink to="/api/admin/signin">signin</NavLink>
    </div>
  );
}

export default AdminDashboard;
