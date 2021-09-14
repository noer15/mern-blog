import axios from "axios";
import { api_url } from "../../../api";

export const setDataBlog = (page) => {
  return (dispatch) => {
    axios
      .get(`${api_url}/api/v1/blog/posts?page=${page}&perPage=2`)
      .then((result) => {
        const response = result.data;
        dispatch({ type: "UPDATE_DATA_BLOG", payload: response.data });
        dispatch({
          type: "UPDATE_PAGE",
          payload: {
            currentPage: response.current_page,
            totalPage: Math.ceil(response.total_page / response.per_page),
          },
        });
      })
      .catch((err) => {
        console.log("error:", err);
      });
  };
};
