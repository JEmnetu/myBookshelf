import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div className="NavBar">
      <h3>{props.children}</h3>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/Home">
          <li>Books</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
