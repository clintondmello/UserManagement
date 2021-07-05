import { useAuth0 } from "@auth0/auth0-react";
import { React } from "react";
import { Link, NavLink } from "react-router-dom";
import LoginButton from "./Login";
import LogoutButton from "./Logout";

const NavBar = () => {
  const { isAuthenticated, user } = useAuth0();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0">
      <div className="container">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            User Management
          </a>
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
          {isAuthenticated ? (
            <>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      exact
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                </ul>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      exact
                      to="/about"
                    >
                      About
                    </NavLink>
                  </li>
                </ul>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      exact
                      to="/contact"
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
              <Link className="btn btn-outline-light" to="/user/add">
                Add New User
              </Link>
              <LogoutButton />
            </>
          ) : (
            <LoginButton />
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
