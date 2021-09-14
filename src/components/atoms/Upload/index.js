import React from "react";
import "./upload.scss";
const Upload = ({ img, ...rest }) => {
  return (
    <div className="upload">
      {/* klo img tidak ada */}
      {img && <img className="preview" src={img} alt="blog" />}
      <input type="file" {...rest} />
    </div>
  );
};

export default Upload;
