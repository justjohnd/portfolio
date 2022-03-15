import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [checked, setChecked] = useState(false);

  return (
    <header className="navbar">
      <Link className="navbar-logo" to="/home">
        <div className="logo-wrapper">
          <span className="logo-j">j</span>
          <span className="logo-D">D</span>
        </div>
      </Link>
      <input
        type="checkbox"
        defaultChecked={checked}
        onChange={() => setChecked(!checked)}
        className="toggle"
        id="nav-toggle"
      />
      <label htmlFor="nav-toggle" id="nav-toggle-label">
        <div className={checked ? "bar checked" : "bar"}></div>
        <div className={checked ? "bar checked" : "bar"}></div>
        <div className={checked ? "bar checked" : "bar"}></div>
      </label>
      <nav className={checked ? "nav-wrapper checked" : "nav-wrapper"}>
        <ul className="navbar-nav">
          <li id="home-link" className="navbar-nav-item">
            <Link onClick={() => setChecked(!checked)} to="/home">
              home
            </Link>
          </li>
          <li className="navbar-nav-item">
            <Link onClick={() => setChecked(!checked)} to="/about">
              about
            </Link>
          </li>
          <li className="navbar-nav-item">
            <Link onClick={() => setChecked(!checked)} to="/work">
              work
            </Link>
          </li>
          <li className="navbar-nav-item">
            <a onClick={() => setChecked(!checked)} href="#">
              resume
            </a>
          </li>
          <li className="navbar-nav-item">
            <Link onClick={() => setChecked(!checked)} to="home/#contact">
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
