import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, NavItem } from "reactstrap";

const NavBar = (props) => {
  return (
    // <div className="NavBar navbar">
    //   <h3></h3>

    // </div>
    <Navbar className="NavBar">
      <NavbarBrand>{props.children}</NavbarBrand>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/Home">
          <li>Books</li>
        </Link>
      </ul>
    </Navbar>
  );
};

export default NavBar;
