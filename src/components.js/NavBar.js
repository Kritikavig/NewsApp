import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div>
      <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            NewsTime
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className={`dropdown-menu dropdown-menu-${props.mode}`} aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item nav-link " to="/business">
                      Business
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item nav-link " to="/health">
                      Health
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item nav-link " to="/entertainment">
                      Entertainment
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item nav-link " to="/science">
                      Science
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item nav-link " to="/sports">
                      Sports
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item nav-link " to="/technology">
                      Technology
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            {/* for changing mode */}
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
            {/* toggle button */}
              <input className="form-check-input"
                type="checkbox"
                onClick={props.toggleMode}
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
