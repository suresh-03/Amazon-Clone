import React, { useState } from "react";
import FormInput from "./FormInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const checkUser = async (event) => {
    const { name, value } = event.target;
    let isAuth = false;
    setData((prev) => ({ ...prev, [name]: value }));
    await axios
      .post("http://localhost:3000/api/admin/signin", data)
      .then((data) => {
        if (data.data.email) {
          alert("welcome to the dashboard admin!");
          isAuth = true;
        } else {
          console.log(data.data.error);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleSubmit = (e) => {
    checkUser(e);
    e.preventDefault();
  };
  return (
    <div className="Signin">
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          placeholder="Enter email"
          value={data.email}
          setValue={setData}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="Enter password"
          value={data.password}
          setValue={setData}
        />

        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Signin;
