import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand } from "reactstrap";

const NavBar = (props) => {
  return (
    <Navbar className="NavBar">
      <Link to="/">
        <NavbarBrand>{props.children}</NavbarBrand>
      </Link>

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
