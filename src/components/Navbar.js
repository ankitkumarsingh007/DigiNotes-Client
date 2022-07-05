import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  let history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };
  let location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-primary bg-primary vh-10 sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          Digi-Notes
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <Link
                className={`nav-link text-${
                  location.pathname === "/" ? "black" : "white"
                }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className={`nav-link text-${
                  location.pathname === "/search" ? "black" : "white"
                }`}
                aria-current="page"
                to="/search"
              >
                WikiSearch
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-${
                  location.pathname === "/text" ? "black" : "white"
                }`}
                to="/text"
              >
                Text-Utility
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-${
                  location.pathname === "/about" ? "black" : "white"
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
          {(!localStorage.getItem("token") && (
            <form className="d-flex">
              <Link className="btn btn-dark mx-1 " to="/login" role="button">
                Login
              </Link>
              <Link className="btn btn-dark mx-1" to="/signup" role="button">
                SignUp
              </Link>
            </form>
          )) || (
            <button className="btn btn-dark mx-1" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
