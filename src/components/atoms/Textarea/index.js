import React from "react";

const Textarea = ({ label, ...rest }) => {
  return (
    <div className="wrapper-form">
      <p className="label">{label}</p>
      <textarea id="" cols="30" rows="10" {...rest} className="form"></textarea>
    </div>
  );
};

export default Textarea;
