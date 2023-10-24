import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "../components/Signin";
import AdminDashboard from "../components/AdminDashboard";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/api/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/api/admin/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
