import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer, Header } from "../../components";
import CreateBlog from "../Blog/CreateBlog";
import DetailBlog from "../Blog/DetailBlog";
import Home from "../Home";
import "./main.scss";

const MainApp = () => {
  return (
    <div className="main-wrapper">
      <Header />
      <div className="content-wrap">
        <Router>
          <Switch>
            <Route path="/create">
              <CreateBlog />
            </Route>
            <Route path="/detail">
              <DetailBlog />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
};

export default MainApp;
