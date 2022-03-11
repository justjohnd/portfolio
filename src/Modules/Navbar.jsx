import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [checked, setChecked] = useState(false);
  console.log(checked);

  return (
    <header className="navbar">
      <a className="navbar-logo" href="#">
        john denlinger
      </a>
      <input
        type="checkbox"
        defaultChecked={checked}
        onChange={() => setChecked(!checked)}
        className="toggle"
        id="nav-toggle"
      />
      <label htmlFor="nav-toggle" id="nav-toggle-label">
        <div className={checked ? "bar barChecked" : "bar"}></div>
        <div className={checked ? "bar barChecked" : "bar"}></div>
        <div className={checked ? "bar barChecked" : "bar"}></div>
      </label>
      <nav className={checked ? "nav-wrapper navChecked" : "nav-wrapper"}>
        <ul className="navbar-nav">
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
