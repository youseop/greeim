import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ userObj }) => (
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
);
export default Navigation;
