import React, { useRef } from "react";
import FormInput from "./FormInput";
import axios from "axios";
import { useState } from "react";
import { redirect } from "react-router-dom";

function Signup() {
  const [Value, setValue] = useState({
    name: "",
    mobileNo: "",
    email: "",
    password: "",
  });

  const [token, setToken] = useState("");

  async function createUser(event) {
    const { name, value } = event.target;
    setValue((prev) => ({ ...prev, [name]: value }));
    await axios
      .post("http://localhost:3000/api/user/signup", Value)
      .then((data) => {
        if (data.data.token) {
          redirect("/api/user/signin");
        } else {
          console.log(data.data.error);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleSubmit = (event) => {
    createUser(event);
    setValue({ name: "", email: "", mobileNo: "", password: "" });
    event.preventDefault();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          placeholder="Enter name"
          value={Value.name}
          setValue={setValue}
          name="name"
        />
        <FormInput
          type="text"
          value={Value.mobileNo}
          placeholder="Enter mobile number"
          setValue={setValue}
          name="mobileNo"
        />
        <FormInput
          type="email"
          value={Value.email}
          placeholder="Enter email"
          setValue={setValue}
          name="email"
        />
        <FormInput
          type="password"
          value={Value.password}
          placeholder="create password"
          setValue={setValue}
          name="password"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Signup;
