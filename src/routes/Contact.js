import React from "react";
import Auth from "./Auth";
import { authService } from "../fbase";
import { useHistory } from "react-router-dom";
import AddDraw from "../components/AddDraw";
import AddGoods from "../components/AddGoods";

const Contact = ({ userObj}) => {
    const history = useHistory();
    const onLogOutClick = () => {
      authService.signOut();
      history.push("/");
    };
    
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