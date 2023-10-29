import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Logout() {
  const navigate = useNavigate();
  const [logout, setLogout] = useState(false);
  function checkAuth() {
    if (localStorage.getItem("login")) {
      localStorage.removeItem("login");
      setLogout(true);
      alert("logged out");
      delete axios.defaults.headers.common.Authorization;
    }
  }

  useEffect(() => {
    navigate("/api/admin/signin", { replace: true });
  }, [logout]);

  // const data = await axios.get("http://localhost:4000/api/admin/logout");
  checkAuth();

  return <></>;
}

export default Logout;
