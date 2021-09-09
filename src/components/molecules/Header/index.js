import React from "react";
import { useHistory } from "react-router-dom";
import "./header.scss";

const Header = () => {
  const history = useHistory();
  return (
    <>
      <div className="header-menu">
        <p className="title-menu">MERN-BLOG</p>
        <p className="item-menu" onClick={() => history.push("/login")}>
          Logout
        </p>
      </div>
    </>
  );
};

export default Header;
