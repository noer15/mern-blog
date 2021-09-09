import React from "react";
import { useHistory } from "react-router-dom";
import { BgAuth } from "../../../assets";
import { Link } from "../../../components";
import "./details.scss";

const DetailBlog = () => {
  const history = useHistory();
  return (
    <div className="detail-blog">
      <img className="img-details" src={BgAuth} alt="" />
      <div className="content-detail">
        <p className="title">Test</p>
        <p className="author">Nurhi</p>
        <p className="body-">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eos
          explicabo accusantium quia illum quo cupiditate consequatur dolorum
          magnam officia, architecto, dolores quos aperiam soluta laudantium
          vitae facilis temporibus molestias.
        </p>
        <Link title="kembali" onClick={() => history.push("/")} />
      </div>
    </div>
  );
};

export default DetailBlog;
