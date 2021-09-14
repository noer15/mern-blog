import React, { useEffect, useState } from "react";
import { Button, Gap } from "../../components";
import BlogItem from "../../components/molecules/BlogItem";
import "./home.scss";
import { useHistory } from "react-router";
import { api_url } from "../../api";

// gunakan react-redux
import { useSelector, useDispatch } from "react-redux";
import { setDataBlog } from "../../config/redux/action";

const Home = () => {
  const [counter, setCounter] = useState(1);
  // set Dispatch
  const { dataBlog, page } = useSelector((state) => state.homeReducer);
  console.log("per Page : ", page);
  const dispatch = useDispatch();

  const formatDate = (value) => {
    let options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      // hour: "numeric",
      // minute: "numeric",
      // second: "numeric",
    };
    return new Date(value).toLocaleString("id-ID", options);
  };
  useEffect(() => {
    dispatch(setDataBlog(counter));
  }, [dispatch, counter]);
  const history = useHistory();
  const previous = () => {
    setCounter(counter <= 1 ? 1 : counter - 1);
  };

  const next = () => {
    setCounter(counter === page.totalPage ? page.totalPage : counter + 1);
  };
  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button title="Create Blog" onClick={() => history.push("/create")} />
      </div>
      <Gap height={20} />
      <div className="content-wrapper">
        {dataBlog.map((item) => {
          return (
            <BlogItem
              key={item._id}
              image={`${api_url}/${item.image}`}
              title={item.title}
              author={item.author.name}
              date={formatDate(item.createdAt)}
              body={item.body}
            />
          );
        })}
      </div>
      <div className="pagination">
        <Button title="Previous" onClick={previous} />
        <Gap width={20} />
        <p className="text-page">
          {page.currentPage} / {page.totalPage}
        </p>
        <Gap width={20} />
        <Button title="Next" onClick={next} />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default Home;
