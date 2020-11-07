import React from "react";
import { Route } from "react-router-dom";
import GoodsDetail from "../components/GoodsDetail";
import Design from "./Design";

const Desing_main = ({ userObj, match }) => {
    return (
        <>
        <Route exact path={match.path}
              render={(props) => <Design userObj={userObj} {...props}/>}/>
        <Route path={`${match.path}/:id`} component={GoodsDetail}/>
        </>
    )
}

export default Desing_main;