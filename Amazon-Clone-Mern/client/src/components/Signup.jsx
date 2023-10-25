import React from "react";
import FormInput from "./FormInput";
import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const userRef = useRef();
  const [Value, setValue] = useState({
    name: "",
    mobileNo: 0,
    email: "",
    password: "",
  });

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const token = localStorage.getItem("token");
  if (token) {
    setAuthToken(token);
  }

  async function setAuthToken(token) {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }

  async function createUser(event) {
    const { name, value } = event.target;
    setValue((prev) => ({ ...prev, [name]: value }));
    await axios
      .post("http://localhost:3000/api/user/signup", Value)
      .then((response) => {
        if (response.data.token) {
          const token = response.data.token;
          localStorage.setItem("token", token);
          setAuthToken(token);
          navigate("/api/user/signin");
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
    setValue({ name: "", email: "", mobileNo: 0, password: "" });
    event.preventDefault();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          reff={userRef}
          placeholder="Enter name"
          value={Value.name}
          setValue={setValue}
          name="name"
        />
        <FormInput
          type="number"
          value={Value.mobileNo != 0 ? Value.mobileNo : ""}
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
