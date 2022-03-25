import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [checked, setChecked] = useState(false);

  const handleLink = () => {
    setChecked(!checked);
  };

  return (
    <header className="navbar">
      <Link className="navbar-logo" to="/home">
        <div className="logo-wrapper">
          <span className="logo-j">j</span>
          <span className="logo-D">D</span>
        </div>
      </Link>
      <button
        aria-label="Toggle navigation"
        type="button"
        onClick={() => setChecked(!checked)}
        className="toggle"
        id="nav-toggle"
      ></button>
      <label htmlFor="nav-toggle" id="nav-toggle-label" aria-hidden="true">
        <div className={checked ? "bar checked" : "bar"}></div>
        <div className={checked ? "bar checked" : "bar"}></div>
        <div className={checked ? "bar checked" : "bar"}></div>
      </label>
      <nav className={checked ? "nav-wrapper checked" : "nav-wrapper"}>
        <ul className="navbar-nav">
          <li id="home-link" className="navbar-nav-item">
            <Link onClick={handleLink} to="/home">
              home
            </Link>
          </li>
          <li className="navbar-nav-item">
            <Link onClick={handleLink} to="/about">
              about
            </Link>
          </li>
          <li className="navbar-nav-item">
            <a
              onClick={() => setChecked(!checked)}
              target="_blank"
              rel="noopener noreferrer"
              href="https://docs.google.com/document/d/e/2PACX-1vQ4dtLJ7PBbWIs6MG2fKRRdiWYvXjfTBA2KN0qcqwjcq7crQZ8DqhSIS5aD5_QPWN67_tueq6YgEft-/pub"
            >
              resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
