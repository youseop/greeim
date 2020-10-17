import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Main from "../routes/Main";
import Design from "../routes/Design";
import Contact from "../routes/Contact";
import Navigation from "./Navigation";

const AppRouter = ({ refreshUser, isLoggedIn, userObj }) => {
  return (
    <Router>
     <Navigation userObj={userObj} />
      <Switch>
          <>
            <Route exact path="/">
              <Main userObj={userObj} />
            </Route>
            <Route exact path="/Design">
              <Design userObj={userObj}/>
            </Route>
            <Route exact path="/Contact">
              <Contact userObj={userObj} refreshUser={refreshUser} isLoggedIn={isLoggedIn}/>
            </Route>
          </>  
      </Switch>
    </Router>
  );
};
export default AppRouter;
