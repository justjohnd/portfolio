const Navbar = () => {
  return (
    <header className="navbar">
      <a className="navbar-logo" href="#">
        john denlinger
      </a>
      <input type="checkbox" class="toggle" id="nav-toggle" />
      <label for="nav-toggle" id="nav-toggle-label">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </label>
      <nav>
        <ul className="navbar-nav">
          <li className="navbar-nav-item">
            <a href="#">about</a>
          </li>
          <li className="navbar-nav-item">
            <a href="#">work</a>
          </li>
          <li className="navbar-nav-item">
            <a href="#">resume</a>
          </li>
          <li className="navbar-nav-item">
            <a href="#">contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
