import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ userObj }) => (
  <>
  <div className="APP">
      <div className="greeim">
      <Link to="/" className="TITLE">greeim</Link>
        <a href="https://www.instagram.com/imgreeim/" rel="noopener noreferrer" target="_blank" className="insta_link">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
  </div>
  <nav className="Navigation">
    <ul>
      <li>
        <Link to="/" className="link first">illustration</Link>
      </li>
      <li>
        <Link to="/Design" className="link">design</Link>
      </li>
      <li>
        <Link to="/Contact" className="link">contact</Link>
      </li>
    </ul>
  </nav>
  </>
);
export default Navigation;
