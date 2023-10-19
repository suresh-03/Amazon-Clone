import React, { useState } from "react";
import FormInput from "./components/FormInput";

function App() {
  const [value, setValue] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`name:${value.name}\nemail:${value.email}`);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          placeholder="Enter name"
          value={value.name}
          setValue={setValue}
          name="name"
        />
        <FormInput
          type="text"
          value={value.mobile}
          placeholder="Enter mobile number"
          setValue={setValue}
          name="mobile"
        />
        <FormInput
          type="email"
          value={value.email}
          placeholder="Enter email"
          setValue={setValue}
          name="email"
        />
        <FormInput
          type="password"
          value={value.password}
          placeholder="create password"
          setValue={setValue}
          name="password"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
