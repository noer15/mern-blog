import React from "react";
import { Button, Gap } from "../../components";
import BlogItem from "../../components/molecules/BlogItem";
import "./home.scss";
import { useHistory } from "react-router";

const Home = () => {
  const history = useHistory();
  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button title="Create Blog" onClick={() => history.push("/create")} />
      </div>
      <Gap height={20} />
      <div className="content-wrapper">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
      <div className="pagination">
        <Button title="Previous" />
        <Gap width={20} />
        <Button title="Next" />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default Home;