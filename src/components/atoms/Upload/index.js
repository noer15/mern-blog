import React from "react";
import { BgAuth } from "../../../assets";
import "./upload.scss";
const Upload = () => {
  return (
    <div className="upload">
      <img className="preview" src={BgAuth} alt="blog" />
      <input type="file" />
    </div>
  );
};

export default Upload;
