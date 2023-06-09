import React from "react";
import { Link } from "react-router-dom";
import e from "../e.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faPhone,
  faRightFromBracket,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <Link to="/" className="navbar-brand text-white">
          <img
            src={e}
            alt="Logo"
            width="138"
            height="53"
            className="d-inline-block align-text-top"
          />
          <span
            style={{ fontWeight: "bold", fontSize: "larger", color: "#ffffff" }}
          >
            3G
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <Link to="/" className="nav-link text-warning">
            <FontAwesomeIcon icon={faRightFromBracket} className="mr-2 fa-lg" />
            <span style={{ fontWeight: "bold", fontSize: "larger" }}>
              Logout
            </span>
          </Link>

          <Link to="/log" className="nav-link text-white-bold">
            <FontAwesomeIcon icon={faGlobe} className="mr-1" />
            <span style={{ fontWeight: "bold", fontSize: "larger" }}>
              Login
            </span>
          </Link>

          <ul className="navbar-nav ml-auto">
            <div className="navbar-nav ml-auto">
              <Link to="/about" className="nav-link text-success">
                <FontAwesomeIcon icon={faInfoCircle} className="mr-2 fa-lg" />
                <span style={{ fontWeight: "bold", fontSize: "larger" }}>
                  About
                </span>
              </Link>

              <Link to="/contact" className="nav-link text-danger">
                <FontAwesomeIcon icon={faPhone} className="mr-2 fa-lg" />
                <span style={{ fontWeight: "bold", fontSize: "larger" }}>
                  Contact
                </span>
              </Link>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
