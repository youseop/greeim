import React from "react";
import Auth from "./Auth";
import { authService } from "../fbase";
import { useHistory } from "react-router-dom";
import AddDraw from "../components/AddDraw";
import AddGoods from "../components/AddGoods";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Contact = ({ userObj}) => {
    const history = useHistory();
    const onLogOutClick = () => {
      authService.signOut();
      history.push("/");
    };
    
    return (
        <>
        
        {userObj ? (
        <div className="admin_container">
        <span onClick={onLogOutClick} className="admin_logout">Log Out</span>
        <div className="illust">
        <div className="admin_Illustration">Illustration</div>
        <AddDraw userObj={userObj}/>
        </div>  
        <div className="illust">
        <div className="admin_Illustration">Design</div>
        <AddGoods userObj={userObj}/>
        </div>
        
        </div>
        ):(
        <div className="before_login">
          <a href="https://www.instagram.com/imgreeim/" rel="noopener noreferrer" target="_blank" className="insta_link">
                <FontAwesomeIcon icon={faInstagram} /> imgreeim</a>
          <div className="contact_text">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
          </div>
          <Auth />
        </div>
        )}
        </>
    );
};
export default Contact;