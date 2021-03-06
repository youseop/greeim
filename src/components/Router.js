import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Main from "../routes/Main";
import Contact from "../routes/Contact";
import Navigation from "./Navigation";
import Desing_main from "../routes/Design_main";

const AppRouter = ({ userObj }) => {
  return (
    <Router>
     <Navigation userObj={userObj} />
      <Switch>
          <>
            <Route exact path="/">
              <Main userObj={userObj} />
            </Route>
            <Route path="/Design" 
              render={(props) => <Desing_main userObj={userObj} {...props}/>}/>
            <Route exact path="/Contact">
              <Contact userObj={userObj}/>
            </Route>
          </>  
      </Switch>
    </Router>
  );
};
export default AppRouter;
