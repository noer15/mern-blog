import React from "react";
import { useHistory } from "react-router-dom";
import { BgAuth } from "../../../assets";
import "./blog.scss";
import { Gap, Button } from "../../../components";

const BlogItem = () => {
  const history = useHistory();
  return (
    <div className="blog-item">
      <img className="image-thumb" src={BgAuth} alt="blog" />
      <div className="content-detail">
        <p className="title" onClick={() => history.push("/detail")}>
          Title Blog
        </p>
        <p className="author">Author - 10-20134</p>
        <p className="body">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem fuga
          culpa recusandae amet magni, ullam distinctio sit magnam ipsam modi
          odio quas omnis facere ad optio. Odit vero quos vitae!
        </p>
        <Gap height={20} />
        <Button title="view page" onClick={() => history.push("/detail")} />
      </div>
    </div>
  );
};

export default BlogItem;
