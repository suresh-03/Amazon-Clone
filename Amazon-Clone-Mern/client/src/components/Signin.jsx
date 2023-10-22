import React, { useState } from "react";
import FormInput from "./FormInput";
import axios from "axios";

function Signin() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const checkUser = async (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
    await axios
      .post("http://localhost:3000/api/user/signin", data)
      .then((data) => {
        console.log(data);
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
