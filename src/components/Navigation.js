import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ userObj }) => (
  <nav>
    <ul>
      <li>
        <Link to="/">illustration</Link>
      </li>
      <li>
        <Link to="/Design">design</Link>
      </li>
      <li>
        <Link to="/Contact">contact</Link>
      </li>
    </ul>
  </nav>
);
export default Navigation;
