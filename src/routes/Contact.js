import React, { useState, useEffect } from "react";
import { dbService } from "../fbase";
import Auth from "./Auth";
import { authService } from "../fbase";
import { useHistory } from "react-router-dom";
import AddDraw from "../components/AddDraw";
import AddGoods from "../components/AddGoods";

const Contact = ({ userObj,isLoggedin }) => {
    const history = useHistory();
    const onLogOutClick = () => {
      authService.signOut();
      history.push("/");
    };
    console.log(userObj);
    return (
        <>
        <div>contact</div>
        {userObj ? (
        <>
        <span onClick={onLogOutClick}>Log Out</span>
        <div>Illustration</div>
        <AddDraw userObj={userObj}/>
        <div>Design</div>
        <AddGoods userObj={userObj}/>
        </>
        ):(
        <Auth />
        )}
        </>
    );
};
export default Contact;