import React, { useState ,useEffect} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const[pageMode,setpageMode]=useState("Enable Dark Mode")

  useEffect(() => {
    if (props.mode === 'light') {
      setpageMode('Enable Dark Mode');
    } else {
      setpageMode('Enable Light Mode');
    }
  }, [props.mode]);
  return (
    <nav
      className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                {props.about}
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form>

          <div className={`form-check form-switch mx-3 text-${props.mode==='light' ? 'dark':'light' }`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              {pageMode}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

//defining the prop types
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
};
//default prop types if the value of the prop is not passed
// Navbar.defaultProps = {
//   title: "set title here",
//   about: "set about here ",
// };
