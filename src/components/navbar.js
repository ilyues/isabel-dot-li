import * as React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

// markup
const Navbar = () => {
  function isActive({ isCurrent }) {
    return isCurrent ? { className: "active-link" } : { className: "nav-link" };
  }
  return (
    <main className="navbar">
      <Link getProps={isActive} className="nav-link" to="/">
        home
      </Link>
      <Link getProps={isActive} className="nav-link" to="/ab/">
        about
      </Link>
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
