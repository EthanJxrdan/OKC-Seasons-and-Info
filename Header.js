function Header() {
  return (
    <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div class="container justify-content-center">
        <h1 className="display-1 fs-2 navbar-brand text-light">Player Bios</h1>
        <ul className="nav nav-underline">
          <li className="nav-item">
            <a href="..\public\index.html" className="nav-link text-light">
              Home
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
