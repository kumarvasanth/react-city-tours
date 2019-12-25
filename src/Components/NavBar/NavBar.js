import React, { Component } from "react";
import logo from "../../../src/logo.png";
import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="City Tours"></img>

      <ul className="navlinks">
        <li>
          <a href="/" className="navLink">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="navLink">
            About
          </a>
        </li>
        <li>
          <a href="/" className="navLink active">
            Tours
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
