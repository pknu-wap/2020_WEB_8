import React, { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AppNavbar from "../components/AppNavbar";
import { Container } from "reactstrap";
import { Redirect, Route, Switch } from "react-router-dom";
import PostCardList from "./normalRoute/PostCardList";
import PostDetail from "./normalRoute/PostDetail";
import PostWrite from "./normalRoute/PostWrite";
import Search from "./normalRoute/Search";
import CategoryResult from "./normalRoute/CategoryResult copy 3";

const MyRouter = () => (
  <Fragment>
    <AppNavbar />
    <Header />
    <Container id= "main-body">
      <Switch>
        <Route path="/" exact component={PostCardList}/>
        <Route path="/post" exact component={PostWrite}/>
        <Route path="/post/:id" exact component={PostDetail}/>
        <Route path="/post/category/:categoryName" exact component={CategoryResult}/>
        <Route path="/search/:searchTerm" exact component={Search}/>
        <Redirect from="*" to="/"/>
      </Switch>
    </Container>
    <Footer />
  </Fragment>
);

export default MyRouter;
