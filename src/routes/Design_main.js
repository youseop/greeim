import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import GoodsDetail from "../components/GoodsDetail";
import Design from "./Design";

const Desing_main = ({ userObj, match }) => {
    return (
        <>
        <Route exact path={match.path}
              render={(props) => <Design userObj={userObj} {...props}/>}/>
        <Route path={`${match.path}/:id`} component={Design} />
        </>
    )
}

export default Desing_main;