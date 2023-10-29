import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Logout({ setAuth }) {
  const navigate = useNavigate();
  const [logout, setLogout] = useState(false);
  function checkAuth() {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
      setLogout(true);
      setAuth(false);
      alert("logged out");
      delete axios.defaults.headers.common.Authorization;
    }
  }

  useEffect(() => {
    navigate("/api/user/signin", { replace: true });
  }, [logout]);

  // const data = await axios.get("http://localhost:4000/api/admin/logout");
  checkAuth();

  return <></>;
}

export default Logout;
