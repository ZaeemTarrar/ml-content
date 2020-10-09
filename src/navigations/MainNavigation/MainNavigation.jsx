import React from "react";
import { Route, Switch } from "react-router";
import MainPage from "../../components/pages/MainPage/MainPage";
import Practice from "../../components/pages/Practice/Practice";

const MainNavigation = (props) => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/practice" exact>
          <Practice />
        </Route>
        <Route path="/">
          <h1> Page Not Found ! </h1>
        </Route>
      </Switch>
    </>
  );
};

export default MainNavigation;
