import * as React from "react";
import "../styles/navbar.css";
import { NavLink } from "react-router-dom";

// markup
const Navbar = () => {
  return (
    <main className="navbar">
      <NavLink activeClassName="active-link" className="nav-link" exact to="/">
        home
      </NavLink>
      <NavLink
        activeClassName="active-link"
        className="nav-link"
        exact
        to="/about"
      >
        about
      </NavLink>
      {/* <Link getProps={isActive} className="nav-link" to="/exp/">
        illustration
      </Link> */}
      {/* <Link getProps={isActive} className="nav-link" to="/exp/">
        design / code
      </Link> */}
      <a
        href="https://www.inprnt.com/gallery/ilyues/"
        target="_blank"
        className="nav-link"
      >
        print shop
      </a>
    </main>
  );
};

export default Navbar;
