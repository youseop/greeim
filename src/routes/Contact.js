import React, { useState } from "react";
import Auth from "./Auth";
import { authService } from "../fbase";
import { useHistory } from "react-router-dom";
import AddDraw from "../components/AddDraw";
import AddGoods from "../components/AddGoods";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Contact = ({ userObj}) => {
  const [email,setemail] = useState("");
  const onChange_email = (event) => {
    const {
      target: {value},
    } = event;
    setemail(value);
  }
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
{/* 
          <form className="gform" method="POST" data-email="dbtjqtjq@gmail.com" action="https://script.google.com/macros/s/AKfycbyHqKPW1GpWpCmCUrjJqpDiuzD3JlLWp1aN_UKCnlDf_WAtSSc/exec">
          <div>
          <fieldset>
            <label htmlFor="name">Name: </label>
            <input id="name" name="name" placeholder="What your Mom calls you" />
          </fieldset>

          <fieldset>
            <label htmlFor="message">Message: </label>
            <textarea id="message" name="message" rows="10"
            placeholder="Tell us what's on your mind..."></textarea>
          </fieldset>

          <fieldset>
            <label htmlFor="email"><em>Your</em> Email Address:</label>
            <input id="email" name="email" type="email" value={email} onChange={onChange_email}
            required placeholder="your.name@email.com"/>
          </fieldset>

          <fieldset>
            <label htmlFor="honeypot">To help avoid spam, utilize a Honeypot technique with a hidden text field; must be empty to submit the form! Otherwise, we assume the user is a spam bot.</label>
            <input id="honeypot" type="text" name="honeypot" value="" />
          </fieldset>

          <button>Send</button>
          </div>
          </form> */}
          


          <Auth />
        </div>
        )}
        </>
    );
};
export default Contact;