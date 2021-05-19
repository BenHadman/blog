import React from "react";
import { Link } from "gatsby";
import "./Header.css";

function Header({ config }) {
  return (
    <header classname="desktop-header-3 fixed-top">
      <div classname="container">
        <nav classname="navbar navbar-expand-lg navbar-dark">
          <a classname="navbar-brand" href="index-3.html">
            <img src="images/logo.svg" alt="Ben_Logo" />{" "}
            <button
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
              classname="navbar-toggler"
              data-target="#navbarNavDropdown"
              data-toggle="collapse"
              type="button"
            >
              <span classname="navbar-toggler-icon" />
            </button>
            <div classname="collapse navbar-collapse" id="navbarNavDropdown">
              <ul classname="navbar-nav ml-auto scrollspy">
                <li classname="nav-item">
                  <Link classname="nav-link" to={`#home`}>
                    {" "}
                    Home{" "}
                  </Link>
                  Home
                </li>
                <li classname="nav-item">
                  <Link to={`#home`} classname="nav-link">
                    {" "}
                    About{" "}
                  </Link>
                  About
                </li>
                <li classname="nav-item">
                  <Link to={`#home`} classname="nav-link">
                    {" "}
                    Services{" "}
                  </Link>
                  Services
                </li>
                <li classname="nav-item">
                  <Link to={`#home`} classname="nav-link">
                    {" "}
                    Experience{" "}
                  </Link>
                  Experience
                </li>
                <li classname="nav-item">
                  <Link to={`#home`} classname="nav-link">
                    {" "}
                    Work{" "}
                  </Link>
                  Works
                </li>
                <li classname="nav-item">
                  <Link to={`#home`} classname="nav-link">
                    {" "}
                    Blog{" "}
                  </Link>
                </li>
                <li classname="nav-item">
                  <Link to={`#home`} classname="nav-link">
                    {" "}
                  </Link>
                  Contact
                </li>
              </ul>
            </div>
          </a>
        </nav>
        <Link to={`#home`} classname="nav-link">
          {" "}
        </Link>
      </div>
      <Link to={`#home`} classname="nav-link">
        {" "}
      </Link>
    </header>
  );
}

export default Header;
