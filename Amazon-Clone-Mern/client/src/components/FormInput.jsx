import React from "react";
import "../styles/signup.css";

function FormInput(props) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    props.setValue((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="form-input">
      <input
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={handleChange}
        name={props.name}
        required
      />
    </div>
  );
}

export default FormInput;
