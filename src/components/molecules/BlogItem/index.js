import React from "react";
import { useHistory } from "react-router-dom";
import "./blog.scss";
import { Gap, Button } from "../../../components";

const BlogItem = (props) => {
  const history = useHistory();
  const { image, title, date, author, body } = props;
  return (
    <div className="blog-item">
      <img className="image-thumb" src={image} alt="blog" />
      <div className="content-detail">
        <p className="title" onClick={() => history.push("/detail")}>
          {title}
        </p>
        <p className="author">
          {author} - {date}
        </p>
        <p className="body">{body}</p>
        <Gap height={20} />
        <Button title="view page" onClick={() => history.push("/detail")} />
      </div>
    </div>
  );
};

export default BlogItem;
