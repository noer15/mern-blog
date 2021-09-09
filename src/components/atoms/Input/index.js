import React from "react";
import "./input.scss";

const Input = ({ label, ...rest }) => {
  return (
    <div className="wrapper-form">
      <p className="label">{label}</p>
      <input className="form" {...rest} />
    </div>
  );
};

export default Input;
